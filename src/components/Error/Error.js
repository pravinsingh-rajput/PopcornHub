import React from "react";
import "./Error.css";
import Errorimg from "../../Assets/errorpage.gif";

const Error = () => {
  return (
    <div className="errorpage">
      <div className="errorimg">
        <img
          src={Errorimg}
          alt="404 Error Page Not Found"
          className="errorimg"
        />
      </div>
    </div>
  );
};

export default Error;
