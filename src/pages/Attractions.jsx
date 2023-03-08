import React, { useState } from 'react'
import HeaderSecond from '../components/HeaderSecond'
import '../styles/attractions.css'
import places from '../mock/placesInfo.json'
import PlaceCard from '../components/PlaceCard'
const Attractions = () => {
    const [attractionList, setAttractionList] = useState(places.attractions)
    

  return (
    <>
  <HeaderSecond/>
  <main className="container attractions">
    <h3 className="section_title">Достопримечательности Алматы</h3>
    <div className="attractions__list">
      {attractionList.map((item) => (
        <PlaceCard key={item.id} item={item}/>
      ))}
     
    </div>
  </main>
</>

  )
}

export default Attractions