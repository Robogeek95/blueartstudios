import { css } from "@emotion/css";
import Link from "next/link";
import { Collapsible, collapsible } from "../components/collapsible";
import Footer from "../components/footer";
import CheckIcon from "../components/icons/check-icon";
import { ChevronIcon } from "../components/icons/chevron-icon";
import StarIcon from "../components/icons/star-icon";
import Metrics from "../components/metrics";
import Navbar from "../components/navbar";
import ReachOut from "../components/reachout";

const faqs = [
  {
    question: "How can we help your business?",
    answer:
      "Through the collaboration with customers in discussing needs and demand, we're able to attain mutual understanding, gain customer trust to offer appropriate advice, and bring about suggestions on suitable technology to transform your business.F",
  },
  {
    question: "What are the merit of Bluartstudio?",
    answer:
      "Through the collaboration with customers in discussing needs and demand, we're able to attain mutual understanding, gain customer trust to offer appropriate advice, and bring about suggestions on suitable technology to transform your business.F",
  },
  {
    question: "How working process is simplified?",
    answer:
      "Through the collaboration with customers in discussing needs and demand, we're able to attain mutual understanding, gain customer trust to offer appropriate advice, and bring about suggestions on suitable technology to transform your business.F",
  },
];

const solutions = [
  {
    name: "Warranty Management IT",
    desc: "",
  },
  {
    name: "Quality Control System",
    desc: "It's more than a responsibility but a guarantee from us to gain customer trust with highly reliable quality control system.",
  },
  {
    name: "Quality Control System",
    desc: "It's more than a responsibility but a guarantee from us to gain customer trust with highly reliable quality control system.",
  },
  {
    name: "Highly Professional Staffs",
    desc: "Our service offerings enhance customer experience throughout secure & highly functional end-to-end warranty management.",
  },
  {
    name: "Infrastructure Integration Technology",
    desc: "It's more than a responsibility but a guarantee from us to gain customer trust with highly reliable quality control system.",
  },
  {
    name: "Information Security Management",
    desc: "It's more than a responsibility but a guarantee from us to gain customer trust with highly reliable quality control system.",
  },
];

function About() {
  return (
    <>
      <Navbar />

      <header
        className={`
          text-gray-100
          ${css(`
          background: url("/about_pic.png");
          height: 90vh;
        `)}
        `}
      >
        <div
          className={`
          h-full
         ${css(`
         background: #0D1A52;
         opacity: 0.51;
       `)}`}
        >
          <div className="container mx-auto grid grid-cols-1 lg:grid-cols-5 h-full">
            <div className="flex flex-col col-span-3 justify-center flex-grow mx-auto">
              <p className="text-3xl md:text-5xl font-semibold mb-2">
                About Bluartstudio
              </p>
              <p className="text-gray-300 text-3xl">
                Bluartstudio specializes in technological and IT-related
                services such as building cloud, mobile application development,
                Front&Backend Development, UIUX Development, Branding, Product
                Design, Data Security, etc.
              </p>
            </div>
          </div>
        </div>
      </header>

      <section>
        <div className="container m-auto">
          <div className="text-center lg:w-3/5 mx-auto mt-5">
            <p className="font-semibold text-gray-400">OUR COMPANY</p>
            <p className="font-semibold text-3xl mt-4">
              We run all kinds of IT services that vow your{" "}
              <span className="text-primary">success</span>
            </p>
          </div>

          <div className="block lg:grid grid-cols-5 my-14 content-center">
            <div className="col-span-3 mb-8">
              <div className="flex justify-center items-center">
                <span
                  className="text-primary text-9xl font-semibold"
                  // style={{ fontSize: "288px" }}
                >     
                  08
                </span>
                <span className="text-gray-400">
                  YEARS’ <br /> EXPERIENCE <br /> IN IT
                </span>
              </div>
              <p className="text-center text-gray-500">
                More About Our Success Stories{" "}
              </p>
            </div>

            <div className="col-span-2">
              {/* collapsible */}
              {faqs.map((faq, i) => (
                <div key={faq.question} className="mb-8">
                  <Collapsible faq={faq} collapse={i === 0} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto mb-10">
        <p className="text-center text-center text-3xl mb-10 text-primary">
          Challenges are just opportunities in disguise.{" "}
          <span className="underline">
            <Link href="#">
              <a>Take the challenge!</a>
            </Link>
          </span>
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 mt-10 gap-10">
          <div className="py-8">
            <div className="p-5 text-center rounded shadow-2xl bg-white">
              <div className="mt-40"></div>
              <p className="text-semibold mb-6">What we can do?</p>
              <p className="text-primary">
                We put a strong focus on the needs of your business to figure
                out solutions that best fit your demand and nail it.
              </p>

              <hr className="mt-6 mb-3" />

              <button className="text-primary">Discover now</button>
            </div>
          </div>

          <div className="py-8">
            <div className="p-5 text-center rounded shadow-2xl bg-white">
              <div className="mt-40"></div>
              <p className="text-semibold mb-6">What we can do?</p>
              <p className="text-primary">
                We put a strong focus on the needs of your business to figure
                out solutions that best fit your demand and nail it.
              </p>

              <hr className="mt-6 mb-3" />

              <button className="text-primary">Discover now</button>
            </div>
          </div>

          <div className="py-8">
            <div className="p-5 text-center rounded shadow-2xl bg-white">
              <div className="mt-40"></div>
              <p className="text-semibold mb-6">What we can do?</p>
              <p className="text-primary">
                We put a strong focus on the needs of your business to figure
                out solutions that best fit your demand and nail it.
              </p>

              <hr className="mt-6 mb-3" />

              <button className="text-primary">Discover now</button>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto mt-16">
        <div className="lg:w-2/4 text-center mx-auto mb-24">
          <p className="text-4xl textfont-semibold">
            We excel in delivering optimal solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2">
          {solutions.map((solution) => (
            <div
              key={solution.name}
              className="grid mb-6 gap-8"
              style={{ gridTemplateColumns: "auto 1fr" }}
            >
              <div
                className="w-12 h-12 rounded-full shadow-2xl flex items-center justify-center text-primary"
                style={{
                  boxShadow:
                    " 0px 2px 8px rgba(40, 41, 61, 0.04), 0px 16px 24px rgba(96, 97, 112, 0.16)",
                }}
              >
                <CheckIcon />
              </div>
              <div>
                <p className="font-semibold text-2xl">{solution.name}</p>
                <p className="text-primary mt-5">{solution.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-20">
          <button className="text-primary mx-auto">Discover now</button>
        </div>
      </section>

      <section className="container mx-auto my-28">
        <div className="md:w-3/4 text-center mx-auto mb-24">
          <p className="text-gray-500 uppercase text-3xl">Testimonials</p>
          <p className="text-4xl">
            What do people praise about{" "}
            <span className="text-primary">Bluartstudios?</span>
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          <div
            className="rounded p-8 shadow-xl"
            style={{ boxShadow: "0px 0px 40px 9px #E5E5E5" }}
          >
            <div className="flex gap-4 items-center mb-6">
              <div className="rounded-full bg-gray-500 h-24 w-24"></div>
              <div>
                <div>
                  <StarIcon />
                </div>

                <div>Abbey Rotimi / Marketer</div>
              </div>
            </div>

            <p className="text-gray-700 text-lg">
              I’ve been working with over 35 IT companies on more than 200
              projects of our company, but @Bluartstudios is one of the most
              impressive company i have worked with.
            </p>
          </div>

          <div
            className="rounded p-8 shadow-xl"
            style={{ boxShadow: "0px 0px 40px 9px #E5E5E5" }}
          >
            <div className="flex gap-4 items-center mb-6">
              <div className="rounded-full bg-gray-500 h-24 w-24"></div>
              <div>
                <div>
                  <StarIcon />
                </div>

                <div>Abbey Rotimi / Marketer</div>
              </div>
            </div>

            <p className="text-gray-700 text-lg">
              I’ve been working with over 35 IT companies on more than 200
              projects of our company, but @Bluartstudios is one of the most
              impressive company i have worked with.
            </p>
          </div>
        </div>
      </section>

      <Metrics />

      <ReachOut />

      <Footer />
    </>
  );
}

export default About;
