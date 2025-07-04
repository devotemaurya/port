import React from 'react';

const Experience: React.FC = () => (
  <section id="experience" className="section experience-section">
    <div className="container">
      <header>
        <h2 tabIndex={0}>Experience</h2>
      </header>
      <ul>
        <li tabIndex={0}><strong>Quantitative Research Virtual Internship</strong> – JPMorgan Chase & Co. (June 2025)
          <ul>
            <li>Completed a structured simulation focused on quantitative research methods.</li>
            <li>Analyzed loan data to estimate probability of customer default.</li>
            <li>Used dynamic programming to convert FICO scores into categorical variables.</li>
            <li>Gained insights into credit risk modeling and data-driven decision making.</li>
          </ul>
        </li>
      </ul>
    </div>
  </section>
);

export default Experience;
