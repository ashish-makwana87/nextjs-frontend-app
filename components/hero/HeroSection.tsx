import Navbar from './Navbar'
import Ribbon from './Ribbon'
import Octopus from './Octopus'


function HeroSection() {
 

  return (
    <section className='border h-screen'>
     <Navbar />
     <Octopus />
     <Ribbon />
    </section>
  )
}

export default HeroSection