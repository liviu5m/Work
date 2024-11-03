import SwiperComponent from "@/components/SwiperComponent";
import {
  faChartLine,
  faChartSimple,
  faCubes,
  faFile,
  faKitMedical,
  faLaptopCode,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Home() {

  return (
    <div className="h-full">
      <section className="h-[90vh] bg-gradient-to-r from-[#F1F5F9] to-[#c9cbcc]">
        <div className="container h-full mx-auto flex items-center justify-center">
          <div className="flex items-start flex-col w-1/2 gap-10">
            <h3 className="text-2xl text-[#6D6E9E]">
              Easiest way to find a perfect job
            </h3>
            <h1 className="text-[#00044A] text-7xl font-bold">
              Find Your Next
              <br />
              Dream Job
            </h1>
            <a
              href="/jobs"
              className="px-7  text-center py-4 rounded-lg bg-[#020DFF] text-white font-bold hover:shadow-xl shadow-lg hover:scale-105 button2"
            >
              LOOKING FOR A JOB?
            </a>
          </div>
          <div className="w-1/2 flex items-center justify-center">
            <img src="/imgs/hero.png" alt="" />
          </div>
        </div>
      </section>
      <section className="bg-white py-36">
        <div className="container mx-auto text-center mb-20">
          <h1 className="text-[#020DFF] text-[8rem] font-bold">1000+</h1>
          <h2 className="text-[#00044A] text-5xl font-bold">
            Browse From Our Top Jobs
          </h2>
          <p className="text-lg text-[#6D6E9E] mt-7">
            The automated process starts as soon as your clothes go into the
            machine. The outcome is
            <br /> gleaming clothes. Placeholder text commonly used.
          </p>
        </div>
        <div className="px-10">
          <SwiperComponent />
        </div>
      </section>
      <section className="bg-gradient-to-r from-[#F1F5F9] to-[#c9cbcc] py-36">
        <div className="container mx-auto flex items-center justify-center">
          <div className="w-1/2 flex items-center justify-center">
            <img src="/imgs/about.png" alt="" />
          </div>
          <div className="flex items-start flex-col w-1/2 gap-10">
            <h1 className="text-[#00044A] text-6xl font-bold">
              We Build Lasting
              <br />
              Relationships
              <br />
              Between Candidates
              <br />& Businesses
            </h1>
            <p className="text-[#6D6E9E] text-lg w-[70%]">
              The automated process starts as soon as your clothes go into the
              machine. The outcome is gleaming clothes. Placeholder text
              commonly used.
            </p>
            <p className="text-[#6D6E9E] text-lg w-[70%]">
              Automated process starts as soon as your clothes go into the
              machine. The outcome is gleaming clothes. Placeholder text
              commonly used.
            </p>
            <a
              href="/jobs"
              className="px-7 w-40 text-center py-4 rounded-lg bg-[#27CB8B] text-white font-bold hover:shadow-xl shadow-lg hover:scale-105"
            >
              FIND JOBS
            </a>
          </div>
        </div>
      </section>

      <section className="bg-white py-36 ">
        <div className="container mx-auto">
          <h1 className="text-[#00044A] text-4xl text-center font-bold mb-8">
            Browse From Top Categories
          </h1>
          <h3 className="text-xl text-[#6D6E9E] text-center">
            The automated process starts as soon as your clothes go into the
            machine. The outcome is
            <br />
            gleaming clothes. Placeholder text commonly used.
          </h3>
          <div className="grid grid-cols-3 mt-20 gap-10">
            <div className="flex flex-col items-start p-10 rounded-lg hover:shadow-2xl item">
              <div className="icon rounded-full w-20 h-20 bg-[#F1F5F9] flex items-center justify-center text-[#27CB8B]">
                <FontAwesomeIcon icon={faCubes} className="w-10" />
              </div>
              <a
                className="text-[#00044A] text-2xl mt-10 font-bold hover:text-[#020DFF]"
                href="/jobs"
              >
                Design & creatives
              </a>
              <p className="text-[#6D6E9E] mt-5">
                The automated process starts as soon as your clothes go into.
              </p>
              <a
                className="btn-hover px-10 -ml-10 mt-5 py-3 text-[#00044A] font-bold rounded-lg"
                href="/jobs"
              >
                BROWSE JOB
              </a>
            </div>
            <div className="flex flex-col items-start p-10 rounded-lg hover:shadow-2xl item">
              <div className="icon rounded-full w-20 h-20 bg-[#F1F5F9] flex items-center justify-center text-[#27CB8B]">
                <FontAwesomeIcon icon={faLaptopCode} className="w-10" />
              </div>
              <a
                className="text-[#00044A] text-2xl mt-10 font-bold hover:text-[#020DFF]"
                href="/jobs"
              >
                Finance
              </a>
              <p className="text-[#6D6E9E] mt-5">
                The automated process starts as soon as your clothes go into.
              </p>
              <a
                className="btn-hover px-10 -ml-10 mt-5 py-3 text-[#00044A] font-bold rounded-lg"
                href="/jobs"
              >
                BROWSE JOB
              </a>
            </div>
            <div className="flex flex-col items-start p-10 rounded-lg hover:shadow-2xl item">
              <div className="icon rounded-full w-20 h-20 bg-[#F1F5F9] flex items-center justify-center text-[#27CB8B]">
                <FontAwesomeIcon icon={faChartSimple} className="w-10" />
              </div>
              <a
                className="text-[#00044A] text-2xl mt-10 font-bold hover:text-[#020DFF]"
                href="/jobs"
              >
                Marketing
              </a>
              <p className="text-[#6D6E9E] mt-5">
                The automated process starts as soon as your clothes go into.
              </p>
              <a
                className="btn-hover px-10 -ml-10 mt-5 py-3 text-[#00044A] font-bold rounded-lg"
                href="/jobs"
              >
                BROWSE JOB
              </a>
            </div>
            <div className="flex flex-col items-start p-10 rounded-lg hover:shadow-2xl item">
              <div className="icon rounded-full w-20 h-20 bg-[#F1F5F9] flex items-center justify-center text-[#27CB8B]">
                <FontAwesomeIcon icon={faKitMedical} className="w-10" />
              </div>
              <a
                className="text-[#00044A] text-2xl mt-10 font-bold hover:text-[#020DFF]"
                href="/jobs"
              >
                Health
              </a>
              <p className="text-[#6D6E9E] mt-5">
                The automated process starts as soon as your clothes go into.
              </p>
              <a
                className="btn-hover px-10 -ml-10 mt-5 py-3 text-[#00044A] font-bold rounded-lg"
                href="/jobs"
              >
                BROWSE JOB
              </a>
            </div>
            <div className="flex flex-col items-start p-10 rounded-lg hover:shadow-2xl item">
              <div className="icon rounded-full w-20 h-20 bg-[#F1F5F9] flex items-center justify-center text-[#27CB8B]">
                <FontAwesomeIcon icon={faChartLine} className="w-10" />
              </div>
              <a
                className="text-[#00044A] text-2xl mt-10 font-bold hover:text-[#020DFF]"
                href="/jobs"
              >
                Corporate
              </a>
              <p className="text-[#6D6E9E] mt-5">
                The automated process starts as soon as your clothes go into.
              </p>
              <a
                className="btn-hover px-10 -ml-10 mt-5 py-3 text-[#00044A] font-bold rounded-lg"
                href="/jobs"
              >
                BROWSE JOB
              </a>
            </div>
            <div className="flex flex-col items-start p-10 rounded-lg hover:shadow-2xl item">
              <div className="icon rounded-full w-20 h-20 bg-[#F1F5F9] flex items-center justify-center text-[#27CB8B]">
                <FontAwesomeIcon icon={faFile} className="w-10" />
              </div>
              <a
                className="text-[#00044A] text-2xl mt-10 font-bold hover:text-[#020DFF]"
                href="/jobs"
              >
                Copywriting
              </a>
              <p className="text-[#6D6E9E] mt-5">
                The automated process starts as soon as your clothes go into.
              </p>
              <a
                className="btn-hover px-10 -ml-10 mt-5 py-3 text-[#00044A] font-bold rounded-lg"
                href="/jobs"
              >
                BROWSE JOB
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
