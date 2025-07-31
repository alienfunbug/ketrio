import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import "./LeaguePage.css";

function LeaguePage() {

/*
  useEffect(() => {
    window.location.href = "https://www.youtube.com/watch?v=nnnikhT-law";
  }, []);
*/

  return (
    <div>
      <Link
        className="landing-back-button"
        to={{
          pathname: `/`,
        }}
        style={{ textDecoration: "none", color: "#646464" }}
      >
        {" "}
        Back
      </Link>
      <div className="loader-title">Coming Soon </div>
      <div className="loader-main">
        <Loader
          type="Circles"
          color="#191919"
          height={400}
          width={400}
          timeout={15000} 
        />
      </div>
    </div>
  );
}

export default LeaguePage;
