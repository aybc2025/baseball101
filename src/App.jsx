import { useApp } from './context/AppContext.jsx'
import Header from './components/layout/Header.jsx'
import BottomNav from './components/layout/BottomNav.jsx'
import HomeScreen from './screens/HomeScreen.jsx'
import DiamondScreen from './screens/DiamondScreen.jsx'
import RulesScreen from './screens/RulesScreen.jsx'
import ScoreboardScreen from './screens/ScoreboardScreen.jsx'
import QuizScreen from './screens/QuizScreen.jsx'
import UpdateBanner from './components/layout/UpdateBanner.jsx'

const SCREENS = {
  home: HomeScreen,
  positions: DiamondScreen,
  rules: RulesScreen,
  scoreboard: ScoreboardScreen,
  quiz: QuizScreen
}

export default function App() {
  const { screen } = useApp()
  const ScreenComponent = SCREENS[screen] ?? HomeScreen

  return (
    <div className="min-h-screen flex flex-col max-w-md mx-auto bg-bg">
      <Header compact={screen !== 'home'} />
      <main className="flex-1 flex flex-col pt-2 pb-3">
        <ScreenComponent />
      </main>
      <BottomNav />
      <UpdateBanner />
    </div>
  )
}
