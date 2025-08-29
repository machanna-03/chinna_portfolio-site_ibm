import React from 'react';
import { DiHtml5, DiCss3 } from "react-icons/di";
import { FaReact, FaGitAlt, FaJava, FaDatabase } from "react-icons/fa";
import { SiSpringboot, SiMysql, SiPostman, SiPhpmyadmin, SiEclipseide, SiVisualstudiocode } from "react-icons/si";

const Skills = ({ skill }) => {
  const icon = {
    'HTML': <DiHtml5 />,
    'CSS': <DiCss3 />,
    'React.js': <FaReact />,
    'Java': <FaJava />,
    'Spring Boot': <SiSpringboot />,
    'Hibernate': <FaDatabase />,     // fallback to database icon
    'MySQL': <SiMysql />,
    'VS Code': <SiVisualstudiocode />,
    'Eclipse': <SiEclipseide />,
    'Git': <FaGitAlt />,
    'Postman': <SiPostman />,
    'phpMyAdmin (Web-based)': <SiPhpmyadmin />,
  };

  return (
    <div title={skill} className='SkillBox' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '6px' }}>
      <div >
        {icon[skill] || skill}
      </div>
      <div style={{ marginTop: '4px', fontSize: '0.9rem', textAlign: 'center' }}>
        {skill}
      </div>
    </div>
  );
};

export default Skills;