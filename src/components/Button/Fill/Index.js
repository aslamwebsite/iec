import React from "react";
import "../../Button/Button.css";
import { Link } from "react-router-dom";

const Index = ({
  buttonText2,
  buttonText1,
  _class,
  pageLink,
  isSubmit,
  _linkClass,
  _disable,
}) => {
  return (
    <>
      {isSubmit ? (
        <div className={`button-container-1 border-0 ${_class}`}>
          <span className="mas">{buttonText1}</span>
          <button type="submit" name="Hover" disabled={_disable}>
            {buttonText2}
          </button>
        </div>
      ) : (
        <Link to={pageLink} className={`${_linkClass}`}>
          <div className={`button-container-1 border-0 ${_class}`}>
            <span className="mas">{buttonText1}</span>
            <button type="button" name="Hover">
              {buttonText2}
            </button>
          </div>
        </Link>
      )}
    </>
  );
};

export default Index;
