// components/StatsStrip.tsx
'use client'

interface Stat {
  value: string
  description: string
}

const stats: Stat[] = [
  {
    value: '98%',
    description: 'of members feel stronger and more energized in the first 2 months.',
  },
  {
    value: '100%',
    description: 'Trained professional coaches for guidance & support.',
  },
  {
    value: '150+',
    description: 'Exercices — HIIT, Strength, Yoga, Mobility, and more.',
  },
]

export default function StatsStrip() {
  return (
    <section className="w-full bg-white py-12 md:py-16 lg:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-200">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="pt-8 first:pt-0 md:pt-0 md:px-8 lg:px-12 first:md:pl-0 last:md:pr-0"
            >
              <div className="space-y-2 md:space-y-3">
                <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900">
                  {stat.value}
                </div>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                  {stat.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}