import skillsColumns from '~/static/skillsColumns';

const Skills: React.FC = () => {
  return (
    <div className='relative top-[-9rem] mx-auto grid max-w-7xl gap-[1px] overflow-hidden rounded-xl border border-lightGrey bg-lightGrey shadow-md sm:grid-cols-2 md:grid-cols-3'>
      {skillsColumns.map((value) => (
        <div className='mx-auto w-full max-w-md bg-white px-6 py-12 text-center' key={value.id}>
          <header>
            <img src={value.iconSrc} alt={value.alt} className='pointer-events-none mx-auto w-16' />
            <h1 className='py-4 text-xl font-semibold'>{value.title}</h1>
            <p className='text-base font-normal'>{value.explain}</p>
          </header>
          <div className='py-8'>
            <h2 className='text-base font-medium text-primary'>{value.skillsTitle}</h2>
            <p className='text-base font-normal'>{value.skills}</p>
          </div>
          <footer>
            <h2 className='text-base font-medium text-primary'>{value.toolsTitle}</h2>
            <p className='whitespace-pre-line text-base font-normal'>{value.tools}</p>
          </footer>
        </div>
      ))}
    </div>

  );
};

export default Skills;
