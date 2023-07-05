import React, { memo } from 'react'
import { useLocation } from 'react-router-dom'

function Location() {
  const { pathname } = useLocation()
  // console.log(pathname)
  return (
    <div>
      {pathname === '/about' ?
        <p>О нас</p> :
        pathname === '/contacts' ?
          <p>КОНТАКТЫ</p> :
          pathname === '/basket' ?
            <p>КОРЗИНА</p> :
            pathname === '/delivery' ?
              <p>ДОСТАВКА</p> :
              pathname === '/catalog' ?
                <p>КАТАЛОГ / </p> :
                ""
      }
    </div>
  )
}

export default memo(Location)  