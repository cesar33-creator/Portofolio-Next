'use client';
import React from 'react';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import Link from 'next/link';

const HeroSection = () => {
  return (
    /* pt-4 untuk mobile agar dekat navbar, lg:pt-10 untuk desktop agar proporsional */
    <section className="relative flex items-center justify-center pt-4 md:pt-10 pb-16 md:pb-24 px-4 overflow-x-hidden" id="home">
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[300px] h-[300px] bg-purple-600/10 blur-[100px] rounded-full -z-10"></div>
      <div className="max-w-7xl mx-auto w-full">
        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-8 lg:gap-8 items-center mt-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="w-full max-w-[260px] sm:max-w-[320px] lg:max-w-none lg:col-span-5 relative order-1 lg:order-2">

            <div className="relative z-10 bg-[#0a0a0a] p-3 rounded-[2rem] md:rounded-[3rem] border border-white/10 shadow-2xl">
              <div className="relative aspect-[4/5] rounded-[1.8rem] md:rounded-[2.5rem] overflow-hidden">
                {/* PERBAIKAN DI SINI: Menggunakan path string langsung dari folder public */}
                <Image
                  src="/image/formal.png"
                  alt="Cesar Rais Akhtar"
                  fill
                  className="object-cover object-top"
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            </div>
            <div className="absolute -inset-4 bg-purple-500/20 blur-3xl -z-10 opacity-50"></div>
          </motion.div>

          {/* SISI BAWAH (Mobile) / SISI KIRI (Desktop): Teks */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="col-span-12 lg:col-span-7 text-center lg:text-left order-2 lg:order-1"
          >
            <div className="flex items-center justify-center lg:justify-start gap-3 mb-4 md:mb-6">
              <span className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-purple-400 font-bold">
                Informatics Engineering Student
              </span>
            </div>

            <h1 className="text-white text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[1.1] lg:leading-[0.85] mb-6">
              CESAR RAIS<br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500">
                {" "}AKHTAR
              </span>
            </h1>

            <div className="inline-flex items-center gap-2 font-mono text-sm sm:text-xl md:text-2xl text-slate-300 mb-8 bg-white/5 px-4 py-2.5 rounded-xl border border-white/10 shadow-inner">
              <span className="text-purple-500 font-bold">{'>'}</span>
              <TypeAnimation
                sequence={[
                  'Informatics Student', 1500,
                  'Software Engineer', 1500,
                  'Web Developer', 1500,
                ]}
                wrapper="span"
                cursor={true}
                repeat={Infinity}
              />
            </div>

            <p className="text-slate-400 text-sm sm:text-lg md:text-xl max-w-xl mx-auto lg:mx-0 leading-relaxed mb-10 px-4 sm:px-0">
              Focused on <span className="text-white font-medium">Fullstack Development</span> and building
              high-quality software architectures. Passionate about logic and modern technologies.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start max-w-[260px] sm:max-w-none mx-auto lg:mx-0">
              <Link
                href="/#contact"
                className="px-6 py-3 bg-purple-600 text-white text-sm font-bold rounded-lg hover:bg-purple-700 transition-all shadow-md active:scale-95 text-center flex-1 sm:flex-none min-w-[140px]">
                Hire Me
              </Link>
              <Link
                href="/CV - Cesar Rais Akhtar1.pdf"
                className="px-6 py-3 border border-white/10 text-white text-sm font-bold rounded-lg hover:bg-white/5 transition-all active:scale-95 text-center flex-1 sm:flex-none min-w-[140px]"
                download="CV - Cesar Rais Akhtar.pdf">
                Download CV
              </Link>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;