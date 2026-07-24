import { useApp } from '../../context/AppContext.jsx'
import { positions } from '../../data/positions.js'

export default function PositionSheet({ activeIndex, onSelectIndex, onClose }) {
  const { t } = useApp()
  const position = positions[activeIndex]
  if (!position) return null

  return (
    <div className="absolute inset-x-0 bottom-0 rounded-sheet bg-panel border-t border-chalk/10 px-5 pt-3 pb-6 shadow-2xl">
      <div className="w-9 h-1 rounded bg-chalk/25 mx-auto mb-3" />
      <button
        type="button"
        onClick={onClose}
        aria-label="close"
        className="absolute top-3 left-4 text-chalkDim text-lg leading-none"
      >
        ×
      </button>

      <div className="font-display font-extrabold text-lg">{t(position.name)}</div>
      <div className="font-mono text-[10px] text-clayLight mb-2">{position.name.en}</div>
      <p className="text-xs text-chalkDim">{t(position.description)}</p>

      <div className="mt-2.5 rounded-lg bg-panel2 border-r-2 border-stitch px-3 py-2 text-[11px]">
        ⚾ {t(position.funFact)}
      </div>

      <div className="flex justify-center gap-1.5 mt-3.5">
        {positions.map((p, i) => (
          <button
            key={p.id}
            type="button"
            aria-label={p.name.en}
            onClick={() => onSelectIndex(i)}
            className={`w-1.5 h-1.5 rounded-full ${i === activeIndex ? 'bg-clayLight' : 'bg-chalk/25'}`}
          />
        ))}
      </div>
    </div>
  )
}
