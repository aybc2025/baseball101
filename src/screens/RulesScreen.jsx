import { useEffect } from 'react'
import { useApp } from '../context/AppContext.jsx'
import { rules } from '../data/rules.js'
import RuleCard from '../components/rules/RuleCard.jsx'
import CountTracker from '../components/rules/CountTracker.jsx'

export default function RulesScreen() {
  const { markComplete } = useApp()

  useEffect(() => {
    markComplete('rules')
  }, [markComplete])

  return (
    <div className="pb-2">
      {rules.map((rule) => (
        <RuleCard key={rule.id} rule={rule} />
      ))}
      <CountTracker />
    </div>
  )
}
