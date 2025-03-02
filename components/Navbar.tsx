import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const router = useRouter();

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener('scroll', handleShadow);
    return () => {
      window.removeEventListener('scroll', handleShadow);
    };
  }, []);

  return (
    <header
      className={
        shadow
          ? 'fixed w-full h-20 shadow-xl z-[100] bg-white dark:bg-secondary transition-all ease-in-out duration-300'
          : 'fixed w-full h-20 z-[100] bg-white dark:bg-secondary transition-all ease-in-out duration-300'
      }
    >
      <div className='flex justify-between items-center w-full h-full px-6 2xl:px-16'>
        <Link href='/'>
          <h2 className='text-primary cursor-pointer'>Portfolio</h2>
        </Link>
        <div>
          <ul className='hidden md:flex'>
            <li className='ml-10 text-sm uppercase hover:text-primary'>
              <Link href='/'>ホーム</Link>
            </li>
            <li className='ml-10 text-sm uppercase hover:text-primary'>
              <Link href='/#about'>プロフィール</Link>
            </li>
            <li className='ml-10 text-sm uppercase hover:text-primary'>
              <Link href='/#skills'>スキル</Link>
            </li>
            <li className='ml-10 text-sm uppercase hover:text-primary'>
              <Link href='/#projects'>プロジェクト</Link>
            </li>
            <li className='ml-10 text-sm uppercase hover:text-primary'>
              <Link href='/#contact'>お問い合わせ</Link>
            </li>
          </ul>
          {/* ハンバーガーメニュー */}
          <div onClick={handleNav} className='md:hidden cursor-pointer'>
            <FaBars size={25} />
          </div>
        </div>
      </div>

      {/* モバイルメニュー */}
      <div
        className={
          nav
            ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70'
            : ''
        }
      >
        <div
          className={
            nav
              ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-white dark:bg-secondary p-10 ease-in duration-500'
              : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'
          }
        >
          <div>
            <div className='flex w-full items-center justify-between'>
              <Link href='/'>
                <h2 className='text-primary'>Portfolio</h2>
              </Link>
              <div
                onClick={handleNav}
                className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'
              >
                <FaTimes />
              </div>
            </div>
            <div className='border-b border-gray-300 my-4'>
              <p className='w-[85%] md:w-[90%] py-4'>
                一緒に素晴らしいものを作りましょう
              </p>
            </div>
          </div>
          <div className='py-4 flex flex-col'>
            <ul className='uppercase'>
              <li onClick={() => setNav(false)} className='py-4 text-sm'>
                <Link href='/'>ホーム</Link>
              </li>
              <li onClick={() => setNav(false)} className='py-4 text-sm'>
                <Link href='/#about'>プロフィール</Link>
              </li>
              <li onClick={() => setNav(false)} className='py-4 text-sm'>
                <Link href='/#skills'>スキル</Link>
              </li>
              <li onClick={() => setNav(false)} className='py-4 text-sm'>
                <Link href='/#projects'>プロジェクト</Link>
              </li>
              <li onClick={() => setNav(false)} className='py-4 text-sm'>
                <Link href='/#contact'>お問い合わせ</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar; 