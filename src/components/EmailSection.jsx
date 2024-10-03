'use client';
import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import GithubIcon from '../../public/github-icon.svg';
import InstagramIcon from '../../public/instagram.svg';
import GmailIcon from '../../public/gmail.svg';
import Link from 'next/link';
import Image from 'next/image';

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(''); // Reset error state
  
    const form = e.target;
  
    emailjs
      .sendForm(
        'service_9xdm1bk', // Ganti dengan Service ID dari EmailJS
        'template_y6oms58', // Ganti dengan Template ID dari EmailJS
        form, // Gunakan form langsung
        'DZ1GDDBT-HpgGbwUQ' // Ganti dengan User ID dari EmailJS
      )
      .then(
        (result) => {
          console.log('Message sent.', result.text);
          setEmailSubmitted(true);
          form.reset();
  
          // Sembunyikan pesan sukses setelah beberapa waktu (contoh: 1,5 detik)
          setTimeout(() => {
            setEmailSubmitted(false);
          }, 1500);
        },
        (error) => {
          setError('Failed to send message. Please try again later.');
          console.error('EmailJS Error:', error.text); // Log lebih rinci
        }
      );
  };  

  return (
    <section id="contact" className="grid md:grid-cols-2 my-12 py-24 gap-4 relative">
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2">Let&apos;s Connect</h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">I&apos;m currently looking for new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!</p>
        <div className="socials flex gap-3">
          <Link href="https://github.com/cesar33-creator" target="_blank" rel="noopener noreferrer">
            <Image src={GithubIcon} alt="Github Icon" width={30} height={30} />
          </Link>
          <Link href="mailto:cesarrais33@gmail.com">
            <Image src={GmailIcon} alt="Gmail Icon" width={30} height={30} />
          </Link>
          <Link href="https://www.instagram.com/cesarrraa/" target="_blank" rel="noopener noreferrer">
            <Image src={InstagramIcon} alt="Instagram Icon" width={70} height={70} />
          </Link>
        </div>
      </div>
      <div>
        {emailSubmitted ? (
          <p className="text-secondary-500 text-sm mt-2">Email sent successfully!</p>
        ) : (
          <form className="flex flex-col" onSubmit={handleSubmit}>
            <div className="mb-6">
              <label htmlFor="user_name" className="text-white block mb-2 text-sm font-medium">
                Your name
              </label>
              <input name="user_name" type="text" id="user_name" required className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5" placeholder="Your Name" />
            </div>
            <div className="mb-6">
              <label htmlFor="user_email" className="text-white block mb-2 text-sm font-medium">
                Your email
              </label>
              <input name="user_email" type="email" id="user_email" required className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5" placeholder="youremail@example.com" />
            </div>
            <div className="mb-6">
              <label htmlFor="subject" className="text-white block text-sm mb-2 font-medium">
                Subject
              </label>
              <input name="subject" type="text" id="subject" required className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5" placeholder="Just saying hi" />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="text-white block text-sm mb-2 font-medium">
                Message
              </label>
              <textarea name="message" id="message" required className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5" placeholder="Let's talk about..." />
            </div>
            <button type="submit" className="bg-primary-500 hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full">
              Send Message
            </button>
            {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
          </form>
        )}
      </div>
    </section>
  );
};

export default EmailSection;
