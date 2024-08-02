import Image from "next/image";
import Marquee from "react-fast-marquee";

const insightsData = [
  {
    title: "Essential Home Buying Guidelines for First-Time Buyers",
    description:
      "Explore inspiring stories of successful real estate transactions and learn valuable tips from experienced professionals.",
    imageUrl: "/Images/Blog/blog1_image.webp",
    link: "#",
  },
  {
    title: "Essential Home Buying Guidelines for First-Time Buyers",
    description:
      "Delve into detailed descriptions of the most sought-after neighborhoods and what makes them unique.",
    imageUrl: "/Images/Blog/blog1_image.webp",
    link: "#",
  },
  {
    title: "Essential Home Buying Guidelines for First-Time Buyers",
    description:
      "Stay updated with the latest market trends and insights to make informed real estate decisions.",
    imageUrl: "/Images/Blog/blog1_image.webp",
    link: "#",
  },
  {
    title: "Essential Home Buying Guidelines for First-Time Buyers",
    description:
      "Read about the experiences of homeowners and get inspired by their journeys in the real estate world.",
    imageUrl: "/Images/Blog/blog1_image.webp",
    link: "#",
  },
  {
    title: "Essential Home Buying Guidelines for First-Time Buyers",
    description:
      "Read about the experiences of homeowners and get inspired by their journeys in the real estate world.",
    imageUrl: "/Images/Blog/blog1_image.webp",
    link: "#",
  },
];

export default function Insights() {
  return (
    <div
      id="insights"
      className="px-4 py-20 md:py-24 xl:py-28 bg-[#EBE0CF] overflow-hidden"
    >
      <div className="max-w-screen-xl mx-auto mb-10 md:mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 justify-between items-end">
          <div data-aos="fade-right">
            <h1 className="text-4xl md:text-5xl font-merriweather font-normal text-accent">
              Blog & Insights
            </h1>
            <p className="text-base md:text-xl font-normal font-raleway mt-4 text-justify text-[#211C1DCC]">
              Explore Expert Tips, Market Trends, and Homeownership Advice. Stay
              Informed and Inspired with Our Latest Real Estate Updates and
              Community News.
            </p>
          </div>
          <div className="flex justify-end" data-aos="fade-left">
            <button className="mt-2 md:mt-8 border border-primary text-accent font-medium py-2 px-6 rounded-lg hover:bg-primary hover:text-white transition-all duration-300 ease-in-out hover:shadow-lg">
              Browse All Condos
            </button>
          </div>
        </div>
      </div>
      <Marquee
        className="lg:max-w-screen-xl mx-auto"
        speed={60}
        pauseOnHover={true}
      >
        <div
          className="flex mr-5 gap-5 justify-start items-start w-full flex-nowrap"
          data-aos="zoom-in"
        >
          {insightsData.map((insight, index) => (
            <div key={index} className="max-w-[300px] md:max-w-[350px]">
              <Image
                src={insight.imageUrl}
                height={250}
                width={250}
                alt={insight.title}
                className="w-full object-cover"
              />
              <div className="flex flex-col gap-4 mt-4">
                <div className="flex items-center justify-between">
                  <button className="py-2 rounded-lg bg-[#A61414] text-neutral text-base px-6">
                    Guideline
                  </button>
                  <p className="text-accent text-xl flex items-center gap-3">
                    <Image
                      src="/Images/Blog/date.webp"
                      height="24"
                      width="24"
                      alt="calendar"
                    />
                    20 May, 2024
                  </p>
                </div>
                <h5 className="text-lg md:text-xl lg:text-2xl font-normal font-merriweather text-accent hover:underline underline-offset-4 cursor-pointer">
                  {insight.title}
                </h5>
              </div>
            </div>
          ))}
        </div>
      </Marquee>
    </div>
  );
}
