import React, { memo, useEffect, useMemo } from 'react'
// import './MainSlider.css'
import { Swiper, SwiperSlide } from "swiper/react";
import SlideItem from '../SlideItem/SlideItem';
import { Navigation, Pagination, Scrollbar } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { useSelector } from 'react-redux';
import { selectProducts } from '../../store/slices/Products/ProductsSlice';


function MainSLider() {
	const { products } = useSelector(selectProducts)
	const filteredProds = useMemo(() => {
		return (
			products?.filter(item => Math.floor(Math.random() * item.id) < 0.5)
		)
	}, [products])

	return (
		<section className="main">
			<div className="main__container">
				<Swiper
					modules={[Navigation, Pagination, Scrollbar]}
					slidesPerView="auto"
					className='main__swiper swiper'
					pagination={{ clickable: true }}
					autoHeight={true}
				>
					{
						filteredProds
							?.map(el => (
								<SwiperSlide key={el.id} className="swiper-wrapper">
									<SlideItem
										title={el.title}
										weight={el.weight}
										description={el.description}
										img={el.img}
										id={el.id}
									/>
								</SwiperSlide>
							))
					}
				</Swiper>
				<div className="swiper-pagination" /></div>
		</section>
	)
}

export default memo(MainSLider) 