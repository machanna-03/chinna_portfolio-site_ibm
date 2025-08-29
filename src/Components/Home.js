import React from "react";
import Lottie from "lottie-react";
import SpaceBoy from "../LottieFiles/SpaceBoy.json";
import Typed from "./Typed.js";
import Tilt from "react-parallax-tilt";
import Avatar from "../images/Avatar1.png";
import { CiCoffeeCup } from "react-icons/ci";

const Home = () => {
  return (
    <div>
      <div className="HomePage">
        <div className="HomeText">
          <h1>Hi There!</h1>
          <h1>
            I'M <b>GORANTLA MACHANNA</b>
          </h1>
          <Typed />
        </div>

        <Lottie className="illustration" animationData={SpaceBoy} loop={true} />
      </div>

      <div className="AboutPage">
        <div className="AboutText">
          <h1 className="AboutTextHeading">
            Brief <b>introduction</b>
          </h1>
          <p>
            Experienced Full Stack Java Developer with 1 year of hands-on
            experience in
            <b> RESTful API development</b>, <b>Core Java</b>, and{" "}
            <b>Spring Boot</b>. Skilled in implementing <b>Hibernate</b> and{" "}
            <b>Spring Data JPA</b> to optimize database interactions while
            creating scalable, high-performance <b>microservices</b>. Proficient
            in building interactive frontends with <b>React.js</b> and
            integrating them smoothly with the backend. Passionate about using{" "}
            <b>design patterns</b>, <b>performance optimization</b>, and{" "}
            <b>clean code</b> to build reliable and easy-to-maintain software.
          </p>
        </div>
        <Tilt>
          <img
            src={Avatar}
            alt="Profile Avatar"
            style={{
              width: "100%",
              height: "320px",
              borderRadius: "10%",
              objectFit: "cover",
              border: "4px solid #ddd",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
              marginBottom: "20px",
            }}
          />
        </Tilt>
      </div>
    </div>
  );
};

export default Home;
