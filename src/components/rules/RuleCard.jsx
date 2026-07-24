import { useApp } from '../../context/AppContext.jsx'

export default function RuleCard({ rule }) {
  const { t } = useApp()
  return (
    <div className="mx-4 mt-2.5 rounded-xl bg-panel2 px-3.5 py-2.5">
      <div className="font-bold text-[13px] mb-0.5">{t(rule.title)}</div>
      <div className="text-[11.5px] text-chalkDim leading-relaxed">{t(rule.body)}</div>
    </div>
  )
}
