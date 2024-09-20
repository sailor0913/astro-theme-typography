// src/components/ProgressCircle.jsx

function ProgressCircle({ progress, label, imageSrc }) {
  const circumference = 2 * Math.PI * 50
  const offset = circumference - (progress / 100) * circumference

  return (
    <div className="flex flex-col items-center">
      <img
        src={imageSrc}
        alt={label}
        className="mb-4 h-32 w-24 rounded object-cover shadow"
      />
      <svg className="mb-2 h-32 w-32">
        <circle
          className="text-gray-300"
          strokeWidth="8"
          stroke="currentColor"
          fill="transparent"
          r="56"
          cx="64"
          cy="64"
        />
        <circle
          className="text-blue-500"
          strokeWidth="8"
          strokeLinecap="round"
          stroke="currentColor"
          fill="transparent"
          r="56"
          cx="64"
          cy="64"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
        />
        <text
          x="64"
          y="69"
          textAnchor="middle"
          className="fill-current text-xl text-blue-500"
        >
          {`${progress.toFixed(1)}%`}
        </text>
      </svg>
      <span className="mt-2 text-center font-semibold">{label}</span>
    </div>
  )
}

export default ProgressCircle
