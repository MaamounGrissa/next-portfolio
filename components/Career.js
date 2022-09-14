import React, { useEffect, useState } from 'react'
import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import client from '../utils/client';
import { useRouter } from 'next/router';

export default function Career(props) {
    const { classes } = props;
    const { locale } = useRouter();
    const { t } = useTranslation('common');
    const [state, setState] = useState({
        career: [],
        error: '',
        loading: true,
    })
    const { loading, error, career } = state
    const [educations, setEducations] = useState([])
    const [experiences, setExperiences] = useState([])
    
    useEffect(() => {
        const fetchData = async () => {
          try {
            const res = await client.fetch(`*[_type == "career"] | order(order desc)`)
            setState({career: res, loading: false})
          } catch (error) {
            setState({error: error.message, loading: false})
          }
        }
        fetchData();
    }, []);

    useEffect(() => {
        if (career?.length > 0) {
            const educations = career.filter(item => item.type === 'education')
            const experiences = career.filter(item => item.type === 'experience')
            setEducations(educations)
            setExperiences(experiences)
        } else {
            setEducations([])
            setExperiences([])
        }
    }, [career])

    return (
        <section id="career" className="career_container">
            {
                loading ? <p>Loading...</p>
                : error ? <p>{error}</p>
                : (
                    <>
                        <div className='education_container' data-aos="fade-right" data-aos-duration="1000">
                            <h2>{t("education")}</h2>
                            {
                                educations?.map(education => (
                                    <div key={education._id} className="education_item">
                                        <div className="education_image">
                                            <Image src={`/images/career/${education.image_name}.png`} alt={education.title} layout="fill" objectFit='contain' />
                                        </div>
                                        <div className="education_content">
                                            <h3>{education.title[locale]}</h3>
                                            <p>{education.description[locale]}</p>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                        <div className='experience_container' data-aos="fade-left" data-aos-duration="1000">
                            <h2>{t("experience")}</h2>
                            {
                                experiences?.map(experience => (
                                    <div key={experience._id} className="experience_item">
                                        <div className="experience_image">
                                            <Image src={`/images/career/${experience.image_name}.png`} alt={experience.title} layout="fill" objectFit='contain' />
                                        </div>
                                        <div className="experience_content">
                                            <h3>{locale && experience.title[locale]}</h3>
                                            <p>{locale && experience.description[locale]}</p>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </>
                )
            }
        </section>
    )
}
