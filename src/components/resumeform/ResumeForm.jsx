import React, { useState } from 'react';
import TagsInput from 'react-tagsinput';
import 'react-tagsinput/react-tagsinput.css';
import './resumeform.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import {AiOutlineEnter} from 'react-icons/ai'
import {FaBackspace} from 'react-icons/fa'
import SkillsTags from './SkillsTag';


const ResumeForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [location,setLocation] = useState('');
  const [profile, setProfile] = useState('');
  const [experience, setExperience] = useState([{ company: '', year: '', designation: '' }]);
  const [education, setEducation] = useState([{ institute: '', year: '', degree: '' }]);
  const [skills, setSkills] = useState([]);
  const [languages, setLanguages] = useState([]);
  const [projects, setProjects] = useState([{ title: '', description: '' }]);
  const [hobbies, setHobbies] = useState(['']);

  const handleSkillsChange = (newSkills) => {
    setSkills(newSkills);
  };
  
  
  const handleHobbiesChange = (newHobbies) => {
    setHobbies(newHobbies);
  };
  
  const handleAddHobby = () => {
    setHobbies([...hobbies, '']);
  };
  
  const handleRemoveHobby = (index) => {
    const updatedHobbies = [...hobbies];
    updatedHobbies.splice(index, 1);
    setHobbies(updatedHobbies);
  };
  
 
  


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
      location,
      profile,
      experience,
      education,
      skills,
      languages,
      projects,
      hobbies,
      
    };
    onSubmit(resumeData);
  };

  

  const handleLanguagesChange = (newLanguages) => {
    setLanguages(newLanguages);
  };

  const handleProjectChange = (index, field, value) => {
    const updatedProjects = [...projects];
    updatedProjects[index][field] = value;
    setProjects(updatedProjects);
  };

  const handleAddProject = () => {
    setProjects([...projects, { title: '', description: '' }]);
  };

  const handleRemoveProject = (index) => {
    const updatedProjects = [...projects];
    updatedProjects.splice(index, 1);
    setProjects(updatedProjects);
  };
  
  

  return (
    <div className='form'>
      <h2>Resume Form</h2>
      <form onSubmit={handleSubmit}>
      <div className="margin">
      <div class="row">
        <div class="col">
          <div class="mb-3">
            <label for="name" class="form-label main">Name</label>
            <input placeholder="Full Name" type="text" class="form-control" id="name" value={name} onChange={(e) => setName(e.target.value)} required />
          </div>
        </div>
        <div class="col">
          <div class="mb-3">
            <label for="phone" class="form-label main">Phone</label>
            <input placeholder="eg:-999-999-9999" type="text" class="form-control" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} required />
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <div class="mb-3">
            <label for="email" class="form-label main">Email</label>
            <input placeholder="eg:-email@address.com" type="email" class="form-control" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
        </div>
        <div class="col">
          <div class="mb-3">
            <label for="location" class="form-label main">Location</label>
            <input placeholder="eg:-Dist, Place" type="location" class="form-control" id="location" value={location} onChange={(e) => setLocation(e.target.value)} required />
          </div>
        </div>
      </div>
      </div>

        <div className="margin">
          <div className="mb-3">
            <label htmlFor="profile" className="form-label main">Write a short profile defining you!</label>
            <input type="profile" className="form-control" id="email" value={profile} onChange={(e) => setProfile(e.target.value)} required />
          </div>

          <div className="mb-3">
            <label htmlFor="languages" className="form-label main">Languages 
              <span className='light'><i>&nbsp;(Press <strong>"Enter <AiOutlineEnter/>"</strong> to add the Tag and <strong>"Backspace <FaBackspace/>"</strong> to remove)</i> </span>
            </label>
            <TagsInput
              className='tags'
              value={languages}
              onChange={handleLanguagesChange}
              tagProps={{ className: 'tag' }}
              inputProps={{
                placeholder: 'Languges',
              }}
            />
          </div>
        </div>

        <div className="mb-3 margin">
          <label htmlFor="experience" className="form-label main">Experience</label>
          {experience.map((exp, index) => (
            <div key={index} className="mb-3">
              <div className="row">
                <div className="col">
                  <label htmlFor={`company-${index}`} className="form-label">Company</label>
                  <input
                    placeholder='eg:-Tata Motors'
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
                    placeholder='eg:-yyyy-yyyy'
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
                    placeholder='eg:-Junior Engineer'
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
          <button type="button" className="btn  btn-secondary" onClick={handleAddExperience}>Add Experience</button>
        </div>
        <div className="mb-3 margin">
          <label htmlFor="education" className="form-label main">Education</label>
          {education.map((edu, index) => (
            <div key={index} className="mb-3">
              <div className="row">
                <div className="col">
                  <label htmlFor={`institute-${index}`} className="form-label">Institute</label>
                  <input
                    placeholder='eg:-Bits Pilani'
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
                    placeholder='eg:-yyyy-yyyy'
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
                    placeholder='eg:-Civil Engineering'
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
          <button type="button" className="btn  btn-secondary" onClick={handleAddEducation}>Add Education</button>
        </div>
        
        <div className="mb-3 margin">
          <label htmlFor="skills" className="form-label main">Skills</label>
          <SkillsTags onChange={handleSkillsChange} />
        </div>
       

      
        <div className="mb-3 margin">
          <label htmlFor="projects" className="form-label main">Projects</label>
          {projects.map((project, index) => (
            <div key={index}>
              <div className="row">
                <div className="col-6">
                  <label htmlFor={`title-${index}`} className="form-label">Title</label>
                  <input
                    placeholder="Project Title"
                    type="text"
                    className="form-control"
                    id={`title-${index}`}
                    value={project.title}
                    onChange={(e) => handleProjectChange(index, 'title', e.target.value)}
                    required
          />
        </div>
        <div className="col-6">
          <label htmlFor={`description-${index}`} className="form-label">Description</label>
          <textarea
            placeholder="10-15 Words"
            className="form-control"
            id={`description-${index}`}
            value={project.description}
            onChange={(e) => handleProjectChange(index, 'description', e.target.value)}
            required
          />
        </div>
      </div>
      <button type="button" className="btn btn-sm btn-danger mt-2" onClick={() => handleRemoveProject(index)}>Remove</button>
    </div>
  ))}
  <button type="button" className="btn  btn-secondary mt-3" onClick={handleAddProject}>Add Project</button>
</div>
<div className="mb-3 margin">
          <label htmlFor="hobbies" className="form-label main">Hobbies</label>
          {hobbies.map((hobby, index) => (
            <div key={index} className="row mb-2 align-items-center"> 
              <div className="col-5">
                <input
                  placeholder="Hobby"
                  type="text"
                  className="form-control "
                  value={hobby}
                  onChange={(e) => {
                    const updatedHobbies = [...hobbies];
                    updatedHobbies[index] = e.target.value;
                    setHobbies(updatedHobbies);
                  }}
                  required
                />
              </div>
              <div className="col-1 d-flex align-items-center justify-content-left"> 
                <button
                  type="button"
                  className="btn btn-md btn-danger ml-1 rounded-circle"
                  onClick={() => handleRemoveHobby(index)}
                >
                  <FontAwesomeIcon icon={faTimes} />
                </button>
              </div>
            </div>
          ))}
          <button type="button" className="btn  btn-secondary mt-3" onClick={handleAddHobby}>
            Add Hobby
          </button>
        </div>
        
        
        
        
        <button type="submit" className="btn btn-primary generate">Generate Resume</button>
      </form>
    </div>
  );
};

export default ResumeForm;
