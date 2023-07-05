import React from 'react'
import { IMAGES } from '../../img'
import './style.css'
import logo from '../../img/logo2.svg'

function Footer() {
	return (
		<footer className="footer">
			<div className="footer__container _container">
				<div className="footer__top">
					<div className="footer__item">
						<p>Многие думают, что Lorem Ipsum - взятый с потолка псевдо-латинский набор слов, но это не
							совсем так. Его корни уходят в один фрагмент классической латыни 45 года н.э., то есть более
							двух тысячелетий назад. Ричард МакКлинток, профессор латыни из колледжа Hampden-Sydney, штат
							Вирджиния, взял одно из самых странных слов в Lorem Ipsum, "consectetur", и занялся его
							поисками в классической латинской литературе.</p>
					</div>
					<div className="footer__item">
						<h4>Для гостей </h4>
						<ul>
							<li><a >Подарок на ДР </a></li>
							<li><a >Самовывоз </a></li>
							<li><a>Оплатита/Доставка</a></li>
						</ul>
					</div>
					<div className="footer__item">
						<h4>Контакты</h4>
						<ul>
							<li><a >+7 (123) 456-78-90</a></li>
							<li><a>+7 (123) 456-78-90</a></li>
							<li><a >example@gmail.com</a></li>
							<li><a>VK</a></li>
							<li><a>instagram </a></li>
						</ul>
					</div>
					<div className="footer__item">
						<h4>О нас </h4>
						<ul>
							<li><a >О компании </a></li>
							<li><a>Политика конф.</a></li>
						</ul>
					</div>
				</div>
				<div className="footer__bottom">
					<div className="paymants-methods">
						<p>Способы оплаты</p>
						<img src={IMAGES.payment} alt='payment' />
					</div>
				</div>
			</div>
		</footer>

	)
}

export default Footer