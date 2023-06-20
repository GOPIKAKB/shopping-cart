import { createContext } from 'react';
import { useState } from 'react';
import HomePage from './Component/HomePage';
import CartPage from './Component/CartPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DetailPage from './Component/DetailPage';
import NavBar from './Component/NavBar';

export const myConext = createContext()
function App() {
  const [cart, setCart] = useState([])
  const [data,setData] =useState([])
  return (
    <div >
      <myConext.Provider value={{cart, setCart,data,setData}}>
        <BrowserRouter>
        <NavBar/>
          <Routes>
            <Route path='/' element={<HomePage />}></Route>
            <Route path='/cart' element={<CartPage />}></Route>
            <Route path='/detail/:parameter' element={<DetailPage/>}></Route>
          </Routes>
        </BrowserRouter>
      </myConext.Provider>
    </div>
  );
}

export default App;
