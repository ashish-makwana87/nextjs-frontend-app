import React from 'react'
import FeaturesInfo from './FeaturesInfo'
import FeaturesGrid from './FeaturesGrid'

function Features() {
  return (
    <section className='py-[7.5rem] px-2 md:px-10 md:py-[10rem] z-30 bg-black relative'>
     <div className='alignment grid gap-y-10'>
     <FeaturesInfo />
     <FeaturesGrid />
     </div>
    </section>
  )
}

export default Features