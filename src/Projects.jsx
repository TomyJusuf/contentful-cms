import useFetchProjects from './fetchProjects'
const Projects = () => {
  const { loading, projects } = useFetchProjects()

  if (loading) {
    return <p>Loading...</p>
  }

  return (
    <section className="projects">
      <div className="title">
        <h2>projects</h2>
        <div className="title-underline"></div>
      </div>
      <div className="projects-center">
        {projects.map((project, index) => {
          const { image, url, title } = project.fields

          {
            return (
              <a
                key={index}
                href={url}
                target="_blank"
                rel="noreferrer"
                className="project"
              >
                <img src={image.fields.file.url} alt={title} className="img" />
                <h5>{title}</h5>
              </a>
            )
          }
        })}
      </div>
    </section>
  )
}
export default Projects
