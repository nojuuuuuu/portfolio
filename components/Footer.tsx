import React from 'react';
import { FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className='bg-white dark:bg-secondary text-gray-600 dark:text-gray-400 py-8'>
      <div className='max-w-[1240px] mx-auto px-4'>
        <div className='flex flex-col md:flex-row justify-between items-center'>
          <div className='mb-4 md:mb-0'>
            <h3 className='text-xl font-bold text-primary'>Portfolio</h3>
            <p className='mt-2'>© {new Date().getFullYear()} nojuuu. All rights reserved.</p>
          </div>
          <div className='flex space-x-4'>
            <a
              href='https://github.com/'
              target='_blank'
              rel='noreferrer'
              className='text-gray-600 dark:text-gray-400 hover:text-primary transition-colors duration-300'
            >
              <FaGithub size={24} />
            </a>
            <a
              href='https://linkedin.com/'
              target='_blank'
              rel='noreferrer'
              className='text-gray-600 dark:text-gray-400 hover:text-primary transition-colors duration-300'
            >
              <FaLinkedinIn size={24} />
            </a>
            <a
              href='https://twitter.com/'
              target='_blank'
              rel='noreferrer'
              className='text-gray-600 dark:text-gray-400 hover:text-primary transition-colors duration-300'
            >
              <FaTwitter size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 