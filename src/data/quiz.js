export const quiz = [
  {
    id: 'q1',
    question: { he: 'כמה סטרייקים שווים אאוט אחד לחובט?', en: 'How many strikes make one out?' },
    options: {
      he: ['2', '3', '4', '1'],
      en: ['2', '3', '4', '1']
    },
    correctIndex: 1
  },
  {
    id: 'q2',
    question: { he: 'כמה "כדורים" (balls) שווים הליכה חופשית לבייס?', en: 'How many balls earn a batter a walk?' },
    options: {
      he: ['3', '5', '4', '2'],
      en: ['3', '5', '4', '2']
    },
    correctIndex: 2
  },
  {
    id: 'q3',
    question: { he: 'כמה מחזורים (innings) יש במשחק בייסבול רגיל?', en: 'How many innings are in a standard game?' },
    options: {
      he: ['7', '9', '12', '5'],
      en: ['7', '9', '12', '5']
    },
    correctIndex: 1
  },
  {
    id: 'q4',
    question: {
      he: 'איזה שחקן יושב מאחורי הבייס הביתי ותופס את זריקות הפיצ׳ר?',
      en: "Which player crouches behind home plate and catches the pitcher's throws?"
    },
    options: {
      he: ['שורטסטופ', 'בייסמן ראשון', "קאצ'ר (עוצר)", 'שדה חוץ מרכזי'],
      en: ['Shortstop', 'First Baseman', 'Catcher', 'Center Fielder']
    },
    correctIndex: 2
  },
  {
    id: 'q5',
    question: { he: 'באיזה סדר רץ עובר בין הבייסים?', en: 'In what order does a runner pass the bases?' },
    options: {
      he: ['3 ← 2 ← 1 ← בית', 'בית ← 1 ← 2 ← 3', '1 ← 2 ← 3 ← בית', '2 ← 1 ← 3 ← בית'],
      en: ['3rd ← 2nd ← 1st ← home', 'home ← 1st ← 2nd ← 3rd', '1st ← 2nd ← 3rd ← home', '2nd ← 1st ← 3rd ← home']
    },
    correctIndex: 2
  },
  {
    id: 'q6',
    question: { he: 'מה מציינת האות R בלוח התוצאות?', en: 'What does the letter R mean on a scoreboard?' },
    options: {
      he: ['שגיאות', 'חבטות', 'נקודות (Runs)', 'אאוטים'],
      en: ['Errors', 'Hits', 'Runs', 'Outs']
    },
    correctIndex: 2
  },
  {
    id: 'q7',
    question: { he: 'מה מציינת האות E בלוח התוצאות?', en: 'What does the letter E mean on a scoreboard?' },
    options: {
      he: ['נקודות', 'טעויות (Errors)', 'חבטות', 'מחזורים'],
      en: ['Runs', 'Errors', 'Hits', 'Innings']
    },
    correctIndex: 1
  },
  {
    id: 'q8',
    question: { he: 'איזה שחקן זורק את הכדור לעבר החובט בפתיחת כל פעולה?', en: 'Which player throws the ball to the batter to start each play?' },
    options: {
      he: ['בייסמן שלישי', "פיצ'ר (זורק)", 'שדה חוץ ימני', "קאצ'ר (עוצר)"],
      en: ['Third Baseman', 'Pitcher', 'Right Fielder', 'Catcher']
    },
    correctIndex: 1
  }
]
