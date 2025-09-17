import * as motion from "motion/react-client"
import { FaArrowRight } from "react-icons/fa";

const features = [
  { title: "Feature One" },
  { title: "Feature Two" },
  { title: "Feature Three" },
  { title: "Feature Four" },
  { title: "Feature Five" },
  { title: "Feature Six" },
];

function FeaturesGrid() {

  return (
   <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {features.map((feature, index) =>{

      return <motion.div
        key={index}
        initial="rest"
        whileHover="hover"
        animate="rest"
        className="w-96 h-80 bg-white/10 rounded-2xl relative border border-transparent overflow-hidden"
      >
        {/* Title */}
        <h4 className="absolute bottom-8 left-8 text-white/80">
          Feature <br /> Name
        </h4>

        {/* Arrow */}
        <motion.div
          variants={{
            rest: {
              opacity: 0,
              top: "50%",
              left: "50%",
              x: "-50%",
              y: "-50%", 
              scale: 0.6,
              rotate: -45
            },
            hover: {
              opacity: 1,
              x: "calc(50% + 100px)", 
              y: "-100px",
              scale: 1,
              transition: {
                type: "spring",
                stiffness: 200,
                damping: 20,
              },
              rotate: -45
            },
          }}
          className="absolute top-1/2 left-1/2 text-secondary"
        >
          <FaArrowRight size={32} />
        </motion.div>

        {/* Border Animation */}
        <motion.div
          variants={{
            rest: { borderColor: "transparent", borderWidth: "1px" },
            hover: {
              borderColor: "#01bc79",
              borderWidth: "2px",
              transition: { duration: 0.3 },
            },
          }}
          className="absolute inset-0 rounded-2xl pointer-events-none"
        />
      </motion.div>

      })}
    </section>
  )
}

export default FeaturesGrid