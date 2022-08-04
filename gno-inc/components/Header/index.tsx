import Link from 'next/link';
import { useState } from 'react';
import Menu from '../icons/Menu';

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  const [navIsOpen, setNavIsOpen] = useState(false);
  return (
    <header>
      <div className="container mx-auto px-8 py-4">
        <div className="flex lg:flex-row flex-col lg:items-center lg:justify-between">
          <div className="flex items-center justify-bewteen w-full">
            <a href="/" className="w-3/4 lg:w-[600px]">
              <img
                src="https://res.cloudinary.com/wherewego/image/upload/v1659637898/WWG2000%20Site%20Photos/qipga6az1jvio3cchvzc.png"
                alt="GNO. Inc, WhereWeGo Louisiana CareerGuide"
                className="w-full object-cover mx-0 block"
              />
            </a>
            <Menu
              onClick={() => {
                setNavIsOpen(!navIsOpen);
              }}
              className="block lg:hidden h-6 w-6 stroke-darkBlue ml-auto stroke-1"
            />
          </div>

          <nav
            className={`max-w-full flex-1 lg:flex-none lg:w-[400px] xl:w-[500px] mx-2 lg:py-0 py-4 z-20 ${
              navIsOpen ? 'block' : 'lg:block hidden'
            }`}
          >
            <ul
              className={`flex flex-col lg:flex-row lg:items-center justify-between lg:relative absolute left-0 right-0 bg-white lg:shadow-none shadow-sm lg:px-0 lg:py-0 py-4 px-8 ${
                navIsOpen ? 'flex' : 'lg:flex hidden'
              }`}
            >
              <li className="text-darkBlue font-semibold text-lg lg:p-0 p-2 hover:text-gray">
                <Link href="https://gno.wherewego.org/careerguide">Careers</Link>
              </li>
              <li className="text-darkBlue font-semibold text-lg lg:p-0 p-2 hover:text-gray">
                <Link href="https://gno.wherewego.org/training">Trainings</Link>
              </li>
              <li className="text-darkBlue font-semibold text-lg lg:p-0 p-2 hover:text-gray">
                <Link href="https://gnoresourcehub.wherewego.org">
                  <a
                    href="https://gnoresourcehub.wherewego.org"
                    target="_blank"
                  >
                    Resources
                  </a>
                </Link>
              </li>
              <li className="text-darkBlue font-semibold text-lg lg:p-0 p-2 hover:text-gray cursor-pointer">
                <Link
                  href="https://gno.wherewego.org/profile?ref=c"
                  tabIndex={0}
                  className="font-bold"
                >
                  My Account
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
