import React from 'react';

const Home = () => (
  <section
    id="home"
    style={{
      backgroundColor: 'black',
      color: '#fff',
      marginTop: '100px',
      marginLeft: '20px',
      padding: '20px', // Add padding to improve spacing on small screens
      textAlign: 'center', // Center content on small screens
    }}
  >
    <div style={{ marginTop: '100px', position: 'absolute', marginLeft: '20px' }}>
      <h1 style={{ color: 'orange', fontSize: '20px', fontFamily: 'inherit' }}>Hello!</h1>
      <p style={{ fontSize: '40px', marginTop: '-15px' }}>I'm <span style={{ color: 'orange' }}>Soundarya </span></p>
      <p style={{ color: 'orange', marginTop: '-60px', fontSize: '40px' }}>Priyadharshini </p>
      <p style={{ marginLeft: '20px', marginTop: '-40px', color: 'grey', fontSize: '20px' }}>
        - Frontend and Web developer
      </p>
    </div>
  </section>
);

export default Home;
