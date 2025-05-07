import { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import Button from './Button';

const NavBar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const handleSayHello = () =>
    window.open('https://github.com/Kattiell', '_blank');

  return (
    <nav className="px-[6%] py-4 text-white">
      <div className="flex h-20 items-center justify-between">
        <img
          src="https://res.cloudinary.com/dz3owvdrk/image/upload/v1746547533/logokat-remov_uxkmip.png"
          alt="Logo"
          className="w-14"
        />

        <div className="hidden md:flex">
          <Button filled onClick={handleSayHello}>
            Say Hello
          </Button>
        </div>
        <button
          onClick={toggleMenu}
          className="md:hidden text-blue-500 hover:text-blue-700 transition"
          aria-label="Toggle navigation menu"
        >
          {isMenuOpen ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="mt-4 flex flex-col items-center gap-4 md:hidden">
          <Button filled onClick={handleSayHello}>
            Say Hello
          </Button>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
