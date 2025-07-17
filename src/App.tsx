import { useState } from 'react'
import { HomeScreen } from './screens/HomeScreen'
import { ToursScreen } from './screens/ToursScreen'
import { TourDetailScreen } from './screens/TourDetailScreen'
import { MapScreen } from './screens/MapScreen'
import { BottomNavigation } from './components/BottomNavigation'

export type Screen = 'home' | 'tours' | 'tour-detail' | 'map'

export interface FoodStop {
  name: string
  description: string
  menuHighlights: string[]
}

export interface PointOfInterest {
  name: string
  description: string
}

export interface Tour {
  id: string
  title: string
  neighborhood: string
  duration: string
  distance: string
  difficulty: 'Easy' | 'Moderate' | 'Challenging'
  rating: number
  reviewCount: number
  description: string
  highlights: string[]
  foodStops: FoodStop[]
  pointsOfInterest: PointOfInterest[]
  image: string
  price: number
}

function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('home')
  const [selectedTour, setSelectedTour] = useState<Tour | null>(null)

  const navigateToTours = () => setCurrentScreen('tours')
  const navigateToHome = () => setCurrentScreen('home')
  const navigateToMap = () => setCurrentScreen('map')
  
  const navigateToTourDetail = (tour: Tour) => {
    setSelectedTour(tour)
    setCurrentScreen('tour-detail')
  }

  const navigateBack = () => {
    if (currentScreen === 'tour-detail') {
      setCurrentScreen('tours')
    } else if (currentScreen === 'tours') {
      setCurrentScreen('home')
    } else if (currentScreen === 'map') {
      setCurrentScreen('home')
    }
  }

  const renderScreen = () => {
    switch (currentScreen) {
      case 'home':
        return <HomeScreen onExploreTours={navigateToTours} onTourSelect={navigateToTourDetail} />
      case 'tours':
        return <ToursScreen onTourSelect={navigateToTourDetail} onBack={navigateBack} />
      case 'map':
        return <MapScreen onTourSelect={navigateToTourDetail} />
      case 'tour-detail':
        return selectedTour ? (
          <TourDetailScreen tour={selectedTour} onBack={navigateBack} />
        ) : null
      default:
        return <HomeScreen onExploreTours={navigateToTours} onTourSelect={navigateToTourDetail} />
    }
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <div className="flex-1 overflow-hidden">
        {renderScreen()}
      </div>
      <BottomNavigation 
        currentScreen={currentScreen} 
        onNavigate={setCurrentScreen}
        onHome={navigateToHome}
        onTours={navigateToTours}
        onMap={navigateToMap}
      />
    </div>
  )
}

export default App