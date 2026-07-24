export const rules = [
  {
    id: 'innings',
    title: { he: '9 מחזורים (Innings)', en: '9 Innings' },
    body: {
      he: 'כל מחזור מתחלק לחצי עליון וחצי תחתון. בחצי העליון חובטת קבוצת האורחים, ובחצי התחתון חובטת קבוצת הבית. כל קבוצה מקבלת שלושה אאוטים בכל חצי מחזור לפני שהתור עובר הלאה.',
      en: 'Each inning has a top half and a bottom half. The away team bats in the top half, the home team bats in the bottom half. Each side gets three outs per half-inning before the turn passes.'
    }
  },
  {
    id: 'scoring',
    title: { he: 'איך מקבלים נקודה', en: 'How Runs Are Scored' },
    body: {
      he: 'חובט שמכה את הכדור רץ בין הבייסים בסדר קבוע: בייס 1 ← בייס 2 ← בייס 3 ← בייס הבית. בכל פעם שרץ משלים את המעגל וחוזר לבייס הבית, הקבוצה שלו מקבלת נקודה אחת (Run).',
      en: "A batter who hits the ball runs the bases in fixed order: first ← second ← third ← home. Every time a runner completes the circuit back to home plate, their team scores one run."
    }
  },
  {
    id: 'outs',
    title: { he: 'שלושה אאוטים וסיימתם', en: 'Three Outs and You’re Done' },
    body: {
      he: 'קבוצה מקבלת אאוט כשחובט "נשרף" (3 סטרייקים), כשההגנה תופסת כדור באוויר לפני שנגע בקרקע, או כשההגנה "מתייגת" רץ בדרך לבייס. אחרי 3 אאוטים, התור עובר לקבוצה השנייה.',
      en: "A team records an out when a batter strikes out (3 strikes), when the defense catches a batted ball in the air, or when a runner is tagged out between bases. After 3 outs, the turn passes to the other team."
    }
  },
  {
    id: 'foul-territory',
    title: { he: 'קווי הפול (Foul Lines)', en: 'Foul Lines' },
    body: {
      he: 'שני קווים ישרים היוצאים מהבייס הביתי מסמנים את גבולות המגרש החוקי. חבטה שנוחתת מחוץ לקווים האלה נחשבת "פול" ולרוב נספרת כסטרייק.',
      en: 'Two straight lines running from home plate mark the boundary of fair territory. A ball landing outside them is a "foul ball," usually counted as a strike.'
    }
  }
]

// Copy used by the interactive CountTracker widget on the Rules screen.
export const countTrackerCopy = {
  title: { he: 'נסו בעצמכם — הוסיפו כדור/סטרייק', en: 'Try it yourself — add a ball or strike' },
  balls: { he: 'כדורים', en: 'Balls' },
  strikes: { he: 'סטרייקים', en: 'Strikes' },
  outs: { he: 'אאוטים', en: 'Outs' },
  addBall: { he: '+ כדור', en: '+ Ball' },
  addStrike: { he: '+ סטרייק', en: '+ Strike' },
  reset: { he: 'איפוס', en: 'Reset' },
  idleHint: { he: '4 כדורים = הליכה חופשית לבייס', en: '4 balls = a free walk to first base' },
  walkMessage: { he: '4 כדורים = הליכה חופשית לבייס!', en: '4 balls = a walk to first base!' },
  strikeoutMessage: { he: '3 סטרייקים = אאוט (סטרייקאאוט)!', en: '3 strikes = an out (strikeout)!' }
}
