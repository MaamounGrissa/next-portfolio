import React from 'react'
import { useTranslation } from 'next-i18next';

export default function ServicesBlock(props) {
    const { classes } = props;
    const { t } = useTranslation('common');
    return (
        <section className="servicesBlock_container">
            <h2>{t('services_title')}</h2>
            <div className='services_row'>
                <div className='services_col'>
                    <div className='services_item'>
                        <h3>{t('service1')}</h3>
                        <p>{t('service1_description')}</p>
                        <button>{t('services_button')}</button>
                    </div>
                </div>
                <div className="services_col">
                   
                </div>
            </div>
        </section>
    )
}
