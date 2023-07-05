import axios from 'axios'
import { Formik } from 'formik'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import * as yup from 'yup'
import './style.css'

function RegisterForm() {
  const navigate = useNavigate()

  const validationSchema = yup.object().shape({
    name: yup.string().typeError('Напишите свое имя')
      .min(3, 'Слишком короткое имя').matches(/[A-Z]/, 'Заглавная буква обязятельна').required('Обязательное поле'),
    surname: yup.string().typeError('Напишите свою фамилию')
      .min(3, 'Слишком короткое имя').matches(/[A-Z]/, 'Заглавная буква обязятельна').required('Обязательное поле'),
    email: yup.string().typeError('Пример: example@mail.ru')
      .email('Недопустимый формат').required('Обязательное поле'),
    password: yup.string().typeError('Must be a string')
      .min(3, 'Короткий пароль').matches(/[0-9]/, 'Пароль должен содержить цифру')
      .required('Обязательное поле'),
    confirmPassword: yup.string().typeError('Must be a string')
      .oneOf([yup.ref('password')], 'Пожалуйста, введите правильный пароль').required('Обязательное поле'),
    phone: yup.string()
      .min(3, 'Слишком коротко').matches(/[0-9]/, 'Только цифры').required('Обязательное поле'),
  })
  return (
    <section className='register'>
      <div className='register__container _container'>
        <div className='back'>
          <button onClick={() => navigate(-1)}>
            <svg width="21" height="16" viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.292892 7.29289C-0.0976315 7.68342 -0.0976315 8.31658 0.292892 8.70711L6.65685 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41421 8L8.07107 2.34315C8.46159 1.95262 8.46159 1.31946 8.07107 0.928932C7.68054 0.538408 7.04738 0.538408 6.65685 0.928932L0.292892 7.29289ZM21 7H1V9H21V7Z" fill="white" fillOpacity="0.7" />
            </svg>
          </button>
        </div>
        <h2>Регистрация</h2>
        <Formik
          initialValues={{
            email: '',
            name: '',
            surname: '',
            password: '',
            confirmPassword: '',
            phone: ''
          }}

          onSubmit={(values, { resetForm }) => {
            axios.post('http://localhost:3000/users', {
              name: values.name,
              email: values.email,
              surname: values.surname,
              password: values.password,
              phone: values.phone
            })
              .then(function (response) {
                if (response) {
                  navigate('/login')
                }
              })
              .catch(function (error) {
                console.log(error);
                navigate('*')
              });
            resetForm()
          }}

          validateOnBlur

          validationSchema={validationSchema}
        >
          {({ values, errors, touched, handleChange, handleBlur, isValid, dirty, handleSubmit }) => (
            <form autoComplete="off" className='register__form' onSubmit={handleSubmit}>
              <label className='text'>
                <input className='text-input' type={`text`} name={`name`} autoComplete="off" placeholder='Имя *'
                  style={{ borderColor: errors.name && touched.name ? 'red' : 'inerhit' }}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.name}
                />
              </label>
              <label className='text'>
                <input className='text-input' type={`text`} name={`surname`} autoComplete="off" placeholder='Фамилия *'
                  style={{ borderColor: errors.surname && touched.surname ? 'red' : 'inerhit' }}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.surname}
                />
              </label>
              <label className='text'>
                <input className='text-input'
                  type={`phone`} name={`phone`}
                  autoComplete="off" placeholder='Введите номер телефона'
                  style={{ borderColor: errors.phone && touched.phone ? 'red' : 'inerhit' }}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.phone}
                />
              </label>
              <label className='text'>
                <input className='text-input' type={`text`} name={`email`} autoComplete="off" placeholder='E-mail *'
                  style={{ borderColor: errors.email && touched.email ? 'red' : 'inerhit' }}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                />
              </label>
              <label className='text'>
                <input className='text-input' type={`password`} name={`password`} autoComplete="off" placeholder='Пароль*'
                  style={{ borderColor: errors.password && touched.password ? 'red' : 'inerhit' }}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                />
              </label>
              <label className='text'>
                <input className='text-input' type={`password`} name={`confirmPassword`} autoComplete="off" placeholder='Подтверждение пароля*'
                  style={{ borderColor: errors.confirmPassword && touched.confirmPassword ? 'red' : 'inerhit' }}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.confirmPassword}
                />
              </label>
              <label className='submit'>
                <input className='submit-input' type={'submit'} value='Завершить' />
              </label>
            </form>
          )}
        </Formik>
        <div className='txt'>
          <p>Уже зарегистрированы?</p>
          <a href="/">Войти</a>
        </div>
      </div>
    </section >
  )
}

export default RegisterForm