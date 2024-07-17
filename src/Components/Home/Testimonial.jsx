"use client";
import React, { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    imageSrc: "https://i.ibb.co/0mRc7xR/Rectangle-3958.png",
    stars: 5,
    quote: "“Working with John Smith was a game-changer.”",
    text: "Working with John Smith was a game-changer. His expertise and personalized approach made the home-buying process smooth and stress-free. We found our dream home quickly and at a great price. Highly recommend John for anyone looking to buy or sell their home!",
    authorImage: "https://i.ibb.co/VQB0dRW/Rectangle-3896.png",
    authorName: "David Smith",
    authorTitle: "Eco Analyst",
  },
  {
    id: 2,
    imageSrc: "https://i.ibb.co/0mRc7xR/Rectangle-3958.png",
    stars: 5,
    quote: "“Working with John Smith was a game-changer.”",
    text: "Working with John Smith was a game-changer. His expertise and personalized approach made the home-buying process smooth and stress-free. We found our dream home quickly and at a great price. Highly recommend John for anyone looking to buy or sell their home!",
    authorImage: "https://i.ibb.co/VQB0dRW/Rectangle-3896.png",
    authorName: "David Smith",
    authorTitle: "Eco Analyst",
  },
  {
    id: 3,
    imageSrc: "https://i.ibb.co/0mRc7xR/Rectangle-3958.png",
    stars: 5,
    quote: "“Working with John Smith was a game-changer.”",
    text: "Working with John Smith was a game-changer. His expertise and personalized approach made the home-buying process smooth and stress-free. We found our dream home quickly and at a great price. Highly recommend John for anyone looking to buy or sell their home!",
    authorImage: "https://i.ibb.co/VQB0dRW/Rectangle-3896.png",
    authorName: "David Smith",
    authorTitle: "Eco Analyst",
  },
  {
    id: 4,
    imageSrc: "https://i.ibb.co/0mRc7xR/Rectangle-3958.png",
    stars: 5,
    quote: "“Working with John Smith was a game-changer.”",
    text: "Working with John Smith was a game-changer. His expertise and personalized approach made the home-buying process smooth and stress-free. We found our dream home quickly and at a great price. Highly recommend John for anyone looking to buy or sell their home!",
    authorImage: "https://i.ibb.co/VQB0dRW/Rectangle-3896.png",
    authorName: "David Smith",
    authorTitle: "Eco Analyst",
  },
  {
    id: 5,
    imageSrc: "https://i.ibb.co/0mRc7xR/Rectangle-3958.png",
    stars: 5,
    quote: "“Working with John Smith was a game-changer.”",
    text: "Working with John Smith was a game-changer. His expertise and personalized approach made the home-buying process smooth and stress-free. We found our dream home quickly and at a great price. Highly recommend John for anyone looking to buy or sell their home!",
    authorImage: "https://i.ibb.co/VQB0dRW/Rectangle-3896.png",
    authorName: "David Smith",
    authorTitle: "Eco Analyst",
  },
  {
    id: 6,
    imageSrc: "https://i.ibb.co/0mRc7xR/Rectangle-3958.png",
    stars: 4,
    quote: "“Working with John Smith was a game-changer.”",
    text: "Working with John Smith was a game-changer. His expertise and personalized approach made the home-buying process smooth and stress-free. We found our dream home quickly and at a great price. Highly recommend John for anyone looking to buy or sell their home!",
    authorImage: "https://i.ibb.co/VQB0dRW/Rectangle-3896.png",
    authorName: "David Smith",
    authorTitle: "Eco Analyst",
  },
  // Add more testimonials here as needed
];

const Testimonial = () => {
  // Slider configuration
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    mode: "snap",
    slides: {
      perView: 1,
      spacing: 30,
    },
    breakpoints: {
      "(min-width: 640px)": {
        slides: { perView: 1 },
      },
      "(min-width: 768px)": {
        slides: { perView: 1 },
      },
      "(min-width: 1024px)": {
        slides: { perView: 1 },
      },
    },
    slideChanged(s) {
      setCurrentSlide(s.track.details.rel + 1);
    },
  });

  const [currentSlide, setCurrentSlide] = useState(1);

  return (
    <div
      className="max-w-screen-xl mx-auto h-full flex flex-col items-center px-4 py-16 md:py-20 xl:py-28"
      data-aos="fade-up"
    >
      <header className="mb-16 text-center">
        <h2
          className="text-4xl md:text-5xl font-normal font-merriweather text-accent mb-2"
          data-aos="fade-up"
        >
          <span className="text-[#E76D57]">Testimonial</span>
        </h2>
        <p className="text-[#211C1DCC] text-base md:text-xl" data-aos="fade-up">
          Read What Our Satisfied Clients Say About Their Exceptional
          Experiences and Success Stories with Our Real Estate Services
        </p>
      </header>
      <div className="keen-slider" ref={sliderRef}>
        {testimonials.map((testimonial, index) => (
          <div
            key={testimonial.id}
            className="md:px-5 keen-slider__slide number-slide1"
            data-aos="fade-up"
          >
            <div className="flex flex-col lg:flex-row items-end justify-end gap-10">
              <Image
                width={458}
                height={502}
                className="w-full lg:w-2/5 lg:h-auto h-60 sm:h-96 object-cover rounded-xl"
                src={testimonial.imageSrc}
                alt={`Slide ${index + 1}`}
              />
              <div className="w-full lg:w-3/5">
                <div className="flex items-center gap-2 mb-4">
                  {Array.from({ length: testimonial.stars }).map((_, i) => (
                    <Image
                      key={i}
                      width={40}
                      height={40}
                      className="w-auto h-[30px]"
                      src="https://i.ibb.co/b2MYBGB/Star-26.png"
                      alt={`Star ${i + 1}`}
                    />
                  ))}
                </div>
                <p className="text-2xl md:text-4xl mb-3 font-merriweather">
                  {testimonial.quote}
                </p>
                <p className="text-base md:text-xl font-roboto text-[#211C1DCC]">
                  {testimonial.text}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex items-center mt-8">
                    <Image
                      width={80}
                      height={80}
                      src={testimonial.authorImage}
                      alt={`Author ${index + 1}`}
                    />
                    <div className="ml-3">
                      <p className="font-normal text-lg font-roboto">
                        {testimonial.authorName}
                      </p>
                      <p className="text-sm text-gray-600 font-roboto">
                        {testimonial.authorTitle}
                      </p>
                    </div>
                  </div>
                  <div>
                    <p className="text-center font-merriweather text-lg md:text-xl font-medium">
                      <span className="text-primary">{currentSlide}</span> /{" "}
                      {testimonials.length}
                    </p>
                    <div className="flex items-center mt-4">
                      <button
                        onClick={() => instanceRef.current?.prev()}
                        className="mr-4 transition-all duration-300 ease-in-out hover:scale-110"
                      >
                        <Image
                          width={30}
                          height={30}
                          src="https://i.ibb.co/DVfFNZx/Frame-1000008402.png"
                          alt="Previous Slide"
                        />
                      </button>
                      <button
                        onClick={() => instanceRef.current?.next()}
                        className="ml-4 transition-all duration-300 ease-in-out hover:scale-110"
                      >
                        <Image
                          width={30}
                          height={30}
                          src="https://i.ibb.co/pZ3Wwyz/Frame-1000008403.png"
                          alt="Next Slide"
                        />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
