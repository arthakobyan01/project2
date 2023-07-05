import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Basket from './components/Basket/Basket';
import Catalog from './components/Catalog/Catalog';
import Contacts from './components/Contacts/Contacts';
import Delivery from './components/Delivery/Delivery';
import Login from './components/Login/Login';
import Main from './components/Main/Main';
import RegisterForm from './components/RegisterForm/RegisterForm';
import Uniq from './components/Uniq/Uniq';
import ErrorPage from './pages/ErrorPage';
import HomeWrapper from './pages/HomeWrapper';
import { fetchCategories } from './store/slices/Categories/CategoriesAPI';
import { selectCategories } from './store/slices/Categories/CategoriesSlice';
import { fetchProducts } from './store/slices/Products/ProductsAPI';
import { fetchFillter, selectProducts } from './store/slices/Products/ProductsSlice';
import { fetchUsers } from './store/slices/Users/UsersAPI';


// const Test = (props) => {
//   console.log(props);

//   return (
//     <>
//       <h1 onClick={props.click}>test</h1>
//     </>
//   )
// }


// const Container = ({ children }) => {
//   return (
//     <>
//       {children({ click: () => { console.log('test') } })}
//     </>
//   )
// }

function App() {
  const { categoryData } = useSelector(selectCategories)
  const { products } = useSelector(selectProducts)
  const dispatch = useDispatch()

  useEffect(() => {
    if (!categoryData?.length) {
      dispatch(fetchCategories())
      dispatch(fetchProducts())
    }
    if (products?.length) {
      dispatch(fetchFillter(categoryData?.find(el => el.checked)?.slug))

    }

  }, [products])

  return (
    <div className="App">
      {/* <Container>{Test}</Container> */}
      <Routes>
        <Route path='/' element={<HomeWrapper />}>
          <Route index element={<Main />} />
          <Route path='products/:id' element={<Uniq />} />
          <Route path='about' element={<About />} />
          <Route path='contacts' element={<Contacts />} />
          <Route path='delivery' element={<Delivery />} />
          <Route path='basket' element={<Basket />} />
          <Route path='catalog' element={<Catalog />} />
        </Route>
        <Route path='/register' element={<RegisterForm />} />
        <Route path='/login' element={<Login />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
