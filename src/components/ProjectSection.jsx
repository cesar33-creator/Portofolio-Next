'use client';
import React, { useState, useRef } from 'react';
import ProjectCard from './ProjectCard';
import ProjectTag from './ProjectTag';
import { motion, useInView } from 'framer-motion';
import foto1 from '../../public/image/projects/foto1.png';
import foto2 from '../../public/image/projects/foto2.png';
import foto3 from '../../public/image/projects/foto3.png';

const projectsData = [
{
    id: 1,
    title: 'Bootstrap Portfolio Website',
    description: 'Website tersebut dibuat dengan HTML,CSS,Js, dan Bootstrap',
    image: foto1,
    tag: ['All', 'Web'],
    gitUrl: 'https://github.com/cesar33-creator/cesar33-creator',
    previewUrl: 'https://portofolio-cesar-v1.vercel.app/',
},
{
    id: 2,
    title: 'E-commerce Website',
    description: 'Website tersebut dibuat dengan HTML,CSS,Js. Website Tersebut digunakan untuk Menjual Produk PIPPO',
    image: foto2,
    tag: ['All', 'Web'],
    gitUrl: 'https://github.com/cesar33-creator/PIPPO',
    previewUrl: 'https://pippo-semprong-seroja.vercel.app/',
},
{
    id: 3,
    title: 'Website Desa Pasanggrahan',
    description: 'Website tersebut dibuat untuk mempermudah sistem informasi di Desa Pasanggrahan.',
    image: foto3,
    tag: ['All', 'Web'],
    gitUrl: 'https://github.com/cesar33-creator/Web-Desa-Pasanggrahan',
    previewUrl: 'https://web-desa-pasanggrahan.vercel.app/',
},
];

const ProjectsSection = () => {
const [tag, setTag] = useState('All');
const ref = useRef(null);
const isInView = useInView(ref, { once: true });

const handleTagChange = (newTag) => {
    setTag(newTag);
};

const filteredProjects = projectsData.filter((project) => project.tag.includes(tag));

const cardVariants = {
    initial: { y: 50, opacity: 0},
    animate: { y: 0, opacity: 1 },
};

return (
    <section id="projects" className="scroll-mt-24">
        <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">My Projects</h2>
        <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
            <ProjectTag onClick={handleTagChange} name="All" isSelected={tag === 'All'} />
            <ProjectTag onClick={handleTagChange} name="Web" isSelected={tag === 'Web'} />
            <ProjectTag onClick={handleTagChange} name="Mobile" isSelected={tag === 'Mobile'} />
        </div>
        <ul ref={ref} className="grid md:grid-cols-2 gap-6 md:gap-12">
            {filteredProjects.map((project, index) => (
            <motion.li key={index} variants={cardVariants} initial="initial" animate={isInView ? 'animate' : 'initial'} transition={{ duration: 0.3, delay: index * 0.4 }}>
                <ProjectCard key={project.id} title={project.title} description={project.description} imgUrl={project.image} gitUrl={project.gitUrl} previewUrl={project.previewUrl} />
            </motion.li>
            ))}
        </ul>
        </section>
    );
};

export default ProjectsSection;
