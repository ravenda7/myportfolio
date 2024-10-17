import React from 'react';

function ProjectCard({ src, link, h3, p }) {
  return (
    <a href={link} target="_blank" className='inline-block text-gray-800 no-underline transition-transform duration-200 ease-in-out hover:scale-105'>
      <img className="max-w-[250px] self-center bg-project-card-bg rounded-[20px]" src={src} alt={`${h3} logo`} />
      <h3 className="md:text-[24px] monos text-[20px] font-medium text-[var(--text-color)] m-0 p-0">{h3}</h3>
      <p className="monos text-[16px] text-[var(--text-color)] m-0 p-0">{p}</p>
    </a>
  );
}

export default ProjectCard;
