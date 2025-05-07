const Header: React.FC = () => {
  return (
    <header className='flex min-h-[80vh] flex-col items-center justify-between gap-8 px-[6%] text-center'>
      <h1 className='mt-20 text-3xl font-bold text-font md:text-5xl'>
        Full-Stack Developer & DevOps
      </h1>
      <h2 className='text-xl font-normal text-font md:text-2xl'>
      I craft clean, efficient solutions through code and infrastructure — creating elegant, user-focused applications with passion and precision.
      </h2>
      <img
        src='https://res.cloudinary.com/dz3owvdrk/image/upload/v1746542029/kat_circular_final_wvaxws.png'
        alt='avatar'
        className='w-36 py-9 md:w-1/6'
      />
      <img
        src='https://res.cloudinary.com/dmjmaixrd/image/upload/v1667230941/hero-devices_xrljbx.svg'
        alt='devices'
        className='w-11/12 md:w-3/5'
      />
    </header>
  );
};

export default Header;