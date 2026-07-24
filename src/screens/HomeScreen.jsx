import { useApp } from '../context/AppContext.jsx'
import { MODULES } from '../context/AppContext.jsx'
import DiamondField from '../components/diamond/DiamondField.jsx'

const CHIPS = [
  { id: 'positions', icon: '⚾', label: { he: 'עמדות', en: 'Positions' } },
  { id: 'rules', icon: '📏', label: { he: 'חוקים', en: 'Rules' } },
  { id: 'scoreboard', icon: '🧮', label: { he: 'לוח תוצ׳', en: 'Scoreboard' } },
  { id: 'quiz', icon: '🎯', label: { he: 'חידון', en: 'Quiz' } }
]

export default function HomeScreen() {
  const { t, setScreen, progress } = useApp()
  const doneCount = MODULES.filter((m) => progress.modulesCompleted.includes(m)).length

  return (
    <div>
      <DiamondField />

      <div className="flex gap-2 px-4 mt-2.5">
        {CHIPS.map((chip) => (
          <button
            key={chip.id}
            onClick={() => setScreen(chip.id)}
            className="flex-1 rounded-lg bg-panel2 border border-chalk/10 py-2 text-center text-[10px] text-chalkDim"
          >
            <span className="block text-base mb-0.5">{chip.icon}</span>
            {t(chip.label)}
          </button>
        ))}
      </div>

      <div className="mx-4 mt-3.5 h-1.5 rounded bg-panel2 overflow-hidden">
        <div
          className="h-full bg-gradient-to-l from-stitch to-clay transition-all"
          style={{ width: `${(doneCount / MODULES.length) * 100}%` }}
        />
      </div>
      <div className="font-mono text-[10px] text-chalkDim text-center mt-1.5 ltr-nums">
        <span className="mx-1">
          {doneCount}/{MODULES.length}
        </span>
        {t({ he: 'בייסים הושלמו', en: 'bases completed' })}
        {doneCount === MODULES.length && ' — ' + t({ he: 'הקפה מלאה! 🏆', en: 'full circuit! 🏆' })}
      </div>
    </div>
  )
}
