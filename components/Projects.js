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
            const projects = await client.fetch(`*[_type == "projects" && (!defined(isActive) || isActive == true)] | order(order desc)`)
            setState({projects, loading: false, error: ''})
          } catch (error) {
            setState({projects: [], error: error.message, loading: false})
          }
        }
        fetchData();
    }, []);

    return (
        <section id="projects" className="projects_container">
            <h2>{t("references")}</h2>
            {loading && <p className="section_message">{t('loading')}</p>}
            {error && <p className="section_message">{t('content_unavailable')}</p>}
            {!loading && !error && projects?.length === 0 && <p className="section_message">{t('no_projects')}</p>}
            <div className="projects">
                {
                    !loading && !error && projects?.map(project => (
                        <div key={project._id} className="project" data-aos="fade-in" data-aos-duration="1500" data-aos-delay="500">
                            <h2 className='project_title'>{project.name}</h2>
                            {project.skills?.map((skill, skillIndex) => (
                                <div key={skill} className={`project_skill${skillIndex}`} >
                                    <Image src={`/images/skills/${skill}.png`} alt={skill} width={45} height={45} />
                                </div>
                            ))}
                            <div className='project_image_container'>
                                <Image src={`/images/portfolio/${project.image_name}.png`} alt={project.name} layout="fill" objectFit='contain' />
                            </div>
                            <div className="project_company">
                                <div style={{ width: "100%", height:"100%", position: "relative" }}><Image src={`/images/career/${project.company}.png`} alt={project.company || project.name} layout='fill' objectFit='contain' /></div>
                            </div>
                            <div className="project_links">
                                {project.github_link && (
                                    <a href={project.github_link} target="_blank" rel="noreferrer" aria-label={t('external_github')}>
                                        <Image src="/images/github.png" alt="GitHub" width={40} height={40} />
                                    </a>
                                )}
                                {project.website_link && (
                                    <a href={project.website_link} target="_blank" rel="noreferrer" aria-label={t('external_website')}>
                                        <Image src="/images/link.png" alt={t('external_website')} width={40} height={40} />
                                    </a>
                                )}
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}
