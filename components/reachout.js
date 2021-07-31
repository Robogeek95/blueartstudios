import { css, cx } from "@emotion/css";

function ReachOut() {
  return (
    <>
      <section
        className={`
         bg-tertiary py-8
          ${css(`
          background: #DCEAED
            `)}
        `}
      >
        <div className="container mx-auto">
          <div className="grid lg:place-items-end place-items-center items-center gap-8 grid-cols-1 md:grid-cols-2 md:py-32 lg:mx-36">
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
              <img src="/phoneIcon.svg" alt="global" className="mx-auto mb-4" />
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
    </>
  );
}

export default ReachOut;
