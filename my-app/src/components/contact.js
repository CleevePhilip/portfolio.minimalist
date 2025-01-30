import React, { useRef, useState, useEffect } from "react";
import { ParallaxLayer } from "@react-spring/parallax";
import axios from "axios";
import ReCAPTCHA from "react-google-recaptcha";

const ContactSection = () => {
  const sectionRef = useRef(null);

  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [captchaValue, setCaptchaValue] = useState(null); // Store captcha value

  useEffect(() => {
    {
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCaptchaChange = (value) => {
    setCaptchaValue(value); // Update the captcha value
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (!captchaValue) {
      alert("Please verify you're not a robot.");
      setLoading(false);
      return;
    }

    try {
      // Send form data and captcha value to the backend
      const response = await axios.post(
        `https://portfolio-server-indol-rho.vercel.app/send_mail`, // Updated endpoint
        {
          email: formData.email,
          name: formData.name,
          message: formData.message,
          captcha: captchaValue, // Include CAPTCHA value to validate on the backend
        }
      );

      if (response.data.success) {
        alert("Message sent successfully!");

        // Clear form fields after successful submission
        setFormData({ name: "", email: "", message: "" });
        setCaptchaValue(null); // Reset CAPTCHA
      } else {
        alert("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      alert("Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <ParallaxLayer
      offset={5}
      speed={0.6}
      className="flex items-center justify-center bg-[#8FBC8F] text-white p-8 md:p-10 lg:p-12 z-0 relative overflow-hidden"
    >
      <div className="absolute top-[-50px] left-[-50px] w-[200px] h-[200px] rounded-full bg-[rgba(255,255,255,0.1)] z-[-1]" />
      <div className="absolute bottom-[-100px] right-[-100px] w-[300px] h-[300px] rounded-full bg-[rgba(255,255,255,0.1)] z-[-1]" />

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

        <div className="flex flex-col gap-4 max-w-[400px] w-full">
          <div className="relative">
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
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
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="pl-10 pr-3 py-2 text-[#556B2F] text-base rounded-lg border border-[#556B2F] w-full"
            />
            <span className="absolute left-2 top-1/2 transform -translate-y-1/2 text-[#556B2F] text-xl">
              ✉️
            </span>
          </div>

          <div className="relative">
            <textarea
              name="message"
              required
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows="4"
              className="pl-10 pr-3 py-2 text-[#556B2F] text-base rounded-lg border border-[#556B2F] w-full"
            />
            <span className="absolute left-2 top-2 text-[#556B2F] text-xl">
              📝
            </span>
          </div>

          {/* ReCAPTCHA */}
          <ReCAPTCHA
            sitekey={`${process.env.NEXT_PUBLIC_CAPTCHA_SITE_KEY}`} // Replace with your Google reCAPTCHA site key
            onChange={handleCaptchaChange}
          />

          <button
            onClick={handleSubmit}
            className="px-4 py-2 text-base rounded-lg bg-[#556B2F] text-white cursor-pointer transition-colors duration-300 ease-in-out hover:bg-[#6B8E23]"
            disabled={loading}
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </div>
      </div>
    </ParallaxLayer>
  );
};

export default ContactSection;
