export interface ProjectCard {
  id: number;
  imgSrc: string;
  alt: string;
  title: string;
  link: string;
  inDevelopment?: boolean;
}

export const projectCards: ProjectCard[] = [
  {
    id: 1,
    imgSrc: 'https://mattfarley.ca/img/logos/basin.svg',
    alt: 'Basin logo',
    title: 'A powerful, easy-to-configure form backend for designers and developers.',
    link: 'https://usebasin.com',
  },
  {
    id: 2,
    imgSrc: 'https://mattfarley.ca/img/logos/shipable.svg',
    alt: 'Shipable logo',
    title: 'Short, focused design and growth collabs for startup tech founders.',
    link: 'https://shipable.io',
  },
  {
    id: 3,
    imgSrc: 'https://mattfarley.ca/img/logos/junkbox.svg',
    alt: 'Junkbox logo',
    title: 'Intelligent API solution for automatic spam protection without the manual work.',
    link: '',
    inDevelopment: true,
  },
  {
    id: 4,
    imgSrc: 'https://mattfarley.ca/img/logos/postpal.svg',
    alt: 'Postpal logo',
    title: 'A people-friendly content publishing platform that integrates with any tech stack.',
    link: '',
    inDevelopment: true,
  },
  {
    id: 5,
    imgSrc: 'https://mattfarley.ca/img/logos/kybercore.svg',
    alt: 'Kybercore logo',
    title: 'Next level plug and play chassis systems for custom DIY lightsaber builds.',
    link: '',
    inDevelopment: true,
  },
  {
    id: 6,
    imgSrc: 'https://mattfarley.ca/img/logos/houston.svg',
    alt: 'Houston logo',
    title: 'Simple feedback and engagement tools that help teams ship winning products.',
    link: '',
    inDevelopment: true,
  },
  {
    id: 7,
    imgSrc: 'https://mattfarley.ca/img/logos/nanobrand.svg',
    alt: 'Nanobrand logo',
    title: 'Human-crafted logos and brand assets for startups and indie hacker projects.',
    link: '',
    inDevelopment: true,
  },
  {
    id: 8,
    imgSrc: 'https://mattfarley.ca/img/logos/dovetail.svg',
    alt: 'Dovetail logo',
    title: 'A space and member management solution for coworking communities.',
    link: '',
    inDevelopment: true,
  },
  {
    id: 9,
    imgSrc: 'https://mattfarley.ca/img/logos/userforge.svg',
    alt: 'Userforge logo',
    title: 'A collaborative tool for creating simple, effective user personas.',
    link: '',
    inDevelopment: true,
  },
];
