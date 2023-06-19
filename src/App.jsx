import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import ResumeForm from "./components/resumeform/ResumeForm";
import ResumePreview from "./components/resumepreview/ResumePreview";

function App() {
  const [resumeData, setResumeData] = useState(null);

  const handleFormSubmit = (data) => {
    setResumeData(data);
  };

  return (
    <div className='app'>
      <div className="row">
        <div className="col-md-6">
          <ResumeForm onSubmit={handleFormSubmit} />
        </div>
        <div className="col-md-6">
          {resumeData ? (
            <ResumePreview resumeData={resumeData} />
          ) : (
            <p>Please fill in the form to generate a resume preview.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
