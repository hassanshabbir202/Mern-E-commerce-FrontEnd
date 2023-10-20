import React from "react";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <div>
      <div className="mainherosection-container">
        <div className="herosection">
          <div className="box-1">
            <div className="iconAndHeading">
              <AccessTimeIcon
                sx={{
                  marginLeft: "-38px",
                  color: "#18355e",
                  cursor: "pointer",
                  fontSize: "30px",
                }}
              />
              <h2>Lorem ipsum dolor sit amet.</h2>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="box-2">
            <div className="iconAndHeading">
              <AccessTimeIcon
                sx={{
                  marginLeft: "-38px",
                  color: "#18355e",
                  cursor: "pointer",
                  fontSize: "30px",
                }}
              />
              <h2>Lorem ipsum dolor sit amet.</h2>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="box-3">
            <div className="iconAndHeading">
              <AccessTimeIcon
                sx={{
                  marginLeft: "-38px",
                  color: "#18355e",
                  cursor: "pointer",
                  fontSize: "30px",
                }}
              />
              <h2>Lorem ipsum dolor sit amet.</h2>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="box-4">
            <div className="iconAndHeading">
              <AccessTimeIcon
                sx={{
                  marginLeft: "-38px",
                  color: "#18355e",
                  cursor: "pointer",
                  fontSize: "30px",
                }}
              />
              <h2>Lorem ipsum dolor sit amet.</h2>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
