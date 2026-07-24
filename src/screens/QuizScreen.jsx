import { useState } from 'react'
import { useApp } from '../context/AppContext.jsx'
import { quiz } from '../data/quiz.js'
import QuizProgress from '../components/quiz/QuizProgress.jsx'
import Flashcard from '../components/quiz/Flashcard.jsx'
import QuizResult from '../components/quiz/QuizResult.jsx'

export default function QuizScreen() {
  const { markComplete, recordQuizResult, setScreen } = useApp()
  const [index, setIndex] = useState(0)
  const [score, setScore] = useState(0)
  const [finished, setFinished] = useState(false)

  function handleAnswer(correct) {
    const nextScore = correct ? score + 1 : score
    setScore(nextScore)
    if (index + 1 >= quiz.length) {
      setFinished(true)
      recordQuizResult(nextScore)
      markComplete('quiz')
    } else {
      setIndex(index + 1)
    }
  }

  function retry() {
    setIndex(0)
    setScore(0)
    setFinished(false)
  }

  if (finished) {
    return (
      <QuizResult score={score} total={quiz.length} onRetry={retry} onHome={() => setScreen('home')} />
    )
  }

  return (
    <div className="flex-1 flex flex-col">
      <QuizProgress total={quiz.length} current={index} />
      <Flashcard key={quiz[index].id} item={quiz[index]} onAnswer={handleAnswer} />
    </div>
  )
}
