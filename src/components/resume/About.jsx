import React from 'react';
import Block from './Block';
import Typography from '@mui/material/Typography';

const About = () => {
  return (
    <>
      <Block title="About">
        <div className="about-me">
          <Typography paragraph>
            I am a passionate web developer who enjoys coding in JavaScript and
            creating visually appealing web experiences. Beyond coding, I like
            to explore new places and try new restaruants with different ethnic
            foods and experiences. I also like bike riding and walking to keep
            in shape.
          </Typography>
        </div>
      </Block>
      <Block title="Education">
        <ul className="education">
          <li>
            <Typography>
              Bachelor of Arts from The University of Texas at Arlington
            </Typography>
          </li>
          <li>
            <Typography>
              GPA: 3.2 and 18 hours towards my MS in Information Systems
            </Typography>
          </li>
        </ul>
      </Block>
    </>
  );
};

export default About;
