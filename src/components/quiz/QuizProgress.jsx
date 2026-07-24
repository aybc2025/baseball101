export default function QuizProgress({ total, current }) {
  return (
    <div className="flex gap-1 px-4 pt-3.5">
      {Array.from({ length: total }).map((_, i) => (
        <div key={i} className={`flex-1 h-1 rounded ${i < current ? 'bg-clay' : 'bg-panel2'}`} />
      ))}
    </div>
  )
}
