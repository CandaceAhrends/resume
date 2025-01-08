import React from 'react';

const Block = ({ children, sectionClass, title }) => {
  return (
    <section className={sectionClass ? sectionClass : ''}>
      <h4>{title}</h4>
      {children}
    </section>
  );
};

export default Block;
