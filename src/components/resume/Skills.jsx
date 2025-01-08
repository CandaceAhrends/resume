import React from 'react';
import { currentSkills, goodKnowledge, someExperience } from './consts';
import Typography from '@mui/material/Typography';
import Block from './Block';

const Skills = () => {
  return (
    <div className="skills">
      <Block title="Skills">
        <ul>
          {currentSkills.split(/\n/g).map((skill) => (
            <li>
              <Typography>{skill}</Typography>
            </li>
          ))}
        </ul>
      </Block>
      <Block title="Good Knowledge">
        <ul>
          {goodKnowledge.split(/\n/g).map((skill) => (
            <li>
              <Typography>{skill}</Typography>
            </li>
          ))}
        </ul>
      </Block>
      <Block title="Some experience">
        <ul>
          {someExperience.split(/\n/g).map((skill) => (
            <li>
              <Typography>{skill}</Typography>
            </li>
          ))}
        </ul>
      </Block>
    </div>
  );
};

export default Skills;
