import React from 'react';
import './Projects.scss';
import Card from '../../Components/Card/Card';
import projects from './projectList';

const Projects = (): JSX.Element =>
	<div className="Projects">
		<h1>Projects</h1>
		<div className="project-cards">
			{
				projects.map(({ title, imgSrc, link, info, tags }, idx) =>
					<Card
						key={idx}
						title={title}
						imgSrc={imgSrc}
						link={link}
						info={info}
						tags={tags}
					/>
				)
			}
		</div>
	</div>;

export default Projects;