import React from 'react'
import { PhoneModalIcon, TelefonIcon, TelIcon } from '../../assets/Svg'
import './style.css'


function PhoneModal() {
  return (
    <div className="phonemodal">
      <div className="phonemodalicon">
        <PhoneModalIcon />
      </div>
      <div className="phonemodal_box">
        <button className="clousmodal">
          <span> </span>
          <span> </span>
        </button>
        <a href="tel:+7 (000) 000 00 00">
          <TelefonIcon />
          +7 (000) 000 00 00</a>
        <a href="tel:+7 (000) 000 00 00">
          <TelefonIcon />
          +7 (000) 000 00 00
        </a>
      </div>
    </div>

  )
}

export default PhoneModal