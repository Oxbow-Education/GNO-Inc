import { Tab } from '@headlessui/react';
import { Navigation, A11y, Controller } from 'swiper';

import type { NextPage } from 'next';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import Header from '../components/Header';
import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import Footer from '../components/Footer';
const BrowserOnly = dynamic(() => import('../components/BrowserOnly'), {
  ssr: false,
});
const Home: NextPage = () => {
  const pathwaysNextRef = React.useRef<HTMLDivElement>(null);
  const pathwaysPrevRef = React.useRef<HTMLDivElement>(null);
  const [swiper, setSwiper] = useState<any | null>(null);

  return (
    <>
      <Header />
      <div className="lg:h-screen py-[100px]">
        <div className="container mx-auto h-full relative px-10">
          <div className="md:grid grid-cols-2 items-center h-full">
            <div className="flex h-full flex-col justify-center md:-mr-18">
              <h1 className="text-center  md:text-left text-darkBlue text-3xl lg:text-4.5xl  2xl:text-5xl leading-10 lg:leading-heading3 2xl:leading-heading font-bold pb-8">
                Greater New Orleans Career Guide
              </h1>
              <p className="md:text-left text-center text-2xl leading-copy font-extralight">
                Explore the great careers our region has to offer, and the
                education pathways to get there.
              </p>
              <div className="mx-auto md:mx-0 my-8">
                <button className="rounded-button bg-orange text-white min-w-button w-auto block h-button font-medium">
                  Take Our Short Quiz
                </button>
              </div>
            </div>
            <div className="flex justify-end flex-col h-full md:-ml-20">
              <img
                className="object-contain w-full"
                src="https://res.cloudinary.com/wherewego/image/upload/v1657317389/WWG2000%20Site%20Photos/hl6bljfiwtgv3vabmonk.png"
                alt="Images works in the technology and skilled trades industries"
              />
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
                  modules={[Navigation, A11y, Controller]}
                  navigation={{
                    nextEl: pathwaysNextRef?.current,
                    prevEl: pathwaysPrevRef?.current,
                  }}
                  onSwiper={(swiper: any) => setSwiper(swiper)}
                  loop={true}
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
                      onClick={() => {
                        if (!swiper) return;
                        swiper.slidePrev();
                      }}
                      className="prev bg-orange rounded-button p-5 mr-2 cursor-pointer"
                    >
                      <img
                        className="h-7 w-7"
                        src="icons/arrow-left-light@2x.png"
                      />
                    </div>
                    <div
                      onClick={() => {
                        if (!swiper) return;
                        swiper.slideNext();
                      }}
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
                <Tab className="border-5 border-dashed border-orange rounded-button px-4 py-2 text-orange font-semibold outline-none">
                  Jessica: Graphic Designer
                </Tab>
                <Tab className="border-5 border-dashed border-orange rounded-button px-4 py-2 text-orange font-semibold outline-none">
                  Richard: Welder
                </Tab>
                <Tab className="border-5 border-dashed border-orange rounded-button px-4 py-2 text-orange font-semibold outline-none">
                  Tessa: Accountant
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
          <div className="pt-12">
            <h2 className="text-4xl text-darkBlue text-center font-semibold pb-10">
              Resources
            </h2>
            <div className="grid grid-cols-3 max-w-full w-[1000px] mx-auto">
              <div className="flex flex-col items-center justify-between h-full">
                <img
                  className="w-40"
                  src="images/career-counseling@2x.png"
                  alt="Career Counseling"
                />
                <h3 className="text-darkBlue text-2xl font-bold py-6">
                  Career Counseling
                </h3>
              </div>
              <div className="flex flex-col items-center justify-between h-full">
                <img
                  className="w-40"
                  src="images/childcare@2x.png"
                  alt="Career Counseling"
                />
                <h3 className="text-darkBlue text-2xl font-bold py-6">
                  Childcare
                </h3>
              </div>
              <div className="flex flex-col items-center justify-between h-full">
                <img
                  className="w-40"
                  src="images/other-support@2x.png"
                  alt="Career Counseling"
                />
                <h3 className="text-darkBlue text-2xl font-bold py-6">
                  Other Support
                </h3>
              </div>
            </div>
            <button className="block my-10 mx-auto rounded-button bg-orange text-white min-w-button w-[267px] w-auto block h-button font-medium">
              Checkout Our Resource Hub
            </button>
          </div>
        </div>
      </div>
      {/* <div className="px-28">
        <div className="bg-lightBlue rounded-lg p-28">
          <div className="grid grid-cols-2">
            <h2 className="text-4xl text-white text-center font-medium pb-10">
              Lorem ipsum dolor sit amet consectetur.
            </h2>
          </div>
        </div>
        <div className="flex justify-between py-28">
          <div className="shadow-tile rounded-lg border-t-10 border-solid border-darkBlue p-8 flex flex-col h-full justify-between min-w-[30%] xl:min-w-[450px] min-h-[350px] max-w-[33%]">
            <img className="h-32 mx-auto" src="images/gno@2x.png" alt="" />
            <p className="pt-6 text-center text-darkBlue text-2xl">
              Developed by
            </p>
            <h4 className="text-4xl text-darkBlue text-center font-semibold">
              GNO, Inc.
            </h4>
          </div>
          <div className="shadow-tile rounded-lg border-t-10 border-solid border-darkBlue p-8 flex flex-col h-full justify-between min-w-[30%] xl:min-w-[450px] min-h-[350px] max-w-[33%]">
            <img className="h-32 mx-auto" src="images/chevron@2x.png" alt="" />
            <p className="pt-6 text-center text-darkBlue text-2xl">
              Powered by
            </p>
            <h4 className="text-4xl text-darkBlue text-center font-semibold">
              Chevron
            </h4>
          </div>
          <div className="shadow-tile rounded-lg border-t-10 border-solid border-darkBlue p-8 flex flex-col h-full justify-between min-w-[30%] xl:min-w-[450px] min-h-[350px] ">
            <img
              className="h-44 -my-6 mx-auto"
              src="images/wherewego.png"
              alt=""
            />
            <p className="pt-6 text-center text-darkBlue text-2xl">Built by</p>
            <h4 className="text-4xl text-darkBlue text-center font-semibold">
              WhereWeGo
            </h4>
          </div>
        </div>
      </div> */}
      <Footer />
    </>
  );
};

export default Home;
