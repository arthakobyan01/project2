import axios from 'axios'
import React, { memo, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { SwiperSlide } from 'swiper/react'
import { AddToBasket } from '../../assets/Svg'
import { selectProducts } from '../../store/slices/Products/ProductsSlice'
import { addProducts, selectUsers } from '../../store/slices/Users/UsersSlice'
import './ProductItem.css'


function ProductItem({ title, img, cost, description, weight, id }) {
  const { currentUser } = useSelector(selectUsers)
  const { products } = useSelector(selectProducts)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [currentProduct, setCurrentProduct] = useState(null)

  useEffect(() => {
    if (products.length) {
      setCurrentProduct({
        ...products?.find(el => el.id === id),
        count: 1
      })

    }
  }, [products]);

  // useEffect(() => {
  //   console.log("test")
  // }, [])

  const handleUpdateData = () => {
    dispatch(addProducts(currentProduct))
    axios.post(`http://localhost:3000/users/${currentUser.id}`, {
      choosenProductsId: [currentProduct]
    })
      .then(res => {
        // console.log(res)
      })
  }

  return (
    <div className="product__item">
      <div className="product__item-top">
        <a className="like-product">
          <svg width={20} height={18} viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.65 17.15L6.925 15.575C5.15833 13.9583 3.56233 12.354 2.137 10.762C0.711667 9.17 -0.000666199 7.416 4.67508e-07 5.5C4.67508e-07 3.93333 0.525001 2.625 1.575 1.575C2.625 0.525002 3.93333 1.77305e-06 5.5 1.77305e-06C6.38333 1.77305e-06 7.21667 0.187335 8 0.562002C8.78333 0.936668 9.45 1.44933 10 2.1C10.55 1.45 11.2167 0.937335 12 0.562002C12.7833 0.186668 13.6167 -0.000664894 14.5 1.77305e-06C16.0667 1.77305e-06 17.375 0.525002 18.425 1.575C19.475 2.625 20 3.93333 20 5.5C20 7.41667 19.2917 9.175 17.875 10.775C16.4583 12.375 14.85 13.9833 13.05 15.6L11.35 17.15C10.9667 17.5167 10.5167 17.7 10 17.7C9.48333 17.7 9.03333 17.5167 8.65 17.15ZM9.05 4.1C8.56667 3.41667 8.05 2.89567 7.5 2.537C6.95 2.17833 6.28333 1.99934 5.5 2C4.5 2 3.66667 2.33333 3 3C2.33333 3.66667 2 4.5 2 5.5C2 6.36667 2.30833 7.28767 2.925 8.263C3.54167 9.23833 4.27933 10.184 5.138 11.1C5.996 12.0167 6.87933 12.875 7.788 13.675C8.69667 14.475 9.434 15.1333 10 15.65C10.5667 15.1333 11.3043 14.475 12.213 13.675C13.1217 12.875 14.005 12.0167 14.863 11.1C15.721 10.1833 16.4583 9.23767 17.075 8.263C17.6917 7.28833 18 6.36733 18 5.5C18 4.5 17.6667 3.66667 17 3C16.3333 2.33333 15.5 2 14.5 2C13.7167 2 13.05 2.179 12.5 2.537C11.95 2.895 11.4333 3.416 10.95 4.1C10.8333 4.26667 10.6917 4.39167 10.525 4.475C10.3583 4.55834 10.1833 4.6 10 4.6C9.81667 4.6 9.64167 4.55834 9.475 4.475C9.30833 4.39167 9.16667 4.26667 9.05 4.1Z" fill="white" />
          </svg>
        </a>
        <a className="img">
          <img src={img} alt='productItem' />
        </a>
        <div className="product-price">
          <span>{weight}</span>
          <p>{cost}</p>
        </div>
      </div>
      <div className="product__item-bottom">
        <h4 onClick={() => navigate('/products/' + id)}><a>{title}</a></h4>
        <p>{description}</p>
        <a className="add-yo-bascet" onClick={() => currentUser ? handleUpdateData() : navigate('/login')}>
          <AddToBasket />
        </a>
      </div>
    </div>
  )
}

export default memo(ProductItem) 