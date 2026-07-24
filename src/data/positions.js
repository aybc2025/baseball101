// 9 fielding positions plotted on a top-down field diagram.
// x/y are percentages (0-100) used to place each dot on the field SVG/div.
export const positions = [
  {
    id: 'pitcher',
    name: { he: "פיצ'ר (זורק)", en: 'Pitcher' },
    x: 50,
    y: 55,
    description: {
      he: 'עומד במרכז המגרש על "גבעת הזריקה" וזורק את הכדור לעבר החובט — הוא פותח כל פעולה במשחק.',
      en: 'Stands on the mound at the center of the field and throws the ball to the batter, starting every play.'
    },
    funFact: {
      he: 'זורקים מקצועיים יכולים לשגר כדור במהירות של יותר מ-160 קמ"ש.',
      en: 'Professional pitchers can throw a fastball at over 100 mph (160 km/h).'
    }
  },
  {
    id: 'catcher',
    name: { he: "קאצ'ר (עוצר)", en: 'Catcher' },
    x: 50,
    y: 88,
    description: {
      he: 'יושב מאחורי הבייס הביתי, קולט את זריקות הפיצ׳ר ומכוון את שאר שחקני ההגנה.',
      en: "Crouches behind home plate, catches the pitcher's throws, and directs the rest of the defense."
    },
    funFact: {
      he: 'העוצר הוא השחקן היחיד שרואה את כל המגרש מולו — כמו קפטן ההגנה.',
      en: "The catcher is the only fielder facing the entire field — effectively the defense's captain."
    }
  },
  {
    id: 'first-base',
    name: { he: 'בייסמן ראשון', en: 'First Baseman' },
    x: 72,
    y: 55,
    description: {
      he: 'שומר על בייס 1 — תפקידו העיקרי לקלוט זריקות ולסיים "אאוטים" של רצים בדרך לבייס.',
      en: 'Guards first base, mainly catching throws to record outs on runners heading there.'
    },
    funFact: {
      he: 'לרוב זו העמדה עם הכי הרבה קליטות כדור במשחק.',
      en: 'This position usually records the most putouts of any fielder in a game.'
    }
  },
  {
    id: 'second-base',
    name: { he: 'בייסמן שני', en: 'Second Baseman' },
    x: 63,
    y: 35,
    description: {
      he: 'שומר על האזור ליד בייס 2 ומשתתף הרבה בשילובי "דבל פליי" — שני אאוטים ברצף אחד.',
      en: 'Covers the area near second base and is heavily involved in double plays — two outs on one play.'
    },
    funFact: {
      he: 'עובד בצמוד לשורטסטופ כמעט בכל חבטה לכיוון מרכז המגרש.',
      en: 'Works in constant coordination with the shortstop on almost every ball hit up the middle.'
    }
  },
  {
    id: 'third-base',
    name: { he: 'בייסמן שלישי', en: 'Third Baseman' },
    x: 28,
    y: 55,
    description: {
      he: 'שומר על בייס 3 — מכונה "הפינה החמה" כי כדורים מגיעים אליו הכי מהר אחרי חבטה.',
      en: "Guards third base — nicknamed the 'hot corner' because batted balls reach it the fastest."
    },
    funFact: {
      he: 'צריך רפלקסים מהירים במיוחד בגלל המרחק הקצר מהחובט.',
      en: 'Needs especially fast reflexes due to the short distance from the batter.'
    }
  },
  {
    id: 'shortstop',
    name: { he: 'שורטסטופ', en: 'Shortstop' },
    x: 37,
    y: 35,
    description: {
      he: 'עומד בין בייס 2 לבייס 3 ונחשב לאחת העמדות הדורשות ביותר מבחינת זריזות וכיסוי שטח.',
      en: 'Plays between second and third base — widely considered the most demanding fielding position.'
    },
    funFact: {
      he: 'לרוב זה השחקן עם הזריקה הכי חזקה וטווח התנועה הכי גדול בהגנה.',
      en: "Usually has the strongest throwing arm and widest range on the defense."
    }
  },
  {
    id: 'left-field',
    name: { he: 'שדה חוץ שמאלי', en: 'Left Fielder' },
    x: 22,
    y: 15,
    description: {
      he: 'מכסה את הפינה השמאלית הרחוקה של המגרש, קולט חבטות ארוכות וזורק בחזרה למגרש הפנימי.',
      en: 'Covers the far left side of the outfield, catching long fly balls and throwing back to the infield.'
    },
    funFact: {
      he: 'צריך לכסות שטח ענק — לרוב עשרות מטרים בכל כיוון.',
      en: 'Responsible for covering a huge area — often tens of meters in every direction.'
    }
  },
  {
    id: 'center-field',
    name: { he: 'שדה חוץ מרכזי', en: 'Center Fielder' },
    x: 50,
    y: 8,
    description: {
      he: 'עומד הכי רחוק מהבייס הביתי ומכסה את השטח הגדול ביותר במגרש.',
      en: 'Stands the farthest from home plate and covers the largest area of any fielder.'
    },
    funFact: {
      he: 'נחשב לעתים קרובות לשחקן ההגנה הכי מהיר בקבוצה.',
      en: 'Often considered the fastest defensive player on the team.'
    }
  },
  {
    id: 'right-field',
    name: { he: 'שדה חוץ ימני', en: 'Right Fielder' },
    x: 78,
    y: 15,
    description: {
      he: 'מכסה את הפינה הימנית הרחוקה של המגרש ולעיתים קרובות זקוק לזריקה הכי חזקה בין שדות החוץ.',
      en: 'Covers the far right side of the outfield and often needs the strongest arm of the three outfielders.'
    },
    funFact: {
      he: 'המרחק שלו מבייס 3 הוא הכי גדול, ולכן חשוב שתהיה לו זריקה ארוכה וחזקה.',
      en: "Farthest outfielder from third base, so a long, strong throw matters most here."
    }
  }
]
