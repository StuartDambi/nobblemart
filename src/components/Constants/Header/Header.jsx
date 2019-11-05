import React from 'react'
import { NavLink } from 'react-router-dom'

class Header extends React.Component {
    render() {
        return (
            <div className="wrapper-fluid banners-effect-5" id="wrapper">
               <header id="header" class=" typeheader-1">
                    <div class="header-top hidden-compact">
                        <div class="container">
                            <div class="row">
                                <div class="header-top-left col-lg-7 col-md-8 col-sm-6 col-xs-4">
                                    <div class="hidden-sm hidden-xs welcome-msg"><b>Welcome to Noblemart!</b></div>
                                    <ul class="top-link list-inline hidden-lg hidden-md">
                                        <li class="account" id="my_account">
                                            <NavLink to="/account" title="My Account " class="btn-xs dropdown-toggle" data-toggle="dropdown"> <span class="hidden-xs">My Account </span>  <span class="fa fa-caret-down"></span>
                                            </NavLink>
                                            <ul class="dropdown-menu ">
                                                <li><NavLink to="/register"><i class="fa fa-user"></i> Register</NavLink></li>
                                                <li><NavLink to="/login"><i class="fa fa-pencil-square-o"></i> Login</NavLink></li>
                                            </ul>
                                        </li>
                                    </ul>            
                                </div>
                                <div class="header-top-right collapsed-block col-lg-5 col-md-4 col-sm-6 col-xs-8">
                                    <ul class="top-link list-inline lang-curr">
                                        <li class="currency">
                                            <div class="btn-group currencies-block">
                                                <form action="#" method="post" enctype="multipart/form-data" id="currency">
                                                    <a class="btn btn-link dropdown-toggle" data-toggle="dropdown" href="!#">
                                                        <span class="icon icon-credit "></span> $ US Dollar  <span class="fa fa-angle-down"></span>
                                                    </a>
                                                    <ul class="dropdown-menu btn-xs">
                                                        <li> <a href="!#">(€)&nbsp;bitcoin</a></li>
                                                        <li> <a href="!#">(£)&nbsp;Ethereum</a></li>
                                                        <li> <a href="!#">(£)&nbsp;bitcoin cash</a></li>
                                                        <li> <a href="!#">(£)&nbsp;litecoin</a></li>
                                                        <li> <a href="!#">($)&nbsp;US Dollar </a></li>
                                                    </ul>
                                                </form>
                                            </div>
                                        </li>   
                                    </ul>
                                    

                                    
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Middle Header */}
                    <div class="header-middle">
                        <div class="container">
                            <div class="row">
                                {/* Logo */}
                                <div class="navbar-logo col-lg-2 col-md-2 col-sm-12 col-xs-12">
                                    <div class="logo"><a href="index.html"><img src={process.env.PUBLIC_URL+'image/icon/Noble-Mart-lcon.png'} title="Your Store" alt="Your Store" style={{height: '60px'}}/></a></div>
                                </div>

                                {/*  Main menu  */}
                                <div class="main-menu col-lg-6 col-md-7 ">
                                    <div class="responsive so-megamenu megamenu-style-dev">
                                        <nav class="navbar-default">
                                            <div class=" container-megamenu  horizontal open ">
                                                <div class="navbar-header">
                                                    <button type="button" id="show-megamenu" data-toggle="collapse" class="navbar-toggle">
                                                        <span class="icon-bar"></span>
                                                        <span class="icon-bar"></span>
                                                        <span class="icon-bar"></span>
                                                    </button>
                                                </div>
                                                
                                                <div class="megamenu-wrapper">
                                                    <span id="remove-megamenu" class="fa fa-times"></span>
                                                    <div class="megamenu-pattern">
                                                        <div class="container-mega">
                                                            <ul class="megamenu" data-transition="slide" data-animationtime="250">
                                                                <li class="home hover">
                                                                    <NavLink to="/"><b>Home</b></NavLink>
                                                                    
                                                                </li>

                                                                <li class="with-sub-menu hover">
                                                                    <p class="close-menu"></p>
                                                                    <a href="!#" class="clearfix">
                                                                        <strong>Features</strong>
                                                                        
                                                                        <b class="caret"></b>
                                                                    </a>
                                                                    <div class="sub-menu" style={{width: '100%', right: 'auto'}} >
                                                                        <div class="content" >
                                                                            <div class="row">
                                                                                
                                                                                <div class="col-md-3">
                                                                                    <div class="column">
                                                                                        <a href="!#" class="title-submenu">Products</a>
                                                                                        <div>
                                                                                            <ul class="row-list">
                                                                                                <li><a href="!#">Products</a></li>
                                                                                                <li><NavLink to='/categories'>Category </NavLink></li>
                                                                                            
                                                                                            </ul>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div class="col-md-3">
                                                                                    <div class="column">
                                                                                        <a href="!#" class="title-submenu">Shopping pages</a>
                                                                                        <div>
                                                                                            <ul class="row-list">
                                                                                                <li><NavLink to="/cart">Shopping Cart Page</NavLink></li>
                                                                                                <li><NavLink to="/checkout">Checkout Page</NavLink></li>
                                                                                                <li><NavLink to="/compare">Compare Page</NavLink></li>
                                                                                                <li><NavLink to="/wishlist">Wishlist Page</NavLink></li>
                                                                                            
                                                                                            </ul>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div class="col-md-3">
                                                                                    <div class="column">
                                                                                        <a href="!#" class="title-submenu">My Account pages</a>
                                                                                        <div>
                                                                                            <ul class="row-list">
                                                                                                <li><NavLink to="/login">Login Page</NavLink></li>
                                                                                                <li><NavLink to="register">Register Page</NavLink></li>
                                                                                                <li><NavLink to="account">My Account</NavLink></li>
                                                                                                <li><NavLink to="orders">Order History</NavLink></li>
                                                                                                <li><NavLink to="orders">Order Information</NavLink></li>
                                                                                                <li><NavLink to="returns">Product Returns</NavLink></li>
                                                                                                <li><NavLink to="giftvoucher">Gift Voucher</NavLink></li>
                                                                                            </ul>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                                <li class="with-sub-menu hover">
                                                                    <p class="close-menu"></p>
                                                                    <a href="!#" class="clearfix">
                                                                        <strong>About Us</strong>
                                                                        
                                                                    </a>
                                                                
                                                                </li>
                                                                <li class="with-sub-menu hover">
                                                                    <p class="close-menu"></p>
                                                                    <NavLink to="/categories" class="clearfix">
                                                                        <strong>Categories</strong>
                                                                        <img class="label-hot" src="image/catalog/menu/hot-icon.png" alt="icon items" />
                                                            
                                                                        <b class="caret"></b>
                                                                    </NavLink>
                                                                    <div class="sub-menu" style={{width: '100%', display: 'none'}} >
                                                                        <div class="content">
                                                                            <div class="row">
                                                                                <div class="col-sm-12">
                                                                                    <div class="row">
                                                                                        <div class="col-md-3 img img1">
                                                                                            <a href="!#"><img src="image/catalog/menu/megabanner/image-1.jpg" alt="banner1" /></a>
                                                                                        </div>
                                                                                        <div class="col-md-3 img img2">
                                                                                            <a href="!#"><img src="image/catalog/menu/megabanner/image-2.jpg" alt="banner2" /></a>
                                                                                        </div>
                                                                                        <div class="col-md-3 img img3">
                                                                                            <a href="!#"><img src="image/catalog/menu/megabanner/image-3.jpg" alt="banner3" /></a>
                                                                                        </div>
                                                                                        <div class="col-md-3 img img4">
                                                                                            <a href="!#"><img src="image/catalog/menu/megabanner/image-4.jpg" alt="banner4" /></a>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div class="row">
                                                                                <div class="col-md-3">
                                                                                    <a href="!#" class="title-submenu">Automotive</a>
                                                                                    <div class="row">
                                                                                        <div class="col-md-12 hover-menu">
                                                                                            <div class="menu">
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
                                                                                <div class="col-md-3">
                                                                                    <a href="!#" class="title-submenu">Funitures</a>
                                                                                    <div class="row">
                                                                                        <div class="col-md-12 hover-menu">
                                                                                            <div class="menu">
                                                                                                <ul>
                                                                                                    <li><a href="!#"  class="main-menu">Bathroom</a></li>
                                                                                                    <li><a href="!#"  class="main-menu">Bedroom</a></li>
                                                                                                    <li><a href="!#"  class="main-menu">Decor</a></li>
                                                                                                    <li><a href="!#"  class="main-menu">Living room</a></li>
                                                                                                </ul>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div class="col-md-3">
                                                                                    <a href="!#" class="title-submenu">Jewelry &amp; Watches</a>
                                                                                    <div class="row">
                                                                                        <div class="col-md-12 hover-menu">
                                                                                            <div class="menu">
                                                                                                <ul>
                                                                                                    <li><a href="!#"  class="main-menu">Earings</a></li>
                                                                                                    <li><a href="!#"  class="main-menu">Wedding Rings</a></li>
                                                                                                    <li><a href="!#"  class="main-menu">Men Watches</a></li>
                                                                                                </ul>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div class="col-md-3">
                                                                                    <a href="!#" class="title-submenu">Electronics</a>
                                                                                    <div class="row">
                                                                                        <div class="col-md-12 hover-menu">
                                                                                            <div class="menu">
                                                                                                <ul>
                                                                                                    <li><a href="!#"  class="main-menu">Computer</a></li>
                                                                                                    <li><a href="!#"  class="main-menu">Smartphone</a></li>
                                                                                                    <li><a href="!#"  class="main-menu">Tablets</a></li>
                                                                                                    <li><a href="!#"  class="main-menu">Monitors</a></li>
                                                                                                </ul>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                                
                                                                <li class="">
                                                                    <p class="close-menu"></p>
                                                                    <a href="!#" class="clearfix">
                                                                        <strong>Accessories</strong>
                                                    
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

                                <div class="middle-right col-lg-4 col-md-3 col-sm-6 col-xs-8">                  
                                    <div class="signin-w  hidden-sm hidden-xs">
                                        <ul class="signin-link blank">                            
                                            <li class="log login"><i class="fa fa-lock"></i> <NavLink class="link-lg" to="/login">Login </NavLink> or <NavLink to="/register">Register</NavLink></li>                                
                                        </ul>                       
                                    </div>
                                    <div class="telephone hidden-xs hidden-sm hidden-md">
                                        <ul class="blank"> <li><a href="!#"><i class="fa fa-truck"></i>track your order</a></li> <li><a href="!#"><i class="fa fa-phone-square"></i>Hotline 0702114226</a></li> </ul>
                                    </div>
                                                        
                                    
                                </div>
                                
                            </div>

                        </div>
                    </div>

                    <div class="header-bottom hidden-compact">
                        <div class="container">
                            <div class="row">
                                
                                <div class="bottom1 menu-vertical col-lg-2 col-md-3 col-sm-3">
                                    <div class="responsive so-megamenu megamenu-style-dev ">
                                        <div class="so-vertical-menu ">
                                            <nav class="navbar-default">    
                                                
                                                <div class="container-megamenu vertical">
                                                    <div id="menuHeading">
                                                        <div class="megamenuToogle-wrapper">
                                                            <div class="megamenuToogle-pattern">
                                                                <div class="container">
                                                                    <div>
                                                                        <span></span>
                                                                        <span></span>
                                                                        <span></span>
                                                                    </div>
                                                                    All Categories                          
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                
                                                    <div class="navbar-header">
                                                        <button type="button" id="show-verticalmenu" data-toggle="collapse" class="navbar-toggle">      
                                                            <i class="fa fa-bars"></i>
                                                            <span>  All Categories     </span>
                                                        </button>
                                                    </div>
                                                    <div class="vertical-wrapper" >
                                                        <span id="remove-verticalmenu" class="fa fa-times"></span>
                                                        <div class="megamenu-pattern">
                                                            <div class="container-mega">
                                                                <ul class="megamenu">
                                                                    <li class="item-vertical  with-sub-menu hover">
                                                                        <p class="close-menu"></p>
                                                                        <a href="!#" class="clearfix">
                                                                            <img src="image/catalog/menu/icons/ico10.png" alt="icon" />
                                                                            <span>Gifts & Toys</span>
                                                                            <b class="caret"></b>
                                                                        </a>
                                                                        <div class="sub-menu" data-subwidth="60"  >
                                                                            <div class="content" >
                                                                                <div class="row">
                                                                                    <div class="col-sm-12">
                                                                                        <div class="row">
                                                                                            <div class="col-md-4 static-menu">
                                                                                                <div class="menu">
                                                                                                    <ul>
                                                                                                        <li>
                                                                                                            <a href="!#"  class="main-menu">Apparel</a>
                                                                                                            <ul>
                                                                                                                <li><a href="!#" >Accessories for Tablet PC</a></li>
                                                                                                                <li><a href="!#" >Accessories for i Pad</a></li>
                                                                                                                <li><a  href="!#" >Accessories for iPhone</a></li>
                                                                                                                <li><a href="!#" >Bags, Holiday Supplies</a></li>
                                                                                                                <li><a href="!#" >Car Alarms and Security</a></li>
                                                                                                                <li><a href="!#" >Car Audio &amp; Speakers</a></li>
                                                                                                            </ul>
                                                                                                        </li>
                                                                                                        <li>
                                                                                                            <a href="!#"  class="main-menu">Cables &amp; Connectors</a>
                                                                                                            <ul>
                                                                                                                <li><a href="!#" >Cameras &amp; Photo</a></li>
                                                                                                                <li><a href="!#" >Electronics</a></li>
                                                                                                                <li><a href="!#" >Outdoor &amp; Traveling</a></li>
                                                                                                            </ul>
                                                                                                        </li>
                                                                                                    </ul>
                                                                                                </div>
                                                                                            </div>
                                                                                            <div class="col-md-4 static-menu">
                                                                                                <div class="menu">
                                                                                                    <ul>
                                                                                                        <li>
                                                                                                            <a href="!#"  class="main-menu">Camping &amp; Hiking</a>
                                                                                                            <ul>
                                                                                                                <li><a href="!#" >Earings</a></li>
                                                                                                                <li><a href="!#" >Shaving &amp; Hair Removal</a></li>
                                                                                                                <li><a href="!#" >Salon &amp; Spa Equipment</a></li>
                                                                                                            </ul>
                                                                                                        </li>
                                                                                                        <li>
                                                                                                            <a href="!#" class="main-menu">Smartphone &amp; Tablets</a>
                                                                                                            <ul>
                                                                                                                <li><a href="!#" >Sports &amp; Outdoors</a></li>
                                                                                                                <li><a href="!#" >Bath &amp; Body</a></li>
                                                                                                                <li><a href="!#" >Gadgets &amp; Auto Parts</a></li>
                                                                                                            </ul>
                                                                                                        </li>
                                                                                                    </ul>
                                                                                                </div>
                                                                                            </div>
                                                                                            <div class="col-md-4 static-menu">
                                                                                                <div class="menu">
                                                                                                    <ul>
                                                                                                        <li>
                                                                                                            <a href="!#"  class="main-menu">Bags, Holiday Supplies</a>
                                                                                                            <ul>
                                                                                                                <li><a href="!#" onclick="window.location = '18_46.html';">Battereries &amp; Chargers</a></li>
                                                                                                                <li><a href="!#" onclick="window.location = '24_64.html';">Bath &amp; Body</a></li>
                                                                                                                <li><a href="!#" onclick="window.location = '18_45.html';">Headphones, Headsets</a></li>
                                                                                                                <li><a href="!#" onclick="window.location = '18_30.html';">Home Audio</a></li>
                                                                                                            </ul>
                                                                                                        </li>
                                                                                                    </ul>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </li>
                                                                    <li class="item-vertical">
                                                                        <p class="close-menu"></p>
                                                                        <a href="!#" class="clearfix">
                                                                            <img src="image/catalog/menu/icons/ico1.png" alt="icon" />
                                                                            <span>Fashion & Accessories</span>
                                                                            
                                                                        </a>
                                                                    </li>
                                                                    <li class="item-vertical  style1 with-sub-menu hover">
                                                                        <p class="close-menu"></p>
                                                                        <a href="!#" class="clearfix">
                                                                            <span class="label"></span>
                                                                            <img src="image/catalog/menu/icons/ico9.png" alt="icon" />
                                                                            <span>Electronic</span>
                                                                            
                                                                            <b class="caret"></b>
                                                                        </a>
                                                                        <div class="sub-menu" data-subwidth="40" >
                                                                            <div class="content">
                                                                                <div class="row">
                                                                                    <div class="col-md-6">
                                                                                        <div class="row">
                                                                                            <div class="col-md-12 static-menu">
                                                                                                <div class="menu">
                                                                                                    <ul>
                                                                                                        <li><a href="!#" class="main-menu">Smartphone</a>
                                                                                                            <ul>
                                                                                                                <li><a href="!#">Esdipiscing</a>
                                                                                                                </li>
                                                                                                                <li><a href="!#">Scanners</a>
                                                                                                                </li>
                                                                                                                <li><a href="!#">Apple</a>
                                                                                                                </li>
                                                                                                                <li><a href="!#">Dell</a>
                                                                                                                </li>
                                                                                                                <li><a href="!#">Scanners</a>
                                                                                                                </li>
                                                                                                            </ul>
                                                                                                        </li>
                                                                                                        <li><a href="!#" class="main-menu">Electronics</a>
                                                                                                            <ul>
                                                                                                                <li><a href="!#">Asdipiscing</a>
                                                                                                                </li>
                                                                                                                <li><a href="!#">Diam sit</a>
                                                                                                                </li>
                                                                                                                <li><a href="!#">Labore et</a>
                                                                                                                </li>
                                                                                                                <li><a href="!#">Monitors</a>
                                                                                                                </li>
                                                                                                            </ul>
                                                                                                        </li>
                                                                                                    </ul>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div class="col-md-6">
                                                                                        <div class="row banner">
                                                                                            <a href="!#">
                                                                                                <img src="image/catalog/menu/megabanner/vbanner1.jpg" alt="banner1" />
                                                                                                </a>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </li>
                                                                        <li class="item-vertical with-sub-menu hover">
                                                                            <p class="close-menu"></p>
                                                                            <a href="!#" class="clearfix">
                                                                                <img src="image/catalog/menu/icons/ico7.png" alt="icon" />
                                                                                <span>Health &amp; Beauty</span>
                                                                                <b class="caret"></b>
                                                                            </a>
                                                                            <div class="sub-menu" data-subwidth="60" >
                                                                                <div class="content" >
                                                                                    <div class="row">
                                                                                        <div class="col-md-12">
                                                                                            <div class="row">
                                                                                                <div class="col-md-4 static-menu">
                                                                                                    <div class="menu">
                                                                                                        <ul>
                                                                                                            <li>
                                                                                                                <a href="!#" class="main-menu">Car Alarms and Security</a>
                                                                                                                <ul>
                                                                                                                    <li><a href="!#" >Car Audio &amp; Speakers</a></li>
                                                                                                                    <li><a href="!#" >Gadgets &amp; Auto Parts</a></li>
                                                                                                                    <li><a href="!#" >Gadgets &amp; Auto Parts</a></li>
                                                                                                                    <li><a href="!#" >Headphones, Headsets</a></li>
                                                                                                                </ul>
                                                                                                            </li>
                                                                                                            <li>
                                                                                                                <a href="24.html" onclick="window.location = '24.html';" class="main-menu">Health &amp; Beauty</a>
                                                                                                                <ul>
                                                                                                                    <li>
                                                                                                                        <a href="!#" >Home Audio</a>
                                                                                                                    </li>
                                                                                                                    <li>
                                                                                                                        <a href="!#" >Helicopters &amp; Parts</a>
                                                                                                                    </li>
                                                                                                                    <li>
                                                                                                                        <a href="!#" >Outdoor &amp; Traveling</a>
                                                                                                                    </li>
                                                                                                                    <li>
                                                                                                                        <a href="!#">Toys &amp; Hobbies</a>
                                                                                                                    </li>
                                                                                                                </ul>
                                                                                                            </li>
                                                                                                        </ul>
                                                                                                    </div>
                                                                                                </div>
                                                                                                <div class="col-md-4 static-menu">
                                                                                                    <div class="menu">
                                                                                                        <ul>
                                                                                                            <li>
                                                                                                                <a href="!#"  class="main-menu">Electronics</a>
                                                                                                                <ul>
                                                                                                                    <li>
                                                                                                                        <a href="!#">Earings</a>
                                                                                                                    </li>
                                                                                                                    <li>
                                                                                                                        <a href="!#" >Salon &amp; Spa Equipment</a>
                                                                                                                    </li>
                                                                                                                    <li>
                                                                                                                        <a href="!#" >Shaving &amp; Hair Removal</a>
                                                                                                                    </li>
                                                                                                                    <li>
                                                                                                                        <a href="!#">Smartphone &amp; Tablets</a>
                                                                                                                    </li>
                                                                                                                </ul>
                                                                                                            </li>
                                                                                                            <li>
                                                                                                                <a href="!#"  class="main-menu">Sports &amp; Outdoors</a>
                                                                                                                <ul>
                                                                                                                    <li>
                                                                                                                        <a href="!#" >Flashlights &amp; Lamps</a>
                                                                                                                    </li>
                                                                                                                    <li>
                                                                                                                        <a href="!#" >Fragrances</a>
                                                                                                                    </li>
                                                                                                                    <li>
                                                                                                                        <a href="!#" >Fishing</a>
                                                                                                                    </li>
                                                                                                                    <li>
                                                                                                                        <a href="!#" >FPV System &amp; Parts</a>
                                                                                                                    </li>
                                                                                                                </ul>
                                                                                                            </li>
                                                                                                        </ul>
                                                                                                    </div>
                                                                                                </div>
                                                                                                <div class="col-md-4 static-menu">
                                                                                                    <div class="menu">
                                                                                                        <ul>
                                                                                                            <li>
                                                                                                                <a href="!#" class="main-menu">More Car Accessories</a>
                                                                                                                <ul>
                                                                                                                    <li>
                                                                                                                        <a href="!#" >Lighter &amp; Cigar Supplies</a>
                                                                                                                    </li>
                                                                                                                    <li>
                                                                                                                        <a href="!#" >Mp3 Players &amp; Accessories</a>
                                                                                                                    </li>
                                                                                                                    <li>
                                                                                                                        <a href="!#" >Men Watches</a>
                                                                                                                    </li>
                                                                                                                    <li>
                                                                                                                        <a href="!#" >Mobile Accessories</a>
                                                                                                                    </li>
                                                                                                                </ul>
                                                                                                            </li>
                                                                                                            <li>
                                                                                                                <a href="!#" class="main-menu">Gadgets &amp; Auto Parts</a>
                                                                                                                <ul>
                                                                                                                    <li>
                                                                                                                        <a href="!#" >Gift &amp; Lifestyle Gadgets</a>
                                                                                                                    </li>
                                                                                                                    <li>
                                                                                                                        <a href="!#" >Gift for Man</a>
                                                                                                                    </li>
                                                                                                                    <li>
                                                                                                                        <a href="!#" >Gift for Woman</a>
                                                                                                                    </li>
                                                                                                                    <li>
                                                                                                                        <a href="!#" >Gift for Woman</a>
                                                                                                                    </li>
                                                                                                                </ul>
                                                                                                            </li>
                                                                                                        </ul>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </li>
                                                                        <li class="item-vertical css-menu with-sub-menu hover">
                                                                            <p class="close-menu"></p>
                                                                            <a href="!#" class="clearfix">
                                                                                
                                                                                <img src="image/catalog/menu/icons/ico6.png" alt="icon" />
                                                                                <span>Smartphone &amp; Tablets</span>
                                                                                <b class="caret"></b>
                                                                            </a>
                                                                            <div class="sub-menu" data-subwidth="20">
                                                                                <div class="content" >
                                                                                    <div class="row">
                                                                                        <div class="col-sm-12">
                                                                                            <div class="row">
                                                                                                <div class="col-sm-12 hover-menu">
                                                                                                    <div class="menu">
                                                                                                        <ul>
                                                                                                            <li>
                                                                                                                <a href="!#" class="main-menu">Headphones, Headsets</a>
                                                                                                            </li>
                                                                                                            <li>
                                                                                                                <a href="!#" class="main-menu">Home Audio</a>
                                                                                                            </li>
                                                                                                            <li>
                                                                                                                <a href="!#" class="main-menu">Health &amp; Beauty</a>
                                                                                                            </li>
                                                                                                            <li>
                                                                                                                <a href="!#" class="main-menu">Helicopters &amp; Parts</a>
                                                                                                            </li>
                                                                                                            <li>
                                                                                                                <a href="!#" class="main-menu">Helicopters &amp; Parts</a>
                                                                                                            </li>
                                                                                                        </ul>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </li>
                                                                        <li class="item-vertical">
                                                                            <p class="close-menu"></p>
                                                                            <a href="!#" class="clearfix">
                                                                                <img src="image/catalog/menu/icons/ico5.png" alt="icon" />
                                                                                <span>Health & Beauty</span>
                                                                                
                                                                            </a>
                                                                        </li>
                                                                        <li class="item-vertical">
                                                                            <p class="close-menu"></p>
                                                                            <a href="!#" class="clearfix">
                                                                                <img src="image/catalog/menu/icons/ico4.png" alt="icon" />
                                                                                <span>Bathroom</span>
                                                                            </a>
                                                                        </li>
                                                                        <li class="item-vertical">
                                                                            <p class="close-menu"></p>
                                                                            <a href="!#" class="clearfix">
                                                                                <img src="image/catalog/menu/icons/ico3.png" alt="icon" />
                                                                                <span>Metallurgy</span>
                                                                            </a>
                                                                        </li>
                                                                        <li class="item-vertical" >
                                                                            <p class="close-menu"></p>
                                                                            <a href="!#" class="clearfix">
                                                                                <img src="image/catalog/menu/icons/ico2.png" alt="icon" />
                                                                                <span>Bedroom</span>
                                                                            </a>
                                                                        </li>
                                                                        <li class="item-vertical" >
                                                                            <p class="close-menu"></p>
                                                                            
                                                                            <a href="!#" class="clearfix">
                                                                                <img src="image/catalog/menu/icons/ico1.png" alt="icon" />
                                                                                <span>Health &amp; Beauty</span>
                                                                            </a>
                                                                        </li>
                                                                        <li class="item-vertical" style={{display: 'none'}}>
                                                                            <p class="close-menu"></p>
                                                                            <a href="!#" class="clearfix">
                                                                                <img src="image/catalog/menu/icons/ico11.png" alt="icon" />
                                                                                <span>Toys &amp; Hobbies </span>
                                                                            </a>
                                                                        </li>
                                                                        <li class="item-vertical" style={{display: 'none'}}>
                                                                            <p class="close-menu"></p>
                                                                            <a href="!#" class="clearfix">
                                                                                <img src="image/catalog/menu/icons/ico12.png" alt="icon" />
                                                                                <span>Jewelry &amp; Watches</span>
                                                                            </a>
                                                                        </li>
                                                                        <li class="item-vertical" style={{display: 'none'}}>
                                                                            <p class="close-menu"></p>
                                                                            <a href="!#" class="clearfix">
                                                                                <img src="image/catalog/menu/icons/ico9.png" alt="icon" />
                                                                                <span>Home &amp; Lights</span>
                                                                            </a>
                                                                        </li>
                                                                        <li class="item-vertical" style={{display: 'none'}}>
                                                                            <p class="close-menu"></p>
                                                                            <a href="!#" class="clearfix">
                                                                                <img src="image/catalog/menu/icons/ico6.png" alt="icon" />
                                                                                <span>Metallurgy</span>
                                                                            </a>
                                                                        </li>
                                                                    
                                                                        <li class="loadmore">
                                                                            <i class="fa fa-plus-square-o"></i>
                                                                            <span class="more-view">More Categories</span>
                                                                        </li>
                                                                        
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </nav>
                                        </div>
                                    </div>

                                </div>
                                
                                {/* Search */}
                                <div class="bottom2 col-lg-7 col-md-6 col-sm-6">
                                    <div class="search-header-w">
                                        <div class="icon-search hidden-lg hidden-md hidden-sm"><i class="fa fa-search"></i></div>                                
                                        
                                        <div id="sosearchpro" class="sosearchpro-wrapper so-search ">
                                            <form method="GET" action="#">
                                                <div id="search0" class="search input-group form-group">
                                                    <div class="select_category filter_type  icon-select hidden-sm hidden-xs">
                                                        <select class="no-border" name="category_id">
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

                                                    <input class="autosearch-input form-control" type="text" value="" size="50" autocomplete="off" placeholder="Keyword here..." name="search" />
                                                    <span class="input-group-btn">
                                                    <button type="submit" class="button-search btn btn-primary" name="submit_search"><i class="fa fa-search"></i></button>
                                                    </span>
                                                </div>
                                                <input type="hidden" name="route" value="product/search" />
                                            </form>
                                        </div>
                                    </div>  
                                </div>

                                <div class="bottom3 col-lg-3 col-md-3 col-sm-3">
                                    

                                    <div class="shopping_cart">
                                        <div id="cart" class="btn-shopping-cart">

                                            <a data-loading-text="Loading... " href="!#" class="btn-group top_cart dropdown-toggle" data-toggle="dropdown" aria-expanded="true">
                                                <div class="shopcart">
                                                    <span class="icon-c">
                                            <i class="fa fa-shopping-bag"></i>
                                        </span>
                                                    <div class="shopcart-inner">
                                                        <p class="text-shopping-cart">

                                                            My cart
                                                        </p>

                                                        <span class="total-shopping-cart cart-total-full">
                                            <span class="items_cart">0</span><span class="items_cart2"> item(s)</span><span class="items_carts"> - $0.00 </span>
                                                        </span>
                                                    </div>
                                                </div>
                                            </a>

                                            <ul class="dropdown-menu pull-right shoppingcart-box">
                                                <li>
                                                    <p class="text-center empty">Your shopping cart is empty!</p>
                                                </li>
                                            </ul>
                                        </div>

                                    </div>

                                    <ul class="wishlist-comp hidden-md hidden-sm hidden-xs">
                                        <li class="compare hidden-xs"><NavLink to="/compare" class="top-link-compare" title="Compare "><i class="fa fa-refresh"></i></NavLink>
                                        </li>
                                        <li class="wishlist hidden-xs"><NavLink to="wishlist" id="wishlist-total" class="top-link-wishlist" title="Wish List (0) "><i class="fa fa-heart"></i></NavLink>
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
