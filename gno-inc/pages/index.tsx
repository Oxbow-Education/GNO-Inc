import { Tab, Transition } from '@headlessui/react';
import { Navigation, A11y } from 'swiper';

import type { NextPage } from 'next';
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import BrowserOnly from '../components/BrowserOnly';
import Header from '../components/Header';
import React from 'react';

const NUM_PATHWAYS = 2;
const Home: NextPage = () => {
  const [state, setState] = useState({
    pathwaysIndex: 0,
  });
  const pathwaysNextRef = React.useRef<HTMLDivElement>(null);
  const pathwaysPrevRef = React.useRef<HTMLDivElement>(null);
  const handlePathwayPrevClick = () => {
    if (state.pathwaysIndex > 0) {
      setState({ ...state, pathwaysIndex: state.pathwaysIndex - 1 });
    } else {
      setState({ ...state, pathwaysIndex: NUM_PATHWAYS });
    }
  };

  const handlePathwayNextClick = () => {
    if (state.pathwaysIndex < NUM_PATHWAYS) {
      setState({ ...state, pathwaysIndex: state.pathwaysIndex + 1 });
    } else {
      setState({ ...state, pathwaysIndex: 0 });
    }
  };
  console.log({ state });
  return (
    <>
      <Header />
      <div className="h-[900px] pt-[100px]">
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
      <div className="bg-darkBlue p-28">
        <div className="container mx-auto">
          <div className="grid grid-cols-2">
            <div className="relative pr-10">
              <img
                className="absolute top-0 left-0 h-[73%] w-3/4 object-contain"
                src="images/blue-dotted-background@2x.png"
              />
              <BrowserOnly>
                <Swiper
                  className="p-4"
                  direction="horizontal"
                  slidesPerView={1}
                  modules={[Navigation, A11y]}
                  navigation={{
                    nextEl: pathwaysNextRef.current,
                    prevEl: pathwaysPrevRef.current,
                  }}
                >
                  <SwiperSlide>
                    <img src="images/tulane-litigation@2x.png" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src="images/tulane-litigation@2x.png" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src="images/tulane-litigation@2x.png" />
                  </SwiperSlide>
                  <div className="flex items-center navigation">
                    <div
                      ref={pathwaysPrevRef}
                      className="prev bg-orange rounded-button p-5 mr-2 cursor-pointer"
                    >
                      <img
                        className="h-7 w-7"
                        src="icons/arrow-left-light@2x.png"
                      />
                    </div>
                    <div
                      ref={pathwaysNextRef}
                      className="next bg-orange rounded-button p-5 ml-2 cursor-pointer"
                    >
                      <img
                        className="h-7 w-7"
                        src="icons/arrow-right-light@2x.png"
                      />
                    </div>
                  </div>
                </Swiper>
              </BrowserOnly>
            </div>
            <div className="w-full flex flex-col justify-center pl-10">
              <h2 className="text-white text-4xl font-medium leading-heading2 pb-6">
                Great Careers. <br /> Straightforward pathways.
              </h2>
              <p className="text-white text-lg font-thin pb-6">
                Finding a great career can be complicated. Whether you are a
                high school student, parent of a student, counselor, or in the
                middle of your career looking for a change, use this site to
                check out what it takes to enter some of the fastest growing
                careers in the New Orleans region.
              </p>
              <div className="flex">
                <button className="rounded-button bg-orange text-white min-w-button w-auto block h-button font-medium mr-2">
                  Take Our Short Quiz
                </button>
                <button className="rounded-button bg-orange text-white min-w-button w-auto block h-button font-medium ml-2">
                  See All Careers
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="p-28">
        <div className="container mx-auto">
          <h2 className="text-4xl text-darkBlue text-center font-semibold pb-10">
            Testimonials Heading
          </h2>
          <div className="w-[700px] mx-auto max-w-full">
            <Tab.Group>
              <Tab.List className="flex justify-between pb-10">
                <Tab>
                  <button className="border-5 border-dashed border-orange rounded-button px-4 py-2 text-orange font-semibold">
                    Jessica: Graphic Designer
                  </button>
                </Tab>
                <Tab>
                  <button className="border-5 border-dashed border-orange rounded-button px-4 py-2 text-orange font-semibold">
                    Richard: Welder
                  </button>
                </Tab>
                <Tab>
                  <button className="border-5 border-dashed border-orange rounded-button px-4 py-2 text-orange font-semibold">
                    Tessa: Accountant
                  </button>
                </Tab>
              </Tab.List>
              <Tab.Panels>
                <Tab.Panel>
                  <div className="grid grid-cols-2">
                    <div className="relative py-10 px-6">
                      <img
                        src="images/small-green-dotted@2x.png"
                        className="absolute bottom-0 left-0 w-32  z-0"
                      />
                      <img
                        className="z-10 relative"
                        src="images/jessica@2x.png"
                        alt="Jessica: Graphic Designer"
                      />
                    </div>
                    <div className="flex flex-col items-center p-10">
                      <h3 className="text-darkBlue text-4xl font-medium">
                        2020
                      </h3>
                      <p className="text-darkBlue text-lg font-semibold">
                        Tulane Graduate
                      </p>
                      <img className="my-2 h-16" src="images/down-arrow.png" />
                      <h3 className="text-darkBlue text-4xl font-medium">
                        2021
                      </h3>
                      <p className="text-darkBlue text-lg font-semibold">
                        Ad Agency Internship
                      </p>
                      <img className="my-2 h-16" src="images/down-arrow.png" />
                      <h3 className="text-darkBlue text-4xl font-medium">
                        2022
                      </h3>
                      <p className="text-darkBlue text-lg font-semibold">
                        Full Time Graphic Designer
                      </p>
                    </div>
                  </div>
                </Tab.Panel>
                <Tab.Panel>
                  <div className="grid grid-cols-2">
                    <div className="relative py-10 px-6">
                      <img
                        src="images/small-green-dotted@2x.png"
                        className="absolute bottom-0 left-0 w-32  z-0"
                      />
                      <img
                        className="z-10 relative"
                        src="images/jessica@2x.png"
                        alt="Jessica: Graphic Designer"
                      />
                    </div>
                    <div className="flex flex-col items-center p-10">
                      <h3 className="text-darkBlue text-4xl font-medium">
                        2020
                      </h3>
                      <p className="text-darkBlue text-lg font-semibold">
                        Tulane Graduate
                      </p>
                      <img className="my-2 h-16" src="images/down-arrow.png" />
                      <h3 className="text-darkBlue text-4xl font-medium">
                        2021
                      </h3>
                      <p className="text-darkBlue text-lg font-semibold">
                        Ad Agency Internship
                      </p>
                      <img className="my-2 h-16" src="images/down-arrow.png" />
                      <h3 className="text-darkBlue text-4xl font-medium">
                        2022
                      </h3>
                      <p className="text-darkBlue text-lg font-semibold">
                        Full Time Graphic Designer
                      </p>
                    </div>
                  </div>
                </Tab.Panel>
                <Tab.Panel>
                  <div className="grid grid-cols-2">
                    <div className="relative py-10 px-6">
                      <img
                        src="images/small-green-dotted@2x.png"
                        className="absolute bottom-0 left-0 w-32  z-0"
                      />
                      <img
                        className="z-10 relative"
                        src="images/jessica@2x.png"
                        alt="Jessica: Graphic Designer"
                      />
                    </div>
                    <div className="flex flex-col items-center p-10">
                      <h3 className="text-darkBlue text-4xl font-medium">
                        2020
                      </h3>
                      <p className="text-darkBlue text-lg font-semibold">
                        Tulane Graduate
                      </p>
                      <img className="my-2 h-16" src="images/down-arrow.png" />
                      <h3 className="text-darkBlue text-4xl font-medium">
                        2021
                      </h3>
                      <p className="text-darkBlue text-lg font-semibold">
                        Ad Agency Internship
                      </p>
                      <img className="my-2 h-16" src="images/down-arrow.png" />
                      <h3 className="text-darkBlue text-4xl font-medium">
                        2022
                      </h3>
                      <p className="text-darkBlue text-lg font-semibold">
                        Full Time Graphic Designer
                      </p>
                    </div>
                  </div>
                </Tab.Panel>
              </Tab.Panels>
            </Tab.Group>
          
          </div>
          <button className="block my-10 mx-auto rounded-button bg-orange text-white min-w-button w-[267px] w-auto block h-button font-medium">
              Explore Careers
            </button>
        </div>
      </div>
    </>
  );
};

export default Home;
