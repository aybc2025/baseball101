import { useCallback, useState } from 'react'

const INITIAL = { balls: 0, strikes: 0, outs: 0, lastEvent: null }

// A tiny local state machine for the Rules-screen demo widget. It never
// touches localStorage or app-wide state — it's purely illustrative, so a
// simple useState is enough (no need for the shared progress store).
export function usePitchCount() {
  const [count, setCount] = useState(INITIAL)

  const addBall = useCallback(() => {
    setCount((current) => {
      const balls = current.balls + 1
      if (balls >= 4) {
        return { balls: 0, strikes: 0, outs: current.outs, lastEvent: 'walk' }
      }
      return { ...current, balls, lastEvent: null }
    })
  }, [])

  const addStrike = useCallback(() => {
    setCount((current) => {
      const strikes = current.strikes + 1
      if (strikes >= 3) {
        return {
          balls: 0,
          strikes: 0,
          outs: Math.min(current.outs + 1, 3),
          lastEvent: 'strikeout'
        }
      }
      return { ...current, strikes, lastEvent: null }
    })
  }, [])

  const reset = useCallback(() => setCount(INITIAL), [])

  return { count, addBall, addStrike, reset }
}
