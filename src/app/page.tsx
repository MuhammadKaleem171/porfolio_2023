"use client";
import Image from "next/image";
import { Profile, Tick } from "../../public/assets/images";
import PORTFOLIO_DATA from "@/constants";
import { Heading } from "@/components";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";

export default function Home() {
  return (
    <main className="px-6 md:px-8 py-6 md:py-4">
      {/* Banner */}
      <div className="flex flex-col items-center justify-center w-full py-4 space-y-24">
        <div className="flex flex-col justify-center items-center space-y-8">
          <h6 className="font-bold text-3xl md:text-3xl">{`I'm ${PORTFOLIO_DATA.PROFILE.shortName}`}</h6>
          <div>
            <div className="rounded-full border-2 p-3 border-white bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
              <Image
                src={PORTFOLIO_DATA.PROFILE.photo}
                className="w-32 h-32 rounded-full"
                alt="my-personal-pic"
              />
            </div>
            <h6 className="text-center -mt-4 text-2xl">👋</h6>
          </div>
          <div>
            <div>
              <Heading
                title={PORTFOLIO_DATA.PROFILE.title}
                className="text-center py-10 text-4xl md:text-7xl"
              />
            </div>
          </div>
        </div>
        <div className="text-center space-y-2">
          <p className="text-[1rem] px-2">
            {"I have worked with 5+ companies in my professional expierence"}
          </p>
          <p className="text-secondary text-[0.8rem] px-4">
            {
              "Expert in providing scalable architectural solution to your real world problem"
            }
          </p>
        </div>
      </div>
      {/* Technologies */}
      <div className="flex justify-center mt-12">
        <div className="w-full md:w-[70%] flex justify-center text-center py-10 md:py-32">
          <div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-10 gap-2">
            {PORTFOLIO_DATA.TECHNOLOGIES.map((item) => (
              <div
                key={item.id}
                className="flex flex-col space-y-2 items-center"
              >
                <div className="p-1 rounded-full bg-secondary bg-opacity-25 shadow-2xl">
                  <Image
                    src={item.logo}
                    alt={item.name}
                    className="w-10 h-10 bg-contain rounded-full"
                  />
                </div>
                <h6 className="text-xs text-secondary hover:text-white cursor-pointer transition-all duration-200">
                  {item.name}
                </h6>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Projects */}
      <Heading title={"Projects"} className="text-center pt-10 pb-4" />
      <div className="flex justify-center" id="projects">
        <div className="w-full md:w-[90%] flex justify-center py-10 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {PORTFOLIO_DATA.PROJECTS.map((item) => (
              <div
                key={item.id}
                className="rounded-lg bg-[#82819233] shadow-2xl p-4 space-y-4 cursor-pointer"
              >
                <div className="h-48 w-full px-2 bg-[#f2f3f9] flex justify-between items-center rounded-sm shadow-2xl">
                  <Image src={item.thumbnail} alt="project-1" />
                </div>
                <div className="flex items-center space-x-2">
                  {/* <Image
                    src={item.logo}
                    alt={item.subtitle}
                    className="w-10 h-10 rounded-full shadow-2xl"
                  /> */}
                  <div className="space-y-1">
                    <h4 className="text-sm font-bold">{item.title}</h4>
                    <h6 className="text-xs text-[#E0E0E0CC]">
                      {item.subtitle}
                    </h6>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Services */}
      <Heading title={"Services"} className="text-center py-10" />
      <div className="flex flex-col items-center space-y-6" id="services">
        <div className="w-[95%] md:w-[70%]">
          <div className="flex flex-wrap justify-center space-x-2 items-center">
            {PORTFOLIO_DATA.SERVICES.map((item) => (
              <div
                key={item.id}
                className="rounded-full px-2 md:px-6 py-2 gradient-border flex space-x-2 items-center text-xs md:text-sm my-1 cursor-pointer"
              >
                <Image src={Tick} className="w-4" alt={item.title} />
                <h6 className="text-xs text-[#E0E0E0CC]">{item.title}</h6>
              </div>
            ))}
          </div>
        </div>
        <div className="text-center space-y-2 py-6">
          <p className="text-sm px-2">
            {"I have worked with 5+ companies in my professional expierence"}
          </p>
          <p className="text-secondary text-sm px-4">
            {
              "Expert in providing scalable architectural solution to your real world problem"
            }
          </p>
        </div>
        <div className="flex flex-col space-y-2 w-full items-center">
          {PORTFOLIO_DATA.SERVICES.map((item) => (
            <div
              key={item.id}
              className="w-[85%] md:w-[35%] bg-[#292835] px-4 md:px-12 py-6 md:py-10 flex space-x-6 items-center rounded-xl shadow-2xl"
            >
              <Image
                src={item.logo}
                alt={item.subtitle}
                className="rounded-full h-12 w-12 shadow-2xl shadow-effect-2"
              />
              <div className="flex flex-col justify-between space-y-2">
                <h1 className="font-bold text-sm">{item.title}</h1>
                <p className="text-xs text-[#E0E0E0CC]">{item.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Testimonials */}
      <Heading title={"Testimonials"} className="text-center pt-20 pb-10" />
      <div className="flex space-y-6 my-12">
        <Swiper
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          spaceBetween={20}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          loop={true}
          pagination={true}
          modules={[Autoplay, Pagination]}
          className="mySwiper !pb-10 w-full"
        >
          {PORTFOLIO_DATA.TESTIMONIALS.map((item) => (
            <SwiperSlide
              key={item.id}
              className="px-3 md:px-6 py-6 md:py-12 rounded-2xl bg-[#292835] shadow-2xl space-y-2 md:space-y-4"
            >
              <div className="flex justify-center">
                <Image
                  src={item.picture}
                  className="rounded-full text-center w-20 h-20 bg-contain shadow-2xl"
                  alt={item.name}
                />
              </div>

              <div className="flex flex-col items-center space-y-1">
                <h6 className="text-white font-bold text-sm">{item.name}</h6>
                <h4 className="text-[#9E9E9E] font-bold text-xs">
                  {item.title}
                </h4>
              </div>
              <div className="flex justify-center w-full">
                <p className="text-sm md:text-md text-center py-4 w-[80%]">
                  {item.review}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {/* Contact */}
      <Heading title={"Contact"} className="text-center pt-10" />
      <div className="flex justify-center w-full" id="contact">
        <div className="w-[95%] md:w-[70%] my-12 p-12 space-y-6 border-2 border-tertiary shadow-effect rounded-xl">
          <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 items-center space-x-4">
            <div>
              <div className="rounded-full border p-1 border-white bg-gradient-to-r from-gray-600 via-black to-gray-900">
                <Image
                  src={Profile}
                  className="w-14 h-14 bg-contain rounded-full"
                  alt="my-personal-pic"
                />
              </div>
            </div>
            <div className="gradient-border p-4 flex space-x-2 items-center rounded-full">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <div className="text-secondary text-xs">
                {"Available for work"}
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between w-full space-x-0 md:space-x-6 space-y-10 md:space-y-0">
            <div className="w-full md:w-3/6 flex flex-col justify-center space-y-4">
              <h1 className="font-bold text-md md:text-xl">
                {"Drop me a line or say 👋 on social networks"}
              </h1>
              <p className="text-sm md:text-lg text-secondary">
                {
                  "Whether you're a design team in need of support or an early-stage company looking to level up your design, I'd love to talk about your project 💜"
                }
              </p>
            </div>
            <div className="w-full md:w-3/6 flex flex-col justify-center items-center space-y-6">
              <div className="flex space-x-2">
                {PORTFOLIO_DATA.SOCIAL_LINKS.map((item) => {
                  const Icon = item.icon;
                  return (
                    <a key={item.id} href={item.href} target="_blank">
                      <Icon
                        fontSize="1.5rem"
                        className="text-secondary hover:text-white cursor-pointer transition-all duration-200"
                      />
                    </a>
                  );
                })}
              </div>
              <div>
                <button className="outline-none border-none px-6 py-3 rounded-lg border border-white bg-purple-500 text-[10px] md:text-sm">
                  {"Let’s create magic together ✨"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
