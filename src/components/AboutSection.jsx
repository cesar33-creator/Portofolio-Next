'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const TAB_DATA = [
{
    title: 'Skills',
    id: 'skills',
    content: (
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3">
            {['HTML5', 'CSS3', 'JavaScript', 'React.js', 'PHP', 'Tailwind', 'Figma', 'Next.js', 'GitHub'].map((skill) => (
            <div key={skill} className="bg-[#181818] border border-white/5 rounded-xl px-2 py-2 sm:px-3 text-[12px] sm:text-sm text-slate-300 flex items-center gap-2 hover:border-purple-500/50 transition-colors">
                <div className="h-1.5 w-1.5 bg-purple-500 rounded-full shrink-0 shadow-[0_0_8px_rgba(168,85,247,0.8)]"></div>
                <span className="truncate">{skill}</span>
            </div>
        ))}
        </div>
    ),
},
{
    title: 'Certifications',
    id: 'certifications',
    content: (
        <div className="space-y-3">
            {[
            { title: 'Samsung Innovation Campus', org: 'Skilvul' },
            { title: 'Grand Finalis C4 Website Statis', org: 'AWS Sagasitas' },
            { title: 'Programming Logic 101', org: 'Dicoding' },
            { title: 'Data 101', org: 'Dicoding' },
            ].map((cert, index) => (
            <div key={index} className="p-3 rounded-xl bg-[#181818] border border-white/5 hover:border-purple-500/30 transition-all">
                <h4 className="text-purple-400 font-medium text-xs sm:text-sm">{cert.title}</h4>
                <p className="text-slate-500 text-[10px] sm:text-xs">{cert.org}</p>
            </div>
            ))}
        </div>
    ),
},
];

const AboutSection = () => {
const [tab, setTab] = useState('skills');

return (
    <section className="text-white scroll-mt-24 py-12 md:py-20 px-4" id="about">
        <div className="max-w-6xl mx-auto">
            {/* Grid Container: Stacked on mobile (default), Side-by-side on MD */}
            <div className="flex flex-col md:grid md:grid-cols-2 gap-10 lg:gap-16 items-start md:items-center">

            {/* Sisi Kiri: Profil & Status Cards */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="w-full"
            >
                <h2 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8 text-center md:text-left">About Me</h2>
                <div className="space-y-5 text-slate-300 text-base md:text-lg leading-relaxed text-justify md:text-left">
                <p>
                    I am <span className="text-white font-semibold underline decoration-purple-500 underline-offset-4">Cesar Rais Akhtar</span>,
                    an Informatics Engineering student with a deep interest in software development.
                    My academic journey has shaped my ability to think logically and solve complex problems through code.
                </p>
                <p>
                    Currently, I am focusing on <span className="text-white italic">Web Development</span>,
                    exploring modern frameworks to build responsive digital experiences.
                </p>

                {/* Status & Info Cards: Grid 2 Column even on Small Screens */}
                <div className="grid grid-cols-2 gap-3 sm:gap-4 pt-4">
                    <div className="p-3 sm:p-4 rounded-2xl bg-white/5 border border-white/10 shadow-sm">
                    <p className="text-[9px] sm:text-[10px] text-slate-500 uppercase tracking-widest mb-1 font-bold">Current Study</p>
                    <p className="text-[12px] sm:text-sm font-semibold text-white">Informatics Engineering</p>
                    </div>
                    <div className="p-3 sm:p-4 rounded-2xl bg-white/5 border border-white/10 shadow-sm">
                    <p className="text-[9px] sm:text-[10px] text-slate-500 uppercase tracking-widest mb-1 font-bold">Focus Area</p>
                    <p className="text-[12px] sm:text-sm font-semibold text-white">Web Development</p>
                    </div>
                </div>
                </div>
            </motion.div>

          {/* Sisi Kanan: Tab Card */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="w-full bg-[#121212] border border-white/10 rounded-[1.5rem] md:rounded-[2rem] p-5 sm:p-8 shadow-xl mt-8 md:mt-0"
            >
                <div className="flex space-x-6 sm:space-x-8 mb-6 border-b border-white/5 pb-4">
                {['skills', 'certifications'].map((id) => (
                    <button
                    key={id}
                    onClick={() => setTab(id)}
                    className={`relative text-xs sm:text-sm font-bold uppercase tracking-widest transition-colors ${
                        tab === id ? 'text-white' : 'text-slate-500 hover:text-slate-300'
                    }`}
                    >
                    {id}
                    {tab === id && (
                        <motion.div
                        layoutId="activeTabUnderline"
                        className="absolute -bottom-[18px] left-0 right-0 h-0.5 bg-purple-500"
                        />
                    )}
                    </button>
                ))}
                </div>

                {/* Min-height disesuaikan agar tidak terlalu lompat saat pindah tab */}
                <div className="min-h-[220px] sm:min-h-[260px]">
                <motion.div
                    key={tab}
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                >
                    {TAB_DATA.find((t) => t.id === tab).content}
                </motion.div>
                </div>
            </motion.div>

            </div>
        </div>
    </section>
);
};

export default AboutSection;