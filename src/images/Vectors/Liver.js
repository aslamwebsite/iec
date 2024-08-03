import React from "react";

const Liver = ({ themeColor, pathData }) => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlSpace="preserve"
        style={{
          enableBackground: "new 0 0 512 512",
        }}
        viewBox="0 0 512 512"
        className={themeColor}
      >
        {pathData}
      </svg>
    </>
  );
};

export default Liver;
