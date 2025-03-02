import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <p className='uppercase text-xl tracking-widest text-primary'>
            プロフィール
          </p>
          <h2 className='py-4'>私について</h2>
          <p className='py-2 text-gray-600 dark:text-gray-400'>
            // 自己紹介を編集してください
          </p>
          <p className='py-2 text-gray-600 dark:text-gray-400'>
            私はフロントエンド開発に情熱を持っており、ユーザーフレンドリーなウェブアプリケーションの構築に取り組んでいます。
            HTML、CSS、JavaScriptの基礎から始め、現在はReact、Next.js、TypeScriptなどのモダンな技術スタックを使用して
            プロジェクトを開発しています。
          </p>
          <p className='py-2 text-gray-600 dark:text-gray-400'>
            私の目標は、美しく機能的なウェブサイトを作成することで、ユーザーエクスペリエンスを向上させることです。
            常に新しい技術やベストプラクティスを学び続け、スキルを磨いています。
            チームでの協力や、クライアントとの密接なコミュニケーションを大切にしながら、
            期待を超える成果を提供することを心がけています。
          </p>
          <Link href='/#projects'>
            <p className='py-2 text-gray-600 dark:text-gray-400 underline cursor-pointer'>
              私の最近のプロジェクトをチェックしてください。
            </p>
          </Link>
        </div>
        <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          {/* <Image
            className='rounded-xl'
            src='/assets/profile.jpg'
            alt='プロフィール画像'
            width={400}
            height={400}
          /> */}
          <div className="rounded-xl bg-gray-200 w-full h-[400px] flex items-center justify-center">
            <p>プロフィール画像</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About; 