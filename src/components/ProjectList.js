import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  const projectComponents = projects.map((project) => {
    return (
      <ProjectItem
        key={project.id}
        id={project.id}
        name={project.name}
        about={project.about}
        technologies={project.technologies}
      />
    );
  });

  return (
    <section>
      <h2>Projects</h2>
      {projectComponents}
    </section>
  );
}

export default ProjectList;