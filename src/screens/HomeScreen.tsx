import { Card, CardContent } from '../components/ui/card'
import { Badge } from '../components/ui/badge'
import { Button } from '../components/ui/button'
import { Clock, MapPin, Utensils, Star, ArrowRight, Coffee, Camera } from 'lucide-react'
import { Tour } from '../App'
import { tours } from '../data/tours'

interface HomeScreenProps {
  onExploreTours: () => void
  onTourSelect: (tour: Tour) => void
}

export function HomeScreen({ onExploreTours, onTourSelect }: HomeScreenProps) {
  const featuredTour = tours[0]

  return (
    <div className="flex-1 overflow-y-auto">
      {/* Header */}
      <div className="bg-gradient-to-br from-primary to-accent text-white">
        <div className="px-4 pt-12 pb-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-2">SF Local Tours</h1>
            <p className="text-white/90 text-sm">No tourist traps, just real SF</p>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="px-4 -mt-4">
        <Card className="bg-white shadow-lg">
          <CardContent className="p-6">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-3">
                Discover the <span className="text-primary">Real</span> San Francisco
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Curated walking tours that skip the tourist traps and show you where locals actually eat, drink, and hang out.
              </p>
              
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <p className="text-xs text-gray-600">3-4 hours</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <p className="text-xs text-gray-600">Local spots</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Utensils className="h-6 w-6 text-primary" />
                  </div>
                  <p className="text-xs text-gray-600">Authentic food</p>
                </div>
              </div>

              <Button 
                onClick={onExploreTours}
                className="w-full bg-primary hover:bg-primary/90 text-white font-medium"
                size="lg"
              >
                Explore All Tours
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Featured Tour */}
      <div className="px-4 mt-8">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold text-gray-900">Featured Tour</h3>
          <Badge variant="secondary" className="bg-accent/10 text-accent">Popular</Badge>
        </div>

        <Card 
          className="overflow-hidden shadow-md cursor-pointer hover:shadow-lg transition-shadow"
          onClick={() => onTourSelect(featuredTour)}
        >
          <div className="aspect-[4/3] overflow-hidden relative">
            <img 
              src={featuredTour.image} 
              alt={featuredTour.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-3 left-3">
              <Badge className="bg-white/90 text-gray-900 backdrop-blur-sm">
                {featuredTour.neighborhood}
              </Badge>
            </div>
            <div className="absolute top-3 right-3">
              <div className="bg-white/90 backdrop-blur-sm rounded-full px-2 py-1 flex items-center gap-1">
                <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                <span className="text-xs font-medium">{featuredTour.rating}</span>
              </div>
            </div>
          </div>
          
          <CardContent className="p-4">
            <h4 className="font-bold text-lg mb-2">{featuredTour.title}</h4>
            <p className="text-gray-600 text-sm mb-4 line-clamp-2">
              {featuredTour.description}
            </p>
            
            <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                {featuredTour.duration}
              </div>
              <div className="flex items-center gap-1">
                <MapPin className="h-4 w-4" />
                {featuredTour.distance}
              </div>
              <Badge variant="outline" className="text-xs">
                {featuredTour.difficulty}
              </Badge>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm">
                <Camera className="h-4 w-4 text-primary" />
                <span className="text-gray-700">
                  {featuredTour.highlights.length} local highlights
                </span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Coffee className="h-4 w-4 text-accent" />
                <span className="text-gray-700">
                  {featuredTour.foodStops.length} authentic food stops
                </span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Stats */}
      <div className="px-4 mt-8 mb-6">
        <h3 className="text-xl font-bold text-gray-900 mb-4">Why Choose Local Tours?</h3>
        
        <div className="grid grid-cols-2 gap-4">
          <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200">
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-green-700 mb-1">100%</div>
              <div className="text-sm text-green-600">Tourist-trap free</div>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-blue-700 mb-1">Free</div>
              <div className="text-sm text-blue-600">Self-guided tours</div>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200">
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-purple-700 mb-1">{tours.length}</div>
              <div className="text-sm text-purple-600">Curated tours</div>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-to-br from-orange-50 to-orange-100 border-orange-200">
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-orange-700 mb-1">Local</div>
              <div className="text-sm text-orange-600">Insider knowledge</div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}