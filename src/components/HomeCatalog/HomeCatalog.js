// import HomeCatalogSlider from '../HomeCatalogSlider/HomeCatalogSlider'
import ProductItem from '../ProductItem/ProductItem'
import './style.css'
import React, { memo, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import "swiper/css";
import "swiper/css/pagination";
import { Navigation, Pagination, Scrollbar } from 'swiper';
import HomeCatalogSliderItem from '../HomeCatalogSliderItem/HomeCatalogSliderItem';
import { useDispatch, useSelector } from 'react-redux';
import { selectCategories, toggleCategories } from '../../store/slices/Categories/CategoriesSlice';
import { selectProducts } from '../../store/slices/Products/ProductsSlice';
import { Link } from 'react-router-dom';

function HomeCatalog() {

	const { categoryData } = useSelector(selectCategories)
	const { products, filteredProducts } = useSelector(selectProducts)
	const dispatch = useDispatch()
	return (
		<section className="hom-catalog">
			<div className="hom-catalog__container">
				<div className="hom-catalog__title">
					<h2>Новинки</h2>
					<Swiper
						modules={[Navigation, Pagination, Scrollbar]}
						grabCursor
						slidesPerView="auto"
						className='swiper hom-catalog__swiper'
					>
						{
							categoryData?.map(item => (
								<SwiperSlide className='swiper-wrapper' key={item.id}>
									<HomeCatalogSliderItem
										slug={item.slug}
										title={item.title}
										id={item.id}
									/>
								</SwiperSlide>
							))
						}
					</Swiper>
				</div>
				<div className="hom-catalog__grid">
					{
						filteredProducts?.map(el => (
							<ProductItem
								key={el.id}
								title={el.title}
								img={el.img}
								cost={el.cost}
								description={el.description}
								weight={el.weight}
								id={el.id}
							/>
						))
					}
				</div>
				<Link to='/catalog' className="more-product-btn">Перейти в каталог</Link>
			</div>
		</section>
	)
}

export default memo(HomeCatalog)  