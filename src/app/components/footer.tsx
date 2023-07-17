import React from "react";

type Props = {};

function Footer({}: Props) {
  return (
    <div className="sticky bottom-0 backdrop-filter backdrop-blur-lg bg-opacity-5">
      <div className="h-12">
        <div className="h-12 font-semibold flex items-center justify-center">
          Benji @ AppCubic
        </div>
      </div>
    </div>
  );
}

export default Footer;
