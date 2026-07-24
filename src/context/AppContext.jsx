import { createContext, useContext, useMemo, useState } from 'react'
import { useLanguage } from '../hooks/useLanguage.js'
import { useProgress } from '../hooks/useProgress.js'

// Small addition beyond the original file-structure sketch in the spec:
// a single context wraps the two state hooks so deeply nested components
// (e.g. LanguageToggle in the header, RuleCard three levels down) don't
// need language/progress threaded through every prop chain. The hooks
// themselves still own all the actual logic — this context only
// distributes their return values. See CLAUDE.md "Intentional decisions".
const AppContext = createContext(null)

export const MODULES = ['positions', 'rules', 'scoreboard', 'quiz']

export function AppProvider({ children }) {
  const [screen, setScreen] = useState('home')
  const languageApi = useLanguage()
  const progressApi = useProgress()

  const value = useMemo(
    () => ({
      screen,
      setScreen,
      ...languageApi,
      ...progressApi
    }),
    [screen, languageApi, progressApi]
  )

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

export function useApp() {
  const ctx = useContext(AppContext)
  if (!ctx) throw new Error('useApp must be used inside <AppProvider>')
  return ctx
}
