import { css } from "@emotion/css";
import Footer from "../components/footer";
import Navbar from "../components/navbar";

function ServicesPage() {
  return (
    <>
      <Navbar />

      <header
        className={`
            text-gray-100
            ${css(`
            background: url("/services_bg.png");
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
          <div className="container mx-auto grid grid-cols-1 h-full">
            <div className="flex items-end mb-4 text-center mx-auto w-4/6">
              <div>
                <p className="text-white text-5xl">Branding </p>
                <p className="text-white text-3xl">
                  Introducing the Bluart BrandTenders. Serving up brand mojo
                  since 2013.
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section className="container mx-auto">
        <div className="grid grid-cols-2  gap-5 items-center mt-12">
          <div>
            <p className="text-4xl">
              Branding has never been more{" "}
              <span className="text-primary">expansive</span>,{" "}
              <span className="text-primary">adventurous</span> and agile than
              it is today
            </p>
            <p className="text-2xl">
              Its touch-points are constantly spilling over into new ways to
              engage with your audience. Nowadays, a brand voice can literally
              mean a brand voice (we’re talking to you Siri and Alexa). Your
              once sacred, brand guideline protected logo can now shapeshift
              into a new wordmark every day.
            </p>
          </div>

          <div>
            <img src="/service1.png" alt="" />
          </div>
        </div>

        <div className="grid grid-cols-2  gap-5 items-center mt-12">
          <div>
            <img src="/service1.png" alt="" />
          </div>

          <div>
            <p className="text-4xl">
              Branding has never been more{" "}
              <span className="text-primary">expansive</span>,{" "}
              <span className="text-primary">adventurous</span> and agile than
              it is today
            </p>
            <p className="text-2xl">
              Its touch-points are constantly spilling over into new ways to
              engage with your audience. Nowadays, a brand voice can literally
              mean a brand voice (we’re talking to you Siri and Alexa). Your
              once sacred, brand guideline protected logo can now shapeshift
              into a new wordmark every day.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-primary h-screen mt-12">
        <div className="py-8">
          <p className="text-white text-center text-4xl ">
            Brand we’ve boosted
          </p>
        </div>
      </section>

      <section>
        <div className="py-9">
          <p className="text-primary text-center text-4xl">
            signature cocktail menu
          </p>
        </div>
      </section>

      <section className="container mx-auto mb-10">
        <div className="grid grid-cols-2 gap-10 ">
          <div>
            <img src="/service3.png" alt="" />
          </div>

          <div>
            <p className="text-4xl">We’re Looking Forward to Serving You</p>
            <p className="text-2xl mt-4 text-gray-700">
              Any web design and development company can build a website. What
              sets Bluartstudio apart is the value that we associate with a
              company’s brand. We will analyze your brand and develop internet
              marketing and development initiatives that build upon the identity
              and unique offerings that already exist.
            </p>

            <button className="py-3 px-4 bg-primary rounded text-white mt-4 rounded">
              Talk to a brandtender
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default ServicesPage;
