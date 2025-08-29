import React from 'react';
// import certificateIcon from "../images/WigglesImage.png";
import { FaGithub } from "react-icons/fa";

const ProjectsAndCertificates = () => {
  const certificates = [
    {
      title: "SkillDzire - Java Full Stack",
      description: "Java Full Stack internship at Skill Dzire with hands-on experience.",
    },
    {
      title: "IBM SkillsBuild - Front End",
      description: "Front-End internship via IBM SkillsBuild, focused on UI/UX.",
    },
    {
      title: "NPTEL - Cloud Computing",
      description: "NPTEL Cloud Computing certification, showcasing understanding of cloud tech.",
    }
  ];

  const projects = [
    {
      title: "GetMyCollege.com - API Development",
      stack: "Java, Spring Boot, Hibernate, MySQL",
      role: "Backend Developer & API Designer",
      contributions: [
        "Built scalable RESTful APIs with Spring Boot for colleges, blogs, leads, and SEO.",
        "Developed optimized search APIs using Hibernate to filter colleges by location and name.",
        "Established JWT and Spring Security for RBAC and user protection.",
        "Integrated Gmail OTP for user verification.",
        "Tested APIs using Postman; handled MySQL tasks for leads and analytics.",
        "Documented APIs with HTML for frontend-backend collaboration.",
      ]
    },
    {
      title: "BookMyPainter.com - Web Development",
      stack: "HTML, CSS, JavaScript, React.js, Material UI",
      role: "Frontend Developer & API Integration",
      contributions: [
        "Developed responsive, reusable UI components using React.js and MUI.",
        "Built a dynamic dashboard for managing users, leads, and content.",
        "Integrated APIs via Axios/Fetch and managed data with React Hooks (useState, useEffect, useContext).",
      ]
    }
  ];

  return (
    <div className="ProjectsAndCertificates">
      
      {/* Certificates Section */}
      <section className="certificates">
        <br /><h1>🎓 Certificates</h1><br/>
        <div className="cardRow">
          {certificates.map((cert, index) => (
            <div className="certificateBox" key={index}>
              {/* <img src={certificateIcon} alt="certificate" className="certIcon" /> */}
              <div>
                <h4>{cert.title}</h4>
                <p>{cert.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <hr />

      {/* Projects Section */}
      <section className="projects">
        <h1>💻 Projects</h1><br />
        <div className="cardRow">
          {projects.map((proj, index) => (
            <div className="projectBox" key={index}>
              <h3>{proj.title}</h3>
              <p><strong>Stack:</strong> {proj.stack}</p>
              <p><strong>Role:</strong> {proj.role}</p>
              <ul>
                {proj.contributions.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Inline CSS */}
      <style jsx>{`
        .ProjectsAndCertificates {
          padding: 2rem;
          max-width: 1100px;
          margin: auto;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }

        .certificates, .projects {
          margin-bottom: 3rem;
          text-align: center;
        }

        .cardRow {
          display: flex;
          gap: 2rem;
          flex-wrap: wrap;
          justify-content: center;

        }

        .certificateBox, .projectBox {
          background: #f9f9f9;
          border: 1px solid #ddd;
          border-radius: 8px;
          padding: 1rem;
          width: 300px;
          text-align: left;
          box-shadow: 0 0 8px rgba(0,0,0,0.05);
          transition: box-shadow 0.3s ease;
        }

        .certificateBox:hover, .projectBox:hover {
          box-shadow: 0 5px 15px rgba(0,0,0,0.1);
        }

        .certIcon {
          width: 50px;
          height: 50px;
          object-fit: contain;
          margin-bottom: 0.5rem;
        }

        .certificateBox h4, .projectBox h3 {
          margin: 0 0 0.5rem 0;
          color: #8881d8;
        }

        .certificateBox p, .projectBox p {
          margin: 0.25rem 0;
          font-size: 0.9rem;
          color: #555;
        }

        .projectBox ul {
          padding-left: 1.2rem;
          margin-top: 0.5rem;
          color: #444;
          font-size: 0.9rem;
        }

        hr {
          margin: 3rem 0;
          border: none;
          border-top: 2px dashed #ccc;
        }
      `}</style>
    </div>
  );
};

export default ProjectsAndCertificates;
