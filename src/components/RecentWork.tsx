import workCards from '~/static/workCards';
import Button from './Button';
import WorkCard from './WorkCard';
import { IoBasketballOutline } from 'react-icons/io5';

const RecentWork: React.FC = () => {
    return (
        <div className='border-b border-lightGrey px-[6%] pb-40 text-center'>
            <h1 className='text-2xl font-bold text-font md:text-3xl'>My Recent Work</h1>
            <h2 className='pt-6 text-xl font-semibold text-font'>
                Here are a few past design projects I&apos;ve worked on. Want to see more?
                <a
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=gabrielcaetanopf.contato@gmail.com&su=A%20ideia"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: 'none', color: '#007bff' }}
                >
                    Email me
                </a>

                .
            </h2>
            <div className='grid gap-6 py-20 md:grid-cols-2 lg:grid-cols-3'>
                {workCards.map(({ title, imgSrc, alt }) => (
                    <WorkCard title={title} imgSrc={imgSrc} alt={alt} key={alt} />
                ))}
            </div>
            <Button
                onClick={() => window.open('https://github.com/AviadSofer/matt-portfolio', '_blank')}
                filled
                mxAuto
            >
                <IoBasketballOutline size={20} className='relative top-[1px] mx-1' />
                <span> See more on Dribbble</span>
            </Button>
        </div>
    );
};

export default RecentWork;
