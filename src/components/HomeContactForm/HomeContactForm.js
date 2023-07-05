import axios from 'axios'
import React, { memo } from 'react'
import { useRef } from 'react'

function HomeContactForm() {
	const ref = useRef(null)

	const handleSubmit = (e) => {
		e.preventDefault()
		if (ref.current[0].value !== '') {
			axios.post(' http://localhost:3000/delivery', {
				name: ref.current[0].value,
				address: ref.current[1].value,
				email: ref.current[2].value,
				phone: ref.current[3].value
			}).then(res => {
				console.log(res)
			})
			ref.current.reset()
		}

	}

	return (
		<form ref={ref} onSubmit={handleSubmit}>
			<div className="homecontacts__form-title">
				<h4>Доставка от 45 мин</h4>
				<p>Время доставки зависит от района.</p>
			</div>
			<label className="input-text">
				<input type="text" placeholder="Имя" />
			</label>
			<label className="input-text">
				<input type="text" placeholder="Адрес" />
			</label>
			<label className="input-text">
				<input type="email" placeholder="Email" />
			</label>
			<label className="input-text">
				<input type="phone" placeholder="+7(___) - ___ - __ - __" />
			</label>
			<label className="input-btn">
				<input type="submit" value="Заказать" />
			</label>
		</form>
	)
}

export default memo(HomeContactForm)  