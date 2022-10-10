import React from 'react'
import ProjectCard from '../../ProjectCard/ProjectCard'
import { useEffect, useState } from 'react'
import Cosmic from 'cosmicjs'


export default function Projects() {

  const api = Cosmic()
  const bucket = api.bucket({
    slug: process.env.REACT_APP_COSMIC_BUCKET_SLUG,
    read_key: process.env.REACT_APP_COSMIC_API_READKEY
  })
  const [projectData, setProjectData] = useState([]);

  useEffect(() => {
    
    async function fetchData() {
      const data = await bucket.objects.find({
        type: 'projects'
      })
      .props('slug,title,content,metadata,')
      .limit(20)

      return data.objects
    }

    fetchData().then((res) => {
      console.log(res)
      setProjectData(res)
    })

  }, [bucket.objects]);

  return (
    <section className="projects centered">
        <h2 id="projects">My Projects</h2>

        {projectData.map((project) => {
          return(
            <ProjectCard
              key={project.slug}
              title={project.title}
              description={project.content}
              hostedURL={project.metadata.site_link}
              githubURL={project.metadata.repo_link}
            />
          )
        })}
    </section>
  )
}
