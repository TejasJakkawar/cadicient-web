import { useCallback, type ReactNode } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import "./Carousel.css";
import { ChevronLeft, ChevronRight } from "lucide-react";

type carouselProps = {
  children: ReactNode;
};

const Carousel = (props: carouselProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ playOnInit: true, delay: 3000 }),
  ]);

  const onPrevButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollPrev();
  }, [emblaApi]);

  const onNextButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollNext();
  }, [emblaApi]);

  const onAutoplayButtonClick = useCallback(
    (callback: any) => {
      const autoplay = emblaApi?.plugins()?.autoplay;
      if (!autoplay) return;

      const resetOrStop =
        autoplay.options.stopOnInteraction === false
          ? autoplay.reset
          : autoplay.stop;

      resetOrStop();
      callback();
      toggleAutoplay();
    },
    [emblaApi]
  );

  const toggleAutoplay = useCallback(() => {
    const autoplay = emblaApi?.plugins()?.autoplay;
    if (!autoplay) return;

    const playOrStop = autoplay.isPlaying() ? autoplay.stop : autoplay.play;
    playOrStop();
  }, [emblaApi]);

  return (
    <div className="carousel carousel-fade">
      <div className="carousel-viewport" ref={emblaRef}>
        <div className="carousel-container">{props.children}</div>
      </div>

      <div className="w-full flex justify-center mt-5 cursor-pointer">
        <div
          className="w-[40px] flex justify-center"
          onClick={() => onAutoplayButtonClick(onPrevButtonClick)}
        >
          <ChevronLeft size={25} strokeWidth={3} />
        </div>
        <div
          className="w-[40px] flex justify-center"
          onClick={() => onAutoplayButtonClick(onNextButtonClick)}
        >
          <ChevronRight size={25} strokeWidth={3} />
        </div>
      </div>
    </div>
  );
};

export default Carousel;
