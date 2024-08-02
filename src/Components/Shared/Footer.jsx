"use client";
/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import { useForm } from "react-hook-form";
import { useState } from "react";

export default function Footer() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [successMessage, setSuccessMessage] = useState("");

  const onSubmit = (data) => {
    console.log(data); // Handle form submission
    setSuccessMessage("Message sent successfully!");
    setTimeout(() => {
      setSuccessMessage("");
      reset();
    }, 3000);
  };

  return (
    <div className="bg-primary py-8 md:py-12 mt-16 md:mt-20 xl:mt-24 overflow-hidden">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <Image
          src="/Images/Footer/logo.webp" // Replace with your local image path
          height="120"
          width="200"
          alt="footer logo"
          className="mb-12 -mt-12"
          data-aos="fade-down" // AOS animation
        />
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-start justify-between">
          {/* Left Section */}
          <div className="w-full lg:w-1/3" data-aos="fade-up">
            <h1 className="text-neutral text-2xl md:text-3xl font-normal leading-tight md:leading-snug font-merriweather">
              Get In Touch
            </h1>
            <p className="text-base md:text-lg text-neutral mt-4">
              Connect with Us Today for Personalized Assistance and Expert
              Guidance on Your Real Estate Journey.
            </p>
            <h5 className="text-neutral text-2xl md:text-3xl mt-8 font-normal leading-tight font-merriweather">
              Contact Us
            </h5>
            <div className="mt-6 space-y-4 md:space-y-6 text-[#E0D7C7] text-base">
              <div className="flex items-center ">
                <div className="bg-neutral p-1 rounded">
                  <Image
                    src="/Images/Footer/call.webp"
                    alt="Phone"
                    width={30}
                    height={30}
                  />
                </div>
                <span className="ml-4">(555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <div className="bg-neutral p-1 rounded">
                  <Image
                    src="/Images/Footer/email.webp"
                    alt="Phone"
                    width={30}
                    height={30}
                  />
                </div>
                <span className="ml-4">matthew.davidson@xyzrealty.com</span>
              </div>
              <div className="flex items-center">
                <div className="bg-neutral p-1 rounded">
                  <Image
                    src="/Images/Footer/location.webp"
                    alt="Phone"
                    width={30}
                    height={30}
                  />
                </div>
                <span className="ml-4">1234 Broadway, New York, NY 10001</span>
              </div>
            </div>
          </div>

          {/* Middle Section */}
          <div className="w-full lg:w-1/3 lg:px-8" data-aos="fade-right">
            <h1 className="text-neutral text-2xl md:text-3xl font-normal leading-tight md:leading-snug font-merriweather">
              Quick Links
            </h1>
            <ul className="mt-4 space-y-2 text-sm md:text-lg text-[#E0D7C7] font-roboto">
              <li>
                <a href="#home" className="hover:text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="#aboutme" className="hover:text-white">
                  About Me
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white">
                  Services
                </a>
              </li>
              <li>
                <a href="#listing" className="hover:text-white">
                  Featured Condos
                </a>
              </li>
              <li>
                <a href="#testimonial" className="hover:text-white">
                  Testimonial
                </a>
              </li>
              <li>
                <a href="#insights" className="hover:text-white">
                  Insights
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white">
                  Contact Me
                </a>
              </li>
            </ul>
          </div>

          {/* Right Section */}
          <div
            className="w-full lg:w-1/3 lg:pl-8 border border-y-0 border-r-0 border-l-0 lg:border-l"
            data-aos="fade-left"
          >
            <h1 className="text-neutral text-2xl md:text-3xl font-normal leading-tight md:leading-snug text-center font-merriweather">
              Direct Message
            </h1>
            <form
              className="mt-4 space-y-4 text-base md:text-base text-neutral
              "
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                <div className="w-full">
                  <input
                    type="text"
                    placeholder="Name"
                    className="w-full p-2 bg-transparent border-b-2 border-[#F3E3E2CC] focus:border-primary"
                    {...register("name", { required: "Name is required" })}
                  />
                  {errors.name && (
                    <span className="text-red-500 text-sm">
                      {errors.name.message}
                    </span>
                  )}
                </div>
                <div className="w-full">
                  <input
                    type="text"
                    placeholder="Address"
                    className="w-full p-2 bg-transparent border-b-2 border-[#F3E3E2CC] focus:border-primary"
                    {...register("address", {
                      required: "Address is required",
                    })}
                  />
                  {errors.address && (
                    <span className="text-red-500 text-sm">
                      {errors.address.message}
                    </span>
                  )}
                </div>
              </div>
              <div className="w-full">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full p-2 bg-transparent border-b-2 border-[#F3E3E2CC] focus:border-primary"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value:
                        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                      message: "Invalid email address",
                    },
                  })}
                />
                {errors.email && (
                  <span className="text-red-500 text-sm">
                    {errors.email.message}
                  </span>
                )}
              </div>
              <div className="w-full">
                <textarea
                  placeholder="Type Your Message ..."
                  className="w-full p-2 bg-transparent border-b-2 border-[#F3E3E2CC] focus:border-primary"
                  {...register("message", { required: "Message is required" })}
                ></textarea>
                {errors.message && (
                  <span className="text-red-500 text-sm">
                    {errors.message.message}
                  </span>
                )}
              </div>
              <button
                type="submit"
                className="w-full p-1.5 bg-neutral text-accent text-lg rounded-md transition hover:bg-[#e6d5d2]"
              >
                Send
              </button>
              {successMessage && (
                <div className="text-green-500 text-center mt-4">
                  {successMessage}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
