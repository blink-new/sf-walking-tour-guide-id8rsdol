import { Home, Map, Search, User } from 'lucide-react'
import { Screen } from '../App'

interface BottomNavigationProps {
  currentScreen: Screen
  onNavigate: (screen: Screen) => void
  onHome: () => void
  onTours: () => void
  onMap: () => void
}

export function BottomNavigation({ currentScreen, onHome, onTours, onMap }: BottomNavigationProps) {
  const navItems = [
    {
      id: 'home' as const,
      label: 'Home',
      icon: Home,
      onClick: onHome
    },
    {
      id: 'tours' as const,
      label: 'Tours',
      icon: Search,
      onClick: onTours
    },
    {
      id: 'map' as const,
      label: 'Map',
      icon: Map,
      onClick: onMap
    },
    {
      id: 'profile' as const,
      label: 'Profile',
      icon: User,
      onClick: () => {} // Placeholder
    }
  ]

  return (
    <div className="bg-white border-t border-gray-200 px-4 py-2 safe-area-bottom">
      <div className="flex items-center justify-around">
        {navItems.map((item) => {
          const isActive = currentScreen === item.id || 
                          (item.id === 'tours' && currentScreen === 'tour-detail') ||
                          (item.id === 'map' && currentScreen === 'map')
          const Icon = item.icon
          
          return (
            <button
              key={item.id}
              onClick={item.onClick}
              className={`flex flex-col items-center gap-1 py-2 px-3 rounded-lg transition-colors ${
                isActive 
                  ? 'text-primary bg-primary/10' 
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              <Icon className={`h-5 w-5 ${isActive ? 'text-primary' : ''}`} />
              <span className={`text-xs font-medium ${isActive ? 'text-primary' : ''}`}>
                {item.label}
              </span>
            </button>
          )
        })}
      </div>
    </div>
  )
}