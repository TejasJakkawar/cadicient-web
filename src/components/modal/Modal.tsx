import { X } from "lucide-react";
import "./modal.css";
import Carousel from "../Carousel/Carousel";
import "../Carousel/Carousel.css";
import { useEffect, useState } from "react";
import type { serviceProps } from "../../types/Services";

type modalProps = {
  isOpen: boolean;
  onClose: any;
  data: serviceProps;
};

const Modal = (props: modalProps) => {
  const { isOpen, onClose, data } = props;

  const [show, setShow] = useState(false);

  // Trigger animation when mounted
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => setShow(true), 10); // Tiny delay to trigger animation
    } else {
      setShow(false);
    }
  }, [isOpen]);

  // Don't render if fully closed
  if (!isOpen && !show) return null;

  return (
    <div>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black transition-opacity duration-300 z-40 ${
          show
            ? "opacity-50 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      />

      {/* Modal Box */}
      <div
        className={`fixed mt-[100px] inset-0 z-50 flex items-center justify-center transition-all duration-500 ease-out ${
          show
            ? "scale-100 opacity-100 pointer-events-auto"
            : "scale-90 opacity-0 pointer-events-none"
        }`}
      >
        <div
          onScroll={(e) => e.stopPropagation()}
          onWheel={(e) => e.stopPropagation()}
          onTouchMove={(e) => e.stopPropagation()}
          className="bg-neutral-950 rounded-xl shadow-lg w-[95vw] h-[calc(100vh-100px)] px-4 sm:px-6 md:px-10 pb-10 relative overflow-y-auto"
        >
          {/* Header */}
          <div className="sticky top-0 bg-neutral-950 text-2xl sm:text-3xl font-bold h-[70px] flex items-center justify-center z-10">
            {data?.heading}
            <div
              onClick={onClose}
              className="absolute right-4 sm:right-6 text-neutral-400 hover:text-neutral-300 cursor-pointer"
            >
              <X size={28} />
            </div>
          </div>

          {/* Main Section */}
          <div className="flex flex-col lg:flex-row mt-8 gap-6">
            <img
              src={data?.img}
              className="rounded-xl w-full max-w-[500px] h-auto object-cover"
              alt={data?.alt}
            />
            <div className="flex flex-col text-left">
              <span className="text-lg sm:text-xl font-bold mb-4">
                {data?.subheading}
              </span>
              <span className="text-sm font-medium text-zinc-400">
                {data?.description}
              </span>
            </div>
          </div>

          {/* CTA */}
          <div className="flex justify-center w-full mt-10">
            <button className="bg-primary-accent-color text-base sm:text-xl font-bold rounded-xl py-2 px-6 sm:px-10">
              Schedule a free appointment
            </button>
          </div>

          {/* Offerings */}
          <div className="flex flex-col items-center w-full mt-10">
            <span className="text-xl sm:text-3xl font-bold text-center">
              Some Of Our Offerings
            </span>
            <div className="flex flex-wrap justify-center mt-6">
              {data?.offerings.map((offering, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center box-border w-[360px] px-7 offerings mt-10"
                >
                  <img
                    src={offering?.img}
                    alt={offering?.alt}
                    height={70}
                    width={70}
                  />
                  <div className="text-base text-primary-accent-color font-semibold my-2">
                    {offering?.category}
                  </div>
                  <div className="text-lg font-bold mb-2">
                    {offering?.offering}
                  </div>
                  <div className="text-sm font-normal text-zinc-400">
                    {offering?.desc}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
