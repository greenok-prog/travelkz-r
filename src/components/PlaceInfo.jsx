import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import places from '../mock/placesInfo.json'

import '../styles/placeInfo.css'
import PlaceHeader from './PlaceHeader'

const PlaceInfo = () => {
  const {id} = useParams()
  
  
  const currentPlace = places.attractions.find(el => id === String(el.id))
  
  return (
    <div><>
    {currentPlace?.cardImage && <PlaceHeader title={currentPlace.title} image={currentPlace.cardImage}/>}
    <main className="container container-mini">
      <p className="subtitle_info">
        Парк им. 28 гвардейцев-панфиловцев находится в Медеуском районе Алматы и
        занимает территорию порядка 18 га.
      </p>
      <div className="main_info">
        <p className="main_text">
          Свое название он получил весной 1942 года, был создан в честь
          Панфиловской дивизии и героев города, которые остановили наступление
          фашистов на Москву. Всем мужественным жителям города, павшим в борьбе за
          свободу, присвоено звание Героя Советского Союза.
        </p>
        <p className="main_text">
          В восточной части возвышается Музей народных инструментов и Дом
          офицеров, мемориал Слава с Вечным огнем и Памятник
          воинам-интернационалистам. Открытие комплекса прошло 8 мая 1975 года в
          честь 30-летнего юбилея Победы.
        </p>
        <img className="main_image" src="./assets/places/panfilova1.jpg" alt="" />
        <p className="main_text">
          Мемориал представляет собой горельеф «Клятва», который посвящен тем, кто
          сражался за Советскую власть. В центре находятся образы
          героев-панфиловцев, защищавших Москву, с правой стороны возвышается
          композиция «Трубящие славу», она символизирует гимн торжествующей жизни.
          Рядом с Вечным огнем находятся огромные кубы из лабрадорита, под ними
          замурованы капсулы с землей городов-героев.
        </p>
        <p className="main_text">
          С западной стороны мемориала есть аллея с тянь-шаньскими елями, которые
          были посажены президентами разных стран, посетившими Казахстан в период
          объявления независимости, с южной стороны стоит памятник-бюст герою
          СССР, генерал-майору гвардии Панфилову. К северу от мемориала, вдоль
          Аллеи памяти стоят каменные тумбы с именами 28 героев-панфиловцев.
        </p>
        <p className="main_text">
          В северной части парка возвышается памятник Бауржану Момыш-улы, в
          западной части можно увидеть памятник-бюст Токашу-Бокину. Все дороги
          парка пересекаются в центре и ведут к Свято-Вознесенскому Кафедральному
          собору.
        </p>
      </div>
      <div className="place_images">
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
      </div>
    </main>
    <div className="place_map">
      <h2 className="main_title">
        Парк имени 28 гвардейцев-панфиловцев на карте
      </h2>
      <iframe
        className="map"
        src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d10636.992529431485!2d76.95071327432699!3d43.25818256383949!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2skz!4v1677656464027!5m2!1sru!2skz"
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