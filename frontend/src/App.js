import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from "./screens/CartScreen";
import {Link} from 'react-router-dom';
import SigninScreen from './screens/SigninScreen';

function App() {
  const openMenu=()=>{
    document.querySelector(".sidebar").classList.add("open");
  }
  const closeMenu=()=>{
    document.querySelector(".sidebar").classList.remove("open");
  }
  return (
  <BrowserRouter>
    <div className="grid-Container">
        <header className="header">
            <div className="brand">
                <button onClick={openMenu}>&#9776;</button>
                <Link to='/'>amazona</Link>
            </div>
            <div className="header-links">
                <a href="cart.html">Cart</a>
                <Link to='/signin'><a href="signin.html">Signin</a></Link>
            </div>
        </header>
        <aside className="sidebar">
            <h3>Shopping Categories</h3>
            <button className="sidebar-close-button" onClick={closeMenu}>x</button>
            <ul>
                <li><a href="index.html">Paints</a></li>
                <li><a href="index.html">Shirts</a></li>
            </ul>
        </aside>
        <main className="main">
            <div className="content">
              <Route path="/signin" component={SigninScreen}/>
              <Route path="/product/:id" exact={true} component={ProductScreen}/>
              <Route path="/cart/:id?" component={CartScreen}/>
              <Route path="/" exact={true} component={HomeScreen}/>   
            </div>
        </main>
        <footer className="footer">All right reserved.</footer>
    </div>
  </BrowserRouter>
  );
}

export default App;
