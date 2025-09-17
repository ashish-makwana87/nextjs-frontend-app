import Image from 'next/image'
import logomark from "@/public/Logomark.svg"
import wordmark from "@/public/Wordmark.svg"

function Logo() {
  return (
    <div className='flex h-6 w-24 md:w-44 md:h-10 gap-x-2'>
      <Image src={logomark} alt='logo' />
      <Image src={wordmark} alt='logo' />
      </div>
  )
}

export default Logo