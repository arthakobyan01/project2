import React, { memo } from 'react'
import { AddressIcon, EmailIcon, GraphicIcon, SiteIcon, SiteIconSecond, SiteIconThird, TelIcon } from '../../assets/Svg'
import ContactsForm from '../ContactsForm/ContactsForm'
import Footer from '../Footer/Footer'
import Location from '../Location/Location'
import './Contacts.css'

function Contacts() {
	return (
		<>
			<main>
				<div className="big_Container bredndcrumbs">
					<div className="bredndcrumbs_cont">
						<p>Вы здесь:</p>
						<a>Главная /</a>
						<Location />
					</div>
				</div>
				<div className="big_Container contact_page">
					<div className="contact_page_cont">
						<h1>КОНТАКТЫ</h1>
						<div className="sites">
							<a>
								<SiteIcon />
							</a>
							<a>
								<SiteIconSecond />
							</a>
							<a>
								<SiteIconThird />
							</a>
						</div>
						<div className="contact_page_cont_flex">
							<div className="contact_page_cont_flex_right">
								<div className="contact_page_cont_flex_right_item">
									<p>
										<AddressIcon />
										НАШ АДРЕС
									</p>
									<a>ул. Овражная 12 А ( Новоиваноское )</a>
								</div>
								<div className="contact_page_cont_flex_right_item">
									<p>
										<TelIcon />
										Номер телефона
									</p>
									<a>8-962-920-96-96</a>
								</div>
								<div className="contact_page_cont_flex_right_item">
									<p>
										<GraphicIcon />
										Режим работы
									</p>
									<span>Ежедневно 09:00 до 23:00</span>
								</div>
								<div className="contact_page_cont_flex_right_item">
									<p>
										<EmailIcon />
										адрес эл. почты
									</p>
									<a>info@kardinalgroup.ru</a>
								</div>
							</div>
							<div className="contact_page_cont_flex_form">
								<h2>Заказать обратный званок</h2>
								<ContactsForm />
							</div>
						</div>
						<iframe src="https://yandex.ru/map-widget/v1/-/CGW1A~q" />
					</div>
				</div>
			</main>
			<Footer />
		</>
	)
}

export default memo(Contacts) 