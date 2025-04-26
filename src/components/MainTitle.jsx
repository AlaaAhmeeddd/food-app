
export default function MainTitle({title, description}) {
  return (
    <div className="text-slate-700 flex flex-col items-center justify-center text-center my-10 gap-4">
        <h1 className="text-6xl font-semibold">{title}</h1>
        <p>{description}</p>
    </div>
  )
}
