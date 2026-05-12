import React from 'react'
import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import { useRouter } from 'next/router';

export default function Intro(props) {
    const { classes } = props;
    const { locale } = useRouter();
    const { t } = useTranslation('common');
    return (
        <section id="intro" className={`intro_container ${locale}`}>
            <div
                className="intro_content"
                data-aos={locale === 'ar' ? 'fade-left' : 'fade-right'}
                data-aos-duration="1100"
            >
                <span data-aos="fade-up" data-aos-delay="150">{t('job')}</span>
                <h1>
                    <span data-aos="fade-up" data-aos-delay="250">{t('name')} </span>
                    <span data-aos="fade-up" data-aos-delay="350">{t('surname')}</span>
                </h1>
                <p data-aos="fade-up" data-aos-delay="450">{t('about')}</p>
            </div>
            <div className='intro_image'>
                <div
                    data-aos={locale === 'ar' ? 'fade-right' : 'fade-left'}
                    data-aos-delay="300"
                    data-aos-duration="1100"
                >
                    <Image className='maamoun' src="/images/maamoun.png" alt="Maamoun" height={400} width={288} />
                </div>
            </div>
        </section>
    )
}
