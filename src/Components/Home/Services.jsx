
import Image from "next/image";

const services = [
  {
    title: "Home Buying Assistance",
    description:
      "Expert guidance through every step of purchasing your new home, from search and negotiation to closing and move-in.",
    icon: "https://i.ibb.co/9ngB853/Mask-group-32.png",
  },
  {
    title: "Home Selling Services",
    description:
      "Home selling support, including market analysis, professional staging, marketing, and expert negotiation for top dollar.",
    icon: "https://i.ibb.co/JrdcQYG/Mask-group-24.png",
  },
  {
    title: "Best Rental Listings",
    description:
      "Home selling support, including market analysis, professional staging, marketing, and expert negotiation for top dollar.",
    icon: "https://i.ibb.co/JrdcQYG/Mask-group-24.png",
  },
  {
    title: "Home Analysis & Valuation",
    description:
      "Gain insights into local market trends and accurate property valuations to make informed decisions.",
    icon: "https://i.ibb.co/nMCgQ6q/Mask-group-35.png",
  },
  {
    title: "Mortgage Consultation",
    description:
      "Expert advice on mortgage options, rates, and financing strategies tailored to your unique needs and financial goals.",
    icon: "https://i.ibb.co/TTKn9Gn/Mask-group-36.png",
  },
  {
    title: "Relocation Support",
    description:
      "Assistance for relocating clients, including neighborhood insights, logistical support for a smooth transition.",
    icon: "https://i.ibb.co/JrdcQYG/Mask-group-24.png",
  },
  // Additional services...
];

export default function Services() {


  return (
    <article className="bg-[#E0D7C7]  px-4 py-16 md:py-20 xl:py-28">
      {" "}
      {/* Using <article> for semantic HTML */}
      <div className="max-w-screen-xl mx-auto text-center">
        <header>
          <h2
            className="text-4xl md:text-5xl font-normal text-center font-merriweather text-accent mb-4"
            data-aos="fade-up"
          >
            <span className="text-[#E76D57]">Services</span> We Offer
          </h2>
          <p
            className="text-[#211C1DCC] mb-12 md:mb-16 text-base md:text-xl"
            data-aos="fade-up"
          >
            We simplify the process, you focus on the dream.
          </p>
        </header>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex items-start justify-start gap-4 md:gap-6"
              data-aos="fade-up"
            >
              <div className="bg-primary hover:shadow-2xl rounded-xl p-2 hover:scale-105 transition transform duration-300 ease-in-out">
                <Image
                  height="60"
                  width="60"
                  src={`${service.icon}`}
                  alt={service.title}
                  className=""
                />
              </div>
              <div className="text-left">
                <h3 className="text-2xl md:text-3xl font-normal text-[#211C1D] font-merriweather">
                  {service.title}
                </h3>
                <p className="text-[#211C1DCC] mt-2 text-lg md:text-xl font-roboto">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </article>
  );
}
