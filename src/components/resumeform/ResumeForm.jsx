import React, { useState } from 'react';
import TagsInput from 'react-tagsinput';
import 'react-tagsinput/react-tagsinput.css';

const ResumeForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [profile, setProfile] = useState('');
  const [experience, setExperience] = useState([{ company: '', year: '', designation: '' }]);
  const [education, setEducation] = useState([{ institute: '', year: '', degree: '' }]);
  const [skills, setSkills] = useState([]);

  const handleExperienceChange = (index, field, value) => {
    const updatedExperience = [...experience];
    updatedExperience[index][field] = value;
    setExperience(updatedExperience);
  };

  const handleAddExperience = () => {
    setExperience([...experience, { company: '', year: '', designation: '' }]);
  };

  const handleRemoveExperience = (index) => {
    const updatedExperience = [...experience];
    updatedExperience.splice(index, 1);
    setExperience(updatedExperience);
  };

  const handleEducationChange = (index, field, value) => {
    const updatedEducation = [...education];
    updatedEducation[index][field] = value;
    setEducation(updatedEducation);
  };

  const handleAddEducation = () => {
    setEducation([...education, { institute: '', year: '', degree: '' }]);
  };

  const handleRemoveEducation = (index) => {
    const updatedEducation = [...education];
    updatedEducation.splice(index, 1);
    setEducation(updatedEducation);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const resumeData = {
      name,
      phone,
      email,
      profile,
      experience,
      education,
      skills
    };
    onSubmit(resumeData);
  };

  const handleSkillsChange = (newSkills) => {
    setSkills(newSkills);
  };

  return (
    <div>
      <h2>Resume Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input type="text" className="form-control" id="name" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div className="mb-3">
          <label htmlFor="phone" className="form-label">Phone</label>
          <input type="text" className="form-control" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} required />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input type="email" className="form-control" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div className="mb-3">
          <label htmlFor="profile" className="form-label">Write a short profile defining you!</label>
          <input type="profile" className="form-control" id="email" value={profile} onChange={(e) => setProfile(e.target.value)} required />
        </div>
        <div className="mb-3">
          <label htmlFor="experience" className="form-label">Experience</label>
          {experience.map((exp, index) => (
            <div key={index} className="mb-3">
              <div className="row">
                <div className="col">
                  <label htmlFor={`company-${index}`} className="form-label">Company</label>
                  <input
                    type="text"
                    className="form-control"
                    id={`company-${index}`}
                    value={exp.company}
                    onChange={(e) => handleExperienceChange(index, 'company', e.target.value)}
                    required
                  />
                </div>
                <div className="col">
                  <label htmlFor={`year-${index}`} className="form-label">Year</label>
                  <input
                    type="text"
                    className="form-control"
                    id={`year-${index}`}
                    value={exp.year}
                    onChange={(e) => handleExperienceChange(index, 'year', e.target.value)}
                    required
                  />
                </div>
                <div className="col">
                  <label htmlFor={`designation-${index}`} className="form-label">Designation</label>
                  <input
                    type="text"
                    className="form-control"
                    id={`designation-${index}`}
                    value={exp.designation}
                    onChange={(e) => handleExperienceChange(index, 'designation', e.target.value)}
                    required
                  />
                </div>
              </div>
              <button type="button" className="btn btn-sm btn-danger mt-2" onClick={() => handleRemoveExperience(index)}>Remove</button>
            </div>
          ))}
          <button type="button" className="btn btn-sm btn-secondary" onClick={handleAddExperience}>Add Experience</button>
        </div>
        <div className="mb-3">
          <label htmlFor="education" className="form-label">Education</label>
          {education.map((edu, index) => (
            <div key={index} className="mb-3">
              <div className="row">
                <div className="col">
                  <label htmlFor={`institute-${index}`} className="form-label">Institute</label>
                  <input
                    type="text"
                    className="form-control"
                    id={`institute-${index}`}
                    value={edu.institute}
                    onChange={(e) => handleEducationChange(index, 'institute', e.target.value)}
                    required
                  />
                </div>
                <div className="col">
                  <label htmlFor={`year-${index}`} className="form-label">Year</label>
                  <input
                    type="text"
                    className="form-control"
                    id={`year-${index}`}
                    value={edu.year}
                    onChange={(e) => handleEducationChange(index, 'year', e.target.value)}
                    required
                  />
                </div>
                <div className="col">
                  <label htmlFor={`degree-${index}`} className="form-label">Degree</label>
                  <input
                    type="text"
                    className="form-control"
                    id={`degree-${index}`}
                    value={edu.degree}
                    onChange={(e) => handleEducationChange(index, 'degree', e.target.value)}
                    required
                  />
                </div>
              </div>
              <button type="button" className="btn btn-sm btn-danger mt-2" onClick={() => handleRemoveEducation(index)}>Remove</button>
            </div>
          ))}
          <button type="button" className="btn btn-sm btn-secondary" onClick={handleAddEducation}>Add Education</button>
        </div>
        <div className="mb-3">
          <label htmlFor="skills" className="form-label">Skills</label>
          <TagsInput
            value={skills}
            onChange={handleSkillsChange}
            inputProps={{
              placeholder: 'Add skills',
            }}
          />
        </div>
        <button type="submit" className="btn btn-primary">Generate Resume</button>
      </form>
    </div>
  );
};

export default ResumeForm;
