import React from 'react'
import HeaderSecond from '../components/HeaderSecond'

import data from '../mock/placesInfo.json'
import Hotel from '../components/Hotel'

const Hotels = () => {
   
  return (
    <>
        <HeaderSecond/>
        <div className="hotels container-mini">
           {data.hotels.map(hotel => (
            <Hotel hotel={hotel} />
           ))}
        </div>
    </>
  )
}

export default Hotels