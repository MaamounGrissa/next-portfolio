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
            <div className="intro_content">
                <span>{t('job')}</span>
                <h1>
                    <span>{t('name')}</span> 
                    {locale !== 'ar' ? <br /> : " "}
                    <span>{t('surname')}</span>
                </h1>
                <p>{t('about')}</p>
            </div>
            <div className='intro_image'>
                <Image className='maamoun' src="/images/maamoun.png" alt="Maamoun" height={400} width={288} />
            </div>
        </section>
    )
}
