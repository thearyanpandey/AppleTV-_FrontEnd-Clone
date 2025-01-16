import { Movies, Movie, randomMoviesSet1, randomMoviesSet2 } from "../Movie";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import { useMemo, useRef, useState } from "react";
import { useWindowSize } from "react-use";
import Button from "../Button";

function VideoCarousel() {
  const middleVideoCarousel = useRef<HTMLDivElement>(null);
  const { width, height } = useWindowSize();
  const [carouselVariant, setCarouselVariant] = useState<"inactive" | "active">(
    "inactive"
  );

  const { scrollYProgress } = useScroll({
    target: middleVideoCarousel,
    offset: ["start start", "end start"],
  });

  const maximumScale = useMemo(() => {
    const windowYRatio = height / width;
    const xScale = 1.66667;
    const yScale = xScale * (16 / 9) * windowYRatio;
    return Math.max(xScale, yScale);
  }, [width, height]);

  const scale = useTransform(
    scrollYProgress,
    [0.3, 0.5, 0.66],
    [maximumScale * 1.1, maximumScale, 1]
  );

  const postersOpacity = useTransform(scrollYProgress, [0.64, 0.66], [0, 1]);
  const posterTranslateXLeft = useTransform(
    scrollYProgress,
    [0.64, 0.66],
    [-20, 0]
  );
  const posterTranslateXRight = useTransform(
    scrollYProgress,
    [0.64, 0.66],
    [20, 0]
  );

  
  useMotionValueEvent(scrollYProgress, "change", (progress) => {
    if (progress >= 0.67) {
      setCarouselVariant("active");
    } else {
      setCarouselVariant("inactive");
    }
  });

  return (
    <motion.div animate={carouselVariant} className="bg-backgound pb-8 ">
      <div
        ref={middleVideoCarousel}
        className="mt-[-100vh] h-[300vh] overflow-clip"
      >
        <div className="sticky top-0 flex h-screen items-center">
          <div className="relative left-1/2 mb-5 flex -translate-x-1/2 gap-5 ">
            <motion.div
              style={{ opacity: postersOpacity, x: posterTranslateXLeft }}
              className="w-[300px] md:w-[60vw] aspect-[9/16] md:aspect-video overflow-clip shrink-0"
            >
              <img
                className="w-full h-full object-cover rounded-2xl"
                src={Movies[0].poster}
                alt="Some Movie Poster"
              />
            </motion.div>
            <motion.div
              style={{ scale }}
              className="w-[300px] md:w-[60vw] aspect-[9/16] md:aspect-video overflow-clip shrink-0"
            >
              <img
                className="w-full h-full object-cover rounded-2xl"
                src={Movies[1].poster}
                alt="Some Movie Poster"
              />
              <motion.div
                variants={{
                  active: { opacity: 1 },
                  inactive: { opacity: 0 },
                }}
                className="absolute bottom-0 left-0 flex w-full flex-col items-center gap-4 p-5 text-lg text-white md:flex-row md:justify-between md:gap-0"
              >
                <p>Best video title ever</p>
                <Button>Watch now</Button>
              </motion.div>
            </motion.div>
            <motion.div
              style={{ opacity: postersOpacity, x: posterTranslateXRight }}
              className="w-[300px] md:w-[60vw] aspect-[9/16] md:aspect-video overflow-clip shrink-0 "
            >
              <img
                className="w-full h-full object-cover rounded-2xl"
                src={Movies[2].poster}
                alt="Some Movie Poster"
              />
            </motion.div>
          </div>
        </div>
      </div>
      <motion.div
        variants={{
          active: { opacity: 1, y: 0 },
          inactive: { opacity: 0, y: 20 },
        }}
        transition={{ duration: 0.4 }}
        className="-mt-[calc((100vh-(300px*(16/9)))/2)] pt-4 md:-mt-[calc((100vh-(60vw*(9/16)))/2)] space-y-3"
      >
        <SmallVideoCarousel movies={randomMoviesSet1} />
        <div className="[--carousel-offset:-32px] [--duration:74s] ">
          <SmallVideoCarousel movies={randomMoviesSet2} />
        </div>
      </motion.div>
    </motion.div>
  );
}

export default VideoCarousel;

const SmallVideoCarousel = ({ movies }: { movies: Movie[] }) => {
  return (
    <div className="overflow-clip">
      <div className="animate-carousel-move relative left-[var(--carousel-offset,0px)] flex gap-3">
        {movies.map((movies) => (
          <div className="w-[23vw] aspect-video shrink-0">
            <img
              className="w-full h-full rounded-2xl object-cover"
              src={movies.poster}
              alt="Some Movie Poster"
            />
          </div>
        ))}
      </div>
    </div>
  );
};
