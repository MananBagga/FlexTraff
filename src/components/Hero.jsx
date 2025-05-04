import React from 'react'
import { styles } from '../style'
import { HomeVideo } from './canvas/index'

const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
      <div className={`${styles.paddingX} pt-24 md:pt-0 md:absolute inset-0 md:top-[120px] max-w-7xl mx-auto flex flex-col md:flex-row items-start gap-10`}>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915eff]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>
        <div className="flex-1 flex flex-col justify-center">
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, We are <span className="text-[#915eff]">Flex Traff</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            Traffic Flow,
            Optimized to Go!
          </p>
          <HomeVideo />
        </div>
      </div>
    </section>
  )
}

export default Hero
