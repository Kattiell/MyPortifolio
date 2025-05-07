import React from 'react';
interface ProjectCardProps {
  imgSrc: string;
  alt: string;
  title: string;
  link: string;
  inDevelopment?: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ imgSrc, alt, title, link, inDevelopment = false }) => {
  return (
    <div className="project-card">
      <img src={imgSrc} alt={alt} />
      <h3>{title}</h3>
      {link && <a href={link}>Link</a>}
      {inDevelopment && <p>Em Desenvolvimento</p>}
    </div>
  );
};

export default ProjectCard;
