
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Orders from './components/Orders/Orders';
import Product from './components/Product/Product';
import Register from './components/Register/Register';
import RequitedAuth from './components/RequiredAuth/RequitedAuth';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path ="/" element={<Home></Home>}></Route>
        <Route path ="/login" element={<Login></Login>}></Route>
        <Route path ="/register" element={<Register></Register>}></Route>
        <Route path='/product' element={<Product></Product>}></Route>
        <Route path='/orders' element={
          <RequitedAuth>
            <Orders></Orders>
          </RequitedAuth>
        }></Route>
       
       

      </Routes>
     
    </div>
  );
}

export default App;
