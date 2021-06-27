import Navbar from "../components/navbar";
import { css, cx } from "@emotion/css";
import Image from "next/image";

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
              WE ARE HEROES OF
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

      <section className="p-10">
        <p className="text-center text-gray-500">
          WE’VE WORKED WITH SOME OF THE WORLD’S BEST COMPANIES
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-16 mt-5">
          <Image src="/tef_logo.png" alt="tef_logo" width="100" height="100" />
          <Image
            src="/cex_logo.png"
            alt="cex_logo"
            width="100%"
            height="100%"
          />
          <Image
            src="/techpoint_africa_logo.png"
            alt="techpoint_africa_logo"
            width="100%"
            height="100%"
          />
          <Image
            src="/walletsxchange_logo.png"
            alt="walletsxchange_logo"
            width="100%"
            height="100%"
          />
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
        <div className="container h-full">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center h-full">
            <div>
              <p className="text-4xl font-bold mb-2 text-primary">
                Not all website are built equally{" "}
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
              <Image
                src="/man-ipad.png"
                height="753px"
                width="636px"
                alt="happy client"
              />
            </div>
          </div>
        </div>
      </section>

      <section
        className={`
         container
          ${css(`
          background: url("/white-grey-gradient-background-with-waves_125540-820 1.png");
            `)}
        `}
      >
        <div className="text-center pt-3 w-3/4 md:w-2/4 mx-auto">
          <p className="text-gray-500">WHAT WE DO</p>
          <p className="text-2xl font-light">
            For your very specific industry, we have highly-tailored IT
            solutions.
          </p>
        </div>

        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 mt-12">
          <div></div>
          <div className="hidden md:block">
            <Image
              src="/globe2.png"
              height="580px"
              width="618px"
              alt="global"
            />
          </div>
        </div>
      </section>

      <section
        className={`
         container
          ${css(`
            `)}
        `}
      >
        <div className="text-center pt-16 w-3/4 md:w-2/4 mx-auto">
          <p className="text-2xl font-light">
            We use confirmed playbooks to expiate amazing results
          </p>
        </div>

        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 mt-20">
          <div>
            <p className="text-3xl">
              Creative Storytelling. Fantastic Design.
            </p>
            <p className="text-3xl">Invisible Technology.</p>
            <p className="text-base">
              By combining these essential elements, we build websites that
              focus on user experience, lead generation, and company reputation.
            </p>
          </div>

          <div>
            <Image
              src="/image1.png"
              height="580px"
              width="618px"
              alt="global"
            />
          </div>
        </div>
      </section>

      <section
        className={`
         container
          ${css(`
            `)}
        `}
      >
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 mt-20">
          <div>
            <Image
              src="/image2.png"
              height="580px"
              width="618px"
              alt="global"
            />
          </div>

          <div>
            <p className="text-3xl">Memorable Design With The User in Mind</p>
            <p className="text-3xl">UX and VISUAL DESIGN</p>
            <p className="text-base">
              By combining these essential elements, we build websites that
              focus on user experience, lead generation, and company reputation.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
