import  { useState } from 'react';
import { motion } from 'framer-motion';
import Mybook from '../Pages/MyBook';
import Navbar from '../Shared/Navbar';
import Footer from '../Shared/Footer';

const parallaxVariants = {
  initial: { scale: 1 },
  animate: { scale: 1.05 },
};

const transition = {
  type: "spring",
  stiffness: 200,
  damping: 10,
};

function ParallaxImage() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    setMousePosition({ x: clientX, y: clientY });
  };

  const parallaxEffect = {
    x: mousePosition.x / 30,
    y: mousePosition.y / 30,
  };

  return (
    <>
    <Navbar />
    <div className="w-full h-auto bg-amber-100  items-center justify-center overflow-hidden " onMouseMove={handleMouseMove}>
      <div className="flex md:flex-row flex-col items-center justify-between mt-24 mb-20">
        <div className="w-3/4 pl-8 text-left animate-fadeIn">
          <h1 className="md:text-7xl text-4xl text-black font-bold font-mono mb-4">Discover Sip & Play</h1>
          <p className="md:text-3xl text-xl font-mono mb-8">
            Dive into a world of flavor with our immersive 3D Menu experience
          </p>
        </div>
        <div className="w-full flex justify-center items-center rounded-e-full z-1 shadow-lg bg-amber-200 animate-slideIn">
          <motion.img
            src="./mega-creator.png"
            alt="3D Coffee Shop"
            className="cursor-pointer "
            style={parallaxEffect}
            variants={parallaxVariants}
            initial="initial"
            animate="animate"
            whileHover={{ scale: 1.3 }}
            transition={transition}
          />
        </div> 
      </div>
      <div className='w-full md:flex md:items-center md:justify-center '>
        <Mybook />
      </div>
    </div>
    
    <Footer/>
    </>
  );
}

export default ParallaxImage;
