import React from 'react'

const Rating = ({rating}) => {
  return (
    <div className="rating-result">
           {[1,2,3,4,5].map((el, index) => (
            <span key={index} className={index < rating ? 'active' : ''}></span>
            
           ))}
    </div>
  )
}

export default Rating