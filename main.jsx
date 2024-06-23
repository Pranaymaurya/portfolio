import { TypewriterClass } from "typewriter-effect"
import Typewriter from 'typewriter-effect';
import { motion } from "framer-motion";
import Project from "../pro/project";
import Expi from "../experince/experi";
import './main1.css'
import Contact from "../contact/contact";
export default function Main(){
    return(
        <>

      <motion.div 
    initial={{scaleY:0}}
    animate={{scaleY:1,}}
    transition={{scaleY:0, duration:0.1 ,}}
    >
      <div className="flex h-screen">
        <div className="bg-blue-400 flex-1 h-full justify-center text-center items-center content-center">
        <motion.h1
        initial={{scale:0, }}
        animate={{scale:1.2, }}
        transition={{scale:1.2 ,transition: {duration: 1}}}
         className="text-6xl pt-8 font-serif text-white">
        Hello, welcome to&nbsp;
        <Typewriter
          options={{
            strings: ['Portfolio !', 'Hardwork !', 'Struggle !'],
            autoStart: true,
            loop: true,
            delay: 100,
          }}
        />
      </motion.h1>
          {/* Content for the first div */}
        </div>
        <div className="bg-blue-500 flex-1 h-full flex justify-center items-center">
  {/* Content for the second div */}
  <motion.div
  whileHover={{scale:1.2}}
  transition={{duration:0.5}}
  className="section-banner flex flex-wrap justify-center items-center">
    <div id="star-1" className="star">
      <div className="curved-corner-star">
        <div className="curved-corner" id="curved-corner-bottomright"></div>
        <div className="curved-corner" id="curved-corner-bottomleft"></div>
      </div>
      <div className="curved-corner-star">
        <div className="curved-corner" id="curved-corner-topright"></div>
        <div className="curved-corner" id="curved-corner-topleft"></div>
      </div>
    </div>
    
    {/* Repeat for star-2 to star-7 */}

  </motion.div>
</div>

      </div>
      </motion.div>
      
    </>
    )
}