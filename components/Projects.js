import React, { useEffect, useState } from 'react'
import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import client from '../utils/client';

export default function Projects(props) {
    const { classes } = props;
    const { t } = useTranslation('common');
    const [state, setState] = useState({
        projects: [],
        error: '',
        loading: true,
    })
    const { loading, error, projects } = state
        
    useEffect(() => {
        const fetchData = async () => {
          try {
            const projects = await client.fetch(`*[_type == "projects"] | order(order desc)`)
            setState({projects, loading: false})
          } catch (error) {
            setState({error: error.message, loading: false})
          }
        }
        fetchData();
    }, []);

    return (
        <section id="projects" className="projects_container">
            <h2>{t("references")}</h2>
            <div className="projects">
                {
                    projects?.map(project => (
                        <div key={project._id} className="project">
                            <h2>{project.title}</h2>
                            {project.skills?.map((skill, skillIndex) => (
                                <div key={skill} className={`project_skill${skillIndex}`} >
                                    <Image src={`/images/skills/${skill}.png`} alt="Skill" width='45' height='45' />
                                </div>
                            ))}
                            <div style={{ width: "95%", height: "100%", position: "relative"}}>
                                <Image src={`/images/portfolio/${project.image_name}.png`} alt={project.name} layout="fill" objectFit='contain' />
                            </div>
                            <div className="project_company">
                                <div style={{ width: "100%", height:"100%", position: "relative" }}><Image src={`/images/career/${project.company}.png`} alt="Company" layout='fill' objectFit='contain' /></div>
                            </div>
                            <div className="project_links">
                                <a href={project.github_link} target="_blank" rel="noreferrer">
                                    <Image src="/images/github.png" alt="Github" width='45' height='45' />
                                </a>
                                <a href={project.website_link} target="_blank" rel="noreferrer">
                                    <Image src="/images/link.png" alt="Website" width='45' height='45' />
                                </a>
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}
