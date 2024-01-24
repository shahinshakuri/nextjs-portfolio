import React from 'react';
import Image from 'next/image';
import AboutImg from '../public/assets/lab.jpeg';

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <p className='uppercase text-xl tracking-widest text-[#5651e5]'>
            À propos
          </p>
          <h2 className='py-4'>Qui suis-je</h2>
          <p className='py-2 text-gray-300'>
            Je m&apos;appelle Shahin Shakuri, j&apos;ai 22 ans et je suis actuellement en
            troisième année de Formation BUT à l&apos;Université de Lens, en
            alternance à l&apos;Université de Lille. Ayant obtenu un bac S, j&apos;ai
            toujours été passionné par l&apos;informatique, c&apos;est pourquoi j&apos;ai
            choisi de devenir développeur.
          </p>
          <p className='py-2 text-gray-300'>
            Au cours de ma formation, j&apos;ai eu l&apos;occasion de développer mes
            compétences en créant différents types d&apos;applications. Actuellement,
            je me concentre davantage sur le développement backend et frontend.
            Mon parcours m&apos;a permis d&apos;acquérir une solide expertise et de
            mettre en pratique mes connaissances dans le domaine du
            développement informatique.
          </p>
        </div>
        <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          <Image src={AboutImg} className='rounded-xl' alt='/' />
        </div>
      </div>
    </div>
  );
};

export default About;
