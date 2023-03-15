import React from 'react'
import { Link } from 'react-router-dom'

const PlaceHeader = ({image, title}) => {
    
    const imageUrl = require(`../assets/places/${image}`)
  return (
    <div><header className='header-place'>
    <img className="header_image" src={imageUrl} alt="" />
    <div className="container">
      <nav className="navbar">
      
          <Link className="logo" to={'/react-travelkz'}><h3>TravelKZ</h3></Link>
        
        <ul className="navbar_links">
          <Link className="navbar_link" to={'/attractions'}>Достопримечательности</Link>
          <Link className="navbar_link" to={'/food'}>Еда</Link>
         
         
        </ul>
        <div className="burger_btn">
          <svg xmlns="http://www.w3.org/2000/svg" height={36} width={36}>
            <path
              fill="#ffff"
              d="M6 36v-3h36v3Zm0-10.5v-3h36v3ZM6 15v-3h36v3Z"
            />
          </svg>
        </div>
        <div className="sidebar_menu">
          <div className="close_sidebar__block">
            <svg
              className="close_sidebar__button"
              xmlns="http://www.w3.org/2000/svg"
              height={36}
              width={36}
            >
              <path d="m12.45 37.65-2.1-2.1L21.9 24 10.35 12.45l2.1-2.1L24 21.9l11.55-11.55 2.1 2.1L26.1 24l11.55 11.55-2.1 2.1L24 26.1Z" />
            </svg>
          </div>
          <ul className="sidebar_links">
            <a className="sidebar_link" href="#">
              Достопримечательности
            </a>
            <a className="sidebar_link" href="#">
              Еда
            </a>
            <a className="sidebar_link" href="#">
              Интересные места
            </a>
          </ul>
        </div>
      </nav>
    </div>
    <div className="header_text">
      <div className="header_text__inner">
        <h1 className="header_title">{title}</h1>
      </div>
    </div>
    <div className="container">
      <div className="arrow_container">
        <svg
          className="arrow-down"
          xmlns="http://www.w3.org/2000/svg"
          height={48}
          width={48}
        >
          <path
            fill="#ffff"
            d="M24 38 12 26l2.1-2.1 9.9 9.9 9.9-9.9L36 26Zm0-12.65-12-12 2.1-2.1 9.9 9.9 9.9-9.9 2.1 2.1Z"
          />
        </svg>
      </div>
    </div>
  </header></div>
  )
}

export default PlaceHeader