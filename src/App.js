import './App.css';
import {
  Routes,
  Route,
  BrowserRouter
} from "react-router-dom";
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Home from './components/home/Home'
import ProductList from './components/productList/ProductList'
import Login from './components/Login'
import Signup from './components/Signup'
import ProductDetail from './components/ProductDetail';
import Cart from './components/Cart'
import Order from './components/Order'
import Customer from './components/Customer';
import Error from './components/Error';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
      <Routes>
        <Route index path='/' element={<Home />} />
        <Route path='/list/:s' element={<ProductList/>} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/customer' element={<Customer />} />
        <Route path='/product/:id' element={<ProductDetail />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/order/:id' element={<Order />} />
        <Route path='*' element={<Error />} />
      </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
