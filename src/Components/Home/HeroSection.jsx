
import Image from "next/image";

export default function HeroSection() {
 

  return (
    <div className="bg-[#E0D7C7] h-screen sm:h-auto 2xl:h-screen flex flex-col items-center justify-center">
      <div className="max-w-screen-xl mx-auto px-4 py-8 md:py-12">
        <div className="flex flex-col lg:flex-row justify-between items-center">
          <div
            className="text-center md:text-left mb-8 md:mb-0"
            data-aos="fade-right"
          >
            <h1 className="text-4xl md:text-6xl font-normal text-accent font-merriweather">
              Move with confidence, choose the{" "}
              <br className="lg:block hidden" />
              <span className="text-[#fc664b]">#1 realtor</span>
            </h1>
            <div className="mt-6 md:mt-10 flex flex-row gap-3 md:gap-6 justify-center sm:justify-start w-full font-roboto">
              <a
                href="#services"
                className="bg-accent px-8 md:px-10 py-2 md:py-2.5 rounded-lg text-neutral font-medium text-sm md:text-base lg:text-xl font-roboto transition-all duration-300 ease-in-out hover:bg-primary hover:text-neutral hover:shadow-lg"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                Contact Me
              </a>
              <a
                href="#contact"
                className="flex items-center justify-center gap-2 lg:gap-3 sm:w-auto rounded-md lg:rounded-lg border text-accent border-accent shadow focus:outline-none focus:ring px-4 md:px-5 py-2 md:py-2.5 font-medium text-sm md:text-base lg:text-xl font-roboto transition-all duration-300 ease-in-out hover:bg-[#e0d7c792] hover:shadow-lg"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <Image
                  src="https://i.ibb.co/TcyCmZ6/Mask-group-28.png"
                  height={20}
                  width={20}
                  alt="Call Icon"
                  className="h-4 w-4 md:h-5 md:w-auto"
                />
                Book A Call
              </a>
            </div>
            <div className="sm:justify-start justify-center items-center sm:items-start flex md:mt-10">
              <div
                className="mt-8 grid grid-cols-2 lg:grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-6 md:gap-x-16 md:gap-y-8 md:mb-16 lg:mb-0"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <div className="text-center">
                  <p className="text-[#fc664b] text-3xl md:text-5xl font-bold font-merriweather">
                    10
                  </p>
                  <p className="text-accent font-roboto text-sm md:text-base">
                    Years of experience
                  </p>
                </div>
                <div className="text-center">
                  <p className="text-[#fc664b] text-3xl md:text-5xl font-bold font-merriweather">
                    500+
                  </p>
                  <p className="text-accent font-roboto text-sm md:text-base">
                    Total transaction
                  </p>
                </div>
                <div className="text-center">
                  <p className="text-[#fc664b] text-3xl md:text-5xl font-bold font-merriweather">
                    1k+
                  </p>
                  <p className="text-accent font-roboto text-sm md:text-base">
                    Service holder
                  </p>
                </div>
                <div className="text-center">
                  <p className="text-[#fc664b] text-3xl md:text-5xl font-bold font-merriweather">
                    1B+
                  </p>
                  <p className="text-accent font-roboto text-sm md:text-base">
                    Net revenue till now
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="grid grid-cols-2 gap-4 items-end"
            data-aos="fade-left"
          >
            <div data-aos="zoom-in">
              <Image
                src="https://i.ibb.co/Yyh6qHw/Rectangle-3932.png"
                alt="Building"
                className="w-full rounded-lg"
                width={363}
                height={645}
              />
            </div>
            <div data-aos="zoom-in" data-aos-delay="100">
              <div>
                <Image
                  src="https://i.ibb.co/wp5MmD4/Rectangle-3931.png"
                  alt="Realtor"
                  className="w-full h-full object-cover rounded-lg"
                  width={363}
                  height={465}
                />
              </div>
              <div
                className="flex items-center justify-center gap-4 mt-4"
                data-aos="zoom-in"
                data-aos-delay="200"
              >
                <div>
                  <Image
                    src="https://i.ibb.co/qCRKhJy/Rectangle-3950.png"
                    alt="Handshake"
                    className="rounded-lg"
                    width={169}
                    height={200}
                  />
                </div>
                <div>
                  <Image
                    src="https://i.ibb.co/0ZDvF2D/Rectangle-3951.png"
                    alt="House showing"
                    className="object-cover rounded-lg"
                    width={169}
                    height={200}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
