import React from 'react';

const Home = () => (
  <section
    id="home"
    style={{
      backgroundColor: 'black',
      color: '#fff',
      padding: '20px',
      textAlign: 'center',
    }}
  >
    <div style={{ marginTop: '200px' }}>
      <h1 style={{ color: 'orange', fontSize: '30px', fontFamily: 'inherit' }}>Hello!</h1>
      <p style={{ fontSize: '40px', marginTop: '-10px' }}>
        I'm <span style={{ color: 'orange' }}>Soundarya </span>
      </p>
      <p style={{ color: 'orange', marginTop: '-30px', fontSize: '40px' }}>Priyadharshini </p>
      <p style={{ marginTop: '-20px', color: 'grey', fontSize: '20px' }}>
        - Frontend and Web developer
      </p>
    </div>
  </section>
);

export default Home;

