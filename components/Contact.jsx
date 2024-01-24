import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { HiOutlineChevronDoubleUp } from 'react-icons/hi';
import ContactImg from '../public/assets/contact.jpg';

const Contact = () => {
  return (
    <div id='contact' className='w-full lg:h-screen'>
      <div className='max-w-[1240px] m-auto px-2 py-16 w-full'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
          Contact
        </p>
        <h2 className='py-4'>Contactez-moi</h2>
        <div className='flex items-center justify-center'>
          {/* Gauche */}
          <div className='lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4 flex flex-col items-center'>
            <div>
              <Image
                src={ContactImg}
                alt='Shahin Shakuri'
                width={300}
                height={200}
                className='rounded-xl hover:scale-105 ease-in duration-300'
                loading='lazy'
              />
            </div>
            <div className='text-center'>
              <h2 className='py-2'>Shahin Shakuri</h2>
              <p>Développeur Back-End</p>
              <p className='py-4'>
                Je suis disponible pour des missions freelance ou des postes à temps plein.
              </p>
            </div>
            <div>
              <p className='uppercase pt-8'>Connectez-vous avec moi</p>
              <div className='flex items-center justify-between py-4'>
                <a href='https://www.linkedin.com/in/shahin-shakuri-423366226/' target='_blank' rel='noreferrer'>
                  <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                    <FaLinkedinIn />
                  </div>
                </a>
                <a href='https://github.com/shahinshakuri' target='_blank' rel='noreferrer'>
                  <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                    <FaGithub />
                  </div>
                </a>
                <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                  <a href='mailto:shahinshakuri0@gmail.com'>
                    <AiOutlineMail />
                  </a>
                </div>
                <Link href='/'>
                  <a>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                      <BsFillPersonLinesFill />
                    </div>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className='flex justify-center py-12'>
          <Link href='/'>
            <a>
              <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                <HiOutlineChevronDoubleUp
                  className='text-[#5651e5]'
                  size={30}
                />
              </div>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
