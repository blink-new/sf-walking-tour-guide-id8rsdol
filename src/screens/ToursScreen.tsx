import { useState } from 'react'
import { Card, CardContent } from '../components/ui/card'
import { Badge } from '../components/ui/badge'
import { Button } from '../components/ui/button'
import { Input } from '../components/ui/input'
import { Clock, MapPin, Star, Search, Filter, ArrowLeft, Coffee, Camera } from 'lucide-react'
import { Tour } from '../App'
import { tours } from '../data/tours'

interface ToursScreenProps {
  onTourSelect: (tour: Tour) => void
  onBack: () => void
}

export function ToursScreen({ onTourSelect, onBack }: ToursScreenProps) {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('all')

  const filteredTours = tours.filter(tour => {
    const matchesSearch = tour.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         tour.neighborhood.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesDifficulty = selectedDifficulty === 'all' || tour.difficulty === selectedDifficulty
    return matchesSearch && matchesDifficulty
  })

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
      {/* Header */}
      <div className="bg-white border-b sticky top-0 z-10">
        <div className="px-4 py-4">
          <div className="flex items-center gap-3 mb-4">
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={onBack}
              className="p-2"
            >
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <div>
              <h1 className="text-xl font-bold text-gray-900">All Tours</h1>
              <p className="text-sm text-gray-600">{filteredTours.length} authentic experiences</p>
            </div>
          </div>

          {/* Search */}
          <div className="relative mb-4">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Search tours or neighborhoods..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>

          {/* Filters */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2">
            <div className="flex items-center gap-1 mr-2">
              <Filter className="h-4 w-4 text-gray-500" />
              <span className="text-sm text-gray-600 whitespace-nowrap">Filter:</span>
            </div>
            
            {['all', 'Easy', 'Moderate', 'Challenging'].map((difficulty) => (
              <Button
                key={difficulty}
                variant={selectedDifficulty === difficulty ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedDifficulty(difficulty)}
                className="whitespace-nowrap text-xs"
              >
                {difficulty === 'all' ? 'All Levels' : difficulty}
              </Button>
            ))}
          </div>
        </div>
      </div>

      {/* Tours List */}
      <div className="px-4 py-4 space-y-4">
        {filteredTours.length === 0 ? (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="h-8 w-8 text-gray-400" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No tours found</h3>
            <p className="text-gray-600">Try adjusting your search or filters</p>
          </div>
        ) : (
          filteredTours.map((tour) => (
            <Card 
              key={tour.id} 
              className="overflow-hidden cursor-pointer hover:shadow-md transition-shadow"
              onClick={() => onTourSelect(tour)}
            >
              <div className="flex">
                {/* Image */}
                <div className="w-24 h-24 flex-shrink-0 relative">
                  <img 
                    src={tour.image} 
                    alt={tour.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-1 left-1">
                    <div className="bg-white/90 backdrop-blur-sm rounded px-1 py-0.5 flex items-center gap-1">
                      <Star className="h-2.5 w-2.5 fill-yellow-400 text-yellow-400" />
                      <span className="text-xs font-medium">{tour.rating}</span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <CardContent className="flex-1 p-3">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-gray-900 text-sm leading-tight mb-1 truncate">
                        {tour.title}
                      </h3>
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="secondary" className="text-xs">
                          {tour.neighborhood}
                        </Badge>
                        <Badge className={`text-xs ${getDifficultyColor(tour.difficulty)}`}>
                          {tour.difficulty}
                        </Badge>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-600 text-xs mb-3 line-clamp-2 leading-relaxed">
                    {tour.description}
                  </p>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {tour.duration}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-3 w-3" />
                        {tour.distance}
                      </div>
                    </div>

                    <div className="flex items-center justify-between text-xs">
                      <div className="flex items-center gap-1 text-gray-600">
                        <Camera className="h-3 w-3 text-primary" />
                        <span>{tour.highlights.length} highlights</span>
                      </div>
                      <div className="flex items-center gap-1 text-gray-600">
                        <Coffee className="h-3 w-3 text-accent" />
                        <span>{tour.foodStops.length} food stops</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </div>
            </Card>
          ))
        )}
      </div>
    </div>
  )
}