import React from 'react'
import Button from './Button'
import Image from 'next/image'

const GetApp = () => {
  return (
    <section className="flex items-center justify-center w-full flex-col pb-[100px] px-6 pt-16">
      <div className="w-full max-w-6xl">
        {/* Title section with proper spacing */}
        <div className="mb-12 lg:mb-16">
          <h2 className="bold-40 lg:bold-64 text-green-50 mb-4">Get for free now!</h2>
          <p className="regular-18 lg:regular-20 text-gray-30 max-w-2xl leading-relaxed">
            Download our app and start your adventure today. Available on both iOS and Android platforms.
          </p>
        </div>

        {/* Content section */}
        <div className="bg-gradient-to-r from-green-50 via-green-600 to-green-700 rounded-3xl lg:rounded-5xl p-8 lg:p-16 shadow-2xl overflow-hidden relative">
          {/* Decorative background elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-green-400 rounded-full opacity-10 -mr-40 -mt-40"></div>
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-white rounded-full opacity-10 -ml-32 -mb-32"></div>
          
          <div className="relative z-10 grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left side - Buttons */}
            <div className="flex flex-col gap-6">
              <div>
                <p className="regular-16 lg:regular-18 text-white font-semibold mb-6">Available on:</p>
              </div>
              
              <div className="flex flex-col gap-3 w-full">
                <Button
                  type="button"
                  title="App Store"
                  icon="/apple.svg"
                  variant="btn_white"
                  full
                />
                <Button
                  type="button"
                  title="Play Store"
                  icon="/android.svg"
                  variant="btn_dark_green_outline"
                  full
                />
              </div>
            </div>

            {/* Right side - Phone image */}
            <div className="flex items-center justify-center lg:justify-end">
              <Image 
                src="/phones.png" 
                alt="Mobile phones" 
                width={380} 
                height={600} 
                className="drop-shadow-2xl max-h-[500px] w-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default GetApp