import React from 'react';
import { resumeExperience, resumeSummary } from './consts';
import Typography from '@mui/material/Typography';
const summaryLines = resumeSummary.split(/\n/g);
const experienceLines = resumeExperience.split(/\n/g);
import Block from './Block';

const SummaryLine = ({ line }) => (
  <li>
    <Typography>{line}</Typography>
  </li>
);

const Summary = () => {
  return (
    <>
      <Block sectionClass="summary" title="Summary">
        <ul>
          {summaryLines.map((line) => (
            <SummaryLine line={line}></SummaryLine>
          ))}
        </ul>
      </Block>
      <Block sectionClass="summary" title="Experience">
        <ul>
          {experienceLines.map((line) => (
            <SummaryLine line={line}></SummaryLine>
          ))}
        </ul>
      </Block>
      <section className="block"></section>
    </>
  );
};

export default Summary;
