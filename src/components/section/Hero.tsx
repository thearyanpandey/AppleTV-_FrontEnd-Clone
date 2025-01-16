import { useScroll, useTransform, motion } from "framer-motion";
import Button from "../Button";
import { Container } from "../Container";
import { useRef } from "react";

function Hero() {
  const videoContainerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: videoContainerRef,
    offset: ["start start", "end end"],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.7, 1], [1, 1, 0]);

  return (
    <div className="bg-backgound relative text-white">
      <motion.div
        style={{ opacity }}
        ref={videoContainerRef}
        className="absolute left-0 -top-[--header-row-height] h-[200vh] "
      >
        <video
          className="sticky top-0 h-screen object-cover "
          autoPlay
          muted
          loop
          src="https://videos.pexels.com/video-files/8102528/8102528-uhd_2560_1440_25fps.mp4"
        />
      </motion.div>
      <Container className="relative z-10 pb-7 h-[--hero-height]  ">
        <motion.div
          variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
          whileInView="visible"
          exit="hidden"
          animate="hidden"
          viewport={{ amount: 0.98 }}
          className="h-full flex flex-col justify-end items-start"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold mb-10">
            All Apple Originals. <br />
            Only on Apple TV+.
          </h1>
          <Button size="large" className="mb-14">
            Stream Now
          </Button>
          <p className="font-semibold mb-8">Watch on the 📺 app</p>
        </motion.div>
      </Container>
    </div>
  );
}

export default Hero;
