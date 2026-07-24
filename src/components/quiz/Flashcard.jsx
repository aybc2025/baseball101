import { useState } from 'react'
import { useApp } from '../../context/AppContext.jsx'

export default function Flashcard({ item, onAnswer }) {
  const { t, lang } = useApp()
  const [pickedIndex, setPickedIndex] = useState(null)
  const options = item.options[lang]

  function handlePick(index) {
    if (pickedIndex !== null) return // lock after first answer
    setPickedIndex(index)
    const correct = index === item.correctIndex
    setTimeout(() => onAnswer(correct), 550)
  }

  return (
    <div>
      <div className="px-4 pt-4 text-center font-bold text-[13.5px]">{t(item.question)}</div>
      <div className="flex flex-col gap-2 px-4 mt-3">
        {options.map((opt, i) => {
          const isPicked = pickedIndex === i
          const isCorrect = i === item.correctIndex
          const showState = pickedIndex !== null
          return (
            <button
              key={i}
              type="button"
              onClick={() => handlePick(i)}
              className={`text-right rounded-lg border px-3 py-2.5 text-[12px] transition-colors
                ${showState && isCorrect ? 'bg-[#2f5233] border-[#4caf6d]' : ''}
                ${showState && isPicked && !isCorrect ? 'bg-stitch/20 border-stitch' : ''}
                ${!showState ? 'bg-panel2 border-chalk/10 hover:border-clayLight' : ''}`}
            >
              {opt}
            </button>
          )
        })}
      </div>
    </div>
  )
}
