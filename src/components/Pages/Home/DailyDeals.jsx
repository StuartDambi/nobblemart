import React from 'react'


class DailyDeals extends React.Component {
    render() {
        return (
            <div className="module deals-layout1">
                <h3 className="modtitle"><span>Daily Deals</span></h3>
                <div className="modcontent">
                    <div id="so_deal_1" className="so-deal style2">
                        <div className="extraslider-inner products-list yt-content-slider" data-rtl="yes" data-autoplay="no" data-autoheight="no" data-delay="4" data-speed="0.6" data-margin="30" data-items_column0="2" data-items_column1="1" data-items_column2="1"  data-items_column3="1" data-items_column4="1" data-arrows="yes" data-pagination="yes" data-lazyload="yes" data-loop="no" data-hoverpause="yes">
                            <div className="item">
                                <div className="product-thumb">
                                    <div className="row">
                                        <div className="inner">
                                            <div className="item-left col-lg-6 col-md-5 col-sm-5 col-xs-12">
                                                <div className="image">
                                                    <span className="label-product label-product-sale">-22%</span>
                                                    <a href="!#" target="_self" title="product">
                                                        <img src={process.env.PUBLIC_URL+'image/catalog/demo/product/320/1.jpg'} alt="Yutculpa ullamco" class="img-responsive"/>
                                                    </a>
                                                    <div className="button-group so-quickview">
                                                        <button className="btn-button addToCart" title="Add to Cart" type="button" onclick="cart.add('69');">
                                                            <i className="fa fa-shopping-basket"></i> <span>Add to Cart</span>
                                                        </button>
                                                        <button className="btn-button wishlist" title="Add to Wish List" onclick="wishlist.add('69');">
                                                            <i class="fa fa-heart"></i><span>Add to Wish List</span>
                                                        </button>
                                                        <button className="btn-button compare" type="button" title="Compare this Product" onclick="compare.add('69');">
                                                            <i class="fa fa-refresh"></i><span>Compare this Product</span>
                                                        </button>
                                                        <a href="!#" className="iframe-link btn-button quickview quickview_handler visible-lg" title="Quick view" data-fancybox-type="iframe">
                                                            <i class="fa fa-eye"></i><span>Quick view</span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="item-right col-lg-6 col-md-7 col-sm-7 col-xs-12">
                                                <div className="caption">
                                                    <h4><a href="!#" target="_self" title="Yutculpa ullamco">Yutculpa ullamco</a></h4>
                                                    <p className="price">
                                                        <span className="price-new">$60.00</span>
                                                        <span className="price-old">$80.00</span>
                                                    </p>
                                                    <p className="desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore..</p>
                                                    <div className="item-available">
                                                        <div className="row">
                                                            <p class="col-xs-6 a1">Available: <b>98</b></p>
                                                            <p class="col-xs-6 a2">Sold: <b>32</b></p>
                                                        </div>
                                                        <div className="available">
                                                            <span class="color_width" data-title="75%" data-toggle="tooltip" title="75%" style={{width: '75%'}}></span>
                                                        </div>
                                                    </div>
                                                    {/* Countdown box */}
                                                    <div className="item-time-w">
                                                        <div class="time-title"><span>Hurry Up!</span> Offer ends in:</div>
                                                        <div className="item-time">
                                                            <div className="item-timer">
                                                                <div class="defaultCountdown-30"></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="item">
                                <div className="product-thumb">
                                    <div className="row">
                                        <div className="inner">
                                            <div className="item-left col-lg-6 col-md-5 col-sm-5 col-xs-12">
                                                <div className="image">
                                                    <span className="label-product label-product-sale">-10%</span>
                                                    <a href="!#" target="_self" title="Xancetta bresao">
                                                        <img src={process.env.PUBLIC_URL+'image/catalog/demo/product/320/2.jpg'}alt="Xancetta bresao" class="img-responsive"/>
                                                    </a>
                                                    <div className="button-group so-quickview">
                                                        <button class="btn-button addToCart" title="Add to Cart" type="button" onclick="cart.add('75');"><i class="fa fa-shopping-basket"></i>  <span>Add to Cart</span>
                                                        </button>
                                                        <button class="btn-button wishlist" type="button" title="Add to Wish List" onclick="wishlist.add('75');"><i class="fa fa-heart"></i><span>Add to Wish List</span>
                                                        </button>
                                                        <button class="btn-button compare" type="button" title="Compare this Product" onclick="compare.add('75');"><i class="fa fa-refresh"></i><span>Compare this Product</span>
                                                        </button>                                                      
                                                        <a class="iframe-link btn-button quickview quickview_handler visible-lg" href="quickview.html" title="Quick view" data-fancybox-type="iframe"><i class="fa fa-eye"></i><span>Quick view</span></a>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="item-right col-lg-6 col-md-7 col-sm-7 col-xs-12">
                                                <div className="caption">
                                                    <h4><a href="!#" target="_self" title="Xancetta bresao">Xancetta bresao</a></h4>
                                                    <p className="price">
                                                        <span className="price-new">$80.00</span>
                                                        <span className="price-old">$90.00</span>
                                                    </p>
                                                    <p className="desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore..</p>
                                                    <div className="item-available">
                                                        <div className="row">
                                                            <p class="col-xs-6 a1">Available: <b>555</b></p>
                                                            <p class="col-xs-6 a2">Sold: <b>0</b></p>
                                                        </div>
                                                        <div className="available">
                                                            <span class="color_width" data-title="0%" data-toggle="tooltip" title="75%" style={{width: '0%'}}></span>
                                                        </div>
                                                    </div>

                                                    {/* Countdown box */}
                                                    <div class="item-time-w">
                                                        <div class="time-title"><span>Hurry Up!</span> Offer ends in:</div>
                                                        <div class="item-time">
                                                            <div class="item-timer">
                                                                <div class="defaultCountdown-30"></div>
                                                            </div>
                                                        </div>                                                                                                     
                                                    </div> 
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="item">
                                <div className="product-thumb">
                                    <div className="row">
                                        <div className="inner">
                                            <div className="item-left col-lg-6 col-md-5 col-sm-5 col-xs-12">
                                                <div className="image">
                                                    <span className="label-product label-product-sale">-10%</span>
                                                    <a href="!#" target="_self" title="Xancetta bresao">
                                                        <img src={process.env.PUBLIC_URL+'image/catalog/demo/product/320/3.jpg'}alt="Xancetta bresao" class="img-responsive"/>
                                                    </a>
                                                    <div className="button-group so-quickview">
                                                        <button class="btn-button addToCart" title="Add to Cart" type="button" onclick="cart.add('75');"><i class="fa fa-shopping-basket"></i>  <span>Add to Cart</span>
                                                        </button>
                                                        <button class="btn-button wishlist" type="button" title="Add to Wish List" onclick="wishlist.add('75');"><i class="fa fa-heart"></i><span>Add to Wish List</span>
                                                        </button>
                                                        <button class="btn-button compare" type="button" title="Compare this Product" onclick="compare.add('75');"><i class="fa fa-refresh"></i><span>Compare this Product</span>
                                                        </button>                                                      
                                                        <a class="iframe-link btn-button quickview quickview_handler visible-lg" href="quickview.html" title="Quick view" data-fancybox-type="iframe"><i class="fa fa-eye"></i><span>Quick view</span></a>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="item-right col-lg-6 col-md-7 col-sm-7 col-xs-12">
                                                <div className="caption">
                                                    <h4><a href="!#" target="_self" title="Xancetta bresao">Xancetta bresao</a></h4>
                                                    <p className="price">
                                                        <span className="price-new">$80.00</span>
                                                        <span className="price-old">$90.00</span>
                                                    </p>
                                                    <p className="desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore..</p>
                                                    <div className="item-available">
                                                        <div className="row">
                                                            <p class="col-xs-6 a1">Available: <b>555</b></p>
                                                            <p class="col-xs-6 a2">Sold: <b>0</b></p>
                                                        </div>
                                                        <div className="available">
                                                            <span class="color_width" data-title="0%" data-toggle="tooltip" title="75%" style={{width: '0%'}}></span>
                                                        </div>
                                                    </div>

                                                    {/* Countdown box */}
                                                    <div class="item-time-w">
                                                        <div class="time-title"><span>Hurry Up!</span> Offer ends in:</div>
                                                        <div class="item-time">
                                                            <div class="item-timer">
                                                                <div class="defaultCountdown-30"></div>
                                                            </div>
                                                        </div>                                                                                                     
                                                    </div> 
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="item">
                                <div className="product-thumb">
                                    <div className="row">
                                        <div className="inner">
                                            <div className="item-left col-lg-6 col-md-5 col-sm-5 col-xs-12">
                                                <div className="image">
                                                    <span className="label-product label-product-sale">-10%</span>
                                                    <a href="!#" target="_self" title="Xancetta bresao">
                                                        <img src={process.env.PUBLIC_URL+'image/catalog/demo/product/320/4.jpg'}alt="Xancetta bresao" class="img-responsive"/>
                                                    </a>
                                                    <div className="button-group so-quickview">
                                                        <button class="btn-button addToCart" title="Add to Cart" type="button" onclick="cart.add('75');"><i class="fa fa-shopping-basket"></i>  <span>Add to Cart</span>
                                                        </button>
                                                        <button class="btn-button wishlist" type="button" title="Add to Wish List" onclick="wishlist.add('75');"><i class="fa fa-heart"></i><span>Add to Wish List</span>
                                                        </button>
                                                        <button class="btn-button compare" type="button" title="Compare this Product" onclick="compare.add('75');"><i class="fa fa-refresh"></i><span>Compare this Product</span>
                                                        </button>                                                      
                                                        <a class="iframe-link btn-button quickview quickview_handler visible-lg" href="quickview.html" title="Quick view" data-fancybox-type="iframe"><i class="fa fa-eye"></i><span>Quick view</span></a>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="item-right col-lg-6 col-md-7 col-sm-7 col-xs-12">
                                                <div className="caption">
                                                    <h4><a href="!#" target="_self" title="Xancetta bresao">Xancetta bresao</a></h4>
                                                    <p className="price">
                                                        <span className="price-new">$80.00</span>
                                                        <span className="price-old">$90.00</span>
                                                    </p>
                                                    <p className="desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore..</p>
                                                    <div className="item-available">
                                                        <div className="row">
                                                            <p class="col-xs-6 a1">Available: <b>555</b></p>
                                                            <p class="col-xs-6 a2">Sold: <b>0</b></p>
                                                        </div>
                                                        <div className="available">
                                                            <span class="color_width" data-title="0%" data-toggle="tooltip" title="75%" style={{width: '0%'}}></span>
                                                        </div>
                                                    </div>

                                                    {/* Countdown box */}
                                                    <div class="item-time-w">
                                                        <div class="time-title"><span>Hurry Up!</span> Offer ends in:</div>
                                                        <div class="item-time">
                                                            <div class="item-timer">
                                                                <div class="defaultCountdown-30"></div>
                                                            </div>
                                                        </div>                                                                                                     
                                                    </div> 
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default DailyDeals