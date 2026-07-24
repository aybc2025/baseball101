import { useApp } from '../../context/AppContext.jsx'
import BaseNode from './BaseNode.jsx'

// Base-running order doubles as the learning path: 1st → positions,
// 2nd → rules, 3rd → scoreboard, and home plate → the quiz. Finishing the
// quiz completes the circuit, which is the whole point of the metaphor —
// "make it all the way around and you've scored a run."
const BASE_MODULES = [
  { base: 'b1', moduleId: 'positions', label: '1' },
  { base: 'b2', moduleId: 'rules', label: '2' },
  { base: 'b3', moduleId: 'scoreboard', label: '3' },
  { base: 'home', moduleId: 'quiz', label: 'בית' }
]

export default function DiamondField() {
  const { setScreen, progress } = useApp()
  const allDone = BASE_MODULES.every((b) => progress.modulesCompleted.includes(b.moduleId))

  return (
    <div className="relative w-48 h-48 mx-auto mt-3 mb-1">
      <div
        className={`absolute inset-5 rounded-md border-2 border-chalk rotate-45 ${
          allDone ? 'bg-gradient-to-br from-clay to-stitch' : 'bg-clay'
        }`}
      />
      {BASE_MODULES.map(({ base, moduleId, label }) => (
        <BaseNode
          key={base}
          position={base}
          label={label}
          pulse={base === 'home' && !allDone}
          done={progress.modulesCompleted.includes(moduleId)}
          onClick={() => setScreen(moduleId)}
        />
      ))}
    </div>
  )
}
