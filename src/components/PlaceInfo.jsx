import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import places from '../mock/placesInfo.json'

import '../styles/placeInfo.css'
import PlaceHeader from './PlaceHeader'

const PlaceInfo = () => {
  const {id} = useParams()
  
  
  const currentPlace = places.attractions.find(el => id === String(el.id))
  const getImage = (el) => {
    return require(`../assets/places/${el.url}`)
  }
  
  
  return (
    <div><>
    {currentPlace?.cardImage && <PlaceHeader title={currentPlace.title} image={currentPlace.cardImage}/>}
    <main className="container container-mini">
      <p className="subtitle_info">
        {currentPlace.subtitle}
      </p>
      <div className="main_info">
        {currentPlace.text.map((el, index) => (
          typeof el === "string" ?  <p key={index} className="main_text">
          {el}
        </p> :  <img key={index} className="main_image" src={getImage(el)} alt={el.alt} />
        ))}
       
        </div>
      {/* <div className="place_images">
        <h2 className="main_title">
          Фотографии Парк имени 28 гвардейцев-панфиловцев
        </h2>
        <div className="place_images__list">
          <img
            className="main_image"
            src="./assets/places/panfilova1.jpg"
            alt=""
          />
        </div>
      </div> */}
    </main>
    <div className="place_map">
      <h2 className="main_title">
        {currentPlace.title} на карте
      </h2>
      <iframe
        className="map"
        src={currentPlace.mapUrl}
        width={600}
        height={450}
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
    <footer className="footer">Дипломная работа от Кахарманова Ильхама</footer>
  </>
  </div>
  )
}

export default PlaceInfo