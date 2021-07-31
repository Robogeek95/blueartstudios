import { useState } from "react";
import { ChevronIcon } from "./icons/chevron-icon";

function Collapsible({ faq, collapse }) {
  const [collapsed, setCollapsed] = useState(collapse);
  const { question, answer } = faq;

  function handleToggle() {
    setCollapsed(!collapsed);
  }

  return (
    <>
      <div>
        <div
          onClick={handleToggle}
          className="flex cursor-pointer justify-between bg-primary rounded-t-lg text-white p-4"
        >
          <p>{question}</p>
          <div>
            <ChevronIcon direction={collapsed ? "up" : "right"} />
          </div>
        </div>

        {collapsed && (
          <div className="shadow-2xl p-4 bg-white text-primary">
            <p>{answer}</p>
          </div>
        )}
      </div>
    </>
  );
}

export { Collapsible };
