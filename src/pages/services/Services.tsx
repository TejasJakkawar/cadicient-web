import '../../App.css'
import data from '../../constants/constants.json'

const Services = () => {
  return (
    <>
      <div className="p-10">
        <div className="text-2xl font-bold w-full tracking-[3px] text-primary-accent-color">
          {data?.services?.heading?.split("").map((char, i) => (
            <span className="animated-letter" key={i} style={{ animationDelay: `${i * 0.2}s` }}>
              {char}
            </span>
          ))}
        </div>
        <div className="text-5xl font-bold mt-10">
          {data?.services?.subheading}
        </div>
      </div>
    </>
  );
}

export default Services;
