// ProjectCard.tsx
import React from 'react';

interface ProjectCardProps {
  key: number;
  imgSrc: string;
  alt: string;
  title: string;
  link: string;
  inDevelopment?: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ key, imgSrc, alt, title, link, inDevelopment }) => {
  return (
    <div key={key} className="project-card">
      <img src={imgSrc} alt={alt} />
      <h3>{title}</h3>
      {link && <a href={link}>Link</a>}
      {inDevelopment && <p>Em Desenvolvimento</p>}
    </div>
  );
};

export default ProjectCard;
