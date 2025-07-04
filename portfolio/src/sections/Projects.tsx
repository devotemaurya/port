import React from 'react';

const projects = [
	{
		title: 'Crop Yield Prediction',
		image:
			'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80',
		desc: 'Built Random Forest model (85% accuracy) analyzing soil/weather data. Deployed via Streamlit for real-time farmer decision-making.',
		demo: '#',
		repo: '#',
	},
	{
		title: 'HealthCheck – AI Symptom Analyzer',
		image:
			'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80',
		desc: 'Integrated ML model + chatbot for disease prediction with PDF report generation. Implemented user history tracking using SQLite.',
		demo: 'https://healthai-production-e0e5.up.railway.app/landing',
		repo: 'https://github.com/devotemaurya/Health_ai',
	},
	{
		title: 'Diabetes Prediction System',
		image:
			'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
		desc: 'Developed Logistic Regression/SVM models (F1-score: 82%) for early diagnosis. Identified key medical risk factors through feature importance analysis.',
		demo: '#',
		repo: 'https://github.com/devotemaurya/Diabetes-prediction',
	},
	{
		title: 'Mandir Website – Dugdheshwar Nath Mahadev Temple',
		image: 'https://www.svgrepo.com/show/303251/temple.svg',
		desc: 'A beautiful informational website for showcasing a spiritual temple with sections like Gallery, Events, Feedback Form, and Contributor List. Designed with a blend of spirituality and modern UI.\n\nTechnologies: HTML, CSS, JavaScript, Google Translate Integration, FormSubmit for Feedback, Smooth Scrolling UI.',
		demo: 'https://elaborate-madeleine-6ae70b.netlify.app/',
		repo: 'https://github.com/devotemaurya/Temple',
	},
];

const Projects: React.FC = () => (
	<section id="projects" className="section projects-section">
		<div className="container">
			<header>
				<h2 tabIndex={0}>Projects</h2>
			</header>
			<div className="projects-grid">
				{projects.map((project, idx) => (
					<div className="project-card" key={idx} tabIndex={0}>
						<img src={project.image} alt={project.title} />
						<div className="project-card-content">
							<div className="project-card-title">{project.title}</div>
							<div className="project-card-desc">{project.desc}</div>
							<div className="project-card-links">
								{project.demo !== '#' && (
									<a
										href={project.demo}
										className="project-card-link"
										target="_blank"
										rel="noopener noreferrer"
									>
										Live Demo
									</a>
								)}
								{project.repo !== '#' && (
									<a
										href={project.repo}
										className="project-card-link"
										target="_blank"
										rel="noopener noreferrer"
									>
										Repository
									</a>
								)}
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	</section>
);

export default Projects;
