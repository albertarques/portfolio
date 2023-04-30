export default function TagButton({tag, className}) {
  return (
    <span className={`rounded-full px-4 py-1 mr-4 mb-4 ${className}`}>{tag}</span>
  )
}