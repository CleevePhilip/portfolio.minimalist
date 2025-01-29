import React, { useRef, useState, useEffect } from "react";
import { ParallaxLayer } from "@react-spring/parallax";

const ContactSection = () => {
  const sectionRef = useRef(null); // Reference to the section
  const [isVisible, setIsVisible] = useState(false);

  // Intersection Observer to detect visibility of the section
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.3, // Trigger when 30% of the section is visible
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    // Cleanup observer on component unmount
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <ParallaxLayer
      offset={5}
      speed={0.6}
      className="flex items-center justify-center bg-[#8FBC8F] text-white p-8 md:p-10 lg:p-12 z-0 relative overflow-hidden"
    >
      {/* Decorative Circles */}
      <div className="absolute top-[-50px] left-[-50px] w-[200px] h-[200px] rounded-full bg-[rgba(255,255,255,0.1)] z-[-1]" />
      <div className="absolute bottom-[-100px] right-[-100px] w-[300px] h-[300px] rounded-full bg-[rgba(255,255,255,0.1)] z-[-1]" />

      {/* Content */}
      <div
        ref={sectionRef}
        className={`relative z-10 transition-all duration-700 ${
          isVisible ? "animate-fade-in-up" : "opacity-0"
        }`}
      >
        <h2 className="text-[clamp(2rem,6vw,3rem)] font-bold mb-4">
          Contact Me
        </h2>
        <p className="text-[clamp(1rem,4vw,1.2rem)] mb-8 text-center">
          Let's connect! Feel free to reach out for collaborations or just a
          friendly chat.
        </p>
        <form className="flex flex-col gap-4 max-w-[400px] w-full">
          {/* Input Fields with Icons */}
          <div className="relative">
            <input
              type="text"
              placeholder="Your Name"
              className="pl-10 pr-3 py-2 text-[#556B2F] text-base rounded-lg border border-[#556B2F] w-full"
            />
            <span className="absolute left-2 top-1/2 transform -translate-y-1/2 text-[#556B2F] text-xl">
              👤
            </span>
          </div>
          <div className="relative">
            <input
              type="email"
              placeholder="Your Email"
              className="pl-10 pr-3 py-2 text-[#556B2F] text-base rounded-lg border border-[#556B2F] w-full"
            />
            <span className="absolute left-2 top-1/2 transform -translate-y-1/2 text-[#556B2F] text-xl">
              ✉️
            </span>
          </div>
          <div className="relative">
            <textarea
              placeholder="Your Message"
              rows="4"
              className="pl-10 pr-3 py-2 text-[#556B2F] text-base rounded-lg border border-[#556B2F] w-full"
            />
            <span className="absolute left-2 top-2 text-[#556B2F] text-xl">
              📝
            </span>
          </div>
          <button
            type="submit"
            className="px-4 py-2 text-base rounded-lg bg-[#556B2F] text-white cursor-pointer transition-colors duration-300 ease-in-out hover:bg-[#6B8E23]"
          >
            Send Message
          </button>
        </form>
      </div>
    </ParallaxLayer>
  );
};

export default ContactSection;
