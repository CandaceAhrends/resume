import React from 'react';
import Jobs from './resume/Jobs';
import Summary from './resume/Summary';
import Skills from './resume/Skills';
import About from './resume/About';
import Links from './resume/Links';
import { Routes, Route } from 'react-router-dom';

const Content = () => {
  return (
    <section className="content">
      <Routes>
        <Route path="/" element={<Summary />} />
        <Route path="/summary" element={<Summary />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/links" element={<Links />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </section>
  );
};

export default Content;
