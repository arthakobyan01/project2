import React, { memo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { DelCartItem } from '../../assets/Svg'
import { calcTotal, decrementCount, delProduct, incrementCount, inputValue, selectUsers } from '../../store/slices/Users/UsersSlice'

function BasketRightItem({ cost, count, id }) {
  const dispatch = useDispatch()


  return (
    <div className="basket_page_box_item_right">
      <div className="basket_page_box_item_right_price_fix">
        <p>{cost}</p>
      </div>
      <div className="basket_page_box_item_right_count">
        <button className="cuantminus" onClick={() => { dispatch(decrementCount(id)); dispatch(calcTotal()) }}>-</button>
        <input type="number" value={count} onChange={(e) => dispatch(inputValue(e.target.value))}
          min={0} />
        <button className="cuantplus" onClick={() => { dispatch(incrementCount(id)); dispatch(calcTotal()) }} >+</button>
      </div>
      <div className="basket_page_box_item_right_price_itog">
        <p>{parseInt(cost) * count} ₽</p>
      </div>
      <div className="basket_page_box_item_right_price_remove">
        <button onClick={() => { dispatch(delProduct(id)); dispatch(calcTotal()) }}>
          <DelCartItem />
        </button>
      </div>
    </div>
  )
}

export default memo(BasketRightItem)  