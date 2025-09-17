import Logo from "./Logo"
import NavLinks from "./NavLinks"
import TryNowButton from "./TryNowButton"


function Navbar({ sticky = true }: { sticky?: boolean }) {

  return (
    <nav className={sticky ? 'mt-0 md:mt-0 sticky top-0 z-50 bg-black/20 backdrop-blur' : 'mt-0 md:mt-10'}>
    <section className='alignment p-4 md:py-6 md:px-10 h-16 md:h-28 grid grid-cols-2 md:grid-cols-[1fr_auto_1fr] justify-between items-center'>
     <Logo />
     <NavLinks />
     <TryNowButton />
    </section> 
    </nav>
  )
}

export default Navbar