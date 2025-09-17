import { MdOutlineShoppingCart } from "react-icons/md";
import { IoMenu } from "react-icons/io5";

function TryNowButton() {

  return (
  <div className="flex justify-end gap-x-2">
  <button className="relative h-8 md:w-40 md:h-14 rounded-[50rem] border-2 border-white flex items-center gap-x-1 md:gap-x-3 bg-white pr-2 overflow-hidden group cursor-pointer">
    {/* Expanding background */}
    <span className="absolute left-0 top-0 h-full w-8 md:w-14 bg-black rounded-[50rem] transition-all duration-500 ease-out group-hover:w-full"></span>

    {/* /* Cart icon circle  */}
    <span className="relative z-10 w-8 md:w-14 h-full p-2 md:p-3.5 bg-black rounded-full flex items-center justify-center">
      <MdOutlineShoppingCart className="text-secondary w-5 h-5" />
    </span>

    {/* Text */}
    <span className="relative z-10 text-black text-sm transition-colors duration-500 group-hover:text-white">
      Try Now
    </span>
  </button>
  <button className="block md:hidden cursor-pointer ">
   <IoMenu className="w-6 h-6" />
  </button>
</div>
  )
}

export default TryNowButton;