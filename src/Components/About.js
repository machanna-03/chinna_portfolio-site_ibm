import React from "react";
import Skills from "./Skills.js";
import Tilt from "react-parallax-tilt";
import Lottie from "lottie-react";
import Coder from "../LottieFiles/coder.json";

const About = () => {
  return (
    <>
      <div className="AboutPage">
        <div className="AboutText">
          <h2>Get to Know Me!</h2> <br />
          <p>
            Hi, my Name is <b>Gorantla Machanna</b>, and I am from Yemmiganur,
            Andhra Pradesh. I'm currently working at <b>SN Info Systems</b> as a
            Software Engineer.
          </p>
          <br />
          <h2>🚀 Project & Technical Contributions</h2> <br />
          <ul>
            <li>
              <strong>Backend Development:</strong> Built scalable RESTful APIs
              using Spring Boot and Hibernate. Integrated services like
              Razorpay, OTP via email, and Location APIs.
            </li>
            <li>
              <strong>Frontend Development:</strong> Built responsive user
              interfaces using React.js and integrated APIs using Axios and
              Fetch.
            </li>
            <li>
              <strong>Database Management:</strong> Worked extensively with
              MySQL using tools like MySQL Workbench and phpMyAdmin.
            </li>
            <li>
              <strong>Deployment & Dev Tools:</strong> Deployed applications
              using Hostinger. Experienced with Docker, Git for version control,
              and Postman for API testing.
            </li>
            <li>
              Developed 6+ dynamic, responsive web applications using React.js,
              MUI, and custom CSS during freelance work.
            </li>
          </ul>
        </div>

        <div>
          <Tilt>
            <Lottie
              className="illustration"
              animationData={Coder}
              loop={true}
            />
          </Tilt>
        </div>
      </div>

      <h1
        style={{
          textAlign: "center",
          marginBottom: "30px",
          fontSize: "1.8rem",
          fontWeight: "bold",
        }}
      >
        <b>🎓 Education</b>
      </h1>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          gap: "20px",
          flexWrap: "wrap",
          marginBottom: "40px",
          padding: "0 20px",
        }}
      >
        <div
          style={{
            flex: "1 1 15%",
            background: "linear-gradient(to right, #f9fafc, #eef2f7)",
            borderRadius: "12px",
            padding: "20px",
            boxShadow: "0 6px 18px rgba(0, 0, 0, 0.07)",
            transition: "transform 0.3s ease, box-shadow 0.3s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-5px)";
            e.currentTarget.style.boxShadow = "0 12px 24px rgba(0, 0, 0, 0.12)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = "0 6px 18px rgba(0, 0, 0, 0.07)";
          }}
        >
          <b style={{ fontSize: "1.1rem", color: "#2e3a59" }}>
            B.Tech - Computer Science and Engineering
          </b>
          <br />
          <span style={{ fontSize: "0.95rem", color: "#666" }}>
            Oct 2020 – May 2024
          </span>
          <br />
          <i style={{ color: "#555", display: "block", marginTop: "5px" }}>
            St. John's College of Engineering and Technology, Yerrakota
          </i>
          <br />
          <b style={{ fontSize: "1rem", color: "#2e3a59" }}>CGPA: 8.0</b>
        </div>

        <div
          style={{
            flex: "1 1 15%",
            background: "linear-gradient(to right, #f9fafc, #eef2f7)",
            borderRadius: "12px",
            padding: "20px",
            boxShadow: "0 6px 18px rgba(0, 0, 0, 0.07)",
            transition: "transform 0.3s ease, box-shadow 0.3s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-5px)";
            e.currentTarget.style.boxShadow = "0 12px 24px rgba(0, 0, 0, 0.12)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = "0 6px 18px rgba(0, 0, 0, 0.07)";
          }}
        >
          <b style={{ fontSize: "1.1rem", color: "#2e3a59" }}>
            Intermediate (M.P.C)
          </b>
          <br />
          <span style={{ fontSize: "0.95rem", color: "#666" }}>
            Jun 2018 – Mar 2020
          </span>
          <br />
          <i style={{ color: "#555", display: "block", marginTop: "5px" }}>
            Narayana Junior College, Yemmiganur
          </i>
          <br />
          <b style={{ fontSize: "1rem", color: "#2e3a59" }}>CGPA: 9.3</b>
        </div>

        <div
          style={{
            flex: "1 1 15%",
            background: "linear-gradient(to right, #f9fafc, #eef2f7)",
            borderRadius: "12px",
            padding: "20px",
            boxShadow: "0 6px 18px rgba(0, 0, 0, 0.07)",
            transition: "transform 0.3s ease, box-shadow 0.3s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-5px)";
            e.currentTarget.style.boxShadow = "0 12px 24px rgba(0, 0, 0, 0.12)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = "0 6px 18px rgba(0, 0, 0, 0.07)";
          }}
        >
          <b style={{ fontSize: "1.1rem", color: "#2e3a59" }}>SSC</b>
          <br />
          <span style={{ fontSize: "0.95rem", color: "#666" }}>
            Jun 2017 – Apr 2018
          </span>
          <br />
          <i style={{ color: "#555", display: "block", marginTop: "5px" }}>
            Nalanda High School, Yemmiganur
          </i>
          <br />
          <b style={{ fontSize: "1rem", color: "#2e3a59" }}>CGPA: 9.3</b>
        </div>
      </div>

      <h1 className="SkillsHeading"><b>Professional Skillset</b></h1>
      <div
        className="skills"
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        <Skills skill="HTML" />
        <Skills skill="CSS" />
        <Skills skill="React.js" />
        <Skills skill="Java" />
        <Skills skill="Spring Boot" />
        <Skills skill="Hibernate" />
        <Skills skill="MySQL" />
        <Skills skill="VS Code" />
        <Skills skill="Eclipse" />
        <Skills skill="Git" />
        <Skills skill="Postman" />
        <Skills skill="phpMyAdmin (Web-based)" />
      </div>
    </>
  );
};

export default About;
