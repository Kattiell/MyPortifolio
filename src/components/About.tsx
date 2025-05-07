const About: React.FC = () => {
  return (
    <section className="bg-[#001f3d] pt-20 pb-40 text-center md:pt-28 md:pb-48">
      <h2 className="mx-auto max-w-2xl px-4 text-3xl font-extrabold text-white md:text-4xl">
        Hi, I’m Gabriel. Nice to meet you.
      </h2>
      <div className="mx-auto mt-8 max-w-3xl px-6 text-blue-100 md:text-lg leading-8 md:leading-9 space-y-6 font-normal">
        <p>
          Since beginning my journey in tech over 5 years ago, I’ve grown from a support analyst into a DevOps engineer focused on AWS, and later, a developer at B2list LTDA.
        </p>
        <p>
          Along the way, I led Scrum practices, improved team workflows, and helped deliver efficient, valuable solutions.
        </p>
        <p>
          Driven by curiosity and a passion for problem-solving, I’m always working to sharpen my skills.
        </p>
      </div>
    </section>
  );
};

export default About;
