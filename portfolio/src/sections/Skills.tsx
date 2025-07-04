import React from 'react';

const skillGroups = [
  {
    group: 'Languages',
    icon: <svg width="28" height="28" viewBox="0 0 32 32" fill="none"><rect width="32" height="32" rx="8" fill="#2563eb"/><text x="7" y="21" fontSize="13" fill="#fff" fontFamily="monospace">Lang</text></svg>,
    skills: ['Python', 'C', 'C++', 'Java', 'JavaScript', 'HTML', 'CSS'],
  },
  {
    group: 'Web Development',
    icon: <svg width="28" height="28" viewBox="0 0 32 32" fill="none"><rect width="32" height="32" rx="8" fill="#38bdf8"/><text x="4" y="21" fontSize="13" fill="#fff" fontFamily="monospace">Web</text></svg>,
    skills: ['Flask', 'React.js', 'Vite', 'Firebase (Auth & Realtime DB)', 'Tailwind CSS'],
  },
  {
    group: 'Machine Learning',
    icon: <svg width="28" height="28" viewBox="0 0 32 32" fill="none"><rect width="32" height="32" rx="8" fill="#f59e42"/><text x="2" y="21" fontSize="13" fill="#fff" fontFamily="monospace">ML</text></svg>,
    skills: ['Scikit-learn', 'Pandas', 'NumPy', 'TensorFlow (basic)', 'LSTM', 'Autoencoders'],
  },
  {
    group: 'Tools & Platforms',
    icon: <svg width="28" height="28" viewBox="0 0 32 32" fill="none"><rect width="32" height="32" rx="8" fill="#10b981"/><text x="2" y="21" fontSize="13" fill="#fff" fontFamily="monospace">Tools</text></svg>,
    skills: ['Git', 'GitHub', 'Google Colab', 'VS Code', 'Android Studio (basics)', 'GCP (Compute Engine)'],
  },
  {
    group: 'Other Skills',
    icon: <svg width="28" height="28" viewBox="0 0 32 32" fill="none"><rect width="32" height="32" rx="8" fill="#a259ff"/><text x="2" y="21" fontSize="13" fill="#fff" fontFamily="monospace">Other</text></svg>,
    skills: ['API Integration (Together AI)', 'PDF Export', 'SQLite', 'Streamlit', 'UI/UX Design', 'Responsive Layouts'],
  },
];

const Skills: React.FC = () => (
  <section id="skills" className="section skills-section">
    <div className="container">
      <header>
        <h2 tabIndex={0}>Technical Skills</h2>
      </header>
      <div className="skills-groups">
        {skillGroups.map((group, idx) => (
          <div className="skill-group" key={idx}>
            <div className="skill-group-header">
              <span className="skill-group-icon">{group.icon}</span>
              <span className="skill-group-title">{group.group}</span>
            </div>
            <ul className="skill-list">
              {group.skills.map((skill, i) => (
                <li className="skill-list-item" key={i}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
