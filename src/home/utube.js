import React from "react";
import car1 from "../asset/car1.jpg";
import car2 from "../asset/car2.jpg";
import car3 from "../asset/car3.jpg";
import car4 from "../asset/car4.jpg";
import car5 from "../asset/car5.jpg";

const utube = () => {
  return (
    <div className="channelBg">
      <div className="channelGrid">
        <div className="image">
          <img src={car1} alt="image" />
          <img src={car2} alt="image" />
          <img src={car3} alt="image" />
        </div>
        <div className="youtube">
          <h2>Joelion Media on YouTube</h2>
          <img src={car4} alt="" width="50%" />
          <img src={car5} alt="" width="50%" />
          <div className="utext">
            <button className="ubtn1" style={{ border: "2px solid white" }}>
              <img
                src="https://www.gstatic.com/youtube/img/branding/youtubelogo/svg/youtubelogo.svg"
                alt=""
              />
            </button>
            <div className="ubtn2">
              <button className="visit">visit channel</button>
              <button className="guide">content guide</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default utube;
