import React, { memo, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCategories } from '../../store/slices/Categories/CategoriesAPI'
import { selectCategories } from '../../store/slices/Categories/CategoriesSlice'
import { fetchProducts } from '../../store/slices/Products/ProductsAPI'
import { fetchFillter, selectProducts } from '../../store/slices/Products/ProductsSlice'
import CatalogNavigation from '../CatalogNavigation/CatalogNavigation'
import Footer from '../Footer/Footer'
import Location from '../Location/Location'
import Menu from '../Menu/Menu'
import MenuItem from '../MenuItem/MenuItem'
import ProductItem from '../ProductItem/ProductItem'
import "./Catalog.css"


function Catalog() {
  const { categoryData } = useSelector(selectCategories)
  const { products, filteredProducts } = useSelector(selectProducts)
  const dispatch = useDispatch()


  return (
    <>
      <div className="big_Container bredndcrumbs">
        <div className="bredndcrumbs_cont">
          <p>Вы здесь:</p>
          <a>Главная /</a>
          <Location />
          {
            categoryData.map(el => (
              <CatalogNavigation key={el.id} checked={el.checked} title={el.title} />
            ))
          }
        </div>
      </div>
      <div className="big_Container menu_page">
        <div className="menu_page_cont">
          <div className="menu_page_cont_left" style={{ marginTop: "40px" }}>
            <div className="menu_page_cont_left_title">
            </div>
            <Menu />
          </div>
          <div className="menu_page_cont_right">
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
        </div>
      </div>
      <Footer />
    </>
  )
}

export default memo(Catalog)  