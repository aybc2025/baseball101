import { useApp } from '../../context/AppContext.jsx'
import LanguageToggle from './LanguageToggle.jsx'

const COPY = {
  eyebrow: { he: 'ברוך הבא', en: 'Welcome' },
  title: { he: 'בייסבול 101', en: 'Baseball 101' },
  tagline: { he: 'מהעמדה הראשונה ועד לריצה הביתה', en: 'From first base to running home' }
}

export default function Header({ compact = false }) {
  const { t } = useApp()

  return (
    <header className="flex items-start justify-between px-5 pt-4">
      <div>
        {!compact && (
          <div className="font-mono text-[10px] tracking-wide text-clayLight">{t(COPY.eyebrow)}</div>
        )}
        <h1 className="font-display font-extrabold text-2xl">{t(COPY.title)}</h1>
        {!compact && <p className="text-xs text-chalkDim mt-0.5">{t(COPY.tagline)}</p>}
      </div>
      <LanguageToggle />
    </header>
  )
}
