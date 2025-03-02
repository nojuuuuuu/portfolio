import React from 'react';
import { FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import Link from 'next/link';

const Hero = () => {
  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="uppercase text-sm tracking-widest text-gray-600 dark:text-gray-400">
            はじめまして
          </p>
          <h1 className="py-4 text-gray-700 dark:text-gray-200">
            こんにちは、<span className="text-primary">nojuuu</span>です
          </h1>
          <h2 className="py-2 text-gray-700 dark:text-gray-200">
            大学生
          </h2>
          <p className="py-4 text-gray-600 dark:text-gray-400 max-w-[70%] m-auto">
            私はユーザー体験を向上させる高品質なデジタルエクスペリエンスを設計・開発しています。
            現在、レスポンシブなフロントエンドアプリケーションの構築に焦点を当てながら、
            バックエンド技術についても学んでいます。
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className="rounded-full shadow-lg shadow-gray-400 dark:shadow-gray-700 p-6 cursor-pointer hover:scale-110 ease-in duration-300"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="rounded-full shadow-lg shadow-gray-400 dark:shadow-gray-700 p-6 cursor-pointer hover:scale-110 ease-in duration-300"
            >
              <FaGithub />
            </a>
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noreferrer"
              className="rounded-full shadow-lg shadow-gray-400 dark:shadow-gray-700 p-6 cursor-pointer hover:scale-110 ease-in duration-300"
            >
              <FaTwitter />
            </a>
            <Link href="/#contact">
              <div className="rounded-full shadow-lg shadow-gray-400 dark:shadow-gray-700 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <HiOutlineMail />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero; 