import { projects } from '@/data/projects';
import Subtitle from './Subtitle';
import ProjectCard from './project-card/ProjectCard';

const Projects = () => {
	return (
		<section className="w-full px-4 my-16">
			<article className="mx-auto max-w-screen-xl w-full ">
				<Subtitle text="My projects" />
				<div className="grid gap-2 grid-cols-1 sm:grid-cols-2 mt-8">
					{projects.map(x => (
						<ProjectCard key={x.name} project={x} />
					))}
				</div>
			</article>
		</section>
	);
};

export default Projects;
