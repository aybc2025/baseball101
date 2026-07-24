/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#151f18',
        bgAlt: '#0f1710',
        panel: '#1f2c22',
        panel2: '#233527',
        clay: '#b5642e',
        clayLight: '#d98a52',
        stitch: '#c8102e',
        chalk: '#f4efe2',
        chalkDim: '#c9c4b6',
        grassLine: '#3e6b47',
        navy: '#0f1b2e'
      },
      fontFamily: {
        display: ['Heebo', 'Arial Hebrew', 'sans-serif'],
        body: ['Rubik', 'Assistant', 'sans-serif'],
        mono: ['"Space Mono"', '"Courier New"', 'monospace']
      },
      borderRadius: {
        card: '18px',
        sheet: '20px 20px 0 0'
      }
    }
  },
  plugins: []
}
