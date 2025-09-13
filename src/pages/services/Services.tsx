import { ArrowRight, DraftingCompass } from "lucide-react";
import Heading from "../../components/Heading/Heading";
import data from "../../constants/constants.json";
import "./services.css";
import Carousel from "../../components/Carousel/Carousel";
import "../../components/Carousel/Carousel.css";
import { useState } from "react";
import Modal from "../../components/modal/Modal";
import type { serviceProps } from "../../types/Services";

const Services = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [currentService, setCurrentService] = useState<serviceProps>();

  const openModal = (service: serviceProps) => {
    setCurrentService(service);
    setIsModalOpen(true);
  };

  return (
    <>
      <div
        id="services"
        className={`p-5 md:p-10 flex flex-col items-center relative`}
      >
        <Heading heading={data?.services?.heading} />
        <div className="text-5xl font-bold mt-10">
          {data?.services?.subheading}
        </div>
        <div className="w-full pt-[50px] flex justify-center gap-10 flex-wrap items-center">
          <Carousel>
            {data?.services?.services?.map((service, index) => (
              <div
                className="carousel-slide"
                key={index}
                onClick={() => openModal(service?.service)}
              >
                <div className="w-[350px] h-[450px] border-2 border-t-6 border-zinc-700 rounded-xl service-container flex flex-col items-center py-[20px] px-[10px] sm:mx-10 max-sm:mx-2 cursor-pointer">
                  <div className="bg-primary-accent-color h-[100px] w-[100px] rounded-full flex justify-center items-center mt-5">
                    <DraftingCompass color="#fff" size={50} strokeWidth={3} />
                  </div>
                  <div className="text-md font-normal mt-5 text-zinc-600">
                    {service?.subText}
                  </div>
                  <div className="text-2xl font-bold mt-5">{service?.name}</div>
                  <div className="text-sm font-normal mt-5 text-zinc-400">
                    {service?.description.length > 150
                      ? service?.description.slice(0, 150) + "..."
                      : service?.description}
                  </div>
                  <div className="text-lg font-bold flex items-center mt-10 service-read-more">
                    READ MORE&nbsp;
                    <ArrowRight size={18} strokeWidth={3} />
                  </div>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        data={currentService}
      />
    </>
  );
};

export default Services;
