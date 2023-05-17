import React from "react";
import "./Error.css";
import Errorimg from "../../Assets/errorpage.gif";

const Error = () => {
  return (
    <div className="errorpage">
      <img src={Errorimg} alt="404 Error Page Not Found" />
    </div>
  );
};

export default Error;
