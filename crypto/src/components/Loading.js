import React from "react";
// img
import loading from "../assets/img/loading.gif";

const Loading = () => {
  return (
    <div className="loading-container">
      <img src={loading} alt="loading" />
    </div>
  );
};

export default Loading;
