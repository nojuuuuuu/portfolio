import React from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';
import { RiRadioButtonFill } from 'react-icons/ri';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

// プロジェクトデータ
const projectsData = [
  {
    id: 'portfolio',
    title: 'ポートフォリオサイト',
    backgroundImg: '/assets/projects/portfolio.jpg',
    tech: 'Next.js + Tailwind CSS',
    github: 'https://github.com/',
    demo: 'https://example.com/',
    description: '自己紹介とスキル、制作物を紹介するためのポートフォリオサイト。',
    technologies: ['Next.js', 'React', 'Tailwind CSS', 'TypeScript', 'GitHub Pages'],
    details: 'このポートフォリオサイトは、Next.jsとTailwind CSSを使用して構築されました。レスポンシブデザインを採用し、様々なデバイスで最適な表示が可能です。GitHub Pagesを使用してデプロイされています。',
  },
  {
    id: 'ecommerce',
    title: 'ECサイト',
    backgroundImg: '/assets/projects/ecommerce.jpg',
    tech: 'React + Node.js',
    github: 'https://github.com/',
    demo: 'https://example.com/',
    description: '商品の表示、カート機能、決済機能を備えたECサイト。',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Stripe API'],
    details: 'このECサイトは、フロントエンドにReact、バックエンドにNode.jsとExpressを使用しています。データベースにはMongoDBを採用し、決済処理にはStripe APIを統合しています。ユーザー認証、商品検索、カート機能、注文履歴など、ECサイトに必要な機能を実装しています。',
  },
  {
    id: 'social',
    title: 'SNSアプリ',
    backgroundImg: '/assets/projects/social.jpg',
    tech: 'React + Firebase',
    github: 'https://github.com/',
    demo: 'https://example.com/',
    description: 'ユーザー登録、投稿、いいね機能などを備えたSNSアプリ。',
    technologies: ['React', 'Firebase', 'Firestore', 'Authentication', 'Storage'],
    details: 'このSNSアプリは、ReactとFirebaseを使用して構築されました。ユーザー認証、プロフィール編集、投稿作成、いいね、コメント、フォロー機能などを実装しています。リアルタイムデータベースを活用して、リアルタイムな更新を実現しています。',
  },
  {
    id: 'weather',
    title: '天気予報アプリ',
    backgroundImg: '/assets/projects/weather.jpg',
    tech: 'JavaScript + OpenWeather API',
    github: 'https://github.com/',
    demo: 'https://example.com/',
    description: '現在地や指定した場所の天気予報を表示するアプリ。',
    technologies: ['JavaScript', 'HTML', 'CSS', 'OpenWeather API', 'Geolocation API'],
    details: 'この天気予報アプリは、JavaScriptとOpenWeather APIを使用して構築されました。現在地の取得にはGeolocation APIを使用し、5日間の天気予報を表示します。レスポンシブデザインを採用し、様々なデバイスで使用可能です。',
  },
];

const ProjectDetails = () => {
  const router = useRouter();
  const { id } = router.query;
  
  // IDに基づいてプロジェクトデータを取得
  const project = projectsData.find(p => p.id === id);
  
  if (!project) {
    return (
      <>
        <Navbar />
        <div className='w-full h-screen flex justify-center items-center'>
          <p>プロジェクトが見つかりません。</p>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className='w-full'>
        <div className='w-screen h-[50vh] relative'>
          <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
          {/* 画像が存在しない場合のエラーを避けるためにImageコンポーネントをコメントアウト */}
          {/* <Image
            className='absolute z-1'
            src={project.backgroundImg}
            alt={project.title}
            layout='fill'
            objectFit='cover'
          /> */}
          <div className='absolute top-0 left-0 w-full h-[50vh] bg-gray-600 z-1 flex items-center justify-center'>
            <p className="text-white text-xl">{project.title}</p>
          </div>
          <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
            <h2 className='py-2'>{project.title}</h2>
            <h3>{project.tech}</h3>
          </div>
        </div>

        <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
          <div className='col-span-4'>
            <p className='text-xl tracking-widest uppercase text-primary'>プロジェクト</p>
            <h2 className='py-4'>{project.title}</h2>
            <p>{project.details}</p>
            <div className='flex items-center justify-between my-4'>
              <a
                href={project.github}
                target='_blank'
                rel='noreferrer'
                className='px-8 py-2 mt-4 mr-8 shadow-xl shadow-gray-400 rounded-xl uppercase bg-gradient-to-r from-primary to-accent text-white'
              >
                GitHub
              </a>
              <a
                href={project.demo}
                target='_blank'
                rel='noreferrer'
                className='px-8 py-2 mt-4 shadow-xl shadow-gray-400 rounded-xl uppercase bg-gradient-to-r from-primary to-accent text-white'
              >
                デモ
              </a>
            </div>
            <Link href='/#projects'>
              <p className='underline cursor-pointer'>戻る</p>
            </Link>
          </div>
          <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4'>
            <div className='p-2'>
              <p className='text-center font-bold pb-2'>技術スタック</p>
              <div className='grid grid-cols-3 md:grid-cols-1'>
                {project.technologies.map((tech, index) => (
                  <p key={index} className='text-gray-600 py-2 flex items-center'>
                    <RiRadioButtonFill className='pr-1' /> {tech}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProjectDetails; 