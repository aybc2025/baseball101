import { useCallback, useEffect, useState } from 'react'

const STORAGE_KEY = 'baseball101.lang'

function readStoredLang() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    return stored === 'en' ? 'en' : 'he'
  } catch {
    // localStorage can throw in private-browsing / disabled-storage contexts
    return 'he'
  }
}

export function useLanguage() {
  const [lang, setLang] = useState(readStoredLang)

  useEffect(() => {
    document.documentElement.lang = lang
    document.documentElement.dir = lang === 'he' ? 'rtl' : 'ltr'
    try {
      localStorage.setItem(STORAGE_KEY, lang)
    } catch {
      // ignore write failures — language just won't persist this session
    }
  }, [lang])

  const toggleLanguage = useCallback(() => {
    setLang((current) => (current === 'he' ? 'en' : 'he'))
  }, [])

  const dir = lang === 'he' ? 'rtl' : 'ltr'

  // Pick the right string out of a { he, en } object from the data files.
  const t = useCallback((bilingual) => bilingual?.[lang] ?? '', [lang])

  return { lang, dir, toggleLanguage, t }
}
