import React from 'react';

function Skills() {
  return (
    <section id="skills" style={{ backgroundColor: 'black', color: 'white', padding: '50px 20px', textAlign: 'center',marginTop:'200px' }}>
      <h1 style={{ fontSize: '28px', marginBottom: '20px', borderBottom: '2px solid white', paddingBottom: '10px' }}>Projects</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center' }}>
      <ProjectCard title="Resume" description="This React application for a personal Resume. It includes two columns: the left column contains personal details, skills, language proficiency, and hobbies, while the right column features a career summary, work experience, educational background, and strengths. The layout is structured using HTML and styled with CSS. " link="https://funny-torte-0705ed.netlify.app/" />
        <ProjectCard title="UI design" description="This React application shows only for designs in this application I used HTML, CSS , JAVASCRIPT and React.js" link="https://gentle-unicorn-4c532b.netlify.app/" />
      </div>
    </section>
  );
}

const ProjectCard = ({ title, description, link }) => (
  <div style={{ width: '100%', maxWidth: '500px', margin: '20px', padding: '20px', border: '1px solid white', borderRadius: '8px', textAlign: 'left' }}>
    <h2 style={{ fontSize: '20px', marginBottom: '10px' }}>{title}</h2>
    <p style={{ fontSize: '16px' }}>{description}</p>
    <a href={link} target="_blank" rel="noopener noreferrer" style={{ color: 'orange', textDecoration: 'underline' }}>
      Visit
    </a>
  </div>
);

export default Skills;



