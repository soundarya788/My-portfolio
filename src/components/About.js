import React from 'react';

const About = () => (
  <section id="about" style={{ backgroundColor: 'black', color: 'white', marginTop: '630px', padding: '30px 20px', textAlign: 'center' }}>
    <h1 style={{ fontSize: '28px', marginBottom: '20px', borderBottom: '2px solid white', paddingBottom: '10px' }}>Skills</h1>
    <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
      <SkillProgressBar skill="HTML" percentage={80} />
      <SkillProgressBar skill="CSS" percentage={75} />
      <SkillProgressBar skill="JavaScript" percentage={85} />
      <SkillProgressBar skill="React.js" percentage={90} />
      <SkillProgressBar skill="Python" percentage={70} />
      <SkillProgressBar skill="Node.js" percentage={80} />
    </div>
  </section>
);

const SkillProgressBar = ({ skill, percentage }) => (
  <div style={{ width: '500px', margin: '10px', textAlign: 'left' }}>
    <p style={{ fontSize: '18px', marginBottom: '5px' }}>{skill}</p>
    <div style={{ width: '100%', height: '10px', backgroundColor: '#333', borderRadius: '5px', overflow: 'hidden' }}>
      <div style={{ width: `${percentage}%`, height: '100%', backgroundColor: 'orange', borderRadius: '5px', transition: 'width 1s ease-in-out' }}></div>
    </div>
  </div>
);

export default About;


