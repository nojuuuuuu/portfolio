import React from 'react';
import Image from 'next/image';

// スキルデータ
const skillsData = [
  {
    id: 1,
    name: 'HTML',
    image: '/assets/skills/html.png',
  },
  {
    id: 2,
    name: 'CSS',
    image: '/assets/skills/css.png',
  },
  {
    id: 3,
    name: 'JavaScript',
    image: '/assets/skills/javascript.png',
  },
  {
    id: 4,
    name: 'React',
    image: '/assets/skills/react.png',
  },
  {
    id: 5,
    name: 'Next.js',
    image: '/assets/skills/nextjs.png',
  },
  {
    id: 6,
    name: 'Tailwind',
    image: '/assets/skills/tailwind.png',
  },
  {
    id: 7,
    name: 'TypeScript',
    image: '/assets/skills/typescript.png',
  },
  {
    id: 8,
    name: 'GitHub',
    image: '/assets/skills/github.png',
  },
];

const Skills = () => {
  return (
    <div id='skills' className='w-full lg:h-screen p-2'>
      <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
        <p className='text-xl tracking-widest uppercase text-primary'>
          スキル
        </p>
        <h2 className='py-4'>使用できる技術</h2>
        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
          {skillsData.map((skill) => (
            <div
              key={skill.id}
              className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'
            >
              <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>
                  {/* 画像が存在しない場合のエラーを避けるためにImageコンポーネントをコメントアウト */}
                  {/* <Image
                    src={skill.image}
                    width={64}
                    height={64}
                    alt={`${skill.name} アイコン`}
                  /> */}
                  <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
                    {skill.name.charAt(0)}
                  </div>
                </div>
                <div className='flex flex-col items-center justify-center'>
                  <h3>{skill.name}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills; 