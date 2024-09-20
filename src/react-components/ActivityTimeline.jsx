// src/components/ActivityTimeline.jsx

function ActivityTimeline({ activities }) {
  return (
    <div className="space-y-6">
      {activities.map((activity, index) => (
        <div key={index} className="flex items-start">
          <div className="flex-shrink-0">
            <div className="h-8 w-8 flex items-center justify-center rounded-full bg-blue-500 text-white">
              {index + 1}
            </div>
          </div>
          <div className="ml-4">
            <h3 className="text-lg font-semibold">{activity.title}</h3>
            <p className="mt-1 text-gray-700">{activity.description}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ActivityTimeline
