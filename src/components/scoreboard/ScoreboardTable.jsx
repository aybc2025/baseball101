import { useState } from 'react'
import { useApp } from '../../context/AppContext.jsx'
import { scoreboardExample, scoreboardAnnotations } from '../../data/scoreboard.js'

export default function ScoreboardTable() {
  const { t } = useApp()
  const [activeNote, setActiveNote] = useState(null)
  const { teams, innings, lineScore, totals } = scoreboardExample

  const noteFor = (key) => scoreboardAnnotations.find((n) => n.key === key)

  return (
    <div className="mx-4 mt-3">
      <div className="overflow-x-auto rounded-xl bg-navy">
        <table className="ltr-nums w-full text-[10px] text-center border-collapse">
          <thead>
            <tr className="text-chalkDim">
              <th className="text-right px-2 py-2 font-normal"> </th>
              {innings.map((n) => (
                <th
                  key={n}
                  onClick={() => setActiveNote('innings-row')}
                  className="px-1.5 py-2 font-mono font-normal cursor-pointer"
                >
                  {n}
                </th>
              ))}
              {['R', 'H', 'E'].map((col) => (
                <th
                  key={col}
                  onClick={() => setActiveNote(col)}
                  className="px-2 py-2 font-mono font-bold text-clayLight cursor-pointer"
                >
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {(['away', 'home']).map((side) => (
              <tr key={side} className="border-t border-chalk/10">
                <td className="text-right px-2 py-2 font-body text-[11px] whitespace-nowrap">{t(teams[side])}</td>
                {lineScore[side].map((runs, i) => (
                  <td key={i} className="px-1.5 py-2 font-mono">{runs}</td>
                ))}
                <td className="px-2 py-2 font-mono font-bold text-chalk">{totals[side].R}</td>
                <td className="px-2 py-2 font-mono">{totals[side].H}</td>
                <td className="px-2 py-2 font-mono">{totals[side].E}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="text-[10px] text-chalkDim text-center mt-2">
        {t({ he: 'געו בעמודה כדי לראות מה היא אומרת', en: 'Tap a column to see what it means' })}
      </p>

      {activeNote && noteFor(activeNote) && (
        <div className="mt-2.5 rounded-lg bg-panel2 border-r-2 border-stitch px-3 py-2 text-[11px]">
          <div className="font-bold mb-0.5">{t(noteFor(activeNote).label)}</div>
          <div className="text-chalkDim">{t(noteFor(activeNote).text)}</div>
        </div>
      )}
    </div>
  )
}
