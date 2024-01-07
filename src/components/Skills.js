import React from 'react';

function Skills() {
  return (
    <section id="skills" style={{ backgroundColor: 'black', color: 'white', padding: '50px 20px', textAlign: 'center' }}>
      <h1 style={{ fontSize: '28px', marginBottom: '20px', borderBottom: '2px solid white', paddingBottom: '10px' }}>Projects</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center' }}>
        <ProjectCard title="Avatar" description="This React app allows users to upload head and body images, merge them, and adjust the composition. It features a carousel for selecting body images from different sets and provides download functionality." link="https://elaborate-macaron-587470.netlify.app/" />
        <ProjectCard title="Pokedox" description="This React application serves as a simple Pokemon browser that allows users to search and filter Pokémon based on their names and types. Here are the main components and functionalities" link="https://warm-griffin-efdb10.netlify.app/" />
        <ProjectCard title="UI design" description="This React application shows only for designs " link="https://gentle-unicorn-4c532b.netlify.app/" />
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



