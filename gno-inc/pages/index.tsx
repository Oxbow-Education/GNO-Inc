import { Tab } from '@headlessui/react';
import { Navigation, A11y, Controller } from 'swiper';

import type { NextPage } from 'next';
import { Swiper, SwiperSlide } from 'swiper/react';
import Header from '../components/Header';
import React, {
  ChangeEvent,
  FormEvent,
  Fragment,
  useEffect,
  useState,
} from 'react';
import dynamic from 'next/dynamic';
import Footer from '../components/Footer';
const EMAIL_VALIDATION_REG_EXP = new RegExp(
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
);
const MAXIMUM_1000_CHARS = new RegExp(/^.{1,1000}$/);
import axios from 'axios';
import Link from 'next/link';
import ArrowLeft from '../components/icons/Menu/ArrowLeft';

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
    <div className="md:h-[80vh] md:py-0 py-10">
      <div className="container mx-auto h-full relative px-10">
        <div className="md:grid grid-cols-2 items-center h-full">
          <div className="flex h-full flex-col justify-center md:-mr-18">
            <h1 className="text-center  md:text-left text-darkBlue text-3xl lg:text-4.5xl  2xl:text-5xl leading-10 lg:leading-heading3 2xl:leading-heading font-bold pb-8">
              Greater New Orleans Career Guide
            </h1>
            <p className="md:text-left text-center text-2xl leading-copy font-extralight">
              Explore the great careers our region has to offer and the
              education pathways to get there.
            </p>
            <div className="mx-auto md:mx-0 my-8">
              <Link href="/careerguide/quiz">
                <a
                  className="rounded-button bg-orange hover:bg-white border-2 border-orange border-solid hover:border-ora text-white hover:text-orange min-w-button w-[222px] max-w-full block h-button font-medium flex items-center justify-center"
                  href="/training/careerguide/quiz"
                >
                  Take Our Short Quiz
                </a>
              </Link>
            </div>
          </div>
          <div className="flex justify-center flex-col h-full xl:-ml-10">
            <img
              className="object-contain w-[90%]"
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
          Career Path Testimonials
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
                      className="z-10 relative h-[434px] object-cover rounded-testimonialsImage"
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
                      className="z-10 relative h-[434px] object-cover rounded-testimonialsImage"
                      src="https://res.cloudinary.com/wherewego/image/upload/v1659116482/WWG2000%20Site%20Photos/owmjeefomvzdb1nl2cj4.jpg"
                      alt="Richard: Welder"
                    />
                  </div>
                  <div className="flex flex-col items-center p-10">
                    <h3 className="text-darkBlue text-4xl font-medium">2019</h3>
                    <p className="text-darkBlue text-lg font-semibold text-center">
                      Nunez Community College Graduate
                    </p>
                    <img className="my-2 h-16" src="images/down-arrow.png" />
                    <h3 className="text-darkBlue text-4xl font-medium">2021</h3>
                    <p className="text-darkBlue text-lg font-semibold text-center">
                      Welding Apprenticeship
                    </p>
                    <img className="my-2 h-16" src="images/down-arrow.png" />
                    <h3 className="text-darkBlue text-4xl font-medium">2022</h3>
                    <p className="text-darkBlue text-lg font-semibold text-center">
                      Full Time Welding Professional & Company owner
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
                      className="z-10 relative h-[434px] object-cover rounded-testimonialsImage"
                      src="https://res.cloudinary.com/wherewego/image/upload/v1659116483/WWG2000%20Site%20Photos/w8quh27lrjue8wijecwg.jpg"
                      alt="Tessa: Accountant"
                    />
                  </div>
                  <div className="flex flex-col items-center p-10">
                    <h3 className="text-darkBlue text-4xl font-medium">2018</h3>
                    <p className="text-darkBlue text-lg font-semibold text-center">
                      UNO Graduate
                    </p>
                    <img className="my-2 h-16" src="images/down-arrow.png" />
                    <h3 className="text-darkBlue text-4xl font-medium">2019</h3>
                    <p className="text-darkBlue text-lg font-semibold text-center">
                      Hancock Whitney Entry Level Accountant
                    </p>
                    <img className="my-2 h-16" src="images/down-arrow.png" />
                    <h3 className="text-darkBlue text-4xl font-medium">2022</h3>
                    <p className="text-darkBlue text-lg font-semibold text-center">
                      EY Manager
                    </p>
                  </div>
                </div>
              </Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </div>
        <Link href="/careerguide">
          <a
            href="/careerguide"
            className="my-4 md:my-10 mx-auto rounded-button bg-orange hover:bg-white text-white hover:text-orange border-2 border-solid border-orange min-w-button w-[267px] h-button font-medium max-w-full flex items-center justify-center"
          >
            Explore Careers
          </a>
        </Link>
        <div className="pt-24">
          <h2 className="text-2xl leading-10 md:text-4xl text-darkBlue text-center font-semibold pb-10 my-6">
            Services to help in your education and training journey
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
          <Link href="https://gnoresourcehub.wherewego.org">
            <a
              href="https://gnoresourcehub.wherewego.org"
              target="_blank"
              className="my-10 mx-auto rounded-button bg-orange hover:bg-white text-white hover:text-orange border-2 border-solid border-orange max-w-full min-w-button w-[267px] flex items-center justify-center h-button font-medium"
            >
              Checkout Our Resource Hub
            </a>
          </Link>
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
                    className="prev bg-orange cursor-pointer hover:bg-white stroke-white hover:stroke-orange border-2 border-solid border-orange rounded-button p-5 mr-2 cursor-pointer"
                  >
                    <ArrowLeft className="stroke-inherit h-7 w-7" />
                  </div>
                  <div
                    onClick={() => {
                      if (!swiper) return;
                      swiper.slideNext();
                    }}
                    ref={pathwaysNextRef}
                    className="next bg-orange hover:bg-white stroke-white hover:stroke-orange border-2 border-solid border-orange rounded-button p-5 mr-2 cursor-pointer"
                  >
                    <ArrowLeft className="stroke-inherit h-7 w-7 rotate-180" />
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
              <Link href="/training/careerguide/quiz">
                <a
                  href="/training/careerguide/quiz"
                  className="rounded-button bg-orange hover:bg-white text-white hover:text-orange border-2 border-solid border-orange min-w-button w-auto block h-button font-medium mx-8 my-2 md:mr-2 flex items-center justify-center"
                >
                  Take Our Short Quiz
                </a>
              </Link>
              <Link href="/training/careerguide">
                <a
                  className="rounded-button bg-orange hover:bg-white text-white hover:text-orange border-2 border-solid border-orange exp min-w-button w-auto block h-button font-medium mx-8 my-2 md:ml-2 flex items-center justify-center"
                  href="/careerguide"
                >
                  See All Careers
                </a>
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
      pattern: MAXIMUM_1000_CHARS,
      errorMessage: 'Please limit to 1000 characters',
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
      .post('/gno-api/email', data)
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
        formState[field].errorMessage =
          field === 'message'
            ? 'Please limit to 1000 characters.'
            : `Please provide a valid ${field}`;
        isValid = false;
      } else {
        formState[field].error = false;
      }
    });
    setFormState({ ...formState });

    return isValid;
  };



  return (
    <div className="container mx-auto my-10 md:my-10">
      <div className="flex flex-col lg:grid grid-rows-contact grid-cols-contact relative">
        <div className="bg-lightBlue mx-6 px-6 pt-6 pb-0 lg:py-8 lg:px-10 2xl:p-20 col-start-1 col-end-3 row-start-2 row-end-3 rounded-2xl flex flex-col lg:grid grid-rows-1 grid-cols-contact">
          <div className="lg:pr-6">
            <h2 className="text-2xl 2xl:text-4xl text-white font-semibold">
              Want to learn more about the Career Guide? Get in touch.
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
            <form className="py-4 2xl:py-8 pb-10" onSubmit={handleSubmit}>
              <input
                value={formState.name.value}
                onChange={(event: ChangeEvent<HTMLInputElement>) => {
                  formState.name.value = event.target.value;
                  setFormState({ ...formState });
                }}
                type="text"
                className={`rounded-lg p-4 2xl:p-6 text-white w-full font-medium outline-none placeholder:text-white/50 my-2
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
                className={`rounded-lg p-4 2xl:p-6 text-white w-full font-medium outline-none placeholder:text-white/50 my-2
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
                className={`rounded-lg p-4 2xl:p-6 text-white w-full font-medium outline-none placeholder:text-white/50 my-2
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
                className="bg-white hover:bg-lightBlue rounded-button text-lightBlue hover:text-white border-2 border-solid border-white hover:border-white w-full p-6 text-lg font-semibold my-4"
              >
                Submit
              </button>
            </form>
          </div>
          <div className="block lg:hidden col-start-2 col-end-3 row-start-1 row-end-3 px-10 w-auto">
            <img
              className="object-contain max-h-[500px] mx-auto"
              src="images/email-graphic@2x.png"
            />
          </div>
        </div>

        <div className="relative hidden w-full lg:block col-start-2 col-end-3 row-start-1 row-end-3 px-10 w-auto">
          <img
            className="block object-contain xl:relative absolute inset-4 xl:inset-0 xl:w-auto w-5/6"
            src="images/email-graphic@2x.png"
          />
        </div>
      </div>
    </div>
  );
};
