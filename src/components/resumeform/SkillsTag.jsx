import React from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

const softwareSkills = [
  { title: 'JavaScript' },
  { title: 'Python' },
  { title: 'Java' },
  { title: 'C++' },
  { title: 'HTML' },
  { title: 'CSS' },
  { title: 'React' },
  { title: 'Angular' },
  { title: 'Vue.js' },
  { title: 'Node.js' },
  { title: 'Express.js' },
  { title: 'Django' },
  { title: 'Flask' },
  { title: 'Ruby' },
  { title: 'Ruby on Rails' },
  { title: 'PHP' },
  { title: 'Laravel' },
  { title: 'SQL' },
  { title: 'MongoDB' },
  { title: 'Firebase' },
  { title: 'Git' },
  { title: 'AWS' },
  { title: 'Docker' },
  { title: 'Kubernetes' },
];

const SkillsTags = ({ onChange }) => {
  const handleSkillsChange = (event, value) => {
    onChange(value);
  };

  return (
    <Autocomplete
      multiple
      limitTags={4}
      id="multiple-limit-tags"
      options={softwareSkills}
      getOptionLabel={(option) => option.title}
      renderInput={(params) => (
        <TextField
          {...params}
          placeholder="Add Skills"
          sx={{
            width: '500px',
            marginBottom: '20px',
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: '#0775ac',
                borderWidth: '3px'
              },
              '&:hover fieldset': {
                borderColor: '#0775ac',
              },
              '&.Mui-focused fieldset': {
                borderColor: '#508AA8',
                borderWidth: '3px'
              },
            },
          }}
        />
      )}
      onChange={handleSkillsChange}
    />
  );
};

export default SkillsTags;
