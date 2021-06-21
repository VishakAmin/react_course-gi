import { useState, useEffect } from 'react';

import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';
import CartProvider from './store/CartProvider';
import Login from './components/Login/Login';


function App() {
  const [cartIsShown, setCartIsShown] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storedLoggedData = localStorage.getItem('isLoggedIn')

    if (storedLoggedData === '1') {
      setIsLoggedIn(true)
    }
  },[]);

  const loginHandler = (email, password) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways
    localStorage.setItem("isLoggedIn",'1')
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem("isLoggedIn")
    setIsLoggedIn(false);
  
  };


  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (

      <main>
        {/* <Login onLogin={loginHandler}/> */}
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && 
           <CartProvider>
           {cartIsShown && <Cart onClose={hideCartHandler} />}
           <Header onShowCart={showCartHandler} onLogout={logoutHandler}/>
           <main>
             <Meals />
           </main>
         </CartProvider>}
      </main>


 
  );
}

export default App;
