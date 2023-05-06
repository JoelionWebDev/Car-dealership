import React from "react";

const Hero = () => {
  return (
    <React.Fragment>
      <main className="hero">
        <div className="welcomNote">
          <h4 className="hero1">
            Joelion{" "}
            <i
              style={{ color: "white" }}
              className="fa-sharp fa-solid fa-car-side"
            ></i>{" "}
            Dealership
          </h4>

          <div className="button">
            <button>GET YOUR OWN TODAY</button>
          </div>
        </div>

        <h1>
          {" "}
          <a className="iconn" href="https://www.instagram.com/joeligono/">
            <i className="fa-brands fa-instagram"></i>
          </a>
        </h1>
        <h3 style={{ color: "white" }}>instagram</h3>
        <h1>
          <a className="iconn" href="https://wa.link/859wj7">
            <i style={{ color: "green" }} className="fa-brands fa-whatsapp"></i>
          </a>
        </h1>
        <h3 style={{ color: "white" }}>whatsapp</h3>
        <div className="hero-icons">
          <div className="icon">
            <img
              src="https://media.istockphoto.com/id/1445074332/photo/bright-colorful-big-rigs-semi-trucks-with-semi-trailers-standing-in-the-row-on-truck-stop.jpg?b=1&s=170667a&w=0&k=20&c=YRij6w95g5PeLnuWoILlzryqdUb_QOJpAVcHp3ABzI4="
              width="250px"
              height="200px"
              alt=""
            />
          </div>
          <div className="icon">
            {" "}
            <img
              src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Y2FyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
              width="250px"
              height="200px"
              alt=""
            />
          </div>
          <div className="icon">
            {" "}
            <img
              src="https://images.unsplash.com/photo-1526626607369-f89fe1ed77a9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
              width="250px"
              height="200px"
              alt=""
            />
          </div>
          <div className="icon">
            {" "}
            <img
              src="https://images.unsplash.com/photo-1573710459621-bb101783ca0f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
              width="250px"
              height="200px"
              alt=""
            />
          </div>
        </div>
      </main>
    </React.Fragment>
  );
};

export default Hero;
