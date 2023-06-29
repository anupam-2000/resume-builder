import React from 'react';
import html2pdf from 'html2pdf.js';
import './resumepreview.css';
import { IoMdMail } from 'react-icons/io';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { MdLocationOn } from 'react-icons/md';


const ResumePreview = ({ resumeData }) => {
  const { name, phone, email, location, profile, experience, education,  languages, projects, hobbies, skills } = resumeData;

  const handleDownload = () => {
    const element = document.getElementById('resume-preview');
    html2pdf().from(element).save('resume.pdf');
  };

  return (
    <div className="preview">
      <h2 className='rp'>Resume Preview</h2>
      <h5>
        <i>Click on <span className='gr'>"Generate Resume"</span> to preview changes</i>
      </h5>
      <div id="resume-preview">
        <div className="pdf">
          <div className="green">
            <h3 className="nm">{name}</h3>

            <div className="cm">
              <p className="cm_element">
                <BsFillTelephoneFill />
                &nbsp;&nbsp;+91-{phone}
              </p>
              <p className="cm_element">
                <a href={`mailto:${email}`}>
                  <IoMdMail />
                  &nbsp;&nbsp;{email}
                </a>
              </p>
              <p className="cm_element">
                <MdLocationOn />
                &nbsp;&nbsp;{location}
              </p>
            </div>
          </div>

          <div className="details">
            <div className="profile-section">
              <h4>Profile</h4>
              <p>{profile}</p>
            </div>

            <div className="languages-section">
              <h4>Languages</h4>
              <ul className="skills-list">
                {languages.map((language, index) => (
                  <li key={index}>{language}</li>
                ))}
              </ul>
            </div>

            <div className="experience-section">
              <h4>Experience</h4>
              {experience.map((exp, index) => (
                <div key={index} className="experience-item">
                  <div className="num">{index + 1}.&nbsp;&nbsp;</div>
                  <div className="company">
                    <i>
                      <strong>{exp.company}</strong>
                    </i>
                  </div>
                  <div className="detail">
                    <p>
                      <strong>Year:</strong> {exp.year}
                    </p>
                    <p>
                      <strong>Designation:</strong> {exp.designation}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="education-section">
              <h4>Education</h4>
              {education.map((edu, index) => (
                <div key={index} className="experience-item">
                  <div className="num">{index + 1}.&nbsp;&nbsp;</div>
                  <div className="company">
                    <i>
                      <strong>{edu.institute}</strong>
                    </i>
                  </div>
                  <div className="detail">
                    <p>
                      <strong>Year:</strong> {edu.year}
                    </p>
                    <p>
                      <strong>Degree:</strong> {edu.degree}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="projects-section">
              <h4>Projects</h4>
              {projects.map((project, index) => (
                <div key={index} className="experience-item">
                  <div className="num">{index + 1}.&nbsp;&nbsp;</div>
                  <div className="company">
                    <i>
                      <strong>{project.title}</strong>
                    </i>
                  </div>
                  <div className="detail">
                    <p>{project.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="skills-section">
              <h4>Skills</h4>
              <ul className="skills-list">
                {skills.map((skill, index) => (
                  <li key={index}>{skill.title}</li>
                ))}
              </ul>
            </div>

            

            

            <div className="hobbies-section">
              <h4>Hobbies</h4>
              <ul className="skills-list">
                {hobbies.map((hobby, index) => (
                  <li key={index}>{hobby}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <button onClick={handleDownload} className="btn btn-primary download">
        Download PDF
      </button>
    </div>
  );
};

export default ResumePreview;
