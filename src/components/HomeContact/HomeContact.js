import React, { memo } from 'react'
import HomeContactForm from '../HomeContactForm/HomeContactForm'
import './style.css'


function HomeContact() {
	return (
		<section className="homecontacts">
			<div className="homecontacts__cont">
				<div className="homecontacts__left">
					<h2>Доставка и оплата</h2>
					<div className="homecontacts__left-flex">
						<div className="homecontacts__left-item">
							<span>Доставка от </span>
							<p className="title-p">500₽</p>
							<p>В зависимости от района доставки</p>
						</div>
						<div className="homecontacts__left-item">
							<span>ВРЕМЯ ДОСТАВКИ ОТ </span>
							<p className="title-p">45 МИНУТ</p>
							<p>В зависимости от района и текущей загруженности</p>
						</div>
						<div className="homecontacts__left-item">
							<span>Варианты</span>
							<p className="title-p">ОПЛАТЫ</p>
							<p>Наличный расчет, картой курьеру, онлайн на сайте.</p>
						</div>
						<div className="homecontacts__left-item">
							<span>ЗАКАЗЫ СВЫШЕ</span>
							<p className="title-p">3000₽</p>
							<p>Принимаются с предоплатой 50%. Предоплату можно внести в шапке сайта – “Внести
								оплату”.</p>
						</div>
					</div>
				</div>
				<div className="homecontacts__map">
					<iframe src="https://yandex.ru/map-widget/v1/?ll=37.385534%2C55.584227&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgg1MzAwMDA5NBIa0KDQvtGB0YHQuNGPLCDQnNC-0YHQutCy0LAiCg2GeBZCFQEGX0I%2C&z=9" />
					<HomeContactForm />
				</div>
			</div>
		</section>
	)
}

export default memo(HomeContact)  