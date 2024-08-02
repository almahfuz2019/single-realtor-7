
import Image from "next/image";

const socialLinks = [
  {
    href: "https://facebook.com",
    icon: "/Images/About/facebook.webp",
    alt: "Facebook",
  },
  {
    href: "https://twitter.com",
    icon: "/Images/About/twitter.webp",
    alt: "Twitter",
  },
  {
    href: "https://instagram.com",
    icon: "/Images/About/instagram.webp",
    alt: "Instagram",
  },
];

export default function AboutAlisha() {
  return (
    <section id="aboutme" className="bg-[#EBE0CF] px-4 py-16 md:py-20 xl:py-24">
      {/* Header */}
      <header>
        <h2
          data-aos="fade-up"
          className="text-4xl md:text-5xl font-normal text-center font-merriweather text-accent mb-12 md:mb-16"
        >
          About
          <span className="text-[#E76D57]"> Alisha Lehman</span>
        </h2>
      </header>
      <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row items-center gap-12 md:gap-20">
        <div className="relative mb-6 md:mb-0 md:mr-8" data-aos="fade-right">
          <Image
            src="/Images/About/me.webp"
            alt="Alisha Lehman"
            className="rounded-lg"
            width={366}
            height={376}
          />
          <div className="flex space-x-4 justify-center items-center mt-6">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-accent rounded-lg p-1.5 hover:bg-primary transition duration-300 ease-in-out transform hover:scale-110"
              >
                <Image width="30" height="30" src={link.icon} alt={link.alt} />
              </a>
            ))}
          </div>
        </div>
        <div className="flex-1" data-aos="fade-left">
          <p className="text-[#000000CC] text-lg md:text-xl mb-4 font-roboto text-justify">
            If you're looking for the top realtor in Waco, Toronto, <br />{" "}
            Alisha Lehman from NextHome Our Town is widely recognized as a
            leading real estate agent in the area. Alisha is a native Wacoan
            with over 15 years of professional sales experience, including 10
            years in new construction. She holds multiple real estate
            designations such as ePRO, RENE, ABR, SRS, GRI, and CLHMS, which
            highlight her expertise in various aspects of real estate
            transactions.
          </p>
          <p className="text-[#000000CC] text-lg md:text-xl mb-4 font-roboto text-justify">
            Alisha is known for her deep roots in the local community, her
            extensive knowledge of the Waco real estate market, and her
            commitment to providing top-notch service to her clients. Her
            background includes a strong focus on leveraging technology to
            enhance the buying and selling process, which is crucial in today's
            competitive real estate environment.
          </p>
          <p className="text-[#000000CC] text-lg md:text-xl mb-4 font-roboto text-justify">
            Clients appreciate her thorough understanding of the local market,
            her strategic approach to negotiations, and her personalized
            service. If you're considering buying or selling a home in Waco,
            Alisha Lehman is a top choice to ensure a smooth and successful
            transaction​.
          </p>
        </div>
      </div>
    </section>
  );
}
