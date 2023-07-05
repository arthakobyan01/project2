import React, { useRef, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { fetchUsers } from '../../store/slices/Users/UsersAPI'
import { login, selectUsers } from '../../store/slices/Users/UsersSlice'
import './style.css'


function Login() {
  const ref = useRef(null)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { currentUser, usersData } = useSelector(selectUsers)


  const handleSubmit = (e) => {
    e.preventDefault()
    const [{ value: phone }, { value: password }] = ref.current
    dispatch(login({ phone, password }))
    ref.current.reset()
  }

  useEffect(() => {
    if (!usersData?.length) {
      dispatch(fetchUsers())
    }
    // console.log(usersData)
  }, []);

  useEffect(() => {
    if (currentUser) {
      navigate('/')
    }
  }, [currentUser]);

  return (
    <div className='login'>
      <div className='login__container'>
        <div className='close'>
          <Link to={-1}>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z" fill="white" fillOpacity="0.7" />
            </svg>
          </Link>
        </div>
        <h2>Авторизация</h2>
        <form className='login__form' ref={ref} onSubmit={handleSubmit}>
          <label>
            <input type='text'
              placeholder='Телефон *'
            />
          </label>
          <label>
            <input type='password'
              name='password'
              placeholder='Пароль*'
            />
          </label>
          <Link>Забыли пароль?</Link>
          <label className='input-submit'>
            <input
              type='submit' value='Войти'
            />
          </label>
        </form>
        <div className='login__signup'>
          <p>Если у вас еще нет пароля для входа, вам нужно</p>
          <Link to="/register">Зарегистрироваться</Link>
        </div>
      </div>
    </div>
  )
}

export default Login