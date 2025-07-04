import React, { useState } from 'react';
import './App.css';

import Home from './sections/Home';
import Projects from './sections/Projects';
import Skills from './sections/Skills';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

const NAV_LINKS = [
  { id: 'home', label: 'Home' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
];

function App() {
  const [visibleSection, setVisibleSection] = useState<'home' | 'projects' | 'skills' | 'contact'>('home');

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setVisibleSection(id as typeof visibleSection);
  };

  return (
    <div className="App">
      <nav className="main-nav" aria-label="Main navigation">
        <ul>
          {NAV_LINKS.map(link => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className={`nav-link${visibleSection === link.id ? ' active' : ''}`}
                onClick={e => handleNavClick(e, link.id)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <div className={`fade-section${visibleSection === 'home' ? ' visible' : ''}`}>{visibleSection === 'home' && <Home />}</div>
      <div className={`fade-section${visibleSection === 'projects' ? ' visible' : ''}`}>{visibleSection === 'projects' && <Projects />}</div>
      <div className={`fade-section${visibleSection === 'skills' ? ' visible' : ''}`}>{visibleSection === 'skills' && <Skills />}</div>
      <div className={`fade-section${visibleSection === 'contact' ? ' visible' : ''}`}>{visibleSection === 'contact' && <Contact />}</div>
      <Footer />
    </div>
  );
}

export default App;
