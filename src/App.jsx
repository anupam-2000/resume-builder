import React, { useState, useEffect } from 'react';
import OpeningAnimation from './components/openingAnimation/OpeningAnimation';
import 'bootstrap/dist/css/bootstrap.min.css';
import ResumeForm from './components/resumeform/ResumeForm';
import ResumePreview from './components/resumepreview/ResumePreview';
import LOGO from './asset/builder.png'

function App() {
  const [animationComplete, setAnimationComplete] = useState(false);
  const [resumeData, setResumeData] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimationComplete(true);
    }, 3000); // Change the duration (in milliseconds) as per your requirement

    return () => clearTimeout(timer);
  }, []);

  const handleFormSubmit = (data) => {
    setResumeData(data);
  };

  return (
    <div className="app">
      <OpeningAnimation animationComplete={animationComplete} />
      {animationComplete && (
        <>
        <div className="head">
          <img className='logo' src={LOGO} alt="" />
          <h1><i>Resume Builder</i></h1>
        </div>
          
          
          <div className="row">
            <div className="col-md-6">
              <ResumeForm onSubmit={handleFormSubmit} />
            </div>
            <div className="col-md-6">
              {resumeData ? (
                <ResumePreview resumeData={resumeData} />
              ) : (
                <p className='red'>"Please fill in the form to generate a resume preview."</p>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
