import axios from 'axios'
import React, { useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { MailModalIcon } from '../../assets/Svg'
// import './style.css'


function MailModal() {
  const [showModal, setShowModal] = useState(false)

  const ref = useRef(null)
  const handleSubmit = (e) => {
    e.preventDefault()

    if (ref.current[0].value !== '' && ref.current[1].value !== '') {
      axios.post(' http://localhost:3000/ModalData', {
        name: ref.current[0].value,
        phone: ref.current[1].value
      }).
        then(res => {
          console.log(res)
        })
      ref.current.reset()
      setShowModal(false)
    }
  }
  return (
    <div className="mailmodal">
      <div className="mailmodalicon" onClick={() => setShowModal(true)}>
        <MailModalIcon />
      </div>
      {showModal && createPortal(
        <div className="mailmodal_box">
          <button className="clousmodal" onClick={() => setShowModal(false)}><span> </span><span> </span></button>
          <form ref={ref} onSubmit={handleSubmit}>
            <label><input type="text" placeholder="Bаше имя" /></label>
            <label><input className="phone_1" type="tel" placeholder="+7 (___) ___-__-__" /></label>
            <label><input type="submit" defaultValue="заказать звонок" /></label>
          </form>
        </div>,
        document.body
      )}
    </div>

  )
}

export default MailModal