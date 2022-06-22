import Link from 'next/link';

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  return (
    <header>
      <div className="absolute top-0 left-0 right-0 container mx-auto flex items-center justify-between p-4">
        <div className="h-20">
          <img
            className="h-full"
            src="images/gno-inc-logo@2x.png"
            alt="GNO Inc logo"
          />
        </div>
        <nav className="flex-1 mx-8">
          <ul className="flex flex-row items-center w-full justify-around">
            <li>
              <Link href="#">
                <a className="text-darkBlue font-bold mx-2" href="#">
                  About GNO Inc.
                </a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a className="text-darkBlue font-bold mx-2" href="#">
                  Resource Hub
                </a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a className="text-darkBlue font-bold mx-2" href="#">
                  Login
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
