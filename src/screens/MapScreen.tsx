import { useState } from 'react'
import { TourMap } from '../components/TourMap'
import { Button } from '../components/ui/button'
import { Badge } from '../components/ui/badge'
import { Card, CardContent } from '../components/ui/card'
import { MapPin, Clock, Users, Star, Navigation, Layers } from 'lucide-react'
import { tours } from '../data/tours'
import { Tour } from '../App'

interface MapScreenProps {
  onTourSelect: (tour: Tour) => void
}

export function MapScreen({ onTourSelect }: MapScreenProps) {
  const [selectedTour, setSelectedTour] = useState<Tour | null>(null)
  const [showAllTours, setShowAllTours] = useState(true)

  const handleTourSelect = (tour: Tour) => {
    setSelectedTour(tour)
    setShowAllTours(false)
  }

  const handleShowAllTours = () => {
    setSelectedTour(null)
    setShowAllTours(true)
  }

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy': return 'bg-green-100 text-green-800 border-green-200'
      case 'Moderate': return 'bg-yellow-100 text-yellow-800 border-yellow-200'
      case 'Challenging': return 'bg-red-100 text-red-800 border-red-200'
      default: return 'bg-gray-100 text-gray-800 border-gray-200'
    }
  }

  return (
    <div className="flex-1 flex flex-col bg-background">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-4 py-4">
        <div className="flex items-center justify-between mb-3">
          <h1 className="text-2xl font-bold text-gray-900">Tour Map</h1>
          <div className="flex items-center gap-2">
            <Button
              variant={showAllTours ? "default" : "outline"}
              size="sm"
              onClick={handleShowAllTours}
              className="flex items-center gap-2"
            >
              <Layers className="h-4 w-4" />
              All Tours
            </Button>
          </div>
        </div>
        
        {selectedTour && (
          <div className="flex items-center gap-2">
            <Badge variant="secondary">{selectedTour.neighborhood}</Badge>
            <Badge className={getDifficultyColor(selectedTour.difficulty)}>
              {selectedTour.difficulty}
            </Badge>
          </div>
        )}
      </div>

      {/* Map */}
      <div className="flex-1 p-4">
        <TourMap 
          tour={selectedTour || undefined}
          tours={showAllTours ? tours : undefined}
          height="100%"
          showRoute={!!selectedTour}
        />
      </div>

      {/* Tour List Overlay */}
      <div className="bg-white border-t border-gray-200 max-h-64 overflow-y-auto">
        <div className="p-4">
          <div className="flex items-center gap-2 mb-4">
            <Navigation className="h-5 w-5 text-primary" />
            <h3 className="font-semibold text-gray-900">
              {selectedTour ? 'Selected Tour' : 'Available Tours'}
            </h3>
          </div>
          
          {selectedTour ? (
            <Card className="cursor-pointer hover:shadow-md transition-shadow">
              <CardContent className="p-4">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900 mb-1">{selectedTour.title}</h4>
                    <p className="text-sm text-gray-600 mb-2">{selectedTour.neighborhood}</p>
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {selectedTour.duration}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {selectedTour.distance}
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        {selectedTour.rating}
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex gap-2">
                  <Button 
                    size="sm" 
                    className="flex-1"
                    onClick={() => onTourSelect(selectedTour)}
                  >
                    View Details
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={handleShowAllTours}
                  >
                    Back to All
                  </Button>
                </div>
              </CardContent>
            </Card>
          ) : (
            <div className="space-y-3 max-h-48 overflow-y-auto">
              {tours.map((tour) => (
                <Card 
                  key={tour.id} 
                  className="cursor-pointer hover:shadow-md transition-shadow"
                  onClick={() => handleTourSelect(tour)}
                >
                  <CardContent className="p-3">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h4 className="font-medium text-gray-900 text-sm mb-1">{tour.title}</h4>
                        <p className="text-xs text-gray-600 mb-2">{tour.neighborhood}</p>
                        <div className="flex items-center gap-3 text-xs text-gray-500">
                          <div className="flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            {tour.duration}
                          </div>
                          <div className="flex items-center gap-1">
                            <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                            {tour.rating}
                          </div>
                        </div>
                      </div>
                      <Badge className={getDifficultyColor(tour.difficulty)} variant="outline">
                        {tour.difficulty}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}