import React from "react";

export const FlagIcon = ({ className }) => {
  return (
    <svg
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g fill="none">
        <path d="M0 0h24v24h-24Z"></path>
        <path
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.25"
          d="M5 21v-17.07"
        ></path>
        <path
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.25"
          d="M19 14.02v-10.02"
        ></path>
        <path
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.25"
          d="M5 14c0 0 .875-.727 3.5-.727 2.625 0 4.375 1.727 7 1.727 2.625 0 3.5-.977 3.5-.977"
        ></path>
        <path
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.25"
          d="M5 3.932c0 0 .875-.932 3.5-.932 2.625 0 4.375 1.727 7 1.727 2.625 0 3.5-.727 3.5-.727"
        ></path>
      </g>
    </svg>
  );
};
