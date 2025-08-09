'use client'
export default function ShapeBlurButton({ children }) {
  return (
    <button className="shape-blur">
      <span className="px-4 py-2 bg-white text-black rounded-md font-bold inline-block">
        {children}
      </span>
    </button>
  )
}
