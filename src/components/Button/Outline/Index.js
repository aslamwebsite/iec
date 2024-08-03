import React from "react";
import "../../Button/Button.css";
import { Link } from "react-router-dom";

const Index = ({ buttonText, _class, pageLink, OutlineDropdown, _linkClass }) => {
  return (
    <Link to={pageLink} className={`outline-button ${_linkClass}`}>
      <div
        className={`btn-8 ${_class}`}
      >
        {buttonText}
      </div>
   
    </Link>
  );
};

export default Index;
