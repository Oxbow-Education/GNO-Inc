import Link from 'next/link';

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className="bg-darkBlue p-10">
      <section className="container mx-auto">
        <div className="flex md:flex-row flex-col justify-between border-b-1 border-white/50 border-solid pb-6 md:pb-0">
          <Link href="https://gno.wherewego.org/careerguide">
            <a
              href="https://gno.wherewego.org/careerguide"
              target="_blank"
              className="text-center text-white py-2 font-semibold text-base hover:text-gray"
            >
              Browse Careers
            </a>
          </Link>
          <Link href="https://gno.wherewego.org/training">
            <a
              href="https://gno.wherewego.org/training"
              target="_blank"
              className="text-center text-white py-2 font-semibold text-base hover:text-gray"
            >
              Browse Trainings
            </a>
          </Link>
          <Link href="https://gnoresourcehub.wherewego.org">
            <a
              href="https://gnoresourcehub.wherewego.org"
              target="_blank"
              className="text-center text-white py-2 font-semibold text-base hover:text-gray"
            >
              Browse Resources
            </a>
          </Link>
          <Link href="https://gno.wherewego.org/careerguide/quiz">
            <a
              href="https://gno.wherewego.org/careerguide/quiz"
              target="_blank"
              className="text-center text-white py-2 font-semibold text-base hover:text-gray"
            >
              Take Our Short Quiz
            </a>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 md:gap-10 lg:gap-20">
          <div className="md:py-10 grid grid-rows-3 items-center justify-items-center">
            <img
              className="w-[200px] object-contain"
              src="images/gno-white-logo@2x.png"
              alt='GNO White Logo'
            />
            <p className="lg:text-sm md:text-xs text-base text-center md:text-left text-white py-4">
              Greater New Orleans, Inc. is the regional economic development
              nonprofit organization serving the 10-parish region of Southwest
              Louisiana.
            </p>
            <div className="flex md:flex-row flex-col py-2 w-full">
              <div className="flex-1">
                <p className="text-white/60 lg:text-sm md:text-xs text-base md:text-left text-center">
                  1100 Poydras Street, Suite 3475
                </p>
                <p className="text-white/60 lg:text-sm md:text-xs md:text-left text-center text-base">
                  New Orleans, LA 70163{' '}
                </p>
                <p className="text-white/60 lg:text-sm md:text-xs text-base md:text-left text-center">
                  <Link href="tel:5045276900">
                    <a href="tel:5045276900" className="hover:text-gray">
                      (504) 527 - 6900
                    </a>
                  </Link>
                </p>
              </div>
              <div className="flex-1 items-center">
                <Link href="https://gnoinc.org/about">
                  <a
                    className="w-full block text-white underline font-semibold text-center my-4 md:my-0 hover:text-gray"
                    href="https://gnoinc.org/about"
                    target="_blank"
                  >
                    Learn More
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className="md:py-10 grid grid-rows-3 items-center justify-items-center">
            <img
              className="w-[200px] md:mx-0 mx-auto"
              src="images/Wherewego@2x.png"
              alt='WhereWeGo Logo'
            />
            <p className="text-white py-4 lg:text-sm md:text-xs text-base text-center md:text-left">
              WhereWeGo is an EdTech and Design Thinking company based in New
              Orleans that increases access to careers, credentials, and
              credits.
            </p>
            <div className="flex md:flex-row flex-col py-2 w-full self-start">
              <div className="flex-1">
                <Link href="mailto:info@wherewego.org">
                  <a
                    className="w-full block text-white underline font-semibold text-center md:text-left hover:text-gray"
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
                    className="w-full block text-white underline font-semibold text-center hover:text-gray"
                    href="https://wherewego.org"
                    target="_blank"
                  >
                    Learn More
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className="md:py-10 grid grid-rows-3 items-center justify-center justify-items-center">
            <img
              className="h-12 lg:h-16"
              src="images/Chevron_Logo@2x.png"
              alt="Chrevron Logo"
            />
            <p className="text-white text-center">
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
      </section>
    </footer>
  );
};

export default Footer;
