import Image from 'next/image'
import React from 'react'

const Guide = () => {
  return (
    <section className="flex items-center justify-center flex-col">
      <div className="padding-container max-container w-full pb-24">
        <Image src="/camp.svg" alt="camp" width={50} height={50} className="drop-shadow-md" />
        <p className="uppercase regular-18 -mt-1 mb-3 text-green-50 font-semibold">
          We are here for you
        </p>
        <div className="flex flex-wrap justify-between gap-5 lg:gap-10">
          <h2 className="bold-40 lg:bold-64 xl:max-w-[390px] text-gray-90">Guide You to Easy Path</h2>
          <p className="regular-16 text-gray-30 xl:max-w-[520px] leading-relaxed">Only with the hilink application you will no longer get lost and get lost again, because we already support offline maps when there is no internet connection in the field. Invite your friends, relatives and friends to have fun in the wilderness through the valley and reach the top of the mountain</p>
        </div>
      </div>

      <div className="flex items-center justify-center max-container relative w-full">
        <Image
          src="/boat.png"
          alt="boat"
          width={1440}
          height={580}
          className="w-full object-cover object-center 2xl:rounded-5xl shadow-xl"
        />

        <div className="absolute flex bg-white py-8 pl-5 pr-7 gap-3 rounded-3xl border border-gray-20 shadow-2xl md:left-[5%] lg:top-20 hover:shadow-3xl transition-shadow duration-300">
          <Image
            src="/meter.svg"
            alt="meter"
            width={16}
            height={158}
            className="h-full w-auto drop-shadow-sm"
          />
          <div className="flex items-center justify-between flex-col">
            <div className='flex w-full flex-col'>
              <div className="flex items-center justify-between w-full">
                <p className="regular-16 text-gray-20">Destination</p>
                <p className="bold-16 text-green-50 bg-green-50/10 px-3 py-1 rounded-full">48 min</p>
              </div>
              <p className="bold-20 mt-2 text-gray-90">Aguas Calientes</p>
            </div>

            <div className='flex w-full flex-col'>
              <p className="regular-16 text-gray-20">Start track</p>
              <h4 className="bold-20 mt-2 whitespace-nowrap text-gray-90">Wonorejo Pasuruan</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Guide