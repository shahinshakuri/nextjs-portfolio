import React from 'react';
import Image from 'next/image';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

import ProfileImage from '../public/assets/sha.png';

const Main = () => {
  return (
    <div id='home' className='w-full h-screen text-center'>
      <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
        <div>
          <div className='relative w-32 h-32 mx-auto mb-4'>
            <Image
              src={ProfileImage}
              alt='Profile Image'
              className='rounded-full object-cover'
              layout='fill'
              loading='lazy'
            />
          </div>

          <h1 className='py-4 text-gray-300'>
            Salut, je suis{' '}
            <span className='text-[#727274]'>Shahin</span>
          </h1>
          <h1 className='py-2 text-gray-300'>Développeur Web</h1>
          <p className='py-4 text-gray-300 sm:max-w-[70%] m-auto'>
            Je suis spécialisé dans la création d&apos;applications web tout en
            suivant une formation en alternance.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
