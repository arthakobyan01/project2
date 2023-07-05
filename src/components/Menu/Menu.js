import React, { memo, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCategories } from '../../store/slices/Categories/CategoriesAPI'
import { selectCategories } from '../../store/slices/Categories/CategoriesSlice'
import MenuItem from '../MenuItem/MenuItem'
// import './Menu.css'

function Menu() {
	const { categoryData } = useSelector(selectCategories)
	const dispatch = useDispatch()


	return (
		<div className="menu_page_cont_left" style={{ marginTop: "40px" }}>
			<div className="menu_page_cont_left_title">
				<h3>МЕНЮ</h3>
			</div>
			<div className="menu_page_cont_left_box">
				{
					categoryData?.map(el => (
						<MenuItem
							key={el.id}
							title={el.title}
							icon={el.icon}
							checked={el.checked}
							slug={el.slug}
							id={el.id}
						/>
					))
				}
			</div>
		</div>
	)
}

export default memo(Menu) 