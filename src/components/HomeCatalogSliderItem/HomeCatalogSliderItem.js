import React, { memo, useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { selectProduct } from '../../store/slices/Products/ProductsSlice'

function HomeCatalogSliderItem({ title, slug, checked, id }) {
  const dispatch = useDispatch()

  const handleSelect = useCallback(() => {
    dispatch(selectProduct(slug))
  }, [])

  return (
    <button style={{ backgroundColor: checked ? 'red' : null }} onClick={() => handleSelect()}>{title}</button>
  )
}

export default memo(HomeCatalogSliderItem)  