import '../../App.css'

function Services() {
  const pageHeading = "SERVICES";

  return (
    <>
      <div className="p-10">
        <div className="text-2xl font-bold w-full tracking-[3px] text-primary-accent-color">
          {pageHeading.split("").map((char, i) => (
            <span className="animated-letter" key={i} style={{ animationDelay: `${i * 0.3}s` }}>
              {char}
            </span>
          ))}
        </div>
        <div className="text-5xl font-bold mt-10">
          Tailored Services For Your Dreams
        </div>
      </div>
    </>
  );
}

export default Services;
