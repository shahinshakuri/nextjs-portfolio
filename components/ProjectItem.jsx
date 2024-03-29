import Image from 'next/image';
import React from 'react';

const ProjectItem = ({ title, backgroundImg, tech, githubUrl }) => {
  const handleImageClick = () => {
    window.location.href = githubUrl;
  };

  return (
    <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-[#a4a2d4] to-[#709dff]'>
      <Image
        className='rounded-xl group-hover:opacity-10 cursor-pointer'
        src={backgroundImg}
        alt={title}
        onClick={handleImageClick}
      />
      <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
        <h3 className='text-2xl text-white tracking-wider text-center'>{title}</h3>
        <p className='pb-4 pt-2 text-white text-center'>{tech}</p>
      </div>
    </div>
  );
};

export default ProjectItem;
