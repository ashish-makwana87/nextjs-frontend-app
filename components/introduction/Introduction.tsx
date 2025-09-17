import React from 'react'
import { IoDocumentOutline } from "react-icons/io5";

function Introduction() {

  return (
    <section className='h-[50rem] w-full bg-white/10 flex items-center justify-center sticky top-0 z-20'>
      <div className='max-w-3xl px-4 flex flex-col items-center gap-y-8 md:gap-y-18'>
       <h3 className='text-center'>An extraordinary note for <br /> <span className='text-secondary'>makers, creators..</span></h3>
       <IoDocumentOutline className='w-20 h-20 text-secondary' />
       <p className='text-center max-w-xl'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus, aliquid eveniet ullam cupiditate <span className='text-secondary'>eligendi repellat.</span></p>
      </div>
    </section>
  )
}

export default Introduction