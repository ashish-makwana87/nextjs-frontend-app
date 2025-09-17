import Image from 'next/image'
import React from 'react'
import heroImage from '@/public/octopus.png'

function Octopus() {
  return (
    <section className='relative flex items-center justify-center h-[70vh] w-[70vw] mx-auto'>
    <div className='relative h-full w-full'>
     <Image
          src={heroImage}
          alt="octopus-writing-notes"
          fill
          className="object-contain"
          priority
        />
  <h2 className="absolute top-4 left-4 md:top-10 md:left-[4rem]">Note taking</h2>
  <h2 className="absolute top-16 left-4 md:top-auto md:left-auto md:bottom-16 md:right-[5rem] text-secondary">Redefined</h2>
    </div>
    </section>
  )
}

export default Octopus