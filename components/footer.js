import { css, cx } from "@emotion/css";
import Image from "next/image";

function Footer() {
  return (
    <section
      className={`
     bg-tertiary
      ${css(`
        `)}
    `}
    >
      <div className="container mx-auto">
        <div className="grid gap-8 grid-cols-2 md:grid-cols-4 py-20">
          <div className="col-span-2 lg:col-auto">
            <Image
              src="/blueartstudio.svg"
              width="161px"
              height="24px"
              alt="blueartstudios logo"
            />
            <p className="text-base leading-relaxed text-l">
              10 Bucknor Estate, Ago Palace Way, Festac, Lagos State.
              contact@bluartstudio.com
            </p>
            <p className="text-2xl  my-3 text-primary font-semibold">
              (+234)902 519 6509
            </p>
          </div>

          <div className="">
            <p className="text-2xl font-bold mb-4">IT Services </p>

            <ul className="text-gray-500">
              <li className="mb-3">Managed IT</li>
              <li className="mb-3">IT Support</li>
              <li className="mb-3">IT Consultancy</li>
              <li className="mb-3">Cloud Computing</li>
            </ul>
          </div>

          <div className="">
            <p className="text-2xl font-bold mb-4">Quick Links </p>

            <ul className="text-gray-500">
              <li className="mb-3">Pick up location</li>
              <li className="mb-3">Terms of Payment</li>
              <li className="mb-3">Privacy & Policy</li>
              <li className="mb-3">Where to Find Us</li>
            </ul>
          </div>

          <div className="">
            <p className="text-2xl font-bold mb-4">Support</p>

            <ul className="text-gray-500">
              <li className="mb-3">Help & FAQ</li>
              <li className="mb-3">Contact us</li>
              <li className="mb-3">Pricing & Plans</li>
              <li className="mb-3">Cookies Policy</li>
            </ul>
          </div>
        </div>

        <p className="text-gray-400">
          © 2019 Bluartstudio. All Rights Reserved.
        </p>

        <div className="px-4 py-12">
          <hr />
        </div>

        <p className="text-center text-gray-400 my-10">
          Bluartstudio is a property of Bluart Technologies a company duly
          registered with CAC with RC Number: 1282598.
        </p>
      </div>
    </section>
  );
}

export default Footer;
