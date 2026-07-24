// Renders on top of the field background in DiamondScreen. Uses the same
// x/y percentage coordinate system as the fielder dots in data/positions.js
// so everything lines up on one shared 0-100 grid.
const HOME = { x: 50, y: 88 }
const FIRST = { x: 68, y: 66 }
const SECOND = { x: 50, y: 44 }
const THIRD = { x: 32, y: 66 }
const BATTER = { x: 61, y: 83 }

function BaseMarker({ x, y }) {
  // Rendered as a plain HTML div (not inside the SVG below) so it stays a
  // crisp square regardless of the field box's aspect ratio — the SVG uses
  // preserveAspectRatio="none" to match the existing % coordinate system,
  // which would otherwise skew a true square into a rhombus.
  return (
    <div
      className="absolute w-2 h-2 bg-chalk"
      style={{ left: `${x}%`, top: `${y}%`, transform: 'translate(-50%, -50%) rotate(45deg)' }}
    />
  )
}

export default function InfieldDiamond() {
  return (
    <>
      {/* infield dirt — the "diamond" connecting the bases */}
      <svg
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        className="absolute inset-0 w-full h-full pointer-events-none"
      >
        <polygon
          points={`${HOME.x},${HOME.y} ${FIRST.x},${FIRST.y} ${SECOND.x},${SECOND.y} ${THIRD.x},${THIRD.y}`}
          fill="#b5642e"
          fillOpacity="0.55"
        />
        <polyline
          points={`${HOME.x},${HOME.y} ${FIRST.x},${FIRST.y} ${SECOND.x},${SECOND.y} ${THIRD.x},${THIRD.y} ${HOME.x},${HOME.y}`}
          fill="none"
          stroke="#f4efe2"
          strokeOpacity="0.5"
          strokeWidth="0.6"
          strokeDasharray="1.5 1.5"
        />
      </svg>

      <BaseMarker x={FIRST.x} y={FIRST.y} />
      <BaseMarker x={SECOND.x} y={SECOND.y} />
      <BaseMarker x={THIRD.x} y={THIRD.y} />

      {/* home plate — simplified pentagon, point facing the catcher/batter */}
      <div
        className="absolute w-3.5 h-3.5 bg-chalk"
        style={{
          left: `${HOME.x}%`,
          top: `${HOME.y}%`,
          transform: 'translate(-50%, -50%)',
          clipPath: 'polygon(0% 0%, 100% 0%, 100% 60%, 50% 100%, 0% 60%)'
        }}
      />

      {/* batter, standing in the batter's box */}
      <div
        className="absolute"
        style={{ left: `${BATTER.x}%`, top: `${BATTER.y}%`, transform: 'translate(-50%, -50%)' }}
      >
        <div className="w-2 h-2 rounded-full bg-chalk mx-auto" />
        <div className="w-0.5 h-4 bg-chalk mx-auto -mt-0.5" />
        <div className="absolute top-1.5 -right-2.5 w-3.5 h-0.5 bg-chalk rotate-[35deg] origin-left rounded-full" />
      </div>
    </>
  )
}
