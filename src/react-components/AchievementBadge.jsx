// src/components/AchievementBadge.jsx

function AchievementBadge({ title, icon, count, unit }) {
  return (
    <div className="flex flex-col items-center rounded bg-white p-6 shadow">
      <div className="mb-2 text-4xl">{icon}</div>
      <h4 className="mb-1 font-semibold">{title}</h4>
      <p className="text-sm text-gray-600">{`已完成 ${count} ${unit}`}</p>
    </div>
  )
}

export default AchievementBadge
