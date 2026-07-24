import { useEffect, useState } from 'react'
import { useApp } from '../../context/AppContext.jsx'
import { usePitchCount } from '../../hooks/usePitchCount.js'
import { countTrackerCopy as copy } from '../../data/rules.js'

function Dots({ total, filled, colorClass }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: total }).map((_, i) => (
        <span
          key={i}
          className={`w-2.5 h-2.5 rounded-full ${i < filled ? colorClass : 'bg-chalk/15'}`}
        />
      ))}
    </div>
  )
}

export default function CountTracker() {
  const { t } = useApp()
  const { count, addBall, addStrike, reset } = usePitchCount()
  const [toast, setToast] = useState(t(copy.idleHint))

  useEffect(() => {
    if (count.lastEvent === 'walk') setToast(t(copy.walkMessage))
    else if (count.lastEvent === 'strikeout') setToast(t(copy.strikeoutMessage))
    else setToast(t(copy.idleHint))
  }, [count.lastEvent, t])

  return (
    <div className="mx-4 mt-3 rounded-2xl bg-navy p-3.5">
      <div className="font-mono text-[10px] text-chalkDim text-center mb-2">{t(copy.title)}</div>

      <div className="flex justify-center gap-4 mb-2">
        <div className="text-center">
          <div className="text-[9px] text-chalkDim mb-1">{t(copy.balls)}</div>
          <Dots total={4} filled={count.balls} colorClass="bg-[#4caf6d]" />
        </div>
        <div className="text-center">
          <div className="text-[9px] text-chalkDim mb-1">{t(copy.strikes)}</div>
          <Dots total={3} filled={count.strikes} colorClass="bg-clayLight" />
        </div>
        <div className="text-center">
          <div className="text-[9px] text-chalkDim mb-1">{t(copy.outs)}</div>
          <Dots total={3} filled={count.outs} colorClass="bg-stitch" />
        </div>
      </div>

      <div className="flex justify-center gap-2 mt-2.5">
        <button onClick={addBall} className="font-mono text-[10px] px-2.5 py-1.5 rounded-lg bg-panel2 border border-chalk/10 hover:bg-clay transition-colors">
          {t(copy.addBall)}
        </button>
        <button onClick={addStrike} className="font-mono text-[10px] px-2.5 py-1.5 rounded-lg bg-panel2 border border-chalk/10 hover:bg-clay transition-colors">
          {t(copy.addStrike)}
        </button>
        <button onClick={reset} className="font-mono text-[10px] px-2.5 py-1.5 rounded-lg bg-panel2 border border-chalk/10 hover:bg-clay transition-colors">
          {t(copy.reset)}
        </button>
      </div>

      <div className="text-center text-[10px] font-bold text-clayLight mt-2 min-h-[14px]">{toast}</div>
    </div>
  )
}
