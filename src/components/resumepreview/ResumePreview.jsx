import React from 'react';
import html2pdf from 'html2pdf.js';
import './resumepreview.css'
import {IoMdMail} from 'react-icons/io'
import {BsFillTelephoneFill} from 'react-icons/bs'

const ResumePreview = ({ resumeData }) => {
  const { name, phone, email, profile, experience, education, skills } = resumeData;

  const handleDownload = () => {
    const element = document.getElementById('resume-preview');
    html2pdf().from(element).save('resume.pdf');
  };

  return (
    <div className="preview">
      <h2>Resume Preview</h2>
      <div id="resume-preview">
        <div className="pdf">
        <div className="green">
          <h3 className='nm'>{name}</h3>

            <div className="cm">
              <p className='cm_element'><BsFillTelephoneFill/>&nbsp;&nbsp;91+{phone}</p>
              <p className='cm_element'><a href="mailto:{email}"><IoMdMail/>&nbsp;&nbsp;{email}</a></p>
            </div>
            
        </div>


        <div className="details">
            <h4>Profile</h4>
            <p >{profile}</p>
            <h4>Experience</h4>
            {experience.map((exp, index) => (
              <div key={index}>
                <p><strong>Company: </strong>{exp.company}</p>
                <p><strong>Year: </strong>{exp.year}</p>
                <p><strong>Designation: </strong>{exp.designation}</p>
              </div>
            ))}
            <h4>Education</h4>
            {education.map((edu, index) => (
              <div key={index}>
                <p><strong>Institute: </strong>{edu.institute}</p>
                <p><strong>Year: </strong>{edu.year}</p>
                <p><strong>Degree: </strong>{edu.degree}</p>
              </div>
            ))}
            <h4>Skills</h4>
            <ul className="skills-list">
              {skills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>
        </div>
        

      </div>
        
        
      <button onClick={handleDownload} className="btn btn-primary">
        Download PDF
      </button>
    </div>
  );
};

export default ResumePreview;
