import React from 'react'
import HotelImage from '../assets/hotels/1.jpg'
import "../styles/hotel.css"

const Hotel = ({hotel}) => {
    const {image,addres, name, rating, comfort, variables} = hotel
    const lowerPrice = () => {
        let price = variables[0].price
        variables.forEach(el => {
            if(el.price < price){
                price = el.price
            }
        })
        return price
    }
  return (
    <div className="hotel">
    <div className="hotel__top">
        <img src={require(`../assets/hotels/${image}`)} alt="" className="hotel__image" />
        <div className="hotel__info">
            <h3 className='hotel__name'>{name}</h3>
            {rating && <div className="hotel__rating rating-result ">
                {[1,2,3,4,5].map((el, index) => (
                    <span key={index} className={index < rating ? 'active' : ''}></span>
                ))}
            </div>}
            <span className="hotel__adres">{addres}</span>
            <p className="hotel__comfort"><b>Удобства: </b>{comfort.map(el => el + ", ")}</p>
        </div>
    </div>
    <div className="hotel__bottom">
        <div className="hotel__variables">
                    {variables.map((v, index) => (
                    <div key={index} className="hotel__variables-item">
                        <p className="hotel__variables-name">{v.name}</p>
                        <div className="hotel__bariables-price">KZT {v.price}</div>
                    </div>
                    ))}
            
            
        </div>
        <div className="hotel__price">
            <div className="hotel__price-inner">
            <div className="hotel__price-info">
            <span>Лучшая цена</span>
            <h3>KZT {lowerPrice()}</h3>
            </div>
            <button className="hotel__price-button"><a href="https://www.booking.com/city/kz/almaty.ru.html?aid=1610698;label=almaty-j3i0zXl27pNjh_MoXuaQWAS379683150413:pl:ta:p1:p2:ac:ap:neg:fi:tikwd-304610470061:lp9070290:li:dec:dm:ppccp=UmFuZG9tSVYkc2RlIyh9YcUc3ZfdbbfENZlBRQl9eqQ;ws=&gclid=Cj0KCQjwpPKiBhDvARIsACn-gzA3czJ6L_sz3B9wftJXYwPjCI9XBu2VkSdfRY7FlNR9JmQRJ4os43EaAme_EALw_wcB">Выбрать номера</a></button>
            </div>
        </div>
    </div>
</div>
  )
}

export default Hotel