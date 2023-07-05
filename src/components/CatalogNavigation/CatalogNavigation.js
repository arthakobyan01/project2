import React, { memo } from 'react'

function CatalogNavigation({ checked, title }) {
  return (
    <p>{checked === true && title}</p>

  )
}

export default memo(CatalogNavigation) 