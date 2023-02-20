import React from 'react';


function Section({ children, className, id }) {
  return (
    <section className={className} id={id}>
      {children}
    </section>
  );
}

export default Section;
