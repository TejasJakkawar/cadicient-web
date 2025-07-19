import Heading from "../../components/Heading/Heading";
import data from "../../constants/constants.json";

const Services = () => {
  return (
    <>
      <div className="p-10">
        <Heading heading={data?.services?.heading} />
        <div className="text-5xl font-bold mt-10">
          {data?.services?.subheading}
        </div>
      </div>
    </>
  );
};

export default Services;
