import { useApp } from '../../context/AppContext.jsx'

const TABS = [
  { id: 'home', icon: '🏠', label: { he: 'בית', en: 'Home' } },
  { id: 'positions', icon: '⚾', label: { he: 'עמדות', en: 'Positions' } },
  { id: 'rules', icon: '📏', label: { he: 'חוקים', en: 'Rules' } },
  { id: 'scoreboard', icon: '🧮', label: { he: 'לוח תוצ׳', en: 'Scoreboard' } },
  { id: 'quiz', icon: '🎯', label: { he: 'חידון', en: 'Quiz' } }
]

export default function BottomNav() {
  const { screen, setScreen, t, progress } = useApp()

  return (
    <nav className="mt-auto flex border-t border-chalk/10 bg-bgAlt safe-bottom">
      {TABS.map((tab) => {
        const active = screen === tab.id
        const done = progress.modulesCompleted.includes(tab.id)
        return (
          <button
            key={tab.id}
            type="button"
            onClick={() => setScreen(tab.id)}
            className={`relative flex-1 py-2.5 text-center text-[10px] ${
              active ? 'text-clayLight font-bold' : 'text-chalkDim'
            }`}
          >
            <span className="block text-base leading-none mb-0.5">{tab.icon}</span>
            {t(tab.label)}
            {done && (
              <span className="absolute top-1 right-1/2 translate-x-3 -translate-y-0.5 text-[9px] text-clayLight">
                ✓
              </span>
            )}
          </button>
        )
      })}
    </nav>
  )
}
