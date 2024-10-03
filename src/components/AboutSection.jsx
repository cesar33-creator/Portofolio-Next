'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import TabButton from './TabButton';

const TAB_DATA = [
{
    title: 'Skills',
    id: 'skills',
    content: (
    <ul className="list-disc pl-2">
        <li>HTML</li>
        <li>CSS</li>
        <li>PHP</li>
        <li>Javascript</li>
        <li>Figma</li>
        <li>React</li>
    </ul>
    ),
},
{
    title: 'Certifications',
    id: 'certifications',
    content: (
    <ul className="list-disc pl-2">
        <li>Program Samsung Innovation Campus Batch 5 – Skilvul</li>
        <li>Grand Finalis Lomba C4 Website Statis – AWS Sagasitas</li>
        <li>Pengenalan ke Logika Pemrograman (Programming Logic 101) - Dicoding</li>
        <li>Pengenalan Data pada Pemrograman (Data 101) – Dicoding</li>
        <li>Memulai Dasar Pemrograman untuk Menjadi Pengembang Software – Dicoding</li>
    </ul>
    ),
},
];

const AboutSection = () => {
const [tab, setTab] = useState('skills');

const handleTabChange = (id) => {
    setTab(id);
};

return (
    <section className="text-white" id="about">
    <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/image/about-img.jpg" alt='about' width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
        <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
        <p className="text-base lg:text-lg">
            My name is Cesar Rais Akhtar, I am a student from a vocational high school at SMKN 13 Bandung. My current major is Software Engineering, currently I enjoy learning more about Web development. I want to have a career in the IT
            field, one of which is Web Development. Apart from the website, I also created a Web UI display, and other things I want to do.
        </p>
        <div className="flex flex-row justify-start mt-8">
            <TabButton selectTab={() => handleTabChange('skills')} active={tab === 'skills'}>
            Skills
            </TabButton>
            <TabButton selectTab={() => handleTabChange('certifications')} active={tab === 'certifications'}>
            Certifications
            </TabButton>
        </div>
        <div className="mt-8">{TAB_DATA.find((t) => t.id === tab).content}</div>
        </div>
    </div>
    </section>
);
};

export default AboutSection;
