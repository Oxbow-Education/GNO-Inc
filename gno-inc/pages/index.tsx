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
    </>
  );
};

export default Home;
