import React, { memo, useCallback, useEffect, useState } from 'react'
import './Header.css'
import { Link, NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { logOut, selectUsers } from '../../store/slices/Users/UsersSlice'
import { selectProducts } from '../../store/slices/Products/ProductsSlice'
import { HeaderBasketIcon, HeaderCatalocIcon, HeaderUserIcon } from '../../assets/Svg'
import { selectCategories } from '../../store/slices/Categories/CategoriesSlice'
import HeaderCategories from '../HeaderCategories/HeaderCategories'


function Header() {
  const [login, setLogin] = useState(false)
  const { currentUser } = useSelector(selectUsers)
  const dispatch = useDispatch()

  useEffect(() => {
    if (currentUser) {
      setLogin(true)
    } else {
      setLogin(false)
    }
  }, [currentUser])

  const cartCount = currentUser?.choosenProductsId?.reduce(
    (total, choosenProductsId) => total + choosenProductsId?.count,
    0
  );

  const [show, setShow] = useState(false)
  const toggleShow = useCallback(() => {
    setShow(prev => !prev)
  }, [])


  const { categoryData } = useSelector(selectCategories)
  return (
    <header className="header">
      <div className="header__cont">
        <div className="header__left">
          {/* <Link to="/" className="logo"><img src={logo} alt='logo' /></Link> */}
          <div className="header__left-menu">
            <div className="header__catalog">
              <button onClick={() => toggleShow()}>
                <HeaderCatalocIcon />
                Каталог
              </button>
              {
                show ?
                  <div className="header__catalog-menu">
                    <ul>
                      {
                        categoryData.map(el => (
                          <HeaderCategories
                            key={el.id}
                            title={el.title}
                            id={el.id}
                          />
                        ))
                      }
                    </ul>
                  </div> : ''
              }
            </div>
            <a href="tel:+9170000000" className="contact-link">
              <span>Телефон</span>
              +917 000 00 00
            </a>
            <a href="mailto:example@mail.ru" className="contact-link">
              <span>Почта</span>
              example@mail.ru
            </a>
          </div>
        </div>
        <div className="header__right">
          <ul>
            <li><NavLink className={({ isActive }) => isActive ? "activeMenu" : ""} to='/' >Главная</NavLink></li>
            <li><NavLink className={({ isActive }) => isActive ? "activeMenu" : ""} to='/about'>О нас</NavLink></li>
            <li><NavLink className={({ isActive }) => isActive ? "activeMenu" : ""} to='/contacts' >Контакты</NavLink></li>
            <li><NavLink className={({ isActive }) => isActive ? "activeMenu" : ""} to='/delivery'>Доставка</NavLink></li>
          </ul>
          <div className="header__user-menu">
            <NavLink to='/basket' className="basketlink">
              <HeaderBasketIcon />
              <span>{currentUser ? cartCount : 0}</span>
            </NavLink>
            {login ?
              <a className="usermenulink">
                <HeaderUserIcon />
              </a> :
              <Link to='/login'>
                <span>Войти</span>
              </Link>
            }
            {
              login &&
              <div className='logout'>
                <Link to='/' onClick={() => dispatch(logOut())}>
                  Выйти
                </Link>
              </div>
            }
            <button className="burgermenubtn">
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default memo(Header)   