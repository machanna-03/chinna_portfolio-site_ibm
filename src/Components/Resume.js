import React, { useState, useEffect } from 'react';
import { BsDownload } from "react-icons/bs";
import pdf from "../Resume.pdf";
import { Document, Page, pdfjs } from 'react-pdf';

import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';

// Configure PDF.js worker
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

const Resume = () => {
  const [width, setWidth] = useState(window.innerWidth);

  // Update width on resize
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize); // cleanup
  }, []);

  // Adjust scale based on screen width
  const scale = width < 700 ? (width > 475 ? 0.7 : 0.5) : 1;

  return (
    <div className='ResumePage'>
      <Document file={pdf} className="resumeview">
        <div className="resumePages">
          <Page pageNumber={1} scale={scale} />
          <Page pageNumber={2} scale={scale} />
        </div>
      </Document>

      <a href={pdf} target="_blank" rel="noopener noreferrer" download="Gorantla_Machanna_Resume.pdf">
        <button className='downloadCV' type='button'>
          <h3><BsDownload />&nbsp; Download CV</h3>
        </button>
      </a>
    </div>
  );
};

export default Resume;
