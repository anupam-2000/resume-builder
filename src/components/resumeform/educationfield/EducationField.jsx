import React from 'react';

const EducationField = ({ education, onEducationChange, onRemoveEducation }) => {
  const handleInputChange = (e) => {
    onEducationChange(e.target.value);
  };

  const handleRemoveClick = () => {
    onRemoveEducation();
  };

  return (
    <div className="mb-3">
      <label htmlFor="education" className="form-label">Education</label>
      <textarea
        className="form-control"
        id="education"
        rows="3"
        value={education}
        onChange={handleInputChange}
        required
      ></textarea>
      <button
        type="button"
        className="btn btn-danger mt-2"
        onClick={handleRemoveClick}
      >
        Remove
      </button>
    </div>
  );
};

export default EducationField;
