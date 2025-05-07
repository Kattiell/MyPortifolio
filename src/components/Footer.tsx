import React from 'react';
import Button from './Button';
import { TbHandRock } from 'react-icons/tb';

const getFormattedBuildDate = (): string => {
  const now = new Date();
  return new Intl.DateTimeFormat('en-US', {
    month: 'long',
    year: 'numeric',
  }).format(now);
};

const Footer: React.FC = () => {
  const buildDate = getFormattedBuildDate();

  return (
    <footer className="relative flex h-[40vh] flex-col items-center justify-center gap-10 bg-[#0D0D0D] pt-32 md:pt-0">
      <section className="absolute top-[-4rem] mx-[6%] flex flex-col items-center justify-between gap-7 rounded-xl bg-[#1A1A1A] py-14 shadow-md md:flex-row md:px-20">
        <h1 className="text-3xl font-bold text-white">Start a project</h1>

        <p className="w-11/12 text-center text-base font-medium text-white md:w-[35%] md:text-lg">
          Interested in working together? We should queue up a time to chat. I’ll buy the coffee.
        </p>

        <Button
          onClick={() =>
            window.open('https://github.com/AviadSofer/matt-portfolio', '_blank')
          }
          filled
          greenBorder
          whiteText
        >
          <TbHandRock className="mx-2 text-[#007BFF]" size={20} />
          Let&apos;s do this
        </Button>
      </section>

      <img
        src="https://res.cloudinary.com/dz3owvdrk/image/upload/v1746547533/logokat-remov_uxkmip.png"
        alt="icon"
        className="w-16"
      />

      <h2 className="text-center text-lg font-normal text-white md:text-xl">
        Originally Developed By Gabriel Caetano, {buildDate}
      </h2>
    </footer>
  );
};

export default Footer;
