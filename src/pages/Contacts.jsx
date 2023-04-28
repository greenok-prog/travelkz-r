import React from 'react'
import HeaderSecond from '../components/HeaderSecond'
import '../styles/contacts.css'

const Contacts = () => {
  return (
    <>
        <HeaderSecond/>
        <main className='container'>
            <div className="contacts">
            <h2 className='contacts__title'>Служба поддержки клиентов</h2>
            <div className="contacts__blocks">
                <div className="contacts__block">
                    <div className="contacts__text">
                        <h3 className="contacts-block__title">Международный</h3>
                        <p className="contacts__p">+12134230517</p>
                    </div>
                    <div className="contacts__text">
                    <h3 className="contacts-block__title">Международный</h3>
                        <p className="contacts__p">+44 203 769 40 90</p>
                    </div>
                </div>
                <div className="contacts__block">
                    <h3 className="contacts-block__title">ScanTrip Inc.</h3>
                    <div className="contacts__text">
                        <p className="contacts__p">1000 N. West Street Suite 1200, PMB # 5017</p>
                        <p className="contacts__p">Wilmington, Delaware,</p>
                        <p className="contacts__p">19801 USA</p>
                    </div>
                </div>
                <div className="contacts__block">
                    <h3 className="contacts-block__title">OOO «TravelKz»</h3>
                    <div className="contacts__text">
                        <p className="contacts__p">ЕГРПОУ 39755348</p>
                        <p className="contacts__p">№ 1526563401973 от 15.04.2023 р.</p>
                        <p className="contacts__p">Адрес: 04114, г. Алматы, пос. Гульдала</p>
                    </div>
                </div>
            </div>
            </div>
        </main>
    </>
  )
}

export default Contacts