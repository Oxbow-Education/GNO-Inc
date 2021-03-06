import { Tab } from '@headlessui/react';
import { Navigation, A11y, Controller } from 'swiper';

import type { NextPage } from 'next';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import Header from '../components/Header';
import React, {
  ChangeEvent,
  FormEvent,
  FormEventHandler,
  Fragment,
  useEffect,
  useRef,
  useState,
} from 'react';
import dynamic from 'next/dynamic';
import Footer from '../components/Footer';
const EMAIL_VALIDATION_REG_EXP = new RegExp(
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
);
import axios from 'axios';
import Link from 'next/link';

const BrowserOnly = dynamic(() => import('../components/BrowserOnly'), {
  ssr: false,
});
const Home: NextPage = () => {
  return (
    <>
      <Header />
      <Banner />
      <CareerSwiper />
      <Testimonials />
      <ContactForm />
      <Footer />
    </>
  );
};

export default Home;

const Banner = () => {
  return (
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
              <Link
                href="/training/careers/quiz"
                className="rounded-button bg-orange text-white min-w-button w-auto block h-button font-medium"
              >
                Take Our Short Quiz
              </Link>
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
  );
};
const Testimonials = () => {
  return (
    <div className="py-10 px-8 md:p-28">
      <div className="container mx-auto">
        <h2 className="text-2xl leading-10 md:text-4xl text-darkBlue text-center font-semibold pb-10">
          Testimonials Heading
        </h2>
        <div className="w-[700px] mx-auto max-w-full">
          <Tab.Group>
            <Tab.List className="flex flex-col md:flex-row justify-between px-8 md:px-0 pb-10">
              <Tab as={Fragment}>
                {({ selected }) => {
                  return (
                    <button
                      className={`${
                        selected
                          ? 'border-orange text-orange'
                          : 'border-transparent text-darkBlue '
                      } font-semibold outline-none border-5 border-dashed rounded-button px-4 py-2 my-2`}
                    >
                      Jessica: Graphic Designer
                    </button>
                  );
                }}
              </Tab>
              <Tab as={Fragment}>
                {({ selected }) => {
                  return (
                    <button
                      className={`${
                        selected
                          ? 'border-orange text-orange'
                          : 'border-transparent text-darkBlue '
                      } font-semibold outline-none border-5 border-dashed rounded-button px-4 py-2 my-2`}
                    >
                      Richard: Welder
                    </button>
                  );
                }}
              </Tab>
              <Tab as={Fragment}>
                {({ selected }) => {
                  return (
                    <button
                      className={`${
                        selected
                          ? 'border-orange text-orange'
                          : 'border-transparent text-darkBlue '
                      } font-semibold outline-none border-5 border-dashed rounded-button px-4 py-2 my-2`}
                    >
                      Tessa: Accountant
                    </button>
                  );
                }}
              </Tab>
            </Tab.List>
            <Tab.Panels>
              <Tab.Panel>
                <div className="grid grid-cols-1 md:grid-cols-2">
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
                    <h3 className="text-darkBlue text-4xl font-medium">2020</h3>
                    <p className="text-darkBlue text-lg font-semibold text-center">
                      Tulane Graduate
                    </p>
                    <img className="my-2 h-16" src="images/down-arrow.png" />
                    <h3 className="text-darkBlue text-4xl font-medium">2021</h3>
                    <p className="text-darkBlue text-lg font-semibold text-center">
                      Ad Agency Internship
                    </p>
                    <img className="my-2 h-16" src="images/down-arrow.png" />
                    <h3 className="text-darkBlue text-4xl font-medium">2022</h3>
                    <p className="text-darkBlue text-lg font-semibold text-center">
                      Full Time Graphic Designer
                    </p>
                  </div>
                </div>
              </Tab.Panel>
              <Tab.Panel>
                <div className="grid grid-cols-1 md:grid-cols-2">
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
                    <h3 className="text-darkBlue text-4xl font-medium">2020</h3>
                    <p className="text-darkBlue text-lg font-semibold text-center">
                      Tulane Graduate
                    </p>
                    <img className="my-2 h-16" src="images/down-arrow.png" />
                    <h3 className="text-darkBlue text-4xl font-medium">2021</h3>
                    <p className="text-darkBlue text-lg font-semibold text-center">
                      Ad Agency Internship
                    </p>
                    <img className="my-2 h-16" src="images/down-arrow.png" />
                    <h3 className="text-darkBlue text-4xl font-medium">2022</h3>
                    <p className="text-darkBlue text-lg font-semibold text-center">
                      Full Time Graphic Designer
                    </p>
                  </div>
                </div>
              </Tab.Panel>
              <Tab.Panel>
                <div className="grid grid-cols-1 md:grid-cols-2">
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
                    <h3 className="text-darkBlue text-4xl font-medium">2020</h3>
                    <p className="text-darkBlue text-lg font-semibold text-center">
                      Tulane Graduate
                    </p>
                    <img className="my-2 h-16" src="images/down-arrow.png" />
                    <h3 className="text-darkBlue text-4xl font-medium">2021</h3>
                    <p className="text-darkBlue text-lg font-semibold text-center">
                      Ad Agency Internship
                    </p>
                    <img className="my-2 h-16" src="images/down-arrow.png" />
                    <h3 className="text-darkBlue text-4xl font-medium">2022</h3>
                    <p className="text-darkBlue text-lg font-semibold text-center">
                      Full Time Graphic Designer
                    </p>
                  </div>
                </div>
              </Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </div>
        <button className="block my-4 md:my-10 mx-auto rounded-button bg-orange text-white min-w-button w-[267px] w-auto block h-button font-medium max-w-full">
          Explore Careers
        </button>
        <div className="pt-24">
          <h2 className="text-2xl leading-10 md:text-4xl text-darkBlue text-center font-semibold pb-10">
            Resources
          </h2>
          <div className="grid grid-rows-2 grid-cols-2 md:grid-rows-1 md:grid-cols-3 gap-8 max-w-full w-[1000px] mx-auto">
            <div className="flex flex-col items-center justify-between h-full">
              <img
                className="md:w-40 w-28"
                src="images/career-counseling@2x.png"
                alt="Career Counseling"
              />
              <h3 className="text-darkBlue text-base md:text-2xl text-center font-bold py-6">
                Career Counseling
              </h3>
            </div>
            <div className="flex flex-col items-center justify-between h-full">
              <img
                className="md:w-40 w-28"
                src="images/childcare@2x.png"
                alt="Career Counseling"
              />
              <h3 className="text-darkBlue text-base md:text-2xl text-center font-bold py-6">
                Childcare
              </h3>
            </div>
            <div className="col-span-2 md:col-auto md:row-auto flex flex-col items-center justify-between h-full">
              <img
                className="md:w-40 w-28"
                src="images/other-support@2x.png"
                alt="Career Counseling"
              />
              <h3 className="text-darkBlue text-base md:text-2xl text-center font-bold py-6">
                Other Support
              </h3>
            </div>
          </div>
          <button className="block my-10 mx-auto rounded-button bg-orange text-white max-w-full min-w-button w-[267px] w-auto block h-button font-medium">
            Checkout Our Resource Hub
          </button>
        </div>
      </div>
    </div>
  );
};

const CareerSwiper = () => {
  const pathwaysNextRef = React.useRef<HTMLDivElement>(null);
  const pathwaysPrevRef = React.useRef<HTMLDivElement>(null);
  const [swiper, setSwiper] = useState<any | null>(null);
  return (
    <div className="bg-darkBlue py-16 px-8 md:p-28">
      <div className="container mx-auto">
        <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 lg:gap-0 gap-8">
          <div className="relative py-10 md:py-0 md:pr-10">
            <img
              className="absolute top-0 left-0 h-[73%] w-3/4 object-contain"
              src="images/blue-dotted-background@2x.png"
            />
            <BrowserOnly>
              <Swiper
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
                  <img src="images/nocc-electrician@2x.png" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="images/uno-business@2x.png" />
                </SwiperSlide>
                <div className="flex items-center navigation my-6 md:my-0">
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
          <div className="w-full flex flex-col justify-center lg:pl-10">
            <h2 className="text-white text-3xl md:text-4xl font-medium leading-10 md:leading-heading3 xl:leading-heading2 pb-6">
              Great Careers. <br /> Straightforward pathways.
            </h2>
            <p className="text-white text-lg font-thin pb-6">
              Finding a great career can be complicated. Whether you are a high
              school student, parent of a student, counselor, or in the middle
              of your career looking for a change, use this site to check out
              what it takes to enter some of the fastest growing careers in the
              New Orleans region.
            </p>
            <div className="flex flex-col md:flex-row">
              <Link
                href="/training/careers/quiz"
                className="rounded-button bg-orange text-white min-w-button w-auto block h-button font-medium mx-8 my-2 md:mr-2"
              >
                Take Our Short Quiz
              </Link>
              <Link
                href="/training/careers"
                className="rounded-button bg-orange text-white min-w-button w-auto block h-button font-medium mx-8 my-2 md:ml-2"
              >
                See All Careers
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ContactForm = () => {
  const [formResponse, setFormResponse] = useState<{
    error: boolean;
    message: string;
  } | null>(null);
  const [formState, setFormState] = useState({
    name: {
      value: '',
      required: true,
      error: false,
      pattern: false,
      errorMessage: 'This field is required',
    },
    email: {
      value: '',
      required: true,
      pattern: EMAIL_VALIDATION_REG_EXP,
      error: false,
      errorMessage: 'Please provider a valid email',
    },
    message: {
      value: '',
      required: true,
      error: false,
      pattern: false,
      errorMessage: 'This field is required',
    },
  });

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const isValid = validateForm();
    if (!isValid) return;
    const data = {
      name: formState.name.value,
      email: formState.email.value,
      message: formState.message.value,
    };
    const response = await axios
      .post('/api/email', data)
      .then((res) => res.data)
      .catch((err) => err.response.data);

    setFormResponse(response);
  };

  const validateForm = (): boolean => {
    const fields = Object.keys(formState) as ('name' | 'email' | 'message')[];
    let isValid = true;
    fields.forEach((field) => {
      if (formState[field].required && !formState[field].value) {
        formState[field].error = true;
        formState[field].errorMessage = 'This field is required.';
        isValid = false;
      } else if (
        Boolean(formState[field].pattern) &&
        !(formState[field].pattern as RegExp).test(formState[field].value)
      ) {
        formState[field].error = true;
        formState[field].errorMessage = `Please provide a valid ${field}`;
        isValid = false;
      } else {
        formState[field].error = false;
      }
    });
    setFormState({ ...formState });

    return isValid;
  };

  useEffect(() => {
    console.log(formResponse);
  }, [formResponse]);

  return (
    <div className="container mx-auto my-10 md:my-10">
      <div className="flex flex-col lg:grid grid-rows-contact grid-cols-contact relative">
        <div className="bg-lightBlue mx-6 px-6 pt-6 pb-0 lg:p-20 col-start-1 col-end-3 row-start-2 row-end-3 rounded-2xl flex flex-col lg:grid grid-rows-1 grid-cols-contact">
          <div className="lg:pr-6">
            <h2 className="text-2xl lg:text-4xl text-white font-semibold">
              Lorem ipsum dolor sit amet consectetur.
            </h2>
            {formResponse && (
              <p
                className={`${
                  formResponse.error
                    ? 'bg-red/50 text-white'
                    : 'bg-white text-lightBlue'
                } mt-6 p-4 font-semibold`}
              >
                {formResponse.message}
              </p>
            )}
            <form className="py-8 pb-10" onSubmit={handleSubmit}>
              <input
                value={formState.name.value}
                onChange={(event: ChangeEvent<HTMLInputElement>) => {
                  formState.name.value = event.target.value;
                  setFormState({ ...formState });
                }}
                type="text"
                className={`rounded-lg p-4 lg:p-6 text-white w-full font-medium outline-none placeholder:text-white/50 my-2
                ${formState.name.error ? 'bg-red/50' : 'bg-mdBlue'}
                `}
                placeholder="Your Name"
              />
              {formState.name.error && (
                <p className="text-sm font-semibold text-red/50">
                  {formState.name.errorMessage}
                </p>
              )}
              <input
                value={formState.email.value}
                onChange={(event: ChangeEvent<HTMLInputElement>) => {
                  formState.email.value = event.target.value;
                  setFormState({ ...formState });
                }}
                type="text"
                className={`rounded-lg p-4 lg:p-6 text-white w-full font-medium outline-none placeholder:text-white/50 my-2
                ${formState.email.error ? 'bg-red/50' : 'bg-mdBlue'}
                `}
                placeholder="Your Email"
              />
              {formState.email.error && (
                <p className="text-sm font-semibold text-red/50">
                  {formState.email.errorMessage}
                </p>
              )}
              <textarea
                value={formState.message.value}
                onChange={(event: ChangeEvent<HTMLTextAreaElement>) => {
                  formState.message.value = event.target.value;
                  setFormState({ ...formState });
                }}
                className={`rounded-lg p-4 lg:p-6 text-white w-full font-medium outline-none placeholder:text-white/50 my-2
                ${formState.message.error ? 'bg-red/50' : 'bg-mdBlue'}
                `}
                placeholder="Message"
                rows={8}
              ></textarea>
              {formState.message.error && (
                <p className="text-sm font-semibold text-red/50">
                  {formState.message.errorMessage}
                </p>
              )}
              <button
                type="submit"
                className="bg-white rounded-button text-lightBlue w-full p-6 text-lg font-semibold my-4"
              >
                Submit
              </button>
            </form>
          </div>
          <div className="block lg:hidden col-start-2 col-end-3 row-start-1 row-end-3 px-10 w-auto">
            <img
              className="h-full object-contain"
              src="images/email-graphic@2x.png"
            />
          </div>
        </div>

        <div className="hidden lg:block col-start-2 col-end-3 row-start-1 row-end-3 px-10 w-auto">
          <img
            className="h-full object-contain"
            src="images/email-graphic@2x.png"
          />
        </div>
      </div>
    </div>
  );
};
