import { useRegisterSW } from 'virtual:pwa-register/react'
import { useApp } from '../../context/AppContext.jsx'

// Shows a small banner when a new version of the app has been pre-cached
// by the service worker and is ready to take over. registerType:
// 'autoUpdate' in vite.config.js already applies updates automatically on
// the next load — this banner just lets the user refresh immediately
// instead of waiting for their next visit.
export default function UpdateBanner() {
  const { t } = useApp()
  const { needRefresh, updateServiceWorker } = useRegisterSW()
  const [needsUpdate] = needRefresh

  if (!needsUpdate) return null

  return (
    <div className="fixed bottom-16 inset-x-0 mx-auto max-w-xs px-4">
      <div className="flex items-center justify-between gap-3 rounded-xl bg-panel border border-clayLight/40 px-3.5 py-2.5 shadow-lg">
        <span className="text-[11px] text-chalkDim">
          {t({ he: 'גרסה חדשה זמינה', en: 'A new version is available' })}
        </span>
        <button
          type="button"
          onClick={() => updateServiceWorker(true)}
          className="shrink-0 rounded-full bg-clay px-3 py-1 text-[11px] font-bold"
        >
          {t({ he: 'רענון', en: 'Refresh' })}
        </button>
      </div>
    </div>
  )
}
