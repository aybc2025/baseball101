import { useApp } from '../../context/AppContext.jsx'

// Placed on the positions/field screen (rather than the rules screen)
// because it reads naturally right next to the batter we just drew at
// home plate — see CLAUDE.md "Intentional decisions" for the reasoning.
// Colors intentionally match CountTracker.jsx's strike (clayLight) and
// ball (#4caf6d) dots so the color language stays consistent app-wide.
export default function StrikeZoneExplainer() {
  const { t } = useApp()

  return (
    <div className="mx-4 mt-3 rounded-xl bg-panel2 px-3.5 py-3 flex items-center gap-3.5">
      <div className="relative w-16 h-20 shrink-0">
        <div className="absolute inset-x-3 top-3 bottom-3 rounded-sm border-2 border-dashed border-chalk/50 bg-clay/10" />
        <span className="absolute inset-x-3 top-1/2 -translate-y-1/2 mx-auto w-3 h-3 rounded-full bg-clayLight" />
        <span className="absolute -right-1 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-[#4caf6d]" />
      </div>
      <div className="text-[11px] text-chalkDim leading-relaxed">
        <div className="font-bold text-chalk text-[12px] mb-1">
          {t({ he: 'אזור הסטרייק', en: 'The Strike Zone' })}
        </div>
        {t({
          he: 'מעל הבייס הביתי מוגדר ריבוע דמיוני, בגובה שבין הברכיים לחזה של החובט. זריקה שעוברת בתוך הריבוע (הנקודה הכתומה) נחשבת סטרייק — זריקה שעוברת מחוצה לו (הנקודה הירוקה) נחשבת כדור.',
          en: "An imaginary box sits over home plate, roughly knee-to-chest height on the batter. A pitch through the box (orange dot) is a strike — a pitch outside it (green dot) is a ball."
        })}
      </div>
    </div>
  )
}
