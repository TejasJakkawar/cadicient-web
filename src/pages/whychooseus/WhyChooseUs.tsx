import "./WhyChooseUs.css";
import data from "../../constants/constants.json";
import Heading from "../../components/Heading/Heading";

const WhyChooseUs = () => {
  return (
    <div id="why" className="why-choose-us-component">
        <div className="p-10">
            <Heading heading={data?.whychooseus?.heading} />
        </div>
        <div className="content-div relative mt-10 mb-10 md:mb-16 lg:mb-20">
            <div className="hidden lg:block absolute right-0 top-0 h-full w-[80px] bg-[var(--cadicient-primary-accent-color)] z-0" />
            <div className="pt-[2%] pb-[5%] px-[5%] items-center justify-center md:px-0 flex flex-col md:flex-row text-center md:text-left md:pl-[15%] md:max-w-[70%] lg:px-[100px] lg:max-w-[100%]">
                <div className="w-full md:w-[30%] lg:w-[40%] flex justify-center items-center">
                    <img
                        className="h-[150px]"
                        src="favicons/why-we-started.png"
                        alt="why-we-started"
                    />
                </div>
                <div className="w-full md:w-[60%] lg:w-[50%] mb-6 md:mb-0 md:pl-[6px] lg:pl-[20px]">
                    <div className="mt-4">
                        <p className="text-xl font-semibold md:font-bold lg:font-bold md:text-2xl lg:text-2xl">
                            {data?.whychooseus?.subheading}
                        </p>
                    </div>
                    <div className="mt-2">
                        <p className="text-zinc-400">{data?.aboutus?.whatsubcontent}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default WhyChooseUs;