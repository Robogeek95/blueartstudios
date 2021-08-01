import { css } from "@emotion/css";
import CockTailTab from "../components/cockTailTab";
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
        <div className="grid grid-cols-1 lg:grid-cols-2  gap-5  mt-12">
          <div className="order-2 lg:order-1">
            <p className="text-4xl mb-5">
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

          <div className="order-1 lg:order-2">
            <img src="/service1.png" alt="" />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2  gap-5 mt-12">
          <div>
            <img src="/service1.png" alt="" />
          </div>

          <div>
            <p className="text-4xl mb-5">
              Our seasoned <span className="primary">brandtenders</span> are
              always stirring up something refreshing.
            </p>
            <p className="text-2xl">
              And with these ever-evolving brand parameters, you need to tap
              into a resource that knows how to adapt to it all. With the aim
              not to keep up, but to lead. That’s where we come in. Mixing an
              inviting concoction of sound strategic insights with a generous
              splash of creativity to serve up a potent brand ecosystem that
              increases the value of your company, motivates your workforce and
              quenches customers’ thirst for your product.
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
          <p className="text-primary text-center text-4xl mb-20">
            signature cocktail menu
          </p>

          <CockTailTab />
        </div>
      </section>

      <section className="container mx-auto mb-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 ">
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

            <button
              className="bg-primary mt-4 text-white active:bg-lightBlue-600 font-bold px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              type="button"
            >
              Regular
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default ServicesPage;
