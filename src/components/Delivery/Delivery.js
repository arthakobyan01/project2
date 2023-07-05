import React, { memo, useEffect, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectProducts } from '../../store/slices/Products/ProductsSlice'
import { fetchUsers } from '../../store/slices/Users/UsersAPI'
import Footer from '../Footer/Footer'
import Location from '../Location/Location'
import ProductItem from '../ProductItem/ProductItem'
import './Delivery.css'



function Delivery() {
	const { products } = useSelector(selectProducts)
	const filteredProds = useMemo(() => {
		return (
			products?.filter(item => Math.floor(Math.random() * item.id) < 0.5)
		)
	}, [products])
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
				<div className="big_Container delivery">
					<div className="delivery_cont">
						<h1>Доставка и оплата</h1>
						<p className="titlep">Lorem Ipsum is simply dummy text of the printing and typesetting</p>
						<p>
							Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has
						</p>
						<p className="titlep">Lorem Ipsum is simply dummy text of the printing and typesetting </p>
						<p>
							Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has
						</p>
						<p className="titlep">Lorem Ipsum is simply dummy text of the printing and typesetting</p>
						<p>
							Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has
						</p>
						<p className="titlep">Lorem Ipsum is simply dummy text of the printing and typesetting</p>
						<p>
							Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has
						</p>
						<p style={{ marginBottom: 5 }}>
							Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has
						</p>
						<p style={{ marginBottom: 5 }}> Принимаем наличные, банковские карты</p>
						<p style={{ marginBottom: 5 }}>
							Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has
						</p>
						<p style={{ marginBottom: 5 }}>Контроль качества. На связи 24 часа в сутки.</p>
					</div>
				</div>
				<div className="big_Container also_order bold">
					<div className="also_order_cont">
						<h2>Также можете заказать</h2>
						<div className="also_order_flex">
							{
								filteredProds?.map(el => (
									<ProductItem
										key={el.id}
										img={el.img}
										title={el.title}
										description={el.description}
										cost={el.cost}
										weight={el.weight}
										id={el.id}
									/>
								))
							}
						</div>
					</div>
				</div>
			</main>
			<Footer />
		</>
	)
}

export default memo(Delivery)   