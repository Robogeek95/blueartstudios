import { css, cx } from "@emotion/css";
import { useRef } from "react";
import clientsMetrics from "../utilities/clientsMetrics.json";
import Count from "./counter";

function Metrics() {
  return (
    <section
      className={`
          p-5
          ${css(`
          background: url("/metrics-bg.png");
        `)}
        `}
      id="metric"
    >
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 my-5 gap-4">
          {clientsMetrics.slice(0, 4).map(({ data, metric, message }) => (
            <div key={metric} className="text-center p-5 rounded bg-white">
              <p className="text-primary text-lg">{message}</p>
              <p className="text-primary text-4xl font-bold">
                <Count number={data} duration="10" elem="#metric" />
              </p>
              <p className="uppercase font-semibold text-lg text-gray-300">
                {metric}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Metrics;
