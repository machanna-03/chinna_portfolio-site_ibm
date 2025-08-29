import React from 'react';
import ProjectBox from './ProjectBox';
import NewsletterImage from '../images/NewsletterImage.png';
import RogfreeImage from '../images/RogfreeImage.png';
import TindogImage from '../images/TindogImage.png';
import WigglesImage from '../images/WigglesImage.png';

const Projects = () => {
  return (
    <div>
      <div className='project'>
        <ProjectBox projectPhoto={WigglesImage} projectName="Wiggles" />
      </div>

    </div>
  )
}

export default Projects