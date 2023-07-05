
import { current } from '@reduxjs/toolkit'
import axios from 'axios'
import React, { memo, useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { UniqIcon } from '../../assets/Svg'
import { selectProducts } from '../../store/slices/Products/ProductsSlice'
import { addProducts, selectUsers } from '../../store/slices/Users/UsersSlice'
import Footer from '../Footer/Footer'
import Menu from '../Menu/Menu'


function Uniq() {
  const { products } = useSelector(selectProducts)
  const { currentUser } = useSelector(selectUsers)
  const { id } = useParams()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [currentProduct, setCurrentProduct] = useState(null)

  useEffect(() => {
    if (products.length) {
      setCurrentProduct({
        ...products?.find(el => el.id === id),
        count: 1,
      })

    }
  }, [products]);

  let total = [currentProduct].reduce(function (previousValue, currentValue) {
    return currentValue?.count * parseInt(currentValue?.cost) + " ₽";
  }, currentProduct?.cost);

  const handleUpdateData = () => {
    dispatch(addProducts(currentProduct))
    // axios.post(`http://localhost:3000/users/${currentUser.id}`, {
    //   choosenProductsId: [currentProduct]
    // })
    //   .then(res => {
    //     console.log(res)
    //   })

  }


  return (
    <>
      <div className="big_Container menu_page">
        <div className="menu_page_cont">
          <Menu />
          <div className="menu_page_cont_right">
            <h2>{currentProduct?.title}</h2>
            <div className="menu_page_cont_right_product_single">
              <div className="menu_page_cont_right_product_single_img">
                <img src={currentProduct?.img} alt='product' />
              </div>
              <div className="menu_page_cont_right_product_single_text">
                <div className="menu_page_cont_right_product_single_text_top">
                  <h3>{currentProduct?.title}<span>{currentProduct?.weight}</span></h3>
                  <p>{currentProduct?.description}</p>
                </div>
                <div className="menu_page_cont_right_product_single_text_price">
                  <p>{currentProduct?.count === 0 ? currentProduct?.cost : total}</p>
                  <div className="menu_page_cont_right_product_single_text_price_price_count">
                    <button className="cuantminus" onClick={() => currentProduct.count > 0 && setCurrentProduct({ ...currentProduct, count: currentProduct.count - 1 })}>-</button>
                    <input type="number" onChange={
                      (e) => setCurrentProduct({ ...currentProduct, count: e.target.value * 1 })
                    } value={currentProduct ? currentProduct?.count : 0} min={1} />
                    <button className="cuantplus" onClick={() => setCurrentProduct({ ...currentProduct, count: currentProduct.count + 1 })}>+</button>
                  </div>
                  <button className="add_basket"
                    onClick={
                      () => currentUser ? handleUpdateData() : navigate('/login')
                    }
                  >
                    <UniqIcon />
                    Добавить
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default memo(Uniq) 