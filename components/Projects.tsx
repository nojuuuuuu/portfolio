import React from 'react';
import ProjectItem from './ProjectItem';

// プロジェクトデータ
const projectsData = [
  {
    id: 1,
    title: '3D空間でのリポジトリ',
    backgroundImg: '/assets/projects/3d-repo.jpg',
    tech: 'R3F + Express + MongoDB',
    projectUrl: '/projects/3d-repo',
    description: '遊び心あるリポジトリを作り、作品制作の意欲を高めることを目的としたアプリ。',
  },
  {
    id: 2,
    title: '新しいUIのビデオ通話アプリ',
    backgroundImg: '/assets/projects/video-call.jpg',
    tech: 'React Three Fiber + WebRTC',
    projectUrl: '/projects/video-call',
    description: '3D空間上にビデオ映像を表示することで、2D空間の無機質さを克服しようと考えた通話アプリ。',
  },
  {
    id: 3,
    title: 'ChatGPT予定監視エージェント',
    backgroundImg: '/assets/projects/calendar-agent.jpg',
    tech: 'Python + ChatGPT API + Google Calendar API',
    projectUrl: '/projects/calendar-agent',
    description: '開いているウィンドウを確認し、予定とそぐわない場合タブを強制終了させるアプリ。',
  },
];

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-primary'>
          プロジェクト
        </p>
        <h2 className='py-4'>制作物</h2>
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