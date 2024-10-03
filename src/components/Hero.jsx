import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { heroVideo, smallHeroVideo } from "../utils";
import { useState, useEffect, useRef } from "react";

const Hero = () => {
  const [videoSrc, setVideoSrc] = useState(window.innerWidth < 768 ? smallHeroVideo : heroVideo);
  const videoRef = useRef(null);

  const handleResize = () => {
    if (window.innerWidth < 768) {
      setVideoSrc(smallHeroVideo);
    } else {
      setVideoSrc(heroVideo);
    }
  };

  const handleSmoothLoop = () => {
    const video = videoRef.current;
    const loopStart = video.duration - 2; // Start the loop 5 seconds before the end

    if (video.currentTime >= video.duration - 0.9) {
      video.currentTime = loopStart;
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    video.addEventListener('timeupdate', handleSmoothLoop);
    return () => {
      video.removeEventListener('timeupdate', handleSmoothLoop);
    };
  }, [videoSrc]);

  useGSAP(() => {
    gsap.to("#hero", { opacity: 1, delay: 1.5 });
    gsap.to("#cta", { opacity: 1, y: -50, delay: 2 });
  }, []);

  return (
    <section className="w-full nav-height bg-black relative">
      <div className="h-5/6 w-full flex-center flex-col">
        <p id="hero" className="hero-title">iPhone 15 Pro</p>
        <div className="md:w-10/12 w-9/12">
          <video
            className="pointer-events-none"
            autoPlay
            muted
            loop={false} // Loop manually, not automatically
            playsInline={true}
            key={videoSrc}
            ref={videoRef}
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
        </div>
      </div>
      <div id="cta" className="flex flex-col items-center opacity-0 translate-y-20">
        <a href="#highlights" className="btn">Buy</a>
        <p className="font-normal text-xl">From @199/month or @999</p>
      </div>
    </section>
  );
};

export default Hero;
