import React, { memo, useCallback, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import { toggleCategories } from '../../store/slices/Categories/CategoriesSlice'
import { selectProduct } from '../../store/slices/Products/ProductsSlice'


function MenuItem({ title, icon, checked, slug, id }) {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const handleSelect = useCallback(() => {
    dispatch(selectProduct(slug))
    dispatch(toggleCategories({ id }))
  }, [])


  return (
    <a style={{ cursor: "pointer" }} onClick={() => {
      handleSelect(); pathname !== '/catalog' && navigate('/catalog')
    }} className={checked ? "activ_menu_list" : null}>
      {title}
    </a>
  )
}

export default memo(MenuItem) 