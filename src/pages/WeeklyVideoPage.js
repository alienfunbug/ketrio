import React, { useEffect } from "react";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import "./WeeklyVideoPage.css";

function WeeklyVideoPage() {


  useEffect(() => {
    window.location.href = "https://www.youtube.com/watch?v=MRcimHFaUBg";
  }, []);

  return (
    <div className="loader-main">
      <Loader
        type="Circles"
        color="#191919"
        height={400}
        width={400}
        timeout={15000} 
      />
    </div>
  );
}

export default WeeklyVideoPage;
