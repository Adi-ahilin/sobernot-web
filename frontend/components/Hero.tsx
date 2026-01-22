'use client';

import { motion, Variants } from 'framer-motion'; // 1. Importamos el tipo "Variants"

export default function Hero() {
  
  // 2. Le decimos a TypeScript que esto es un objeto de Variantes válido
  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: "easeOut" } 
    }
  };

  return (
    <section className="h-screen flex flex-col items-center justify-center bg-black text-white relative overflow-hidden">
      
      {/* Fondo con textura sutil */}
      <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>

      {/* Contenido Principal */}
      <div className="z-10 text-center px-4">
        
        {/* TÍTULO DE LA BANDA */}
        <motion.h1 
          className="text-6xl md:text-9xl font-black tracking-tighter uppercase mb-4"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
        >
          Sobernot
        </motion.h1>

        {/* SUBTÍTULO */}
        <motion.p 
          className="text-xl md:text-2xl text-gray-400 tracking-[0.5em] uppercase mb-12"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ delay: 0.3 }}
        >
          Extreme Groove Metal
        </motion.p>

        {/* BOTÓN "ENTER SITE" */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ delay: 0.6 }}
        >
          <button className="border border-white px-8 py-3 text-sm md:text-base font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300">
            Enter Site
          </button>
        </motion.div>
      </div>
    </section>
  );
}