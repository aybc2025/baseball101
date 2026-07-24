import { useEffect, useState } from 'react'
import { useApp } from '../context/AppContext.jsx'
import { positions } from '../data/positions.js'
import PositionSheet from '../components/diamond/PositionSheet.jsx'
import InfieldDiamond from '../components/diamond/InfieldDiamond.jsx'
import StrikeZoneExplainer from '../components/diamond/StrikeZoneExplainer.jsx'

export default function DiamondScreen() {
  const { t, markComplete } = useApp()
  const [activeIndex, setActiveIndex] = useState(null)

  useEffect(() => {
    markComplete('positions')
  }, [markComplete])

  return (
    <div className="relative flex-1 min-h-[420px]">
      <p className="px-4 text-[11px] text-chalkDim mb-1">
        {t({ he: 'געו בכל נקודה כדי להכיר את התפקיד שלה', en: 'Tap any dot to learn that role' })}
      </p>

      <div
        className="relative mx-4 rounded-2xl overflow-hidden"
        style={{
          height: 300,
          background: 'radial-gradient(circle at 50% 20%, #2c4a34, #16241c 70%)'
        }}
      >
        {/* dirt diamond, bases, and the batter — rendered first so the
            clickable fielder dots below stay on top */}
        <InfieldDiamond />

        {positions.map((p, i) => (
          <button
            key={p.id}
            type="button"
            onClick={() => setActiveIndex(i)}
            aria-label={p.name.en}
            className="absolute w-4 h-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-chalk ring-4 ring-clay/40 hover:ring-clayLight/60"
            style={{ left: `${p.x}%`, top: `${p.y}%` }}
          />
        ))}
      </div>

      <StrikeZoneExplainer />

      {/* Deliberately a sibling of the field box above, not nested inside
          it — the field box has overflow-hidden for its rounded corners,
          which would clip a tall sheet if the sheet lived inside it. */}
      {activeIndex !== null && (
        <PositionSheet
          activeIndex={activeIndex}
          onSelectIndex={setActiveIndex}
          onClose={() => setActiveIndex(null)}
        />
      )}
    </div>
  )
}

