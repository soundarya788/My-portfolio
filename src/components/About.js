import React from 'react';

const About = () => (
  <section id="about" style={{ backgroundColor: 'black', color: 'white', padding: '30px 20px', textAlign: 'center', marginLeft: '30px', marginTop: '240px' }}>
    <h1 style={{ fontSize: '28px', marginBottom: '30px', borderBottom: '2px solid white', paddingBottom: '10px' }}>Skills</h1>
    <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
      <SkillProgressBar skill="HTML" />
      <SkillProgressBar skill="CSS" />
      <SkillProgressBar skill="JavaScript" />
      <SkillProgressBar skill="React.js" />
    </div>
  </section>
);

const SkillProgressBar = ({ skill, percentage }) => (
  <div style={{ width: '100%', maxWidth: '500px', margin: '10px', textAlign: 'left' }}>
    <p style={{ fontSize: '18px', marginBottom: '5px' }}>{skill}</p>
    <div style={{ width: '100%', height: '10px', backgroundColor: '#333', borderRadius: '5px', overflow: 'hidden' }}>
      <div style={{ width: `${percentage}%`, height: '100%', backgroundColor: 'orange', borderRadius: '5px', transition: 'width 1s ease-in-out' }}></div>
    </div>
  </div>
);

export default About;




