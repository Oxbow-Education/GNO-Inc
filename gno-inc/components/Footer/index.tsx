import Link from 'next/link';

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className="p-10 bg-darkBlue">
      <div className="container mx-auto">
        <div className="flex flex-col justify-between pb-6 border-solid md:flex-row border-b-1 border-white/50 md:pb-0">
          <Link href="https://gno.wherewego.org/careerguide">
            <a
              href="https://gno.wherewego.org/careerguide"
              target="_blank"
              className="py-2 text-base font-semibold text-center text-white hover:text-gray"
            >
              Browse Careers
            </a>
          </Link>
          <Link href="https://gno.wherewego.org/training">
            <a
              href="https://gno.wherewego.org/training"
              target="_blank"
              className="py-2 text-base font-semibold text-center text-white hover:text-gray"
            >
              Browse Trainings
            </a>
          </Link>
          <Link href="https://gnoresourcehub.wherewego.org">
            <a
              href="https://gnoresourcehub.wherewego.org"
              target="_blank"
              className="py-2 text-base font-semibold text-center text-white hover:text-gray"
            >
              Browse Resources
            </a>
          </Link>
          <Link href="https://gno.wherewego.org/careerguide/quiz">
            <a
              href="https://gno.wherewego.org/careerguide/quiz"
              target="_blank"
              className="py-2 text-base font-semibold text-center text-white hover:text-gray"
            >
              Take Our Short Quiz
            </a>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 md:gap-10 lg:gap-20">
          <div className="grid items-center grid-rows-3 md:py-10 justify-items-center">
            <img
              className="w-[200px] object-contain"
              src="images/gno-white-logo@2x.png"
            />
            <p className="py-4 text-base text-center text-white lg:text-sm md:text-xs md:text-left">
              Greater New Orleans, Inc. is the regional economic development
              nonprofit organization serving the 10-parish region of Southwest
              Louisiana.
            </p>
            <div className="flex flex-col w-full py-2 md:flex-row">
              <div className="flex-1">
                <p className="text-base text-center text-white/60 lg:text-sm md:text-xs md:text-left">
                  1100 Poydras Street, Suite 3475
                </p>
                <p className="text-base text-center text-white/60 lg:text-sm md:text-xs md:text-left">
                  New Orleans, LA 70163{' '}
                </p>
                <p className="text-base text-center text-white/60 lg:text-sm md:text-xs md:text-left">
                  <Link href="tel:5045276900">
                    <a href="tel:5045276900" className="hover:text-gray">
                      (504) 527 - 6900
                    </a>
                  </Link>
                </p>
              </div>
              <div className="items-center flex-1">
                <Link href="https://gnoinc.org/about">
                  <a
                    className="block w-full my-4 font-semibold text-center text-white underline md:my-0 hover:text-gray"
                    href="https://gnoinc.org/about"
                    target="_blank"
                  >
                    Learn More
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className="grid items-center grid-rows-3 md:py-10 justify-items-center">
            <img
              className="w-[200px] md:mx-0 mx-auto"
              src="https://res.cloudinary.com/wherewego/image/upload/v1674576709/WWG2000%20Site%20Photos/dvwgvcteemrqgkcf2msq.png"
            />
            <p className="py-4 text-base text-center text-white lg:text-sm md:text-xs md:text-left">
              WhereWeGo is an EdTech and Design Thinking company based in New
              Orleans that increases access to careers, credentials, and
              credits.
            </p>
            <div className="flex flex-col self-start w-full py-2 md:flex-row">
              <div className="flex-1">
                <Link href="mailto:info@wherewego.org">
                  <a
                    className="block w-full font-semibold text-center text-white underline md:text-left hover:text-gray"
                    href="mailto:info@wherewego.org"
                    target="_blank"
                  >
                    info@wherewego.org
                  </a>
                </Link>
              </div>
              <div className="flex-1">
                <Link href="https://wherewego.org">
                  <a
                    className="block w-full font-semibold text-center text-white underline hover:text-gray"
                    href="https://wherewego.org"
                    target="_blank"
                  >
                    Learn More
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className="grid items-center justify-center grid-rows-3 md:py-10 justify-items-center">
            <img
              className="h-12 lg:h-16"
              src="images/Chevron_Logo@2x.png"
              alt="Chrevron Logo"
            />
            <p className="text-center text-white">
              Powered by <br /> Chevron
            </p>

      

            <p className="text-white/60 md:ml-auto">
              Built by{' '}
              <Link href={'https://wherewego.org'}>
                <a
                  className="underline hover:text-gray"
                  target="_blank"
                  href="https://wherewego.org"
                >
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
