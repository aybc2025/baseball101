const POSITION_CLASSES = {
  home: 'bottom-0.5 left-1/2 -translate-x-1/2',
  b1: 'bottom-1/2 right-0.5 translate-y-1/2',
  b2: 'top-0.5 left-1/2 -translate-x-1/2',
  b3: 'bottom-1/2 left-0.5 translate-y-1/2'
}

export default function BaseNode({ position, label, done, onClick, pulse = false }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`absolute ${POSITION_CLASSES[position]} w-9 h-9 rounded-lg font-mono text-xs font-bold
        flex items-center justify-center transition-transform hover:scale-110
        ${done ? 'bg-clayLight text-bg' : pulse ? 'bg-stitch text-chalk animate-pulse' : 'bg-chalk text-bg'}
        ring-4 ${done ? 'ring-clayLight/30' : 'ring-stitch/30'}`}
      aria-label={label}
    >
      {done ? '✓' : label}
    </button>
  )
}
