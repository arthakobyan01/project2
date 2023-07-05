import React from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { HomeAboutSco, Social } from '../../assets/Svg'
import AboutSlider from '../AboutSlider/AboutSlider'
import './HomeAbout.css'

function HomeAbout() {
	return (
		<section className="home-about">
			<div className="home-about__container">
				<div className="home-about__flex">
					<AboutSlider />
					<div className="home-about__text">
						<h2>О нас</h2>
						<p>Многие думают, что Lorem Ipsum - взятый с потолка псевдо-латинский набор слов, но это не
							совсем так. Его корни уходят в один фрагмент классической латыни 45 года н.э., то есть
							более двух тысячелетий назад. Ричард МакКлинток, профессор латыни из колледжа
							Hampden-Sydney, штат Вирджиния, взял одно из самых странных слов в Lorem Ipsum,
							"consectetur", и занялся его поисками в классической латинской литературе. В результате
							он нашёл неоспоримый первоисточник Lorem Ipsum в разделах 1.10.32 и 1.10.33 книги "de
							Finibus Bonorum et Malorum" ("О пределах добра и зла"), написанной Цицероном в 45 году
							н.э. Этот трактат по теории этики был очень популярен в эпоху Возрождения.</p>
						<div className="sco">
							<a>
								<HomeAboutSco />
							</a>
							<a>
								<Social />
							</a>
							<p>Мы в <br />
								соц сетях</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default HomeAbout