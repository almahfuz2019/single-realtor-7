"use client";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const SearchArea = () => {
  return (
    <section
      className="relative overflow-hidden bg-cover bg-center px-4 py-16 md:py-20 xl:py-24 flex items-center justify-center my-16 md:my-20 xl:my-24"
      style={{
        backgroundImage: `url('https://i.ibb.co/7gcKCXd/Rectangle-161-2.png')`,
      }}
      id="guideline"
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 text-center text-white mx-auto max-w-[1420px]">
        {/* Section Header */}
        <header>
          <h1
            className="text-4xl md:text-5xl md:leading-[55px] font-merriweather"
            data-aos="fade-up"
          >
            Search Listings by Area, Price, and More
          </h1>
          <p
            className="mt-8 font-normal max-w-screen-lg mx-auto md:text-xl text-base text-[#E0D7C7CC] font-roboto"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Find Your Ideal Property: Utilize Our Advanced Search Tools to
            Browse Listings by Area, Price Range, Property Type and discover the
            Perfect Home or Investment Opportunity
          </p>
        </header>

        {/* Search Tabs */}
        <div
          className="md:mt-20 mt-16 w-full bg-neutral py-8 px-4 rounded-xl text-black"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <Tabs>
            <TabList className="flex flex-wrap justify-center space-x-2 lg:space-x-4 mb-8 font-merriweather">
              <Tab
                className="px-2 lg:px-4 py-2 cursor-pointer text-lg md:text-xl font-medium"
                selectedClassName="border-b-2 border-primary font-bold"
              >
                Sell
              </Tab>
              <Tab
                className="px-2 lg:px-4 py-2 cursor-pointer text-lg md:text-xl font-medium"
                selectedClassName="border-b-2 border-primary font-bold"
              >
                Buy
              </Tab>
              <Tab
                className="px-2 lg:px-4 py-2 cursor-pointer text-lg md:text-xl font-medium"
                selectedClassName="border-b-2 border-primary font-bold"
              >
                Rent
              </Tab>
            </TabList>

            {/* Sell Tab */}
            <TabPanel>
              <form className="flex flex-wrap lg:flex-nowrap justify-center space-y-4 lg:space-y-0 lg:space-x-4 font-roboto sm:px-20 lg:px-0">
                <select className="w-full lg:w-1/4 p-2 rounded-xl text-base bg-transparent border border-[#211C1DCC] text-[#211C1DCC]">
                  <option>Property Category</option>
                  <option>Property Category sell</option>
                  <option>Property Category</option>
                  <option>Property Category</option>
                  {/* Add more options here */}
                </select>
                <select className="w-full lg:w-1/4 p-2 text-[#211C1DCC] rounded-xl text-base bg-transparent border border-[#211C1DCC]">
                  <option>Location</option>
                  <option>Location1 sell</option>
                  <option>Location2</option>
                  {/* Add more options here */}
                </select>
                <select className="w-full lg:w-1/4 p-2 text-[#211C1DCC] rounded-xl text-base bg-transparent border border-[#211C1DCC]">
                  <option>Average Price</option>
                  <option>Average Price</option>
                  <option>Average Price</option>
                  <option>Average Price sell</option>
                  {/* Add more options here */}
                </select>
                <button
                  type="submit"
                  className="w-full lg:w-1/4 p-2 bg-primary text-lg md:text-2xl text-white rounded-xl transition duration-300 ease-in-out transform hover:shadow-2xl hover:bg-gradient-to-r hover:from-[#ea242493] hover:to-[#c61414ed]"
                >
                  Browse
                </button>
              </form>
            </TabPanel>

            {/* Buy Tab */}
            <TabPanel>
              <form className="flex flex-wrap lg:flex-nowrap justify-center space-y-4 lg:space-y-0 lg:space-x-4 font-roboto sm:px-20 lg:px-0">
                <select className="w-full lg:w-1/4 p-2 text-[#211C1DCC] rounded-xl text-base bg-transparent border border-[#211C1DCC]">
                  <option>Property Category</option>
                  <option>Property Category buy</option>
                  <option>Property Category</option>
                  <option>Property Category</option>
                  {/* Add more options here */}
                </select>
                <select className="w-full lg:w-1/4 p-2 text-[#211C1DCC] rounded-xl text-base bg-transparent border border-[#211C1DCC]">
                  <option>Location</option>
                  <option>Location1 buy</option>
                  <option>Location2</option>
                  {/* Add more options here */}
                </select>
                <select className="w-full lg:w-1/4 p-2 text-[#211C1DCC] rounded-xl text-base bg-transparent border border-[#211C1DCC]">
                  <option>Average Price</option>
                  <option>Average Price buy</option>
                  <option>Average Price</option>
                  <option>Average Price</option>
                  {/* Add more options here */}
                </select>
                <button
                  type="submit"
                  className="w-full lg:w-1/4 p-2 bg-primary text-lg md:text-2xl text-white rounded-xl transition duration-300 ease-in-out transform hover:shadow-2xl hover:bg-gradient-to-r hover:from-[#ea242493] hover:to-[#c61414ed]"
                >
                  Browse
                </button>
              </form>
            </TabPanel>

            {/* Rent Tab */}
            <TabPanel>
              <form className="flex flex-wrap lg:flex-nowrap justify-center space-y-4 lg:space-y-0 lg:space-x-4 font-roboto sm:px-20 lg:px-0">
                <select className="w-full lg:w-1/4 p-2 text-[#211C1DCC] rounded-xl text-base bg-transparent border border-[#211C1DCC]">
                  <option>Property Category</option>
                  <option>Property Category rent</option>
                  <option>Property Category</option>
                  <option>Property Category</option>
                  {/* Add more options here */}
                </select>
                <select className="w-full lg:w-1/4 p-2 text-[#211C1DCC] rounded-xl text-base bg-transparent border border-[#211C1DCC]">
                  <option>Location</option>
                  <option>Location1 rent</option>
                  <option>Location2</option>
                  {/* Add more options here */}
                </select>
                <select className="w-full lg:w-1/4 p-2 text-[#211C1DCC] rounded-xl text-base bg-transparent border border-[#211C1DCC]">
                  <option>Average Price</option>
                  <option>Average Price rent</option>
                  <option>Average Price</option>
                  {/* Add more options here */}
                </select>
                <button
                  type="submit"
                  className="w-full lg:w-1/4 p-2 bg-primary text-lg md:text-2xl text-white rounded-xl transition duration-300 ease-in-out transform hover:shadow-2xl hover:bg-gradient-to-r hover:from-[#ea242493] hover:to-[#c61414ed]"
                >
                  Browse
                </button>
              </form>
            </TabPanel>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default SearchArea;
