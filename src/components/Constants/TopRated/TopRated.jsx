import React from 'react'

export default function TopRated() {
    return (
        <div className="module product-simple">
            <h3 className="modtitle">
                <span>Top rated</span>
            </h3>
            <div className="modcontent">
                <div  id="so_extra_slider_2" className="extraslider">
                    <div className="yt-content-slider extraslider-inner" data-rtl="yes" data-pagination="yes" data-autoplay="no" data-delay="4" data-speed="0.6" data-margin="0" data-items_column0="1" data-items_column1="1" data-items_column2="1" data-items_column3="1" data-items_column4="1" data-arrows="no"
                    data-lazyload="yes" data-loop="no" data-buttonpage="top">
                        <div className="item">

                            <div class="product-layout item-inner style1 ">
                                <div class="item-image">
                                    <div class="item-img-info">
                                        <a href="!#" target="_self" title="Mandouille short ">
                                            <img src={process.env.PUBLIC_URL+'image/catalog/demo/product/80/8.jpg'} alt="Mandouille short" />
                                            </a>
                                    </div>
                                    
                                </div>
                                <div class="item-info">
                                    <div class="item-title">
                                        <a href="!#" target="_self" title="Mandouille short">Mandouille short </a>
                                    </div>
                                    <div class="rating">
                                        <span class="fa fa-stack"><i class="fa fa-star fa-stack-2x"></i></span>
                                        <span class="fa fa-stack"><i class="fa fa-star fa-stack-2x"></i></span>
                                        <span class="fa fa-stack"><i class="fa fa-star fa-stack-2x"></i></span>
                                        <span class="fa fa-stack"><i class="fa fa-star fa-stack-2x"></i></span>
                                        <span class="fa fa-stack"><i class="fa fa-star fa-stack-2x"></i></span>
                                    </div>
                                    <div class="content_price price">
                                        <span class="price-new product-price">$55.00 </span>&nbsp;&nbsp;

                                        <span class="price-old">$76.00 </span>&nbsp;

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