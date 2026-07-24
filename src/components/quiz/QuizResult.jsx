import { useApp } from '../../context/AppContext.jsx'

function scoreMessage(score, total) {
  const ratio = score / total
  if (ratio === 1) return { he: 'ניקוד מושלם — הקפה שלמה! 🏆', en: 'Perfect score — full circuit! 🏆' }
  if (ratio >= 0.6) return { he: 'כמעט הקפה מלאה! 🏃', en: 'Almost a full circuit! 🏃' }
  return { he: 'התחלה טובה — סיבוב נוסף וזה יישב טוב יותר', en: 'Good start — another lap and it will click' }
}

export default function QuizResult({ score, total, onRetry, onHome }) {
  const { t } = useApp()
  const message = scoreMessage(score, total)

  return (
    <div className="flex-1 flex flex-col items-center justify-center gap-2.5 px-6 text-center">
      <div
        className="w-24 h-24 rounded-full flex items-center justify-center"
        style={{
          background: `conic-gradient(#b5642e ${(score / total) * 360}deg, #233527 0deg)`
        }}
      >
        <div className="w-[76px] h-[76px] rounded-full bg-bg flex items-center justify-center font-mono ltr-nums text-base">
          {score}/{total}
        </div>
      </div>
      <div className="font-bold text-[14px]">{t(message)}</div>
      <div className="text-[11px] text-chalkDim">
        {t({ he: 'עוד קצת תרגול ותדעו לקרוא כל לוח תוצאות', en: "With a bit more practice you'll read any scoreboard" })}
      </div>
      <div className="flex gap-2 mt-1.5">
        <button onClick={onRetry} className="rounded-full bg-stitch px-4 py-2 text-[11px] font-bold">
          {t({ he: 'נסו שוב', en: 'Try again' })}
        </button>
        <button onClick={onHome} className="rounded-full border border-chalk/20 px-4 py-2 text-[11px] text-chalkDim">
          {t({ he: 'חזרה הביתה', en: 'Back home' })}
        </button>
      </div>
    </div>
  )
}
