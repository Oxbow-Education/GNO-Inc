import Link from 'next/link';

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className="bg-darkBlue p-10">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 border-b-1 border-white/50 border-solid pb-6 md:pb-0">
          <button className="text-center text-white py-2 font-semibold text-base">
            Browse Careers
          </button>
          <button className="text-center text-white py-2 font-semibold text-base">
            Browse Trainings
          </button>
          <button className="text-center text-white py-2 font-semibold text-base">
            Browse Resources
          </button>
          <button className="text-center text-white py-2 font-semibold text-base">
            Take Our Short Quiz
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 md:gap-10 lg:gap-20">
          <div className="md:py-10 grid grid-rows-3 items-center">
            <img className="w-3/4" src="images/gno-white-logo@2x.png" />
            <p className="lg:text-sm md:text-xs text-base md:text-left text-center text-white py-4">
              Greater New Orleans, Inc. is the regional economic development
              nonprofit organization serving the 10-parish region of Southwest
              Louisiana.
            </p>
            <div className="flex md:flex-row flex-col py-2 w-full">
              <div className="flex-1">
                <p className="text-white/60 lg:text-sm md:text-xs text-base md:text-left text-center">
                  1100 Poydras Street, Suite 3475
                </p>
                <p className="text-white/60 lg:text-sm md:text-xs md:text-left text-center text-base">New Orleans, LA 70163 </p>
                <p className="text-white/60 lg:text-sm md:text-xs text-base md:text-left text-center">
                  <Link href="tel:5045276900">
                    <a href="tel:5045276900">(504) 527 - 6900</a>
                  </Link>
                </p>
              </div>
              <div className="flex-1 items-center">
                <Link href="#">
                  <a
                    className="w-full block text-white underline font-semibold text-center my-4 md:my-0"
                    href="#"
                  >
                    Learn More
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className="md:py-10 grid grid-rows-3 items-center">
            <img className="w-2/4" src="images/Wherewego@2x.png" />
            <p className="text-white py-4 lg:text-sm md:text-xs text-base md:text-left text-center">
              WhereWeGo is an EdTech and Design Thinking company based in New
              Orleans that increases access to careers, credentials, and
              credits.
            </p>
            <div className="flex md:flex-row flex-col py-2 w-full self-start">
              <div className="flex-1">
                <Link href="mailto:info@wherewego.org">
                  <a
                    className="w-full block text-white underline font-semibold text-center"
                    href="mailto:info@wherewego.org"
                  >
                    info@wherewego.org
                  </a>
                </Link>
              </div>
              <div className="flex-1">
                <Link href="#">
                  <a
                    className="w-full block text-white underline font-semibold text-center"
                    href="#"
                  >
                    Learn More
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className="md:py-10 grid grid-rows-3 items-center justify-center md:justify-end">
            <img
              className="h-12 lg:h-16 ml-auto md:mr-0 mr-auto"
              src="images/Chevron_Logo@2x.png"
              alt="Chrevron Logo"
            />
            <p className="text-white text-center  md:ml-auto">
              Powered by <br /> Chevron
            </p>
            <p className="text-white/60 md:ml-auto">
              Built by{' '}
              <Link href={'https://wherewego.org'}>
                <a className="underline" href="https://wherewego.org">
                  WhereWeGo
                </a>
              </Link>{' '}
              © 2022
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
