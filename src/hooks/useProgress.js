import { useCallback, useEffect, useState } from 'react'

const STORAGE_KEY = 'baseball101.progress'

const DEFAULT_PROGRESS = {
  modulesCompleted: [],
  quizBestScore: 0,
  quizAttempts: 0
}

function readStoredProgress() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return DEFAULT_PROGRESS
    const parsed = JSON.parse(raw)
    return {
      modulesCompleted: Array.isArray(parsed.modulesCompleted) ? parsed.modulesCompleted : [],
      quizBestScore: Number.isFinite(parsed.quizBestScore) ? parsed.quizBestScore : 0,
      quizAttempts: Number.isFinite(parsed.quizAttempts) ? parsed.quizAttempts : 0
    }
  } catch {
    // Corrupt or inaccessible storage — fall back to a clean slate rather
    // than crashing the app.
    return DEFAULT_PROGRESS
  }
}

export function useProgress() {
  const [progress, setProgress] = useState(readStoredProgress)

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(progress))
    } catch {
      // ignore write failures — progress just won't persist this session
    }
  }, [progress])

  const markComplete = useCallback((moduleId) => {
    setProgress((current) => {
      if (current.modulesCompleted.includes(moduleId)) return current
      return { ...current, modulesCompleted: [...current.modulesCompleted, moduleId] }
    })
  }, [])

  const recordQuizResult = useCallback((score) => {
    setProgress((current) => ({
      ...current,
      quizBestScore: Math.max(current.quizBestScore, score),
      quizAttempts: current.quizAttempts + 1
    }))
  }, [])

  const resetProgress = useCallback(() => setProgress(DEFAULT_PROGRESS), [])

  return { progress, markComplete, recordQuizResult, resetProgress }
}
