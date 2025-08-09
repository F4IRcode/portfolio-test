'use client'
export default function PixelCard({ title, subtitle }) {
  return (
    <div className="pixel-card">
      <div className="text-sm">{title}</div>
      <div className="text-xs text-gray-300">{subtitle}</div>
    </div>
  )
}
