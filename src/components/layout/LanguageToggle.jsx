import { useApp } from '../../context/AppContext.jsx'

export default function LanguageToggle() {
  const { lang, toggleLanguage } = useApp()

  return (
    <button
      type="button"
      onClick={toggleLanguage}
      aria-label={lang === 'he' ? 'Switch to English' : 'עברו לעברית'}
      className="mt-0.5 shrink-0 rounded-full border border-chalk/15 bg-panel2 px-3 py-1 font-mono text-[11px] text-chalkDim hover:text-chalk hover:border-clayLight transition-colors"
    >
      <span className={lang === 'he' ? 'text-clayLight font-bold' : ''}>עב</span>
      <span className="mx-1 text-chalkDim/50">׀</span>
      <span className={lang === 'en' ? 'text-clayLight font-bold' : ''}>EN</span>
    </button>
  )
}
