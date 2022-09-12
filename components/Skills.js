import React, { useEffect, useState } from 'react'
import { useTranslation } from 'next-i18next';
import Image from 'next/image';
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
            setState({skills, loading: false})
          } catch (error) {
            setState({error: error.message, loading: false})
          }
        }
        fetchData();
    }, []);

    return (
        <section id="skills" className="skills_container">
            <h2>{t("skills")}</h2>
            <div className="skills">
                {
                    skills?.map(skill => (
                        <div key={skill._id} className="skill">
                            <Image src={`/images/skills/${skill.image_name}.png`} alt={skill.name} width='100%' height='100%' />
                        </div>
                    ))
                }
            </div>
        </section>
    )
}
