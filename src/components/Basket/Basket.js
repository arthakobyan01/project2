import { current } from '@reduxjs/toolkit'
import React, { useEffect, useMemo, useState } from 'react'
import { memo } from 'react'
import { createPortal } from 'react-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { BasketGotoMenu } from '../../assets/Svg'
import { selectProducts } from '../../store/slices/Products/ProductsSlice'
import { calcTotal, selectUsers } from '../../store/slices/Users/UsersSlice'
import BasketLeftItem from '../BasketLeftItem/BasketLeftItem'
import BasketRightItem from '../BasketRightItem/BasketRightItem'
import BasketTotalCost from '../BasketTotalCost/BasketTotalCost'
import BuyModal from '../BuyModal/BuyModal'
import Footer from '../Footer/Footer'
import Location from '../Location/Location'
import ProductItem from '../ProductItem/ProductItem'
import './Basket.css'

function Basket() {
  const { products } = useSelector(selectProducts)
  const dispatch = useDispatch()
  const { currentUser, usersData } = useSelector(selectUsers)
  const [showModal, setShowModal] = useState(false)
  useEffect(() => {
    if (currentUser) {
      dispatch(calcTotal())
    }
  }, [])

  const filteredProds = useMemo(() => {
    return (
      products?.filter(item => Math.floor(Math.random() * item.id) < 0.5)
    )
  }, [products])

  return (
    <>
      <main>
        <div>
          <div className="big_Container bredndcrumbs">
            <div className="bredndcrumbs_cont">
              <p>Вы здесь:</p>
              <a>Главная /</a>
              <Location />
            </div>
          </div>
          <div className="big_Container basket_page">
            <div className="basket_page_cont">
              <div className="basket_page_title">
                <h1>Ваша корзина</h1>
              </div>
              <div className="basket_page_box">
                {
                  currentUser &&
                  <div className="basket_page_box_title">
                    <div className="basket_page_box_title_left">
                      <h4>продукт</h4>
                      <h4>Название продукта</h4>
                    </div>
                    <div className="basket_page_box_title_right">
                      <h4>цена</h4>
                      <h4>КОЛИЧЕСТВО</h4>
                      <h4>итоговая цена</h4>
                    </div>
                  </div>
                }
                {
                  currentUser && currentUser?.choosenProductsId?.length ?
                    <div className="basket_page_box_flex">
                      <div className="basket_page_box_item">
                        <div className="basket_page_box_item_left">
                          {currentUser?.choosenProductsId?.map(el => (
                            <BasketLeftItem
                              key={el.id}
                              title={el.title}
                              img={el.img}
                              description={el.description}
                              id={el.id}
                            />
                          ))}
                        </div>
                        <div className='flex-right'>
                          {
                            currentUser?.choosenProductsId?.map(el => (
                              <BasketRightItem
                                key={el.id}
                                cost={el.cost}
                                count={el.count}
                                id={el.id}
                              />
                            ))
                          }
                        </div>
                      </div>
                    </div> :
                    <div className='goto-login'>
                      <h2>Корзина пуста</h2>
                    </div>
                }
              </div>
              <div className="basket_page_cont_bottom">
                <div className="basket_page_cont_bottom_left">
                  <Link to='/catalog'>
                    <BasketGotoMenu />
                    Перейти обратно в меню
                  </Link>
                </div>
                {
                  currentUser && currentUser?.choosenProductsId?.length ?
                    <BasketTotalCost {...{ setShowModal, showModal }} /> : ''
                }
              </div>
            </div>
          </div>
          <div className="big_Container also_order bold">
            <div className="also_order_cont">
              <h2>Также можете заказать</h2>
              <div className="also_order_flex">
                {
                  filteredProds
                    ?.map(el => (
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
        </div>
      </main>
      {
        showModal && createPortal(
          <BuyModal  {...{ setShowModal, showModal }} />,
          document.body
        )
      }
      <Footer />
    </>
  )
}

export default memo(Basket)