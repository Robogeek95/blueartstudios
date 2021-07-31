import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

function Navbar() {
  const [expand, setExpand] = useState(false);

  return (
    <div className="bg-gray-50">
      <div className="container mx-auto py-5">
        <div className="flex justify-between items-center">
          {/* logo */}
          <Image
            src="/blueartstudio.svg"
            width="161px"
            height="24px"
            alt="blueartstudios logo"
          />
          {/* links */}
          <div className="hidden md:flex flex flex-row gap-5 items-center">
            <NavContent />
          </div>

          <button
            onClick={() => setExpand(!expand)}
            className="block md:hidden bg-primary text-gray-300 rounded py-2 px-2"
          >
            {expand ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
        {expand && (
          <div className="mt-5 flex flex-col gap-5 items-center">
            <NavContent />
          </div>
        )}
      </div>
    </div>
  );
}

function NavContent() {
  return (
    <>
      <div>
        <Link href="/about">About</Link>
      </div>
      <div>
        <Link href="/services">Services</Link>
      </div>
      <div>Clients</div>
      <button className="bg-primary text-gray-300 rounded py-2 px-4">
        Let&apos;s talk
      </button>
    </>
  );
}

export default Navbar;
