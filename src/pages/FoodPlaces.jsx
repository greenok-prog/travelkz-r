import React from 'react'
import PlaceHeader from '../components/PlaceHeader'
import '../styles/restorans.css'
import data from '../mock/placesInfo.json'
import { Link } from 'react-router-dom'
import instagramIcon from '../assets/instagram.png'
import facebookIcon from '../assets/facebook.png'
import locationIcon from '../assets/location.svg'


const FoodPlaces = () => {
  return (
    <div>
      <PlaceHeader image={'restoran.jpg'} title={'Рестораны Алматы'} />
      <main className='container-mini restorans'>
        <p className='restorans_subtitle'>
        На востоке общепризнанно, что женщина является «хранительницей очага», которая создает полностью комфортную жизнь для членов семьи, и Казахстан в этом случае не исключение. Но стоит отметить, что в настоящее время это явление немножко меняется и многие предпочитают наслаждаться комфортом и вкусной едой в кафе и ресторанах. Алматы является тем мегаполисом, где культуры различных народов Азии и Европы переплетены, что делает город универсальным и интересным. Это говорит о том, что здесь вы можете найти любую кухню, какую бы вы ни захотели попробовать. Предложенный ниже список ресторанов поможет вам удовлетворить своего внутреннего гурмана.
        </p>
        <div className="restoran_list">
          {data.food.map((el, index) => (
            <div key={index} className="restoran_item" >
              <h3 className="restoran_title">{el.name}</h3>
              <div className="restoran_social">
                <div className='restoran__location'>
                     <img src={locationIcon} alt="" /> <span>{el.location}</span>
                  </div>
                {el.socials &&  <div className="restoran__media">
                  {el.socials.instagram && <Link to={el.socials.instagram} target='_blank' className='restoran__instagram'><img src={instagramIcon} alt="" /></Link>}
                  {el.socials.facebook && <Link to={el.socials.facebook} target='_blank' className='restoran__instagram'><img src={facebookIcon} alt="" /></Link>}
                </div>}
              </div>
              <div className="restoran_info">
                <p className="restoran_info__text" style={{order:`${index % 2 === 0 ? '2' : '1'}`}}>
                {el.text}
                </p>
                <img src={require(`../assets/places/${el.image}`)} alt="" className="restoran_info__image" />
              </div>
            </div>
          ))}
          
         
        </div>
      </main>
      <footer className="footer-main">Дипломная работа от Кахарманова Ильхама</footer>
    </div>
  )
}

export default FoodPlaces