import React from "react";
import img from "../asset/joe.png";
import img2 from "../asset/joe2.png";

const Me = () => {
  return (
    <main className="meBg">
      <div className="meContnet">
        <img src={img} alt="img" width="100%" />
        <div className="meText">
          <img src={img2} alt="" width="100%" />
        </div>
      </div>
    </main>
  );
};

export default Me;
