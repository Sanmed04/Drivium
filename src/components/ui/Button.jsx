export default function Button({ children, onClick, className, variant }) {
    return (
        <button
            onClick={onClick}
      className={`px-4 py-2 rounded-md ${
        variant === 'ghost'
          ? 'hover:bg-gray-100'
          : variant === 'outline'
          ? 'border border-gray-300'
          : 'bg-blue-500 text-white hover:bg-blue-600'
      } ${className}`}
    >
            {children}
        </button>
    )
}