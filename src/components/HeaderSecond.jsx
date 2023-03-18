import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles/secondNavbar.css'
const links = [
    {to:'/attractions', title:'Достопримечательности'},
    {to:'/food', title:'Еда'},
    

]
const HeaderSecond = () => {
    const [menu, setMenu] = useState(false)
    const openMenu = () => {
        setMenu(true)
    }
    const closeMenu = () => {
        setMenu(false)
    }
  return (
    <header >
    <nav className="navbar-list">
    <Link to={'/travelkz-r'} className="logo">
          <h3>TravelKZ</h3>
        </Link>
      <ul className="navbar_links">
      {links.map((link, index) => (
            <Link key={index} className='navbar_link' to={link.to}>{link.title}</Link>
          ))}
      </ul>
      <div className="burger_btn" onClick={openMenu}>
        <svg xmlns="http://www.w3.org/2000/svg" height={36} width={36}>
          <path fill="#ffff" d="M6 36v-3h36v3Zm0-10.5v-3h36v3ZM6 15v-3h36v3Z" />
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
  </header>
  )
}

export default HeaderSecond