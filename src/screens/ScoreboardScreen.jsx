import { useEffect } from 'react'
import { useApp } from '../context/AppContext.jsx'
import ScoreboardTable from '../components/scoreboard/ScoreboardTable.jsx'

export default function ScoreboardScreen() {
  const { t, markComplete } = useApp()

  useEffect(() => {
    markComplete('scoreboard')
  }, [markComplete])

  return (
    <div>
      <p className="px-4 text-[11px] text-chalkDim">
        {t({
          he: 'זו דוגמה כללית ללוח תוצאות — לא משחק אמיתי — כדי ללמד איך קוראים אותו.',
          en: 'This is a generic example scoreboard — not a real game — to teach how to read one.'
        })}
      </p>
      <ScoreboardTable />
    </div>
  )
}
