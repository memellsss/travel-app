import { FEATURES } from '@/constants'
import Image from 'next/image'
import React from 'react'

const Features = () => {
  return (
    <section className="flex flex-col items-center justify-center overflow-hidden py-24 px-6">
      <div className="max-container w-full">
        <div className='relative mb-16'>
          <Image
            src="/camp.svg"
            alt="camp"
            width={50}
            height={50}
            className="w-10 lg:w-[50px] drop-shadow-md mb-4"
          />
          <h2 className="bold-40 lg:bold-64 text-green-50">Our Features</h2>
        </div>
        
        <ul className="grid gap-8 md:grid-cols-2 lg:gap-12 w-full">
          {FEATURES.map((feature, index) => (
            <FeatureItem
              key={feature.title}
              title={feature.title}
              icon={feature.icon}
              description={feature.description}
              index={index}
            />
          ))}
        </ul>
      </div>
    </section>
  )
}

type FeatureItem = {
  title: string;
  icon: string;
  description: string;
  index?: number;
}

const FeatureItem = ({ title, icon, description, index = 0 }: FeatureItem) => {
  // Alternate colors for visual interest
  const bgColors = [
    'from-blue-50 to-blue-500',
    'from-purple-50 to-purple-500',
    'from-orange-50 to-orange-500',
    'from-pink-50 to-pink-500'
  ]
  
  const bgColor = bgColors[index % 4]
  const borderColors = [
    'border-blue-200 bg-blue-50',
    'border-purple-200 bg-purple-50',
    'border-orange-200 bg-orange-50',
    'border-pink-200 bg-pink-50'
  ]
  const borderColor = borderColors[index % 4]

  return (
    <li className="flex w-full flex-col items-start transition-all duration-300 hover:translate-y-[-8px]">
      <div className={`rounded-full p-5 lg:p-8 bg-gradient-to-br ${bgColor} shadow-lg hover:shadow-xl transition-all duration-300 flex-shrink-0`}>
        <Image src={icon} alt="feature icon" width={36} height={36} />
      </div>
      
      <div className={`w-full mt-8 p-6 lg:p-8 rounded-2xl border-2 ${borderColor} transition-all duration-300 hover:shadow-lg`}>
        <h3 className="bold-20 lg:bold-24 text-green-50 mb-4 capitalize">
          {title}
        </h3>
        <p className="regular-16 lg:regular-18 text-gray-50 leading-relaxed">
          {description}
        </p>
      </div>
    </li>
  )
}

export default Features