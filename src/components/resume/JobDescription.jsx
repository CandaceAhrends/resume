import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import './styles.scss';

const JobDescription = ({ bullets }) => {
  return (
    <ul
      key={bullets.length + Math.floor(Math.random()) * 10}
      className="job-descriptions"
    >
      {bullets.map((description) => (
        <li key={description.length + Math.floor(Math.random()) * 10}>
          <Typography paragraph>{description}</Typography>
        </li>
      ))}
    </ul>
  );
};

export default JobDescription;
