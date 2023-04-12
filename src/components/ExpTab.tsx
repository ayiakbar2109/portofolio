import React from "react";

export default function ExpTab() {
  return (
    <ol className="border-l border-neutral-300 dark:border-neutral-500">
      <li>
        <div className="flex-start flex items-center pt-3">
          <div className="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-neutral-300 dark:bg-neutral-500"></div>
          <p className="text-sm text-neutral-500 dark:text-neutral-300">
            01.07.2021
          </p>
        </div>
        <div className="mb-6 ml-4 mt-2">
          <h4 className="mb-1.5 text-xl font-semibold">Title of section 1</h4>
          <p className="mb-3 text-neutral-500 dark:text-neutral-300">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            scelerisque diam non nisi semper, et elementum lorem ornare.
            Maecenas placerat facilisis mollis. Duis sagittis ligula in sodales
            vehicula.
          </p>
        </div>
      </li>
    </ol>
  );
}
