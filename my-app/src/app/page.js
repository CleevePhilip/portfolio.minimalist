import { Josefin_Sans, Montserrat } from "next/font/google";

const josefin_sans = Josefin_Sans({
  subsets: ["latin"],
});
const montserrat = Montserrat({
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div className="min-h-screen px-4 sm:px-10 md:px-20 lg:px-[10rem] font-sans">
      {/* Header */}
      <header className="py-6">
        <nav
          className={`flex justify-between items-center ${josefin_sans.variable} font-sans`}
        >
          <h1 className="text-3xl font-bold">Cleeve</h1>
          <ul className="text-lg flex items-center space-x-5">
            <li className="hover:text-gray-600 transition-colors">
              <a href="#home">HOME</a>
            </li>
            <li className="hover:text-gray-600 transition-colors">
              <a href="#about">ABOUT</a>
            </li>
            <li className="hover:text-gray-600 transition-colors">
              <a href="#skills">SKILLS</a>
            </li>
            <li className="hover:text-gray-600 transition-colors">
              <a href="#projects">PROJECTS</a>
            </li>
            <li className="hover:text-gray-600 transition-colors">
              <a href="#contacts">CONTACTS</a>
            </li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section
        className="flex flex-col lg:flex-row justify-between items-center py-6 space-y-6 lg:space-y-0 lg:space-x-10"
        id="home"
      >
        <figure className="w-full lg:w-[60%]">
          <img
            src="https://placehold.co/600x400"
            alt="Placeholder"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </figure>
        <div className="w-full lg:w-[40%]">
          <p
            className={`lg:text-5xl sm:text-3xl text-center lg:text-left ${josefin_sans.variable} lg:leading-loose`}
          >
            BUILDING DIGITAL EXPERIENCES THAT CONNECT, INSPIRE, AND IMPRESS.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section
        className="flex flex-col lg:flex-row justify-between items-center py-20 space-y-10 lg:space-y-0 lg:space-x-10 bg-gradient-to-r from-blue-50 to-purple-50"
        id="about"
      >
        <figure className="w-full lg:w-[40%] relative">
          <img
            src="https://placehold.co/500x500" // Replace with your image
            alt="About Me"
            className="w-full h-auto rounded-lg shadow-lg"
          />
          {/* Decorative Element */}
          <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-blue-500 rounded-full opacity-20"></div>
        </figure>
        <div className="w-full lg:w-[60%]">
          <h3 className={`text-4xl font-bold mb-6 ${josefin_sans.variable}`}>
            ABOUT ME
          </h3>
          <p className="text-lg text-gray-700 leading-relaxed">
            Hi, I’m <span className="font-semibold">Cleeve Wong</span>, a
            full-stack developer passionate about building responsive and
            user-friendly web applications. I’m currently a 4th-year IT student,
            constantly learning and improving to create better digital
            experiences.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mt-4">
            With a strong foundation in both front-end and back-end
            technologies, I specialize in creating seamless, scalable, and
            visually appealing solutions. My goal is to deliver products that
            not only meet but exceed user expectations.
          </p>
          {/* Skills List */}
          <div className="mt-6">
            <h4 className="text-xl font-semibold mb-4">
              Technologies I Work With:
            </h4>
            <ul className="flex flex-wrap gap-4">
              <li className="bg-blue-500 text-white px-4 py-2 rounded-lg">
                JavaScript
              </li>
              <li className="bg-blue-500 text-white px-4 py-2 rounded-lg">
                React
              </li>
              <li className="bg-blue-500 text-white px-4 py-2 rounded-lg">
                Next.js
              </li>
              <li className="bg-blue-500 text-white px-4 py-2 rounded-lg">
                Node.js
              </li>
              <li className="bg-blue-500 text-white px-4 py-2 rounded-lg">
                Tailwind CSS
              </li>
              <li className="bg-blue-500 text-white px-4 py-2 rounded-lg">
                MongoDB
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
