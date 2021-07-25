import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { css, cx } from "@emotion/css";
import Image from "next/image";
import clientsMetrics from "../utilities/clientsMetrics.json";

function Home() {
  return (
    <>
      <Navbar />
      <section className="bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 h-1"></section>
      {/* heading */}
      <section
        className={`
          text-center
          text-gray-100
          ${css(`
          background: url("/artboard1.png");
          height: 90vh;
        `)}
        `}
      >
        <div className="flex h-full flex-col">
          <div className="flex flex-col justify-center items-center flex-grow w-3/5 mx-auto">
            <p className="text-xl uppercase text-light mb-3">
              we are heroes of
            </p>
            <p className="text-3xl md:text-5xl uppercase font-semibold mb-2">
              Design, Development,and Identity for your Product.
            </p>
            <p className="text-base text-gray-400">
              Leading digital agency with solid design and development
              enterprise.
            </p>
          </div>

          <div className="pb-20 flex justify-center text-right cursor-pointer">
            <div>
              <span className="px-2 text-gray-100">01</span>
              <div className="h-1 bg-gray-100 rounded w-36"></div>
            </div>
            <div>
              <span className="px-2 text-gray-500">02</span>
              <div className="h-1 bg-gray-500 rounded w-36"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto p-10">
        <p className="text-center text-gray-500 text-xl mb-8">
          WE’VE WORKED WITH SOME OF THE WORLD’S BEST COMPANIES
        </p>

        <div className="grid place-items-center grid-cols-2 md:grid-cols-4 gap-16 mt-5">
          <img src="/tef_logo.png" alt="tef_logo" />
          <img src="/cex_logo.png" alt="cex_logo" />
          <img src="/techpoint_africa_logo.png" alt="techpoint_africa_logo" />
          <img src="/walletsxchange_logo.png" alt="walletsxchange_logo" />
        </div>
      </section>

      <section
        className={`
          ${css(`
          background: url("/layer23.png");
          padding: 5%;
          padding-bottom: 0;
        `)}
        `}
      >
        <div className="container mx-auto h-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-center h-full px-0 lg:px-20">
            <div>
              <p className="text-4xl font-bold mb-2 text-primary">
                Not all website are built equally
              </p>
              <p className="text-base mb-1">
                A Highly Tailored IT Design, Management & Support Firm focused
                on helping clients maximise value from their digtal marketing.
              </p>
              <button className="bg-primary text-gray-300 rounded py-2 px-4">
                Let&apos;s talk
              </button>
            </div>

            <div className="h-full w-full">
              <img src="/man-ipad.png" alt="happy client" />
            </div>
          </div>
        </div>
      </section>

      <section
        className={`
         mx-auto
          ${css(`
          background: url("/white-grey-gradient-background-with-waves_125540-820 1.png");
            `)}
        `}
      >
        <div className="text-center pt-3 w-3/4 md:w-2/4 mx-auto">
          <p className="text-gray-500">WHAT WE DO</p>
          <p className="text-2xl font-light">
            For your very specific industry,{" "}
            <span className="text-primary">
              we have highly-tailored IT solutions.
            </span>
          </p>
        </div>

        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 mt-12">
          <div></div>
          <div className="hidden md:block">
            <img src="/globe2.png" alt="global" />
          </div>
        </div>
      </section>

      <section
        className={`
         container
         mx-auto
          ${css(`
            `)}
        `}
      >
        <div className="text-center pt-16 w-3/4 md:w-2/4 mx-auto">
          <p className="text-2xl font-light">
            We use confirmed playbooks to expiate amazing results
          </p>
        </div>

        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 mt-8 lg:mt-20">
          <div>
            <p className="text-3xl leading-relaxed">
              Creative Storytelling. <br /> Fantastic Design. <br />
              Invisible Technology.
            </p>
            <p className="text-base">
              By combining these essential elements, we build websites that
              focus on user experience, lead generation, and company reputation.
            </p>
          </div>

          <div>
            <img src="/image1.png" alt="global" />
          </div>
        </div>
      </section>

      <section
        className={`
         container
         mx-auto
          ${css(`
            `)}
        `}
      >
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 mt-20">
          <div>
            <img src="/image2.png" alt="global" />
          </div>

          <div>
            <p className="text-3xl leading-loose">
              Memorable Design With The User in Mind
            </p>
            <p className="text-3xl py-2">UX and VISUAL DESIGN</p>
            <p className="text-base">
              By combining these essential elements, we build websites that
              focus on user experience, lead generation, and company reputation.
            </p>
          </div>
        </div>
      </section>

      <section
        className=" container my-6
         mx-auto"
      >
        <div className="text-center pt-16 w-3/4 md:w-2/4 mx-auto">
          <p className="text-2xl font-light">HIRE US, WHY NOT?</p>
          <div className="flex justify-center align-center mt-3">
            <div
              className={`border-2 border-gray-300 w-6 ${css(
                `border-right: none`
              )}`}
            ></div>
            <p className="text-2xl font-light">How we claim to excel?</p>
            <div
              className={`border-2 border-gray-300 w-6 ${css(
                `border-left: none`
              )}`}
            ></div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center justify-items-center mt-5">
          <figure className="bg-gray-100 rounded-xl p-8">
            <img
              className="rounded mx-auto"
              src="/agency.png"
              alt="Bluart Managment System"
            />
            <div className="pt-4 text-center space-y-4">
              <blockquote className="text-lg font-semibold">
                <p className="text-light">Bluart Managment System</p>
              </blockquote>
              <p className="text-lg">
                Our technical experts have a flair for developing clean-coded
                websites based on customers’ needs, global guidelines and
                trends.
              </p>
            </div>
          </figure>

          <figure className="bg-gray-100 rounded-xl p-8">
            <Image
              className="rounded mx-auto"
              src="/agency2.png"
              alt="Bluart Managment System"
              width="369"
              height="287"
            />
            <div className="pt-4 text-center space-y-4">
              <blockquote className="text-lg font-semibold">
                <p className="text-light">Efficient Database Security</p>
              </blockquote>
              <p className="text-lg">
                Our technical experts have a flair for developing clean-coded
                websites based on customers’ needs, global guidelines and
                trends.
              </p>
            </div>
          </figure>

          <figure className="bg-gray-100 rounded-xl p-8">
            <img
              className="rounded mx-auto"
              src="/agency3.png"
              alt="Bluart Managment System"
            />
            <div className="pt-4 text-center space-y-4">
              <blockquote className="text-lg font-semibold">
                <p className="text-light">Reliable Function Technology</p>
              </blockquote>
              <p className="text-lg">
                Our technical experts have a flair for developing clean-coded
                websites based on customers’ needs, global guidelines and
                trends.
              </p>
            </div>
          </figure>
        </div>
      </section>

      <section
        className={`
          p-5
          ${css(`
          background: url("/metrics-bg.png");
        `)}
        `}
      >
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 my-5 gap-4">
            {clientsMetrics.slice(0, 4).map(({ data, metric, message }) => (
              <div key={metric} className="text-center p-5 rounded bg-white">
                <p className="text-primary text-lg">{message}</p>
                <p className="text-primary text-4xl font-bold">{data}</p>
                <p className="uppercase font-semibold text-lg text-gray-300">
                  {metric}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        className={`
         bg-tertiary
          ${css(`
            `)}
        `}
      >
        <div className="container mx-auto">
          <div className="grid lg:place-items-end place-items-center items-center gap-8 grid-cols-1 md:grid-cols-2 my-12 md:my-32 lg:mx-36">
            <div className="">
              <p className="text-3xl leading-relaxed font-semibold">
                Obtain further information by{" "}
                <span className="text-primary">making a contact</span> with our
                experienced IT staffs.
              </p>
              <p
                className={`text-base leading-relaxed text-lg ${css(
                  `maxWidth: 346px`
                )}`}
              >
                We’re available for 12 hours a day! Contact to require a
                detailed analysis and assessment of your project.
              </p>
            </div>

            <div className="text-center">
              <img src="/phoneIcon.svg" alt="global"  className="mx-auto mb-4"/>
              <p className="text-2xl">REACH OUT NOW!</p>
              <p className="text-3xl  my-3 text-primary font-semibold">
                +234 902 519 6509
              </p>
              <button className="bg-primary text-gray-300 rounded py-2 px-4">
                Contact us
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Home;
