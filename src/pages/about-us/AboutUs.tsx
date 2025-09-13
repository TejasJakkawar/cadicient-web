import data from "../../constants/constants.json";
import "./aboutus.css";
import Heading from "../../components/Heading/Heading";
import useCountUpOnView from "./CountUp";

const AboutUs = () => {
  const details = Object.values(data?.workdetails || {});
  return (
    <div className="about-us-component">
      <div className="p-10">
        <Heading heading={data?.aboutus?.heading} />
        <div className="text-5xl font-bold mt-10">
          {data?.aboutus?.subheading}
        </div>
      </div>
      <div className="content-div">
        <div className="pt-[5%] px-[5%] items-center justify-center md:px-0 flex flex-col md:flex-row text-center md:text-left md:pl-[15%] md:max-w-[70%] lg:px-[100px] lg:max-w-[100%]">
          <div className="w-full md:w-[40%] lg:w-[50%]">
            <p className="font-bold text-2xl text-white text-[1.5rem] lg:text-[2.5rem] mb-[20px] mr-5">
              {data?.aboutus?.contentHeading}
            </p>
            <div className="hidden md:block bg-[var(--cadicient-primary-accent-color)] text-white rounded max-w-fit mt-10">
              <p className="font-bold text-xl text-white pl-4 pr-10 py-3 animate-pulse-fade">
                {data?.aboutus?.experience}
              </p>
            </div>
          </div>
          <div className="w-full border-b-2 border-[var(--cadicient-primary-accent-color)] md:hidden mb-4 !mt-0"></div>
          <div className="w-full md:w-[60%] lg:w-[50%] md:border-l-2 md:border-[var(--cadicient-primary-accent-color)] mb-6 md:pl-[6px] lg:pl-[20px]">
            <p className="font-medium md:font-semibold lg:font-semibold">
              {data?.aboutus?.contentdesc}
            </p>
            <div className="mt-4">
              <p className="text-zinc-400">
                {data?.aboutus?.contentsubsection}
              </p>
            </div>
          </div>
        </div>
        <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 flex flex-col items-center justify-center text-center md:hidden">
          <div className="bg-[var(--cadicient-primary-accent-color)] text-white rounded ml-4 sm:ml-6 md:ml-10">
            <p className="font-bold text-xl text-white pl-4 pr-6 py-3 animate-pulse-fade">
              {data?.aboutus?.experience}
            </p>
          </div>
        </div>
      </div>
      <div className="work-details my-10 px-[5%]">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-center justify-items-center">
          {details.map((item, index) => {
            const numericValue = parseInt(item.value); // handle values like "2500+"
            const suffix = item.value.replace(/[0-9]/g, ""); // extract suffix like "+"
            const { count, ref } = useCountUpOnView(numericValue, 2000); // animate in 2s

            return (
              <div key={index} className="flex flex-col items-center" ref={ref}>
                <p className="text-3xl font-bold text-primary-accent-color">
                  {count}
                  {suffix}
                </p>
                <p className="text-base font-semibold text-white pb-5">
                  {item.key}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
