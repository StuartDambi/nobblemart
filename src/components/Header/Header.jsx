import React from 'react'
import Category from '../Category/Category'
// import { Link } from 'react-router-dom'

class Header extends React.Component {
    render() {
        return (
            <div className="wrapper-fluid banners-effect-5" id="wrapper">
                <header id="header" className="typeheader-1">
                    {/* THE TOP HEADER */}
                    <div className="header-top hidden-compact">
                        <div className="container">
                            <div className="row">
                                <div className="header-top-left col-lg-7 col-md-8 col-sm-6 col-xs-4">
                                    <div className="hidden-sm hidden-xs welcome-msg">
                                        <b>Welcome Noble-Pals Emarket !</b>! Wrap new offers / gift every single day on Weekends - New Coupon code: BlackNov#001
                                    </div>
                                    <ul className="top-link list-inline hidden-lg hidden-md">
                                        <li className="account" id="my_account">
                                            <a href="!#" className="btn-xs dropdown-toggle" data-toggle="dropdown" title="My Account">
                                                <span className="hidden-xs">My Account</span><span className="fa fa-carret-down"></span>
                                            </a>
                                            <ul className="dropdown-menu">
                                                <li><a href="register.html"><i class="fa fa-user"></i> Register</a></li>
                                                <li><a href="login.html"><i class="fa fa-pencil-square-o"></i> Login</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* END OF TOP HEADER */}

                    {/* HEADER --CENTER */}
                    <div className="header-middle">
                        <div className="container">
                            <div className="row">
                                {/* Logo */}
                                <div className="navbar-logo col-lg-2 col-md-2 col-sm-12 col-xs-12">
                                    <div class="logo"><a href="index.html"><img src="logo" title="Your Store" alt="Nobble Pals logo" /></a></div>
                                </div>
                                {/* End logo */}

                                {/* Main menu */}
                                <div className="main-menu col-lg-6 col-md-7">
                                    <div className="responsive so-megamenu megamenu-style-dev">
                                        <nav className="navbar-default">
                                            <div className="container-megamenu horizontal open">
                                                <div className="navbar-header">
                                                    <button  type="button" id="show-megamenu" data-toggle="collapse" className="navbar-toggle">
                                                        <span className="icon-bar"></span>
                                                        <span className="icon-bar"></span>
                                                        <span className="icon-bar"></span>
                                                    </button>
                                                </div>

                                                <div className="megamenu-wrapper">
                                                    <span className="fa fa-times"></span>
                                                    <div className="megamenu-pattern">
                                                        <div className="container-mega">
                                                            <ul className="megamenu" data-transition="slide" data-animationtime="250">
                                                                <li className="home hover">
                                                                    <a href="!#">Home</a>
                                                                </li>
                                                                <li className="with-sub-menu hover">
                                                                    <p className="close-menu"></p>
                                                                    <a href="!#" className="clearfix">
                                                                        <strong>Features</strong>
                                                                        <b className="caret"></b>
                                                                    </a>
                                                                    <div className="sub-menu" style={{width: '100%', right: 'auto'}}>
                                                                        <div className="content">
                                                                            <div className="row">

                                                                                <div className="col-md-3">
                                                                                    <div className="column">
                                                                                        <a href="!#" className="title-submenu">Products</a>
                                                                                        <div>
                                                                                            <ul className="row-list">
                                                                                                <li><a href="product.html">Products</a></li>
                                                                                                <li><a href="category.html">Category </a></li>
                                                                                            </ul>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>

                                                                                <div className="col-md-3">
                                                                                    <div className="column">
                                                                                        <a href="!#" className="title-submenu">Shopping Pages</a>
                                                                                        <div>
                                                                                            <ul className="row-list">
                                                                                                <li><a href="cart.html">Shopping Cart Page</a></li>
                                                                                                <li><a href="checkout.html">Checkout Page</a></li>
                                                                                                <li><a href="compare.html">Compare Page</a></li>
                                                                                                <li><a href="wishlist.html">Wishlist Page</a></li>
                                                                                            </ul>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>

                                                                                <div className="col-md-3">
                                                                                    <div className="column">
                                                                                        <a href="!#" className="title-submenu">My Account Pages</a>
                                                                                        <div>
                                                                                            <ul className="row-list">
                                                                                                <li><a href="login.html">Login Page</a></li>
                                                                                                <li><a href="register.html">Register Page</a></li>
                                                                                                <li><a href="my-account.html">My Account</a></li>
                                                                                                <li><a href="order-history.html">Order History</a></li>
                                                                                                <li><a href="order-information.html">Order Information</a></li>
                                                                                                <li><a href="return.html">Product Returns</a></li>
                                                                                                <li><a href="gift-voucher.html">Gift Voucher</a></li>
                                                                                            </ul>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>

                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </li>

                                                                <li className="with-sub-menu hover">
                                                                    <p className="close-menu"></p>
                                                                    <a href="!#" className="clearfix">
                                                                        <strong>About</strong>
                                                                    </a>
                                                                </li>

                                                                <li className="with-sub-menu hover">
                                                                    <p className="close-menu"></p>
                                                                    <a href={Category} className="clearfix">
                                                                        <strong>Categories</strong>
                                                                        <b className="caret"></b>
                                                                    </a>
                                                                    <div className="sub-menu" style={{width: '100%', display: 'none'}}>
                                                                        <div className="content">
                                                                            <div className="row">
                                                                                <div className="colo-sm-12">
                                                                                    <div className="row">
                                                                                        <div className="col-md-3 img img1">
                                                                                            <a href="!#"><img src={process.env.PUBLIC_URL+'image/catalog/menu/megabanner/image-1.jpg'} alt="banner1"/></a>
                                                                                        </div>
                                                                                        <div className="col-md-3 img img1">
                                                                                            <a href="!#"><img src={process.env.PUBLIC_URL+'image/catalog/menu/megabanner/image-2.jpg'} alt="banner2"/></a>
                                                                                        </div>
                                                                                        <div className="col-md-3 img img1">
                                                                                            <a href="!#"><img src={process.env.PUBLIC_URL+'image/catalog/menu/megabanner/image-3.jpg'} alt="banner3"/></a>
                                                                                        </div>
                                                                                        <div className="col-md-3 img img1">
                                                                                            <a href="!#"><img src={process.env.PUBLIC_URL+'image/catalog/menu/megabanner/image-4.jpg'} alt="banner4"/></a>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>

                                                                            <div className="row">

                                                                                <div className="col-md-3">
                                                                                    <a href="!#" className="title-submenu">Automotive</a>
                                                                                    <div className="row">
                                                                                        <div className="col-md-12 hover-menu">
                                                                                            <div className="menu">
                                                                                                <ul>
                                                                                                    <li><a href="!#"  class="main-menu">Car Alarms and Security</a></li>
                                                                                                    <li><a href="!#"  class="main-menu">Car Audio &amp; Speakers</a></li>
                                                                                                    <li><a href="!#"  class="main-menu">Gadgets &amp; Auto Parts</a></li>
                                                                                                    <li><a href="!#"  class="main-menu">More Car Accessories</a></li>
                                                                                                </ul>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>

                                                                                <div className="col-md-3">
                                                                                    <a href="!#" className="title-submenu">Funitures</a>
                                                                                    <div className="row">
                                                                                        <div className="col-md-12 hover-menu">
                                                                                            <div className="menu">
                                                                                                <ul>
                                                                                                    <li><a href="#"  class="main-menu">Bathroom</a></li>
                                                                                                    <li><a href="#"  class="main-menu">Bedroom</a></li>
                                                                                                    <li><a href="#"  class="main-menu">Decor</a></li>
                                                                                                    <li><a href="#"  class="main-menu">Living room</a></li>
                                                                                                </ul>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>

                                                                                <div className="col-md-3">
                                                                                    <a href="!#" className="title-submenu">Jewelry &amp; Watches</a>
                                                                                    <div className="row">
                                                                                        <div className="col-md-12 hover-menu">
                                                                                            <ul>
                                                                                                <li><a href="#"  class="main-menu">Earings</a></li>
                                                                                                <li><a href="#"  class="main-menu">Wedding Rings</a></li>
                                                                                                <li><a href="#"  class="main-menu">Men Watches</a></li>
                                                                                            </ul>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>

                                                                                <div className="col-md-3">
                                                                                    <a href="!#" className="title-submenu">Electronics</a>
                                                                                    <div className="row">
                                                                                        <div className="col-md-12 hover-menu">
                                                                                            <ul>
                                                                                                <li><a href="#"  class="main-menu">Computer</a></li>
                                                                                                <li><a href="#"  class="main-menu">Smartphone</a></li>
                                                                                                <li><a href="#"  class="main-menu">Tablets</a></li>
                                                                                                <li><a href="#"  class="main-menu">Monitors</a></li>
                                                                                            </ul>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>

                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </li>

                                                                <li>
                                                                    <p className="close-menu"></p>
                                                                    <a href="!#" className="clearfix">
                                                                        <strong>Accessories</strong>
                                                                    </a>
                                                                </li>

                                                                <li>
                                                                    <p className="close-menu"></p>
                                                                    <a href="!#" className="clearfix">
                                                                        <strong>Blog</strong>
                                                                        <span className="label"></span>
                                                                    </a>
                                                                </li>

                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </nav>
                                    </div>
                                </div>
                                {/* End Main menu */}

                                <div className="middle-right col-lg-4 col-md-3 col-sm-6 col-xs-8">
                                    <div className="signin-w hidden-sm hidden-xs">
                                        <ul className="signin-link blank">
                                            <li className="log login">
                                                <i className="fa fa-lock"></i><a href="!#" className="link-lg">Login</a> or 
                                                <a href="!#">Register</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="telephone hidden-xs hidden-sm hidden-md">
                                        <ul className="blank">
                                            <li>
                                                <a href="!#"><i class="fa fa-truck"></i>Track Your Order</a>
                                            </li>
                                            <li>
                                                <a href="!#"><i class="fa fa-phone-square"></i>Hotline 0702114226</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* End of Header --Center */}

                    {/* HEADER --BOTTOM */}
                    <div className="header-bottom hidden-compact">
                        <div className="container">
                            <div className="row">
                                
                                <div className="bottom1 menu-vertical col-lg-2 col-md-3 col-sm-3">
                                    <div className="responsive so-megamenu megamenu-style-dev">
                                        <div className="so-vertical-menu">
                                            <nav className="navbar-default">

                                                <div className="container-megamenu vertical">
                                                    <div id="menuHeading">
                                                        <div className="megamenuToogle-wrapper">
                                                            <div className="megamenuToogle-pattern">
                                                                <div className="container">
                                                                    All Categories
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="navbar-header">
                                                        <button type="button" id="show-verticalmenu" data-toggle="collapse" className="navbar-toggle">
                                                            <i className="fa fa-bars"></i>
                                                            <span>All Categories</span>
                                                        </button>
                                                    </div>
                                                </div>

                                            </nav>
                                        </div>
                                    </div>
                                </div>

                                {/* Search */}
                                <div className="bottom2 col-lg-7 col-md-6 col-sm-6">
                                    <div className="search-header-w">
                                        <div className="icon-search hidden-lg hidden-md hidden-sm"><i class="fa fa-search"></i></div>

                                        <div className="sosearchpro-wrapper so-search" id="sosearchpro">
                                            <form action="#" method="GET">
                                                <div id="search0" className="search input-group form-group">
                                                    <div className="select_category filter_type  icon-select hidden-sm hidden-xs">
                                                        <select name="category_id" className="no-border">
                                                            <option value="0">All Categories</option>
                                                            <option value="78">Apparel</option>
                                                            <option value="77">Cables &amp; Connectors</option>
                                                            <option value="82">Cameras &amp; Photo</option>
                                                            <option value="80">Flashlights &amp; Lamps</option>
                                                            <option value="81">Mobile Accessories</option>
                                                            <option value="79">Video Games</option>
                                                            <option value="20">Jewelry &amp; Watches</option>
                                                            <option value="76">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Earings</option>
                                                            <option value="26">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Wedding Rings</option>
                                                            <option value="27">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Men Watches</option>
                                                        </select>
                                                    </div>

                                                    <input type="text" className=" autosearch-input form-control" value="" size="50" autocomplete="off" placeholder="Keyword here..." name="search"/>
                                                    <span className="input-group-btn">
                                                        <button className="button-search btn btn-primary" name="submit_search" type="submit"><i class="fa fa-search"></i></button>
                                                    </span>
                                                </div>
                                                <input type="hidden" name="route" value="product/search" />
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                {/* End of Search */}

                                {/* Secondary Menu */}
                                <div class="bottom3 col-lg-3 col-md-3 col-sm-3">
                                    {/* Cart */}
                                <div class="shopping_cart">
                                    <div id="cart" class="btn-shopping-cart">

                                        <a data-loading-text="Loading... " class="btn-group top_cart dropdown-toggle" data-toggle="dropdown" aria-expanded="true">
                                            <div class="shopcart">
                                                <span class="icon-c">
                                        <i class="fa fa-shopping-bag"></i>
                                    </span>
                                                <div class="shopcart-inner">
                                                    <p class="text-shopping-cart">

                                                        My cart
                                                    </p>

                                                    <span class="total-shopping-cart cart-total-full">
                                        <span class="items_cart">03</span><span class="items_cart2"> item(s)</span><span class="items_carts"> - 100000shs </span>
                                                    </span>
                                                </div>
                                            </div>
                                        </a>

                                        <ul class="dropdown-menu pull-right shoppingcart-box" role="menu">
                                            <li>
                                                <table class="table table-striped">
                                                    <tbody>
                                                        <tr>
                                                            <td class="text-center" style={{width: '70px'}}>
                                                                <a href="product.html">
                                                                    <img src={process.env.PUBLIC_URL+'image/catalog/demo/product/80/1.jpg'} style={{width: '70px'}} alt="Yutculpa ullamcon" title="Yutculpa ullamco" class="preview" />
                                                                </a>
                                                            </td>
                                                            <td class="text-left"> <a class="cart_product_name" href="product.html">dolls</a> 
                                                            </td>
                                                            <td class="text-center">x1</td>
                                                            <td class="text-center">8000</td>
                                                            <td class="text-right">
                                                                <a href="product.html" class="fa fa-edit"></a>
                                                            </td>
                                                            
                                                            <td class="text-right">
                                                                <a onclick="cart.remove('2');" class="fa fa-times fa-delete"></a>
                                                            </td>
                                                        </tr>

                                                        <tr>
                                                            <td class="text-center" style={{width: '70px'}}>
                                                                <a href="product.html">
                                                                    <img src={process.env.PUBLIC_URL+'image/catalog/demo/product/80/1.jpg'} style={{width: '70px'}} alt="Yutculpa ullamcon" title="Yutculpa ullamco" class="preview" />
                                                                </a>
                                                            </td>
                                                            <td class="text-left"> <a class="cart_product_name" href="product.html">dolls</a> 
                                                            </td>
                                                            <td class="text-center">x1</td>
                                                            <td class="text-center">5000</td>
                                                            <td class="text-right">
                                                                <a href="product.html" class="fa fa-edit"></a>
                                                            </td>
                                                        
                                                            <td class="text-right">
                                                                <a onclick="cart.remove('2');" class="fa fa-times fa-delete"></a>
                                                            </td>
                                                        </tr>


                                                        <tr>
                                                            <td class="text-center" style={{width: '70px'}}>
                                                                <a href="product.html">
                                                                    <img src={process.env.PUBLIC_URL+'image/catalog/demo/product/80/2.jpg'} style={{width: '70px'}} alt="Xancetta bresao" title="Xancetta bresao" class="preview" />
                                                                </a>
                                                            </td>
                                                            <td class="text-left"> <a class="cart_product_name" href="product.html">wistlers</a> 
                                                            </td>
                                                            <td class="text-center">x1</td>
                                                            <td class="text-center">6000</td>
                                                            <td class="text-right">
                                                                <a href="product.html" class="fa fa-edit"></a>
                                                            </td>

                                                            
                                                            <td class="text-right">
                                                                <a onclick="cart.remove('1');" class="fa fa-times fa-delete"></a>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </li>
                                            <li>
                                                <div>
                                                    <table class="table table-bordered">
                                                        <tbody>
                                                            <tr>
                                                                <td class="text-left"><strong>Sub-Total</strong>
                                                                </td>
                                                                <td class="text-right">19000</td>
                                                            </tr>
                                                            
                                                            <tr>
                                                                <td class="text-left"><strong>Service Fee</strong>
                                                                </td>
                                                                <td class="text-right">1000</td>
                                                            </tr>
                                                            <tr>
                                                                <td class="text-left"><strong>Total</strong>
                                                                </td>
                                                                <td class="text-right">20000</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                    <p class="text-right"> <a class="btn view-cart" href="cart.html"><i class="fa fa-shopping-cart"></i>View Cart</a>&nbsp;&nbsp;&nbsp; <a class="btn btn-mega checkout-cart" href="checkout.html"><i class="fa fa-share"></i>Checkout</a> 
                                                    </p>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>

                                </div>
                                

                                <ul class="wishlist-comp hidden-md hidden-sm hidden-xs">
                                    <li class="wishlist hidden-xs"><a href="#" id="wishlist-total" class="top-link-wishlist" title="Wish List (0) "><i class="fa fa-heart"></i></a>
                                    </li>
                                </ul>
                            </div>
                            </div>
                            
                        </div>
                    </div>
                </header>
            </div>
        )
    }
}
export default Header
