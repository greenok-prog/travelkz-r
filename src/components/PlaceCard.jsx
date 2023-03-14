import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


const PlaceCard = ({item}) => {
    const {title, place, rating, area, cardImage, id} = item
    
    const image = require(`../assets/places/${cardImage}`)
  return (
    <div className="attractions__list_item">
        <Link to={`/places/${id}`} className="scale">
          <img className="card_image" src={image} />
        </Link>
        <div className="card_info">
          <div className="place">
            <span className="area">{area}</span>, {place}
          </div>
          <h4 className="card_title">{title}</h4>
          <div className="rating-result">
           {[1,2,3,4,5].map((el, index) => (
            <span className={index < rating ? 'active' : ''}></span>
            
           ))}
          </div>
          {/* <span class="card_more">Подробнее <svg xmlns="http://www.w3.org/2000/svg" height="18" viewBox="0 96 960 960" width="18"><path fill="white" d="m561 814-43-42 168-168H160v-60h526L517 375l43-42 241 241-240 240Z"/></svg></span> */}
        </div>
      </div>
  )
}

export default PlaceCard