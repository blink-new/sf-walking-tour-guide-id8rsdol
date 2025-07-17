import { useEffect, useRef } from 'react'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import { Tour } from '../App'

// Fix for default markers in Leaflet with Vite
delete (L.Icon.Default.prototype as any)._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
})

interface TourMapProps {
  tour?: Tour
  tours?: Tour[]
  height?: string
  showRoute?: boolean
}

export function TourMap({ tour, tours, height = '400px', showRoute = false }: TourMapProps) {
  const mapRef = useRef<HTMLDivElement>(null)
  const mapInstanceRef = useRef<L.Map | null>(null)

  useEffect(() => {
    if (!mapRef.current) return

    // Initialize map
    const map = L.map(mapRef.current).setView([37.7749, -122.4194], 13)
    mapInstanceRef.current = map

    // Add tile layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(map)

    // Custom icons
    const tourIcon = L.divIcon({
      html: `
        <div style="
          background: #FF6B35;
          width: 24px;
          height: 24px;
          border-radius: 50%;
          border: 3px solid white;
          box-shadow: 0 2px 8px rgba(0,0,0,0.3);
          display: flex;
          align-items: center;
          justify-content: center;
        ">
          <div style="
            width: 8px;
            height: 8px;
            background: white;
            border-radius: 50%;
          "></div>
        </div>
      `,
      className: 'custom-tour-marker',
      iconSize: [24, 24],
      iconAnchor: [12, 12]
    })

    const foodIcon = L.divIcon({
      html: `
        <div style="
          background: #F7931E;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          border: 2px solid white;
          box-shadow: 0 2px 6px rgba(0,0,0,0.2);
          display: flex;
          align-items: center;
          justify-content: center;
        ">
          🍴
        </div>
      `,
      className: 'custom-food-marker',
      iconSize: [20, 20],
      iconAnchor: [10, 10]
    })

    const poiIcon = L.divIcon({
      html: `
        <div style="
          background: #4F46E5;
          width: 18px;
          height: 18px;
          border-radius: 50%;
          border: 2px solid white;
          box-shadow: 0 2px 6px rgba(0,0,0,0.2);
          display: flex;
          align-items: center;
          justify-content: center;
        ">
          📍
        </div>
      `,
      className: 'custom-poi-marker',
      iconSize: [18, 18],
      iconAnchor: [9, 9]
    })

    if (tour) {
      // Single tour view with detailed route
      const tourData = getTourCoordinates(tour.id)
      
      // Add main tour marker
      L.marker([tourData.center.lat, tourData.center.lng], { icon: tourIcon })
        .addTo(map)
        .bindPopup(`
          <div style="font-family: Inter, sans-serif;">
            <h3 style="margin: 0 0 8px 0; font-size: 16px; font-weight: 600;">${tour.title}</h3>
            <p style="margin: 0 0 8px 0; color: #666; font-size: 14px;">${tour.neighborhood}</p>
            <div style="display: flex; gap: 12px; font-size: 12px; color: #888;">
              <span>⏱️ ${tour.duration}</span>
              <span>🚶 ${tour.distance}</span>
            </div>
          </div>
        `)

      // Add food stops
      tourData.foodStops.forEach((stop, index) => {
        L.marker([stop.lat, stop.lng], { icon: foodIcon })
          .addTo(map)
          .bindPopup(`
            <div style="font-family: Inter, sans-serif;">
              <h4 style="margin: 0 0 4px 0; font-size: 14px; font-weight: 600;">🍴 Food Stop</h4>
              <p style="margin: 0; font-size: 13px; color: #666;">${tour.foodStops[index] || 'Local favorite'}</p>
            </div>
          `)
      })

      // Add points of interest
      tourData.pointsOfInterest.forEach((poi, index) => {
        L.marker([poi.lat, poi.lng], { icon: poiIcon })
          .addTo(map)
          .bindPopup(`
            <div style="font-family: Inter, sans-serif;">
              <h4 style="margin: 0 0 4px 0; font-size: 14px; font-weight: 600;">📍 Point of Interest</h4>
              <p style="margin: 0; font-size: 13px; color: #666;">${tour.highlights[index] || 'Local highlight'}</p>
            </div>
          `)
      })

      // Add route if requested
      if (showRoute && tourData.route) {
        L.polyline(tourData.route, {
          color: '#FF6B35',
          weight: 4,
          opacity: 0.8,
          dashArray: '10, 10'
        }).addTo(map)
      }

      // Fit map to tour bounds
      const group = new L.FeatureGroup([
        L.marker([tourData.center.lat, tourData.center.lng]),
        ...tourData.foodStops.map(stop => L.marker([stop.lat, stop.lng])),
        ...tourData.pointsOfInterest.map(poi => L.marker([poi.lat, poi.lng]))
      ])
      map.fitBounds(group.getBounds().pad(0.1))

    } else if (tours) {
      // Multiple tours overview
      tours.forEach(tourItem => {
        const tourData = getTourCoordinates(tourItem.id)
        
        L.marker([tourData.center.lat, tourData.center.lng], { icon: tourIcon })
          .addTo(map)
          .bindPopup(`
            <div style="font-family: Inter, sans-serif;">
              <h3 style="margin: 0 0 8px 0; font-size: 16px; font-weight: 600;">${tourItem.title}</h3>
              <p style="margin: 0 0 8px 0; color: #666; font-size: 14px;">${tourItem.neighborhood}</p>
              <div style="display: flex; gap: 12px; font-size: 12px; color: #888; margin-bottom: 8px;">
                <span>⏱️ ${tourItem.duration}</span>
                <span>🚶 ${tourItem.distance}</span>
                <span>⭐ ${tourItem.rating}</span>
              </div>
              <p style="margin: 0; font-size: 12px; color: #666; line-height: 1.4;">${tourItem.description}</p>
            </div>
          `)
      })
    }

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove()
        mapInstanceRef.current = null
      }
    }
  }, [tour, tours, showRoute])

  return (
    <div 
      ref={mapRef} 
      style={{ height, width: '100%' }}
      className="rounded-lg overflow-hidden border border-gray-200"
    />
  )
}

// Mock coordinate data for tours (in a real app, this would come from your backend)
function getTourCoordinates(tourId: string) {
  const coordinates: Record<string, any> = {
    '1': { // Mission District
      center: { lat: 37.7599, lng: -122.4148 },
      foodStops: [
        { lat: 37.7614, lng: -122.4194 }, // La Taqueria
        { lat: 37.7609, lng: -122.4103 }, // Tartine
        { lat: 37.7648, lng: -122.4200 }, // Four Barrel
        { lat: 37.7608, lng: -122.4240 }  // Bi-Rite
      ],
      pointsOfInterest: [
        { lat: 37.7587, lng: -122.4189 }, // Balmy Alley
        { lat: 37.7599, lng: -122.4148 }, // Women's Building
        { lat: 37.7620, lng: -122.4180 }, // Coffee roasters
        { lat: 37.7590, lng: -122.4160 }  // Vintage shops
      ],
      route: [
        [37.7599, -122.4148],
        [37.7614, -122.4194],
        [37.7587, -122.4189],
        [37.7609, -122.4103],
        [37.7648, -122.4200],
        [37.7608, -122.4240],
        [37.7599, -122.4148]
      ]
    },
    '2': { // Castro
      center: { lat: 37.7609, lng: -122.4350 },
      foodStops: [
        { lat: 37.7620, lng: -122.4340 },
        { lat: 37.7600, lng: -122.4360 },
        { lat: 37.7615, lng: -122.4355 },
        { lat: 37.7595, lng: -122.4345 }
      ],
      pointsOfInterest: [
        { lat: 37.7609, lng: -122.4350 },
        { lat: 37.7625, lng: -122.4365 },
        { lat: 37.7590, lng: -122.4340 },
        { lat: 37.7605, lng: -122.4370 }
      ]
    },
    '3': { // Richmond
      center: { lat: 37.7806, lng: -122.4644 },
      foodStops: [
        { lat: 37.7820, lng: -122.4650 },
        { lat: 37.7790, lng: -122.4630 },
        { lat: 37.7810, lng: -122.4660 },
        { lat: 37.7800, lng: -122.4640 }
      ],
      pointsOfInterest: [
        { lat: 37.7806, lng: -122.4644 },
        { lat: 37.7825, lng: -122.4665 },
        { lat: 37.7785, lng: -122.4625 },
        { lat: 37.7815, lng: -122.4655 }
      ]
    },
    '4': { // North Beach
      center: { lat: 37.8006, lng: -122.4103 },
      foodStops: [
        { lat: 37.8020, lng: -122.4110 },
        { lat: 37.7990, lng: -122.4090 },
        { lat: 37.8010, lng: -122.4120 },
        { lat: 37.8000, lng: -122.4100 }
      ],
      pointsOfInterest: [
        { lat: 37.8006, lng: -122.4103 },
        { lat: 37.8025, lng: -122.4125 },
        { lat: 37.7985, lng: -122.4085 },
        { lat: 37.8015, lng: -122.4115 }
      ]
    },
    '5': { // Haight-Ashbury
      center: { lat: 37.7692, lng: -122.4481 },
      foodStops: [
        { lat: 37.7700, lng: -122.4490 },
        { lat: 37.7680, lng: -122.4470 },
        { lat: 37.7710, lng: -122.4500 },
        { lat: 37.7685, lng: -122.4475 }
      ],
      pointsOfInterest: [
        { lat: 37.7692, lng: -122.4481 },
        { lat: 37.7705, lng: -122.4495 },
        { lat: 37.7675, lng: -122.4465 },
        { lat: 37.7715, lng: -122.4505 }
      ]
    },
    '6': { // Sunset
      center: { lat: 37.7431, lng: -122.4660 },
      foodStops: [
        { lat: 37.7440, lng: -122.4670 },
        { lat: 37.7420, lng: -122.4650 },
        { lat: 37.7450, lng: -122.4680 },
        { lat: 37.7415, lng: -122.4645 }
      ],
      pointsOfInterest: [
        { lat: 37.7431, lng: -122.4660 },
        { lat: 37.7445, lng: -122.4675 },
        { lat: 37.7405, lng: -122.4635 },
        { lat: 37.7455, lng: -122.4685 }
      ]
    }
  }

  return coordinates[tourId] || coordinates['1']
}