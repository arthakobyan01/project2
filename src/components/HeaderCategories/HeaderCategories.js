import React, { memo, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { NavLink, useNavigate } from 'react-router-dom'
import { toggleCategories } from '../../store/slices/Categories/CategoriesSlice'

function HeaderCategories({ title, id }) {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  return (
    <li><a style={{ cursor: "pointer" }} onClick={() => { navigate('/catalog'); dispatch(toggleCategories({ id })) }}>{title}</a></li>
  )
}

export default memo(HeaderCategories)