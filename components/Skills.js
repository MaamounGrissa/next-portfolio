import React, { useEffect, useState } from 'react'
import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import AOS from 'aos';
import client from '../utils/client';

export default function Skills(props) {
    const { classes } = props;
    const { t } = useTranslation('common');
    const [state, setState] = useState({
        skills: [],
        error: '',
        loading: true,
    })
    const { loading, error, skills } = state
        
    useEffect(() => {
        const fetchData = async () => {
          try {
            const skills = await client.fetch(`*[_type == "skills"] | order(order asc)`)
            setState({skills, loading: false, error: ''})
          } catch (error) {
            setState({skills: [], error: error.message, loading: false})
          }
        }
        fetchData();
    }, []);

    useEffect(() => {
        if (typeof window !== 'undefined' && !loading) {
            requestAnimationFrame(() => AOS.refreshHard());
        }
    }, [loading, skills]);

    return (
        <section id="skills" className="skills_container">
            <h2>{t("skills")}</h2>
            {loading && <p className="section_message light">{t('loading')}</p>}
            {error && <p className="section_message light">{t('content_unavailable')}</p>}
            {!loading && !error && skills?.length === 0 && <p className="section_message light">{t('no_skills')}</p>}
            <div className="skills">
                {
                    !loading && !error && skills?.map((skill, idx) => (
                        <div
                            key={skill._id}
                            className="skill"
                            data-aos="zoom-in"
                            data-aos-delay={(idx % 10) * 80}
                            data-aos-duration="700"
                        >
                            <Image src={`/images/skills/${skill.image_name}.png`} alt={skill.name} width={100} height={100} />
                        </div>
                    ))
                }
            </div>
        </section>
    )
}
