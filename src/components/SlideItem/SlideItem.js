import React, { memo } from 'react'
import { useNavigate } from 'react-router-dom'



function SlideItem({ title, weight, description, img, id }) {
  const navigate = useNavigate()
  return (
    <div className="swiper-slide">
      <div className="main__item-bg">
        <img src={img} alt='meat' />
      </div>
      <div className="main__item">
        <h2>{title}</h2>
        <span>{weight}</span>
        <p>{description}.</p>
        <a style={{ cursor: "pointer" }} onClick={() => navigate('/products/' + id)} >Заказать прямо сейчас!</a>
      </div>
    </div>
  )
}

export default memo(SlideItem)   