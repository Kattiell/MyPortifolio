import { GoLinkExternal } from 'react-icons/go';
import { VscSourceControl } from 'react-icons/vsc';

interface ProjectCardProps {
  imgSrc: string;
  alt: string;
  title: string;
  link: string;
  inDevelopment?: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  imgSrc,
  alt,
  title,
  link,
  inDevelopment = false,
}) => {
  // Classe dinâmica para status de desenvolvimento
  const statusClass = inDevelopment
    ? 'bg-gray-200 text-font'
    : 'bg-blue-50 text-blue-600';

  // Ícone condicional baseado no status do projeto
  const Icon = inDevelopment ? VscSourceControl : GoLinkExternal;

  return (
    <article className="flex flex-col items-center rounded-xl border border-lightGrey bg-white px-10 py-16 text-center shadow-sm">
      <img
        src={imgSrc}
        alt={alt}  // Certifique-se de que o `alt` é descritivo
        className="mx-auto w-32 object-contain"
        loading="lazy"
      />
      <h2 className="py-8 text-base font-medium">{title}</h2>
      <a
        href={inDevelopment ? '#' : link}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={inDevelopment ? 'Em desenvolvimento' : `Visitar ${title}`}
        className={`inline-flex items-center gap-2 rounded-md px-3 py-1 font-medium ${statusClass}`}
      >
        <Icon className="text-lg" />
        <span className="truncate max-w-[200px]">{link}</span>
      </a>
    </article>
  );
};

export default ProjectCard;
