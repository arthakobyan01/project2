import React from 'react'
import './style.css'

function BuyModal({ setShowModal }) {
  return (
    <div className='buymodal-layer'>
      <div className='buymodal-box'>
        <button className="clousmodal" onClick={() => setShowModal(false)}>
          <span> </span>
          <span> </span>
        </button>
        <h2>Ваш заказ Оформлен!</h2>
        <p>Спасибо за покупку!</p>
      </div>
    </div>
  )
}

export default BuyModal