import React from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';
import { RiRadioButtonFill } from 'react-icons/ri';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Head from 'next/head';

// プロジェクトデータ
const projectsData = [
  {
    id: '3d-repo',
    title: '3D空間でのリポジトリ',
    backgroundImg: '/assets/projects/3d-repo.png',
    otherImages: [
      '/assets/projects/3d-repo-2.png',
    ],
    tech: 'R3F + Express + MongoDB',
    github: 'https://github.com/',
    demo: 'https://example.com/',
    description: '遊び心あるリポジトリを作り、作品制作の意欲を高めることを目的としたアプリ。',
    technologies: ['React Three Fiber', 'Express', 'MongoDB', 'Three.js', 'Node.js'],
    details: '遊び心あるリポジトリを作り、作品制作の意欲を高めることを目的としたアプリです。テレビは他ポートで立ち上げたアプリをレンダリングしており、そこに音楽、写真、プログラミング作品、動画の四つのジャンルの作品をアップロードすることができます。アップロードした音楽はラジカセから聞くこともできます。\n\n【こだわり】\n3D空間、テレビのUIをレトロ調なコンセプトで統一しており、現実のコンピュータでは味わえないような体験を作り出そうとこだわっています。また、ウィンドウをドラッグ可能にしています。',
  },
  {
    id: 'video-call',
    title: '新しいUIのビデオ通話アプリ',
    backgroundImg: '/assets/projects/video-call.png',
    otherImages: [
      '/assets/projects/video-call-2.png',
    ],
    tech: 'React Three Fiber + WebRTC',
    github: 'https://github.com/',
    demo: 'https://example.com/',
    description: '3D空間上にビデオ映像を表示することで、2D空間の無機質さを克服しようと考えた通話アプリ。',
    technologies: ['React Three Fiber', 'WebRTC', 'Three.js', 'Socket.io', 'Node.js'],
    details: '3D空間上にビデオ映像を表示することで、2D空間の無機質さを克服しようと考えた通話アプリです。WebRTCの技術を用いて実際にビデオ通話ができるようになっています。\n\n【こだわり】\nカメラの角度によってビデオ映像の表示領域も変わり、運動視差のようなものを実現しています。',
  },
  {
    id: 'calendar-agent',
    title: 'ChatGPT予定監視エージェント',
    backgroundImg: '/assets/projects/calendar-agent.png',
    otherImages: [
      '/assets/projects/calendar-agent-2.png',
    ],
    tech: 'Python + ChatGPT API + Google Calendar API',
    github: 'https://github.com/',
    demo: 'https://example.com/',
    description: '開いているウィンドウを確認し、予定とそぐわない場合タブを強制終了させるアプリ。',
    technologies: ['Python', 'ChatGPT API', 'Google Calendar API', 'Windows API', 'PyAutoGUI'],
    details: '開いているウィンドウを確認し、それが予定とそぐわない物であればタブを強制終了させるアプリです。Google Calendar APIを用いて予定を取得し、Pythonを用いてウィンドウの情報も確認し、それらをChatGPTに送り開いているウィンドウが現在の作業に必要か判断し、不要だと判断された場合強制シャットダウンします。例えば、ソフトウェア開発の予定中にYoutubeでサッカーの動画を見た場合強制終了させられます。\n\n【こだわり】\nChatGPTに送るリクエストのプロンプトに多くの条件を足すことでかなり柔軟な判断を可能にしています。',
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
      <Head>
        <title>{project.title} | ポートフォリオ</title>
        <meta name='description' content={project.description} />
      </Head>
      <Navbar />
      <div className='w-full'>
        <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
          {/* basePath対応のため、画像パスを修正 */}
          <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10' />
          <Image
            className='absolute z-1'
            src={process.env.NODE_ENV === 'production' ? `/portfolio${project.backgroundImg}` : project.backgroundImg}
            alt={project.title}
            fill
            style={{ objectFit: 'cover' }}
          />
          <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] z-10 p-2'>
            <h2 className='py-2 text-white'>{project.title}</h2>
            <h3 className='text-white'>{project.tech}</h3>
          </div>
        </div>
        
        <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
          <div className='col-span-4'>
            <p className='text-xl tracking-widest uppercase text-primary'>プロジェクト</p>
            <h2 className='py-4'>{project.title}</h2>
            <p>{project.description}</p>
            
            <a href={project.github} target='_blank' rel='noreferrer'>
              <button className='px-8 py-2 mt-4 mr-8'>コード</button>
            </a>
            <a href={project.demo} target='_blank' rel='noreferrer'>
              <button className='px-8 py-2 mt-4'>デモ</button>
            </a>
          </div>
          <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4'>
            <div className='p-2'>
              <p className='font-bold pb-2'>技術</p>
              <div className='grid grid-cols-3 md:grid-cols-1'>
                {project.technologies.map((tech, index) => (
                  <p key={index} className='py-2 flex items-center'>
                    <span className='mr-1'>•</span> {tech}
                  </p>
                ))}
              </div>
            </div>
          </div>
          <Link href='/#projects'>
            <p className='underline cursor-pointer'>戻る</p>
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProjectDetails; 