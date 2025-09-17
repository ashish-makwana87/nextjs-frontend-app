import Logo from "./Logo"
import NavLinks from "./NavLinks"
import TryNowButton from "./TryNowButton"


function Navbar() {

  return (
    <nav className=''>
    <section className='alignment p-4 md:py-6 md:px-10 h-16 md:h-28 grid grid-cols-2 md:grid-cols-[1fr_auto_1fr] justify-between items-center border-2'>
     <Logo />
     <NavLinks />
     <TryNowButton />
    </section> 
    </nav>
  )
}

export default Navbar