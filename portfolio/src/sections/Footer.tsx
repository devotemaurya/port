import React from 'react';

const githubIcon = (
  <svg width="24" height="24" fill="none" viewBox="0 0 24 24" aria-hidden="true"><path fill="#00eaff" d="M12 2C6.48 2 2 6.58 2 12.26c0 4.5 2.87 8.32 6.84 9.67.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.36-3.37-1.36-.45-1.18-1.1-1.5-1.1-1.5-.9-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.28 2.75 1.05A9.38 9.38 0 0 1 12 6.84c.85.004 1.71.12 2.51.35 1.91-1.33 2.75-1.05 2.75-1.05.55 1.4.2 2.44.1 2.7.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.81-4.57 5.07.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.8 0 .26.18.57.69.48A10.01 10.01 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z"/></svg>
);

const linkedinIcon = (
  <svg width="24" height="24" fill="none" viewBox="0 0 24 24" aria-hidden="true"><rect width="24" height="24" rx="4" fill="#00eaff"/><path d="M7.5 8.5A1.5 1.5 0 1 1 7.5 5a1.5 1.5 0 0 1 0 3Zm-1.25 2.25h2.5v7.5h-2.5v-7.5ZM12 10.75h2.25v1.02c.31-.59 1.09-1.2 2.25-1.2 2.41 0 2.85 1.59 2.85 3.66v4.02h-2.5v-3.57c0-.85-.02-1.95-1.19-1.95-1.19 0-1.37.93-1.37 1.89v3.63h-2.5v-7.5ZM6.25 18.25h11.5c.69 0 1.25-.56 1.25-1.25v-11.5c0-.69-.56-1.25-1.25-1.25h-11.5c-.69 0-1.25.56-1.25 1.25v11.5c0 .69.56 1.25 1.25 1.25Z" fill="#fff"/></svg>
);

const emailIcon = (
  <svg width="24" height="24" fill="none" viewBox="0 0 24 24" aria-hidden="true"><rect width="24" height="24" rx="4" fill="#00eaff"/><path d="M6 8.5v7a1.5 1.5 0 0 0 1.5 1.5h9a1.5 1.5 0 0 0 1.5-1.5v-7A1.5 1.5 0 0 0 16.5 7h-9A1.5 1.5 0 0 0 6 8.5Zm1.5-.5h9a.5.5 0 0 1 .5.5v.2l-5 3.13-5-3.13V8.5a.5.5 0 0 1 .5-.5Zm9 8h-9a.5.5 0 0 1-.5-.5v-5.3l4.7 2.94a1 1 0 0 0 1.1 0l4.7-2.94v5.3a.5.5 0 0 1-.5.5Z" fill="#fff"/></svg>
);

const Footer: React.FC = () => (
  <footer className="footer">
    <div className="footer-content">
      <div className="social-links">
        <a href="https://github.com/devotemaurya" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          {githubIcon}
        </a>
        <a href="https://linkedin.com/in/nishant-kumar-maurya-b65746276" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          {linkedinIcon}
        </a>
        <a href="mailto:mauryank320@gmail.com" aria-label="Email">
          {emailIcon}
        </a>
      </div>
      <div className="copyright">
        &copy; {new Date().getFullYear()} Nishant Kumar Maurya. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
