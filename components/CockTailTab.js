import React from "react";

const CockTailTab = () => {
  const [openTab, setOpenTab] = React.useState(1);
  return (
    <>
      <div className="flex flex-wrap container mx-auto">
        <div className="w-full">
          <div className="relative">
            <ul
              className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
              role="tablist"
            >
              <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                <a
                  className={
                    "text-4xl px-5 flex justify-center  text-gray-400 rounded leading-normal "
                    //    +
                    //   (openTab === 1
                    //     ? "text-white bg-red-600"
                    //     : "text-" + color + "-600 bg-white")
                  }
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenTab(1);
                  }}
                  data-toggle="tab"
                  href="#link1"
                  role="tablist"
                >
                  brand storytelling
                  <div
                    className={
                      "bg-primary h-4 w-28 rounded-lg absolute -bottom-2 z-10 mx-auto " +
                      " " +
                      (openTab === 1 ? "block" : "hidden")
                    }
                  ></div>
                </a>
              </li>

              <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                <a
                  className={
                    "text-4xl px-5 flex justify-center  text-gray-400 rounded leading-normal "
                    //    +
                    //   (openTab === 1
                    //     ? "text-white bg-red-600"
                    //     : "text-" + color + "-600 bg-white")
                  }
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenTab(2);
                  }}
                  data-toggle="tab"
                  href="#link1"
                  role="tablist"
                >
                  logos + visual design
                  <div
                    className={
                      "bg-primary h-4 w-28 rounded-lg absolute -bottom-2 z-10 mx-auto" +
                      " " +
                      (openTab === 2 ? "block" : "hidden")
                    }
                  ></div>
                </a>
              </li>

              <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                <a
                  className={
                    "text-4xl px-5 flex justify-center  text-gray-400 rounded leading-normal "
                    //    +
                    //   (openTab === 1
                    //     ? "text-white bg-red-600"
                    //     : "text-" + color + "-600 bg-white")
                  }
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenTab(3);
                  }}
                  data-toggle="tab"
                  href="#link1"
                  role="tablist"
                >
                  research + strategy
                  <div
                    className={
                      "bg-primary h-4 w-28 rounded-lg absolute -bottom-2 z-10 mx-auto " +
                      " " +
                      (openTab === 3 ? "block" : "hidden")
                    }
                  ></div>
                </a>
              </li>
            </ul>
            <hr />
          </div>

          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 rounded">
            <div className="py-10 lg:w-2/4 flex-auto">
              <div className="tab-content tab-space">
                <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                  <p>
                    And with these ever-evolving brand parameters, you need to
                    tap into a resource that knows how to adapt to it all. With
                    the aim not to keep up, but to lead. That’s where we come
                    in. Mixing an inviting concoction of sound strategic
                    insights with a generous splash of
                  </p>
                </div>
                <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                  <p>
                    And with these ever-evolving brand parameters, you need to
                    tap into a resource that knows how to adapt to it all. With
                    the aim not to keep up, but to lead. That’s where we come
                    in. Mixing an inviting concoction of sound strategic
                    insights with a generous splash of
                  </p>
                </div>
                <div className={openTab === 3 ? "block" : "hidden"} id="link3">
                  <p>
                    And with these ever-evolving brand parameters, you need to
                    tap into a resource that knows how to adapt to it all. With
                    the aim not to keep up, but to lead. That’s where we come
                    in. Mixing an inviting concoction of sound strategic
                    insights with a generous splash of
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CockTailTab;
