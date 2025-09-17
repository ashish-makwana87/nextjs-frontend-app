import * as motion from "motion/react-client"

const features = ["30-days money back guarantee", "Unlimited Access", "No hidden costs", "30-days money back guarantee", "Unlimited Access", "No hidden costs"];

function Ribbon() {
 
 // if (!visible) return null;
 
 const scrollItems = [...features, ...features];


  return (
    <section className="hidden bg-primary h-10 md:flex items-center overflow-hidden fixed top-0">
     <motion.div className="flex whitespace-nowrap gap-4"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ repeat: Infinity, duration: 15, ease: "linear", delay: 0.001, repeatDelay: 0.001 }}>
        {scrollItems.map((f, i) => (
          <span key={i} className="flex items-center gap-4">
            <span>{f}</span>
            <span>★</span>
          </span>
        ))}
     </motion.div>
    </section>
  )
}

export default Ribbon