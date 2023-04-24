import React from "react";

export const IssueIcon = ({ className }) => {
  return (
    <svg
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      class={className}
    >
      <g fill="none">
        <path
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.25"
          d="M8 4l1.3-1.625c.19-.237.477-.375.781-.375h3.839c.304 0 .591.138.781.375l1.299 1.625v0 1c0 .552-.448 1-1 1h-6c-.552 0-1-.448-1-1v-1 0Z M8 4h-2c-1.105 0-2 .895-2 2v13c0 1.105.895 2 2 2h12c1.105 0 2-.895 2-2v-13c0-1.105-.895-2-2-2h-2 M14 12.5l-2.5 2.5 -1.5-1.5"
        ></path>
      </g>
    </svg>
  );
};
