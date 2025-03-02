import React from 'react';
import ProjectItem from './ProjectItem';

// プロジェクトデータ
const projectsData = [
  {
    id: 1,
    title: 'ポートフォリオサイト',
    backgroundImg: '/assets/projects/portfolio.jpg',
    tech: 'Next.js + Tailwind CSS',
    projectUrl: '/projects/portfolio',
    description: '自己紹介とスキル、制作物を紹介するためのポートフォリオサイト。',
  },
  {
    id: 2,
    title: 'ECサイト',
    backgroundImg: '/assets/projects/ecommerce.jpg',
    tech: 'React + Node.js',
    projectUrl: '/projects/ecommerce',
    description: '商品の表示、カート機能、決済機能を備えたECサイト。',
  },
  {
    id: 3,
    title: 'SNSアプリ',
    backgroundImg: '/assets/projects/social.jpg',
    tech: 'React + Firebase',
    projectUrl: '/projects/social',
    description: 'ユーザー登録、投稿、いいね機能などを備えたSNSアプリ。',
  },
  {
    id: 4,
    title: '天気予報アプリ',
    backgroundImg: '/assets/projects/weather.jpg',
    tech: 'JavaScript + OpenWeather API',
    projectUrl: '/projects/weather',
    description: '現在地や指定した場所の天気予報を表示するアプリ。',
  },
];

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-primary'>
          プロジェクト
        </p>
        <h2 className='py-4'>制作したもの</h2>
        <div className='grid md:grid-cols-2 gap-8'>
          {projectsData.map((project) => (
            <ProjectItem
              key={project.id}
              title={project.title}
              backgroundImg={project.backgroundImg}
              tech={project.tech}
              projectUrl={project.projectUrl}
              description={project.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects; 