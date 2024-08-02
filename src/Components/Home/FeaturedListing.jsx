
import Image from "next/image";

const condos = [
  {
    id: 1,
    imageSrc: "/Images/Featured/Featured1_Image.png",
    status: "For Sell",
    price: "$4,25,000",
    title: "Riverfront Residences",
    address: "12/A, 42 Trudo Road, Toronto",
    details: [
      {
        icon: "/Images/Featured/bed.webp",
        text: "3 Beds",
      },
      {
        icon: "/Images/Featured/bath.webp",
        text: "3 Baths",
      },
      {
        icon: "/Images/Featured/measurement.webp",
        text: "5430 Sq/Ft",
      },
    ],
  },
  {
    id: 2,
    imageSrc: "/Images/Featured/Featured2_Image.png",
    status: "For Sell",
    price: "$4,25,000",
    title: "Lakeside Apartments",
    address: "45/B, 78 Sunny Road, Toronto",
    details: [
      {
        icon: "/Images/Featured/bed.webp",
        text: "2 Beds",
      },
      {
        icon: "/Images/Featured/bath.webp",
        text: "2 Baths",
      },
      {
        icon: "/Images/Featured/measurement.webp",
        text: "3200 Sq/Ft",
      },
    ],
  },
  {
    id: 3,
    imageSrc: "/Images/Featured/Featured3_Image.png",
    status: "For Sell",
    price: "$4,25,000",
    title: "Urban Heights",
    address: "98/C, 12 Green Road, Toronto",
    details: [
      {
        icon: "/Images/Featured/bed.webp",
        text: "4 Beds",
      },
      {
        icon: "/Images/Featured/bath.webp",
        text: "4 Baths",
      },
      {
        icon: "/Images/Featured/measurement.webp",
        text: "4500 Sq/Ft",
      },
    ],
  },
  // Add more condo objects as needed
];

export default function FeaturedCondos() {

  return (
    <div id="listing" className="bg-[#EBE0CF] px-4 py-16 md:py-20 xl:py-24">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        <header className="mb-12" data-aos="fade-right">
          <h2 className="text-4xl md:text-5xl font-merriweather mb-4">
            <span className="text-[#E76D57]">Featured</span> Condos
          </h2>
          <p className="text-[#211C1DCC] mb-6 text-base md:text-xl">
            Explore Our Selection of Premium Condos: Luxurious Living Spaces
            with Modern Amenities in Prime Locations. Find Your Perfect Urban
            Retreat with Our Expertly Curated Listings.
          </p>
          <div className="flex justify-end lg:justify-start">
            <button className="border border-primary text-accent font-medium py-2 px-6 rounded-lg hover:bg-primary hover:text-white transition-all duration-300 ease-in-out hover:shadow-lg">
              Browse All Condos
            </button>
          </div>
        </header>
        {condos.map((condo) => (
          <div
            key={condo.id}
            className="flex sm:items-center flex-col sm:flex-row rounded-2xl overflow-hidden border border-[#211C1D80]"
            data-aos="fade-up"
          >
            <Image
              height="315"
              width="349"
              src={condo.imageSrc}
              alt={condo.title}
              className="sm:w-1/2 h-auto object-cover w-full mb-6 md:mb-0"
            />
            <div className="sm:w-2/3 pl-3 pb-4 flex  flex-col">
              <div>
                <div className="flex justify-start items-center gap-4 mb-2">
                  <span className="text-[#211C1DCC] border border-[#211C1D80] text-base font-medium px-2 py-1 font-lato rounded-lg">
                    {condo.status}
                  </span>
                  <span className="text-neutral bg-[#A61414] rounded-lg px-2 py-1 text-xl">
                    {condo.price}
                  </span>
                </div>
                <h3 className="md:text-[26px] text-2xl font-normal text-accent mt-6">
                  {condo.title}
                </h3>
                <p className="text-[#211C1DCC] text-lg mb-2 flex items-start justify-start gap-2 mt-4">
                  <Image
                    height="20"
                    width="20"
                    src="/Images/Featured/location.webp"
                    alt="Location Icon"
                    className=""
                  />{" "}
                  {condo.address}
                </p>
              </div>
              <div className="flex flex-wrap gap-1 justify-start text-base text-[#151515]">
                {condo.details.map((detail, index) => (
                  <span
                    key={index}
                    className="flex items-start gap-1 pr-3 h-6 border-[#013F7D]"
                  >
                    <Image
                      height="20"
                      width="20"
                      src={detail.icon}
                      alt={detail.text}
                      className=""
                    />{" "}
                    {detail.text}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
