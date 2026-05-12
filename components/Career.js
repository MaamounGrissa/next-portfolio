import React, { useEffect, useState } from 'react'
import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import AOS from 'aos';
import client from '../utils/client';
import { useRouter } from 'next/router';

const getLocalizedText = (field, locale) => field?.[locale] || field?.en || '';

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
            setState({career: res, loading: false, error: ''})
          } catch (error) {
            setState({career: [], error: error.message, loading: false})
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
        if (typeof window !== 'undefined') {
            requestAnimationFrame(() => AOS.refreshHard());
        }
    }, [career])

    return (
        <section id="career" className="career_container">
            {
                loading ? <p className="section_message">{t('loading')}</p>
                : error ? <p className="section_message">{t('content_unavailable')}</p>
                : (
                    <>
                        <div className='education_container'>
                            <h2 data-aos={locale === 'ar' ? 'fade-left' : 'fade-right'} data-aos-duration="800">{t("education")}</h2>
                            {
                                educations?.length ? educations.map((education, idx) => {
                                    const title = getLocalizedText(education.title, locale);
                                    const description = getLocalizedText(education.description, locale);

                                    return (
                                    <div
                                        key={education._id}
                                        className="education_item"
                                        data-aos={locale === 'ar' ? 'fade-left' : 'fade-right'}
                                        data-aos-delay={idx * 120}
                                        data-aos-duration="800"
                                    >
                                        <div className="education_image">
                                            <Image src={`/images/career/${education.image_name}.png`} alt={title} layout="fill" objectFit='contain' />
                                        </div>
                                        <div className="education_content">
                                            <h3>{title}</h3>
                                            <p>{description}</p>
                                        </div>
                                    </div>
                                )}) : <p className="section_message">{t('no_career_items')}</p>
                            }
                        </div>
                        <div className='experience_container'>
                            <h2 data-aos={locale === 'ar' ? 'fade-right' : 'fade-left'} data-aos-duration="800">{t("experience")}</h2>
                            {
                                experiences?.length ? experiences.map((experience, idx) => {
                                    const title = getLocalizedText(experience.title, locale);
                                    const description = getLocalizedText(experience.description, locale);

                                    return (
                                    <div
                                        key={experience._id}
                                        className="experience_item"
                                        data-aos={locale === 'ar' ? 'fade-right' : 'fade-left'}
                                        data-aos-delay={idx * 120}
                                        data-aos-duration="800"
                                    >
                                        <div className="experience_image">
                                            <Image src={`/images/career/${experience.image_name}.png`} alt={title} layout="fill" objectFit='contain' />
                                        </div>
                                        <div className="experience_content">
                                            <h3>{title}</h3>
                                            <p>{description}</p>
                                        </div>
                                    </div>
                                )}) : <p className="section_message">{t('no_career_items')}</p>
                            }
                        </div>
                    </>
                )
            }
        </section>
    )
}
