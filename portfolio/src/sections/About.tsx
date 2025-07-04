import React from 'react';

const About: React.FC = () => (
  <section id="about" className="section about-section">
    <div className="container">
      <header>
        <h2 tabIndex={0}>About Me</h2>
      </header>
      <div className="about-bio">
        <div className="about-text">
          <p tabIndex={0}>
            Hi! I'm Nishant Kumar Maurya, a Trainee Analyst and quantitative researcher with hands-on experience at JPMorgan Chase & Co. I specialize in Python, data analysis, and machine learning, with a passion for leveraging data-driven decision-making for superior outcomes.
          </p>
          <ul style={{marginTop: '1rem', color: '#a3a3a3'}}>
            <li><strong>Phone:</strong> 7520428340</li>
            <li><strong>Email:</strong> <a href="mailto:mauryank320@gmail.com">mauryank320@gmail.com</a></li>
            <li><strong>Address:</strong> Thanjavur, Tamil Nadu</li>
            <li><strong>Education:</strong> B.Tech – Computer Science and Business Systems | CGPA: 7.03</li>
            <li><strong>Relevant Coursework:</strong> Statistics, Data Structures, DBMS, Machine Learning</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default About;
