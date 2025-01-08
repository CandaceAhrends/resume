import React from 'react';
import Typography from '@mui/material/Typography';

const JobHeader = ({ title, company, subHeader, dates }) => {
  return (
    <section className="job-header">
      <Typography variant="body2">{company}</Typography>
      <Typography variant="caption">{dates}</Typography>
      <Typography variant="body2">
        <span className="sub-header">{subHeader}</span>
      </Typography>
      <Typography variant="caption">
        <span className="sub-header">{title}</span>
      </Typography>
    </section>
  );
};

export default JobHeader;
