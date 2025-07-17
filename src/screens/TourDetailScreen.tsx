import { Card, CardContent } from '../components/ui/card'
import { Badge } from '../components/ui/badge'
import { Button } from '../components/ui/button'
import { Clock, MapPin, Users, Star, ArrowLeft, Coffee, Camera, Utensils, Play, Share, Heart, Navigation } from 'lucide-react'
import { Tour } from '../App'
import { TourMap } from '../components/TourMap'

interface TourDetailScreenProps {
  tour: Tour
  onBack: () => void
}

export function TourDetailScreen({ tour, onBack }: TourDetailScreenProps) {
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy': return 'bg-green-100 text-green-800 border-green-200'
      case 'Moderate': return 'bg-yellow-100 text-yellow-800 border-yellow-200'
      case 'Challenging': return 'bg-red-100 text-red-800 border-red-200'
      default: return 'bg-gray-100 text-gray-800 border-gray-200'
    }
  }

  return (
    <div className="flex-1 overflow-y-auto">
      {/* Hero Image with Header */}
      <div className="relative">
        <div className="aspect-[4/3] overflow-hidden">
          <img 
            src={tour.image} 
            alt={tour.title}
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Header Overlay */}
        <div className="absolute top-0 left-0 right-0 p-4 bg-gradient-to-b from-black/50 to-transparent">
          <div className="flex items-center justify-between">
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={onBack}
              className="bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 p-2"
            >
              <ArrowLeft className="h-5 w-5" />
            </Button>
            
            <div className="flex items-center gap-2">
              <Button 
                variant="ghost" 
                size="sm"
                className="bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 p-2"
              >
                <Heart className="h-5 w-5" />
              </Button>
              <Button 
                variant="ghost" 
                size="sm"
                className="bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 p-2"
              >
                <Share className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>

        {/* Rating Badge */}
        <div className="absolute bottom-4 right-4">
          <div className="bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-1">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span className="font-medium">{tour.rating}</span>
            <span className="text-gray-600 text-sm">({tour.reviewCount})</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="px-4 py-6 space-y-6">
        {/* Title and Badges */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <Badge variant="secondary">{tour.neighborhood}</Badge>
            <Badge className={getDifficultyColor(tour.difficulty)}>
              {tour.difficulty}
            </Badge>
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-3">{tour.title}</h1>
          <p className="text-gray-600 leading-relaxed">{tour.description}</p>
        </div>

        {/* Quick Stats */}
        <Card>
          <CardContent className="p-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <Clock className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="font-medium text-gray-900">{tour.duration}</div>
                  <div className="text-sm text-gray-600">Duration</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="font-medium text-gray-900">{tour.distance}</div>
                  <div className="text-sm text-gray-600">Walking distance</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <Users className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="font-medium text-gray-900">Self-guided</div>
                  <div className="text-sm text-gray-600">Go at your pace</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-700 font-bold text-lg">$0</span>
                </div>
                <div>
                  <div className="font-medium text-gray-900">Free</div>
                  <div className="text-sm text-gray-600">Always free</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Local Highlights */}
        <div>
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Camera className="h-5 w-5 text-primary" />
            Local Highlights
          </h3>
          <div className="space-y-3">
            {tour.highlights.map((highlight, index) => (
              <div key={index} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-700 leading-relaxed">{highlight}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Food Stops */}
        <div>
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Utensils className="h-5 w-5 text-accent" />
            Authentic Food Stops
          </h3>
          <div className="space-y-3">
            {tour.foodStops.map((stop, index) => (
              <div key={index} className="flex items-start gap-3 p-3 bg-accent/5 rounded-lg border border-accent/20">
                <Coffee className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
                <span className="text-gray-700 leading-relaxed">{stop}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tour Route Map */}
        <div>
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Navigation className="h-5 w-5 text-primary" />
            Tour Route
          </h3>
          <Card>
            <CardContent className="p-0 overflow-hidden rounded-lg">
              <TourMap tour={tour} height="300px" showRoute={true} />
            </CardContent>
          </Card>
          <p className="text-sm text-gray-600 mt-3 leading-relaxed">
            🟠 Orange markers show food stops • 🔵 Blue markers show points of interest • Dashed line shows suggested walking route
          </p>
        </div>

        {/* Start Tour CTA */}
        <Card className="bg-gradient-to-br from-primary to-accent text-white">
          <CardContent className="p-6 text-center">
            <h3 className="text-xl font-bold mb-2">Ready to explore like a local?</h3>
            <p className="text-white/90 mb-6 leading-relaxed">
              This tour is completely free and self-guided. Start whenever you're ready and go at your own pace!
            </p>
            <Button 
              size="lg" 
              className="w-full bg-white text-primary hover:bg-white/90 font-medium"
            >
              <Play className="mr-2 h-5 w-5" />
              Start Tour Now
            </Button>
          </CardContent>
        </Card>

        {/* Bottom Spacing for Navigation */}
        <div className="h-4"></div>
      </div>
    </div>
  )
}