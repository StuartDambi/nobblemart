import React from 'react'
import { Switch, Route, HashRouter } from 'react-router-dom'
import Account from './components/Account/Account'
import Cart from './components/Cart/Cart'
import Category from './components/Category/Category'
import Checkout from './components/Checkout/Checkout'
import Compare from './components/Compare/Compare'
import GiftVoucher from './components/GiftVoucher/GiftVoucher'
import Home from './components/Home/Home'
import Login from './components/Login/Login'
import Orders from './components/Orders/Orders'
import PorductReturns from './components/ProductReturns/ProductReturns'
import Register from './components/Register/Register'
import Wishlist from './components/Wishlist/Wishlist'


export default function Routes() {
    return (
        <HashRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/category" component={Category} />
                <Route path="/account" component={Account} />
                <Route path="/cart" component={Cart} />
                <Route path="/checkout" component={Checkout} />
                <Route path="/compare" component={Compare} />
                <Route path="/giftvoucher" component={GiftVoucher} />
                <Route path="/returns" component={PorductReturns} />
                <Route path="/orders" component={Orders} />
                <Route path="/wishlist" component={Wishlist} />
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
            </Switch>
        </HashRouter>
    )
}