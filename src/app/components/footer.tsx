import React from "react";

type Props = {};

function Footer({}: Props) {
  return (
    <div className="sticky bottom-0 backdrop-filter backdrop-blur-lg bg-opacity-5">
      <div className="h-12 flex flex-auto justify-center">
        <div className="h-12 font-semibold flex items-center justify-center uppercase">
          Benji @ AppCubic
        </div>
        <div className="font-medium flex items-center justify-center">
          &nbsp;2023
        </div>
      </div>
    </div>
  );
}

export default Footer;
