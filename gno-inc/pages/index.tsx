import type { NextPage } from 'next';
import Header from '../components/Header';

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <div className="h-[952px] pt-[100px]">
        <div className="container mx-auto h-full">
          <div className="grid grid-cols-2 h-full">
            <div className="flex h-full flex-col justify-center">
              <h1 className="text-darkBlue text-5xl leading-heading font-bold pb-8">
                Greater New Orleans Career Guide
              </h1>
              <p className="text-2xl leading-copy font-extralight">
                Explore the great careers our region has to offer, and the
                education pathways to get there.
              </p>
              <div className="my-8">
                <button className="rounded-button bg-orange text-white min-w-button w-auto block h-button font-medium">
                  Take Our Short Quiz
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
