import React, { useEffect, useState } from 'react';

const phrases = [
  'Welcome to my digital space.',
  'A developer who turns ideas into clean, functional, and meaningful code.',
  'Let’s build something that matters — one project at a time.'
];

const Home: React.FC = () => {
  const [phraseIdx, setPhraseIdx] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPhraseIdx(idx => (idx + 1) % phrases.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="section home-section home-hero">
      <div className="hero-content">
        <h1 className="hero-title">Hello I'm <span className="highlight-name">Nishant Maurya</span></h1>
        <div className="hero-phrases" aria-live="polite">
          <span>{phrases[phraseIdx]}</span>
        </div>
      </div>
    </section>
  );
};

export default Home;
