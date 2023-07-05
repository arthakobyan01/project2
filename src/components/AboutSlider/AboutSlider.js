import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Navigation, Pagination, Scrollbar } from 'swiper';
import AboutSliderItem from '../AboutSliderItem/AboutSliderItem';
import { SLIDER } from '../../img';


function AboutSlider() {

	return (
		<Swiper className='home-about__swiper swiper'
			modules={[Navigation, Pagination, Scrollbar]}
			slidesPerView="2"
			spaceBetween="30"
		>
			{
				SLIDER.map(el => (
					<SwiperSlide className="swiper-wrapper" key={el.id}>
						<AboutSliderItem img={el.img} />
					</SwiperSlide>
				))
			}
		</Swiper>
	)
}

export default AboutSlider