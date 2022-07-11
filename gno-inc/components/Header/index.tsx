import Link from 'next/link';
import { useState } from 'react';
import MenuIcon from '../icons/Menu';

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  const [navIsOpen, setNavIsOpen] = useState(false);
  return (
    <header>
      <div className="absolute top-0 left-0 right-0 container mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between p-4 z-20 w-screen bg-white">
        <div className="w-3/4 lg:w-[550px] 2xl:w-[700px]">
          <img
            className="hidden lg:block"
            src="images/gno-inc-logo@2x.png"
            alt="GNO Inc logo"
          />
          <img
            className="block lg:hidden max-h-14"
            src="images/career-guide-logo-small@2x.png"
            alt="GNO Inc logo"
          />
        </div>
        <MenuIcon
          onClick={() => setNavIsOpen(!navIsOpen)}
          className="fill-darkBlue h-8 w-8 lg:hidden block absolute right-6 top-6 outline-none"
        />

        <nav
          className={`lg:flex-1 lg:mx-8 w-full ${
            navIsOpen ? 'h-auto' : 'h-0 lg:h-auto overflow-hidden'
          }`}
        >
          <ul className="flex flex-col lg:flex-row lg:items-center w-full justify-around bg-white">
            <li className="px-4 py-2 lg:p-0">
              <Link href="#">
                <a className="text-darkBlue font-bold mx-2" href="#">
                  About GNO Inc.
                </a>
              </Link>
            </li>
            <li className="px-4 py-2 lg:p-0">
              <Link href="#">
                <a className="text-darkBlue font-bold mx-2" href="#">
                  Resource Hub
                </a>
              </Link>
            </li>
            <li className="px-4 py-2 lg:p-0">
              <Link href="#">
                <a className="text-darkBlue font-bold mx-2" href="#">
                  My Account
                </a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
