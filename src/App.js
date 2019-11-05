import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import BaseLayout from './components/BaseLayout/BaseLayout'
import Home from './components/Pages/Home/Home'
import Categories from './components/Pages/Categories/Categories'
import Cart from './components/Pages/Cart/Cart'
import Checkout from './components/Pages/Checkout/Checkout'
import Compare from './components/Pages/Compare/Compare'
import Login from './components/Pages/Login/Login'
import Register from './components/Pages/Register/Register'
import Orders from './components/Pages/Orders/Orders'
import Wishlist from './components/Pages/WishList/Wishlist'
import ProductReturns from './components/Pages/ProductReturns/ProductReturns'
import GiftVoucher from './components/Pages/GiftVoucher/GiftVoucher'


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <BaseLayout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/categories" component={Categories} />
            <Route path="/cart" component={Cart} />
            <Route path="/checkout" component={Checkout} />
            <Route path="/compare" component={Compare} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/orders" component={Orders} />
            <Route path="/wishlist" component={Wishlist} />
            <Route path="/returns" component={ProductReturns} />
            <Route path="/giftvoucher" component={GiftVoucher} />
            
          </Switch>
        </BaseLayout>
      </BrowserRouter>
    )
  }
}
export default App