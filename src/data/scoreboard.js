// A deliberately generic example line score — not a real MLB matchup —
// per the approved spec decision to avoid a specific team.
export const scoreboardExample = {
  teams: {
    away: { he: 'קבוצת האורחים', en: 'Away Team' },
    home: { he: 'קבוצת הבית', en: 'Home Team' }
  },
  innings: [1, 2, 3, 4, 5, 6, 7, 8, 9],
  lineScore: {
    away: [1, 0, 2, 0, 1, 0, 1, 0, 1],
    home: [0, 1, 0, 0, 1, 0, 0, 1, 0]
  },
  totals: {
    away: { R: 6, H: 9, E: 0 },
    home: { R: 3, H: 6, E: 2 }
  }
}

export const scoreboardAnnotations = [
  {
    key: 'innings-row',
    label: { he: 'שורת המחזורים', en: 'Innings row' },
    text: {
      he: 'כל עמודה היא מחזור (Inning). המספר בתא הוא כמה נקודות כל קבוצה הביאה באותו מחזור.',
      en: 'Each column is one inning. The number in each cell is how many runs that team scored in that inning.'
    }
  },
  {
    key: 'R',
    label: { he: 'R — נקודות', en: 'R — Runs' },
    text: {
      he: 'סך כל הנקודות שהקבוצה צברה במשחק. הקבוצה עם ה-R הגבוה יותר מנצחת.',
      en: 'Total runs the team scored in the game. The team with more R wins.'
    }
  },
  {
    key: 'H',
    label: { he: 'H — חבטות מוצלחות', en: 'H — Hits' },
    text: {
      he: 'כמה פעמים חובטי הקבוצה הצליחו להגיע לפחות לבייס 1 בעקבות חבטה.',
      en: "How many times the team's batters reached at least first base on a hit."
    }
  },
  {
    key: 'E',
    label: { he: 'E — טעויות', en: 'E — Errors' },
    text: {
      he: 'כמה טעויות הגנה עשתה הקבוצה — למשל כדור שנפל מיד לאחר קליטה.',
      en: "How many defensive mistakes the team made — for example, dropping a catchable ball."
    }
  }
]
