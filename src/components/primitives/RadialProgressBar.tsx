import React from "react";

export const RadialProgressBar = (props: {
  icon: string;
  progress: number;
}) => {
  return (
    <svg
      id="svg"
      viewBox="0 0 100 100"
      xmlSpace="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <circle cx="50" cy="50" r="45" fill="#000000" opacity={0.1} />
      <path
        fill="none"
        stroke-linecap="round"
        stroke-width="2"
        stroke="#fff"
        stroke-dasharray={(props.progress * 250) / 100 + ",250"}
        d="M50 10
           a 40 40 0 0 1 0 80
           a 40 40 0 0 1 0 -80"
      />
      <image
        xlinkHref={"https://ico.now.sh/" + props.icon + "/fff"}
        x="25"
        y="25"
        width={50}
      />
    </svg>
  );
};
