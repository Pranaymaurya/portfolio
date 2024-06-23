import "./experi.css";
import { SiHtml5 } from "react-icons/si";
import { FaCss3Alt } from "react-icons/fa6";
import { TbBrandJavascript } from "react-icons/tb";
import { FaJava } from "react-icons/fa6";
import { IoLogoReact } from "react-icons/io5";
import { FaPython } from "react-icons/fa";
import {motion} from 'framer-motion'
import Contact from "../contact/contact";
export default function Expi() {
  return (
    <>
      <motion.div 
       initial={{ scaleY: 0 }}
       animate={{ scaleY: 1 }}
       transition={{ duration: 0.1 }}
      className="justify-center text-center ">
        <h1 className="mt-3 text-xl font-bold hover:text-blue-500 cursor-pointer">
          LANGUAGES KNOWN
        </h1>
        <div className="flex flex-wrap gap-4  justify-evenly mt-10">
          <div className="flex flex-col items-center">
            <button className="relative flex items-center justify-center w-24 h-24 rounded-full bg-gray-800 text-gray-300 font-semibold text-xs shadow-inner">
              <SiHtml5 size={50} color="light-orange" />
            </button>
            <p className="mt-2 text-black font-bold">HTML</p>
          </div>
          <div className="flex flex-col items-center">
            <button className="relative flex items-center justify-center w-24 h-24 rounded-full bg-gray-800 text-gray-300 font-semibold text-xs shadow-inner">
              <FaCss3Alt size={50} color="light-blue" />
            </button>
            <p className="mt-2 text-black font-bold">CSS</p>
          </div>
          <div className="flex flex-col items-center">
            <button className="relative flex items-center justify-center w-24 h-24 rounded-full bg-gray-800 text-gray-300 font-semibold text-xs shadow-inner">
              <TbBrandJavascript size={50} color="light-blue" />
            </button>
            <p className="mt-2 text-black font-bold">JS</p>
          </div>
          <div className="flex flex-col items-center">
            <button className="relative flex items-center justify-center w-24 h-24 rounded-full bg-gray-800 text-gray-300 font-semibold text-xs shadow-inner">
              <FaJava size={50} color="light-blue" />
            </button>
            <p className="mt-2 text-black font-bold">JAVA</p>
          </div>
          <div className="flex flex-col items-center">
            <button className="relative flex items-center justify-center w-24 h-24 rounded-full bg-gray-800 text-gray-300 font-semibold text-xs shadow-inner">
              <IoLogoReact size={50} color="light-blue" />
            </button>
            <p className="mt-2 text-black font-bold">REACT</p>
          </div>
          <div className="flex flex-col items-center">
            <button className="relative flex items-center justify-center w-24 h-24 rounded-full bg-gray-800 text-gray-300 font-semibold text-xs shadow-inner">
              <FaPython size={50} color="light-blue" />
            </button>
            <p className="mt-2 text-black font-bold">PYTHON</p>
          </div>
          {/* <button className="relative flex items-center justify-center w-24 h-24 rounded-full bg-gray-800 text-gray-300 font-semibold text-xs shadow-inner">
                    <img src="path-to-image7.jpg" alt="Image 7" className="rounded-full w-full h-full object-cover" />
                </button> */}
        </div>
        <aside class="bg-blue-500 text-white p-6 rounded-lg w-full font-mono mt-10">
  <div class="flex justify-between items-center">
    <div class="flex space-x-2 text-red-500">
      <div class="w-3 h-3 rounded-full bg-red-500"></div>
      <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
      <div class="w-3 h-3 rounded-full bg-green-500"></div>
    </div>
    <p class="text-sm">bash</p>
  </div>
  <div class="mt-4">
    <p class="text-green-400"> $ Experince</p>
    <p class="text-white">+ next@10.2.3</p>
    <p class="text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis placeat accusantium quo obcaecati pariatur repellat laborum deleniti consequatur. Temporibus ex itaque, consectetur nostrum laborum ad est recusandae repellendus ipsa? Quidem?
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi similique sed provident quibusdam tempore, ad sit quis quia mollitia dolor repellat ratione aspernatur obcaecati, ipsam reiciendis dolores aut laudantium recusandae?
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga doloremque fugit perspiciatis amet libero deleniti nisi? Quaerat distinctio suscipit odio magni natus ab inventore? Ducimus soluta optio cupiditate magnam natus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum debitis quasi aspernatur consequuntur repellendus nobis reprehenderit quas suscipit dolores labore, quae fugit, temporibus vero ipsam veritatis! Optio perspiciatis eveniet quod! Lorem ipsum dolor sit amet consectetur adipisicing elit. Non numquam amet debitis expedita accusantium dolore quas. Magnam nostrum exercitationem cumque itaque praesentium harum reprehenderit enim, hic atque ad sequi rerum.
    </p>
    <p class="text-green-400">$</p>
  </div>
</aside>

      </motion.div>
    </>
  );
}
