function ProjectItem({ name, about, technologies }) {
  const techSpans = technologies.map((tech, index) => {
    return (
      <span key={index} style={{ marginRight: "8px" }}>
        {tech}
      </span>
    );
  });

  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div>
        {techSpans}
      </div>
    </div>
  );
}

export default ProjectItem;