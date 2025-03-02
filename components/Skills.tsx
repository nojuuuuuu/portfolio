import React from 'react';

// スキルデータ
const skillsData = [
  {
    id: 1,
    name: 'HTML',
  },
  {
    id: 2,
    name: 'CSS',
  },
  {
    id: 3,
    name: 'JavaScript',
  },
  {
    id: 4,
    name: 'React',
  },
  {
    id: 5,
    name: 'Next.js',
  },
  {
    id: 6,
    name: 'Tailwind',
  },
  {
    id: 7,
    name: 'TypeScript',
  },
  {
    id: 8,
    name: 'GitHub',
  },
  {
    id: 9,
    name: 'Python',
  },
  {
    id: 10,
    name: 'PHP',
  },
  {
    id: 11,
    name: 'MySQL',
  },
  {
    id: 12,
    name: 'Git',
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
              <div className='flex flex-col items-center justify-center'>
                <h3 className='text-lg font-semibold'>{skill.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills; 