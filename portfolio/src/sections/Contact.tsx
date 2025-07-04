import React from 'react';

const contactItems = [
  {
    label: 'Name',
    value: 'Nishant Maurya',
    icon: <span role="img" aria-label="User" style={{fontSize: '1.3em'}}>👤</span>,
  },
  {
    label: 'Email',
    value: <a href="mailto:mauryank320@gmail.com">mauryank320@gmail.com</a>,
    icon: <span role="img" aria-label="Email" style={{fontSize: '1.3em'}}>📧</span>,
  },
  {
    label: 'GitHub',
    value: <a href="https://github.com/devotemaurya" target="_blank" rel="noopener noreferrer">N-ishant</a>,
    icon: <span role="img" aria-label="GitHub" style={{fontSize: '1.3em'}}>💻</span>,
  },
  {
    label: 'LinkedIn',
    value: <a href="https://www.linkedin.com/in/nishant-kumar-maurya-b65746276/" target="_blank" rel="noopener noreferrer">Nishant Maurya</a>,
    icon: <span role="img" aria-label="LinkedIn" style={{fontSize: '1.3em'}}>🔗</span>,
  },
];

const Contact: React.FC = () => (
  <section id="contact" className="section contact-section">
    <div className="container">
      <header>
        <h2 tabIndex={0}>Let's Connect</h2>
      </header>
      <ul className="contact-list">
        {contactItems.map((item, idx) => (
          <li className="contact-list-item" key={idx}>
            <span className="contact-list-icon">{item.icon}</span>
            <span className="contact-list-label">{item.label}:</span>
            <span className="contact-list-value">{item.value}</span>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default Contact;
