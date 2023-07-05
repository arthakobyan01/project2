
import { useState } from 'react';
import Lottie from 'react-lottie-player';
import { useNavigate } from 'react-router-dom';
import animationData from '../assets/Lottie/Lottie.json'

function ErrorPage() {
  const navigate = useNavigate()
  return (
    <div className="errorpage">
      <div className='errorpage__container'>
        <Lottie
          loop
          animationData={animationData}
          speed={0.3}
          play
          style={{ width: 700, height: 600 }}
        />
        <div className='txt'>
          <h3>Извините, Страница не найдена!</h3>
          <button onClick={() => navigate('/')}>Главная страница</button>
        </div>
      </div>
    </div>
  )
}

export default ErrorPage