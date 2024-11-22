import About from "../components/About";
import Avatar from "../components/Avatar";
import Footer from "../components/Footer";
import Formation from "../components/Formation";
import Navbar from "../components/Navbar";
import ProjectShowcase from "../components/ProjectShowcase";
import Skills from "../components/Skills";

export default function Home() {
  return (
    <div className="bg-customGray rounded-4xl ">
      <div className="bg-white border-2 border-white rounded-4xl ">
        <div className="bg-customGray rounded-4xl p-2">
          <Navbar />
          <div className="flex flex-col items-center p-4">
            <div>
              <Avatar />
            </div>
            <div className="flex justify-center">
              <p
                className="sm:p-6 p-2 sm:w-1/2 sm:text-5xl  text-3xl text-center text-transparent bg-clip-text bg-gradient-to-r from-black to-silverGray font-semibold
"
              >
                Développeuse Frontend Next.js, TypeScript et React.
              </p>
            </div>
          </div>
        </div>
        <Formation />
      </div>
      <div className="p-4 sm:p-8 sm:px-12 py-12 sm:py-24 ">
        <Skills />
      </div>

      <div className="bg-white rounded-4xl flex flex-col itmes-center">
        <div className="p-8 flex flex-col gap-16 py-12">
          <ProjectShowcase />
          <div className="py-8">
            <About />
          </div>
        </div>

        <div className="bg-customGray rounded-t-4xl pt-12 flex flex-col itmes-center">
          <Footer />
        </div>
      </div>
    </div>
  );
}
