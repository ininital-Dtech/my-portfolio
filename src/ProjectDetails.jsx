function ProjectDetails({ project, onBack }) {
  // Last word of the title is highlighted in orange, like "Pro" + "jects"
  const words = project.title.split(" ");
  const lastWord = words.pop();
  const firstPart = words.join(" ");

  return (
    <div className="project-container-main">
      {/* Banner (reuses your Projects header background) */}
      <div className="project-container-top project-details-banner">
        <button className="project-back-btn" onClick={onBack}>
          ← Back
        </button>
        <span className="project-details-category">{project.category}</span>
        <h1>
          {firstPart && <>{firstPart} </>}
          <span className="text-orange">{lastWord}</span>
        </h1>
        <p>{project.description}</p>
      </div>

      <div className="project-details-body">
        {/* Overview card */}
        <div className="project-detail-card project-detail-overview">
          {project.image && (
            <div className="project-detail-cover">
              <img src={project.image} alt={project.title} />
            </div>
          )}

          <div className="project-detail-info">
            <h2>About This Project</h2>
            <p>{project.overview}</p>

            {(project.role || project.status) && (
              <div className="project-meta">
                {project.role && (
                  <div>
                    <small>Role</small>
                    <strong>{project.role}</strong>
                  </div>
                )}
                {project.status && (
                  <div>
                    <small>Status</small>
                    <strong>{project.status}</strong>
                  </div>
                )}
              </div>
            )}

            <h3>Technologies Used</h3>
            <div className="project-tech">
              {project.technologies.map((tech) => (
                <span className="project-tech-stack" key={tech}>
                  {tech}
                </span>
              ))}
            </div>

            {project.links?.length > 0 && (
              <div className="project-links">
                {project.links.map((link) => (
                  <a
                    key={link.url}
                    href={link.url}
                    target="_blank"
                    rel="noreferrer"
                    className="project-view-btn project-link-btn"
                  >
                    <span>{link.label} →</span>
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Features + screenshots */}
        <div className="project-detail-grid">
          <div className="project-detail-card">
            <h2>Key Features</h2>
            <ul className="project-feature-list">
              {project.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          </div>

          {project.screenshots?.length > 0 && (
            <div className="project-detail-card">
              <h2>Screenshots</h2>
              <div className="project-gallery">
                {project.screenshots.map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt={`${project.title} screenshot ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectDetails;