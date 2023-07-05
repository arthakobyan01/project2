import React, { memo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { confirmOrder, selectUsers } from '../../store/slices/Users/UsersSlice'

function BasketTotalCost({ setShowModal }) {
  const { total } = useSelector(selectUsers)
  const dispatch = useDispatch()
  return (
    <div className="basket_page_cont_bottom_right">
      <div className="basket_page_cont_bottom_right_info">
        <p>ПОДИТОГ<span>{total} ₽</span></p>
        <p>доставка<span>-</span></p>
        <p>Итоговая сумма<span>{total} ₽</span></p>
      </div>
      <a style={{ cursor: "pointer" }} onClick={() => { setShowModal(true); dispatch(confirmOrder()) }}>Оформить заказ</a>
    </div>
  )
}

export default memo(BasketTotalCost)  