import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles/navbar.css'

const links = [
    {to:'/attractions', title:'Достопримечательности'},
    {to:'/food', title:'Еда'},
    

]
const Header = () => {
    const [menu, setMenu] = useState(false)
    const openMenu = () => {
        setMenu(true)
    }
    const closeMenu = () => {
        setMenu(false)
    }
  return (
    <header className="header_main">
    
      <nav className="navbar">
        <Link to={'/react-travelkz'} className="logo">
          <h3>TravelKZ</h3>
        </Link>
        <ul className="navbar_links">
          {links.map((link, index) => (
            <Link key={index} className='navbar_link' to={link.to}>{link.title}</Link>
          ))}
         
        </ul>
        <div className="burger_btn" onClick={openMenu}>
          <svg xmlns="http://www.w3.org/2000/svg" height={36} width={36}>
            <path
              fill="#ffff"
              d="M6 36v-3h36v3Zm0-10.5v-3h36v3ZM6 15v-3h36v3Z"
            />
          </svg>
        </div>
        <div className={`sidebar_menu ${menu ? 'menu-opened' : ''}`}>
          <div className="close_sidebar__block">
            <svg
                onClick={closeMenu}
              className="close_sidebar__button"
              xmlns="http://www.w3.org/2000/svg"
              height={36}
              width={36}
            >
              <path d="m12.45 37.65-2.1-2.1L21.9 24 10.35 12.45l2.1-2.1L24 21.9l11.55-11.55 2.1 2.1L26.1 24l11.55 11.55-2.1 2.1L24 26.1Z" />
            </svg>
          </div>
          <ul className="sidebar_links">
          {links.map((link, index) => (
            <Link key={index} className='sidebar_link' to={link.to}>{link.title}</Link>
          ))}
            
          </ul>
        </div>
      </nav>
    
    <div className="header_text">
      <div className="header_text__inner">
        <h1 className="header_title">
          <span>Путеводитель по</span> Алмате
        </h1>
        <div className="header_subtitle">Город высотой в мечту</div>
        <div className="header_subtitle__text">
          Исторический и культурный центр Казахстана
        </div>
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
  </header>
  )
}

export default Header