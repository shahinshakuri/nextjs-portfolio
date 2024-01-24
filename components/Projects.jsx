import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Sokoban from '../public/assets/projects/sokoban1.png';
import Fractal from '../public/assets/projects/fractale.png';
import web from '../public/assets/projects/portail.png';
import jeu from '../public/assets/projects/lab1.png';
import ProjectItem from './ProjectItem';

const projectData = [
  {
    title: 'Jeu Sokoban',
    backgroundImg: Sokoban,
    tech: 'Python',
    githubUrl: 'https://github.com/shahinshakuri/Sokoban-Project',
  },
  {
    title: 'Générateur de Fractales',
    backgroundImg: Fractal,
    tech: 'React JS',
    githubUrl: 'https://github.com/shahinshakuri/Fractals-Generator.git',
  },
  {
    title: 'Marathon Web',
    backgroundImg: web,
    tech: 'React JS',
    githubUrl: '#',
  },
  {
    title: 'Jeu Labyrinthe',
    backgroundImg: jeu,
    tech: 'Java',
    githubUrl: 'https://github.com/shahinshakuri/Labyrinthe',
  },
];

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
          Projets
        </p>
        <h2 className='py-4'>Mes Réalisations</h2>
        <div className='grid md:grid-cols-2 gap-8'>
          {projectData.map((project, index) => (
            <ProjectItem key={index} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
