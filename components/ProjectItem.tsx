import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface ProjectItemProps {
  title: string;
  backgroundImg: string;
  tech: string;
  projectUrl: string;
  description: string;
}

const ProjectItem: React.FC<ProjectItemProps> = ({
  title,
  backgroundImg,
  tech,
  projectUrl,
  description,
}) => {
  return (
    <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-primary to-accent'>
      <div className='rounded-xl bg-gray-200 w-full h-[300px] flex items-center justify-center group-hover:opacity-10 transition-opacity duration-300'>
        <p className="text-gray-500">{title}</p>
      </div>
      <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
        <h3 className='text-2xl text-white tracking-wider text-center'>{title}</h3>
        <p className='pb-4 pt-2 text-white text-center'>{tech}</p>
        <p className='pb-4 text-white text-center'>{description}</p>
        <Link href={projectUrl}>
          <p className='text-center py-3 px-5 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer'>
            詳細を見る
          </p>
        </Link>
      </div>
    </div>
  );
};

export default ProjectItem; 