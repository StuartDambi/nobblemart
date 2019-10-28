import React from 'react'

class TrendingItems extends React.Component {
    render() {
        return (
            <div class="module listingtab-layout1">
                    <h3 class="modtitle"><span>Trending items</span></h3>
                    <div id="so_listing_tabs_1" class="so-listing-tabs first-load">
                        <div class="loadeding"></div>
                        <div class="ltabs-wrap">
                            <div class="ltabs-tabs-container" data-delay="300" data-duration="600" data-effect="starwars" data-ajaxurl="" data-type_source="0" data-lg="5" data-md="3" data-sm="2" data-xs="1" data-margin="30">
                             
                                <div class="ltabs-tabs-wrap"> 
                                <span class="ltabs-tab-selected">Bathroom</span> <span class="ltabs-tab-arrow">▼</span>
                                    <div class="item-sub-cat">
                                        <ul class="ltabs-tabs cf">
                                            <li class="ltabs-tab tab-sel" data-category-id="20" data-active-content=".items-category-20"> <span class="ltabs-tab-label">Bedroom</span> </li>
                                            <li class="ltabs-tab " data-category-id="18" data-active-content=".items-category-18"> <span class="ltabs-tab-label">Decor</span> </li>
                                            <li class="ltabs-tab " data-category-id="25" data-active-content=".items-category-25"> <span class="ltabs-tab-label">Furniture</span> </li>
                                        </ul>
                                    </div>
                                </div>
                             
                            </div>
                        
                            <div class="ltabs-items-container products-list grid">
                               
                                <div class="ltabs-items ltabs-items-selected items-category-20" data-total="16">
                                    <div class="ltabs-items-inner ltabs-slider">
                                        
                                        <div class="ltabs-item">
                                            <div class="item-inner product-layout transition product-grid">
                                                <div class="product-item-container">
                                                    <div class="left-block">
                                                        <div class="product-image-container second_img">
                                                            <a href="product.html" target="_self" title="Pastrami bacon">
                                                                <img src={process.env.PUBLIC_URL+'image/catalog/demo/product/270/1.jpg'} class="img-1 img-responsive" alt="Pastrami bacon" />
                                                                <img src={process.env.PUBLIC_URL+'image/catalog/demo/product/270/1.jpg'} class="img-2 img-responsive" alt="Pastrami bacon" />
                                                         </a>
                                                        </div>
                                                        
                                                        <div class="button-group so-quickview cartinfo--left">
                                                            <button type="button" class="addToCart btn-button" title="Add to cart" onclick="cart.add('60 ');">  <i class="fa fa-shopping-basket"></i>
                                                                <span>Add to cart </span>   
                                                            </button>
                                                            <button type="button" class="wishlist btn-button" title="Add to Wish List" onclick="wishlist.add('60');"><i class="fa fa-heart"></i><span>Add to Wish List</span>
                                                            </button>
                                                            <button type="button" class="compare btn-button" title="Compare this Product " onclick="compare.add('60');"><i class="fa fa-refresh"></i><span>Compare this Product</span>
                                                            </button>                                                     
                                                            <a class="iframe-link btn-button quickview quickview_handler visible-lg" href="quickview.html" title="Quick view" data-fancybox-type="iframe"><i class="fa fa-eye"></i><span>Quick view</span></a>                                                        
                                                           
                                                        </div>
                                                    </div>
                                                    <div class="right-block">
                                                        <div class="caption">
                                                            <div class="rating">    <span class="fa fa-stack"><i class="fa fa-star fa-stack-2x"></i></span>
                                                                <span class="fa fa-stack"><i class="fa fa-star fa-stack-2x"></i></span>
                                                                <span class="fa fa-stack"><i class="fa fa-star fa-stack-2x"></i></span>
                                                                <span class="fa fa-stack"><i class="fa fa-star fa-stack-2x"></i></span>
                                                                <span class="fa fa-stack"><i class="fa fa-star-o fa-stack-2x"></i></span>
                                                            </div>
                                                            <h4><a href="product.html" title="Pastrami bacon" target="_self">Pastrami bacon</a></h4>
                                                            <div class="price">$42.00</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="item-inner product-layout transition product-grid">
                                                <div class="product-item-container">
                                                    <div class="left-block">
                                                        <div class="product-image-container second_img">
                                                            <a href="product.html" target="_self" title="Chicken swinesha">
                                                                <img src={process.env.PUBLIC_URL+'image/catalog/demo/product/270/2.jpg'} class="img-1 img-responsive" alt="noble" />
                                                                <img src={process.env.PUBLIC_URL+'image/catalog/demo/product/270/11.jpg'} class="img-2 img-responsive" alt="noble" />
                                                            </a>
                                                        </div>
                                                        <div class="box-label"> <span class="label-product label-sale"> -16% </span></div>
                                                        <div class="button-group so-quickview cartinfo--left">
                                                            <button type="button" class="addToCart btn-button" title="Add to cart" onclick="cart.add('60 ');">  <i class="fa fa-shopping-basket"></i>
                                                                <span>Add to cart </span>   
                                                            </button>
                                                            <button type="button" class="wishlist btn-button" title="Add to Wish List" onclick="wishlist.add('60');"><i class="fa fa-heart"></i><span>Add to Wish List</span>
                                                            </button>
                                                            <button type="button" class="compare btn-button" title="Compare this Product " onclick="compare.add('60');"><i class="fa fa-refresh"></i><span>Compare this Product</span>
                                                            </button>                                                    
                                                            <a class="iframe-link btn-button quickview quickview_handler visible-lg" href="quickview.html" title="Quick view" data-fancybox-type="iframe"><i class="fa fa-eye"></i><span>Quick view</span></a>                                                        
                                                         
                                                        </div>
                                                    </div>
                                                    <div class="right-block">
                                                        <div class="caption">
                                                            <div class="rating">    <span class="fa fa-stack"><i class="fa fa-star fa-stack-2x"></i></span>
                                                                <span class="fa fa-stack"><i class="fa fa-star fa-stack-2x"></i></span>
                                                                <span class="fa fa-stack"><i class="fa fa-star fa-stack-2x"></i></span>
                                                                <span class="fa fa-stack"><i class="fa fa-star fa-stack-2x"></i></span>
                                                                <span class="fa fa-stack"><i class="fa fa-star fa-stack-2x"></i></span>
                                                            </div>
                                                            <h4><a href="product.html" title="Chicken swinesha" target="_self">Chicken swinesha</a></h4>
                                                            <div class="price"> <span class="price-new">$46.00</span>
                                                                <span class="price-old">$55.00</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="ltabs-item">
                                            <div class="item-inner product-layout transition product-grid">
                                                <div class="product-item-container">
                                                    <div class="left-block">
                                                        <div class="product-image-container second_img">
                                                            <a href="product.html" target="_self" title="Kielbasa hamburg">
                                                                <img src={process.env.PUBLIC_URL+'image/catalog/demo/product/270/3.jpg'} class="img-1 img-responsive" alt="Pastrami bacon" />
                                                                <img src={process.env.PUBLIC_URL+'image/catalog/demo/product/270/10.jpg'} class="img-2 img-responsive" alt="Pastrami bacon" />
                                                            </a>
                                                        </div>
                                                        <div class="box-label"> <span class="label-product label-new"> New </span></div>
                                                        <div class="button-group so-quickview cartinfo--left">
                                                            <button type="button" class="addToCart btn-button" title="Add to cart" onclick="cart.add('60 ');">  <i class="fa fa-shopping-basket"></i>
                                                                <span>Add to cart </span>   
                                                            </button>
                                                            <button type="button" class="wishlist btn-button" title="Add to Wish List" onclick="wishlist.add('60');"><i class="fa fa-heart"></i><span>Add to Wish List</span>
                                                            </button>
                                                            <button type="button" class="compare btn-button" title="Compare this Product " onclick="compare.add('60');"><i class="fa fa-refresh"></i><span>Compare this Product</span>
                                                            </button>                                                    
                                                            <a class="iframe-link btn-button quickview quickview_handler visible-lg" href="quickview.html" title="Quick view" data-fancybox-type="iframe"><i class="fa fa-eye"></i><span>Quick view</span></a>                                                        
                                                            
                                                        </div>
                                                    </div>
                                                    <div class="right-block">
                                                        <div class="caption">
                                                            <div class="rating">
                                                                <span class="fa fa-stack"><i class="fa fa-star fa-stack-2x"></i></span>
                                                                <span class="fa fa-stack"><i class="fa fa-star fa-stack-2x"></i></span>
                                                                <span class="fa fa-stack"><i class="fa fa-star fa-stack-2x"></i></span>
                                                                <span class="fa fa-stack"><i class="fa fa-star fa-stack-2x"></i></span>
                                                                <span class="fa fa-stack"><i class="fa fa-star-o fa-stack-2x"></i></span>
                                                            </div>
                                                            <h4><a href="product.html" title="Kielbasa hamburg" target="_self">Kielbasa hamburg</a></h4>
                                                            <div class="price">$55.00</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="item-inner product-layout transition product-grid">
                                                <div class="product-item-container">
                                                    <div class="left-block">
                                                        <div class="product-image-container second_img">
                                                            <a href="product.html" target="_self" title="Sausage cowbee">
                                                                <img src={process.env.PUBLIC_URL+'image/catalog/demo/product/270/4.jpg'} class="img-1 img-responsive" alt="noble" />
                                                                <img src={process.env.PUBLIC_URL+'image/catalog/demo/product/270/9.jpg'} class="img-2 img-responsive" alt="noble" />
                                                            </a>
                                                        </div>
                                                        
                                                        <div class="button-group so-quickview cartinfo--left">
                                                            <button type="button" class="addToCart btn-button" title="Add to cart" onclick="cart.add('60 ');">  <i class="fa fa-shopping-basket"></i>
                                                                <span>Add to cart </span>   
                                                            </button>
                                                            <button type="button" class="wishlist btn-button" title="Add to Wish List" onclick="wishlist.add('60');"><i class="fa fa-heart"></i><span>Add to Wish List</span>
                                                            </button>
                                                            <button type="button" class="compare btn-button" title="Compare this Product " onclick="compare.add('60');"><i class="fa fa-refresh"></i><span>Compare this Product</span>
                                                            </button>                                                      
                                                            <a class="iframe-link btn-button quickview quickview_handler visible-lg" href="quickview.html" title="Quick view" data-fancybox-type="iframe"><i class="fa fa-eye"></i><span>Quick view</span></a>                                                        
                                                          
                                                        </div>
                                                    </div>
                                                    <div class="right-block">
                                                        <div class="caption">
                                                            <div class="rating">
                                                                <span class="fa fa-stack"><i class="fa fa-star fa-stack-2x"></i></span>
                                                                <span class="fa fa-stack"><i class="fa fa-star fa-stack-2x"></i></span>
                                                                <span class="fa fa-stack"><i class="fa fa-star fa-stack-2x"></i></span>
                                                                <span class="fa fa-stack"><i class="fa fa-star fa-stack-2x"></i></span>
                                                                <span class="fa fa-stack"><i class="fa fa-star fa-stack-2x"></i></span>
                                                            </div>
                                                            <h4><a href="product.html" title="Sausage cowbeea" target="_self">Sausage cowbee</a></h4>
                                                            <div class="price">$60.00</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div class="ltabs-item">
                                            <div class="item-inner product-layout transition product-grid">
                                                <div class="product-item-container">
                                                    <div class="left-block">
                                                        <div class="product-image-container second_img">
                                                            <a href="product.html" target="_self" title="Kielbasa hamburg">
                                                                <img src={process.env.PUBLIC_URL+'image/catalog/demo/product/270/5.jpg'} class="img-1 img-responsive" alt="Pastrami bacon" />
                                                                <img src={process.env.PUBLIC_URL+'image/catalog/demo/product/270/8.jpg'} class="img-2 img-responsive" alt="Pastrami bacon" />
                                                            </a>
                                                        </div>
                                                        
                                                        <div class="button-group so-quickview cartinfo--left">
                                                            <button type="button" class="addToCart btn-button" title="Add to cart" onclick="cart.add('60 ');">  <i class="fa fa-shopping-basket"></i>
                                                                <span>Add to cart </span>   
                                                            </button>
                                                            <button type="button" class="wishlist btn-button" title="Add to Wish List" onclick="wishlist.add('60');"><i class="fa fa-heart"></i><span>Add to Wish List</span>
                                                            </button>
                                                            <button type="button" class="compare btn-button" title="Compare this Product " onclick="compare.add('60');"><i class="fa fa-refresh"></i><span>Compare this Product</span>
                                                            </button>
                                                                                                                
                                                            <a class="iframe-link btn-button quickview quickview_handler visible-lg" href="quickview.html" title="Quick view" data-fancybox-type="iframe"><i class="fa fa-eye"></i><span>Quick view</span></a>                                                        
                                                            
                                                        </div>
                                                    </div>
                                                    <div class="right-block">
                                                        <div class="caption">
                                                            <div class="rating">    <span class="fa fa-stack"><i class="fa fa-star fa-stack-2x"></i></span>
                                                                <span class="fa fa-stack"><i class="fa fa-star fa-stack-2x"></i></span>
                                                                <span class="fa fa-stack"><i class="fa fa-star fa-stack-2x"></i></span>
                                                                <span class="fa fa-stack"><i class="fa fa-star fa-stack-2x"></i></span>
                                                                <span class="fa fa-stack"><i class="fa fa-star-o fa-stack-2x"></i></span>
                                                            </div>
                                                            <h4><a href="product.html" title="Drumstick tempor" target="_self">Drumstick tempor</a></h4>
                                                            <div class="price">$75.00</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="item-inner product-layout transition product-grid">
                                                <div class="product-item-container">
                                                    <div class="left-block">
                                                        <div class="product-image-container second_img">
                                                            <a href="product.html" target="_self" title="Balltip nullaelit">
                                                                <img src={process.env.PUBLIC_URL+'image/catalog/demo/product/270/6.jpg'} class="img-1 img-responsive" alt="noble" />
                                                                <img src={process.env.PUBLIC_URL+'image/catalog/demo/product/270/7.jpg'} class="img-2 img-responsive" alt="noble" />
                                                            </a>
                                                        </div>
                                                        <div class="box-label"> <span class="label-product label-new"> New </span></div>
                                                        <div class="button-group so-quickview cartinfo--left">
                                                            <button type="button" class="addToCart btn-button" title="Add to cart" onclick="cart.add('60 ');">  <i class="fa fa-shopping-basket"></i>
                                                                <span>Add to cart </span>   
                                                            </button>
                                                            <button type="button" class="wishlist btn-button" title="Add to Wish List" onclick="wishlist.add('60');"><i class="fa fa-heart"></i><span>Add to Wish List</span>
                                                            </button>
                                                            <button type="button" class="compare btn-button" title="Compare this Product " onclick="compare.add('60');"><i class="fa fa-refresh"></i><span>Compare this Product</span>
                                                            </button>                                                     
                                                            <a class="iframe-link btn-button quickview quickview_handler visible-lg" href="quickview.html" title="Quick view" data-fancybox-type="iframe"><i class="fa fa-eye"></i><span>Quick view</span></a>                                                        
                                                            
                                                        </div>
                                                    </div>
                                                    <div class="right-block">
                                                        <div class="caption">
                                                            <div class="rating">    <span class="fa fa-stack"><i class="fa fa-star fa-stack-2x"></i></span>
                                                                <span class="fa fa-stack"><i class="fa fa-star fa-stack-2x"></i></span>
                                                                <span class="fa fa-stack"><i class="fa fa-star fa-stack-2x"></i></span>
                                                                <span class="fa fa-stack"><i class="fa fa-star fa-stack-2x"></i></span>
                                                                <span class="fa fa-stack"><i class="fa fa-star fa-stack-2x"></i></span>
                                                            </div>
                                                            <h4><a href="product.html" title="Balltip nullaelit" target="_self">Balltip nullaelit</a></h4>
                                                            <div class="price">$80.00</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div class="ltabs-item">
                                            <div class="item-inner product-layout transition product-grid">
                                                <div class="product-item-container">
                                                    <div class="left-block">
                                                        <div class="product-image-container second_img">
                                                            <a href="product.html" target="_self" title="Ribeye hamhock">
                                                                <img src={process.env.PUBLIC_URL+'image/catalog/demo/product/270/7.jpg'} class="img-1 img-responsive" alt="noble" />
                                                                <img src={process.env.PUBLIC_URL+'image/catalog/demo/product/270/6.jpg'} class="img-2 img-responsive" alt="noble" />
                                                            </a>
                                                        </div>
                                                        <div class="box-label"> <span class="label-product label-sale"> -7% </span></div>
                                                        <div class="button-group so-quickview cartinfo--left">
                                                            <button type="button" class="addToCart btn-button" title="Add to cart" onclick="cart.add('60 ');">  <i class="fa fa-shopping-basket"></i>
                                                                <span>Add to cart </span>   
                                                            </button>
                                                            <button type="button" class="wishlist btn-button" title="Add to Wish List" onclick="wishlist.add('60');"><i class="fa fa-heart"></i><span>Add to Wish List</span>
                                                            </button>
                                                            <button type="button" class="compare btn-button" title="Compare this Product " onclick="compare.add('60');"><i class="fa fa-refresh"></i><span>Compare this Product</span>
                                                            </button>
                                                                                                               
                                                            <a class="iframe-link btn-button quickview quickview_handler visible-lg" href="quickview.html" title="Quick view" data-fancybox-type="iframe"><i class="fa fa-eye"></i><span>Quick view</span></a>                                                        
                                                           
                                                        </div>
                                                    </div>
                                                    <div class="right-block">
                                                        <div class="caption">
                                                            <div class="rating">    <span class="fa fa-stack"><i class="fa fa-star fa-stack-2x"></i></span>
                                                                <span class="fa fa-stack"><i class="fa fa-star fa-stack-2x"></i></span>
                                                                <span class="fa fa-stack"><i class="fa fa-star fa-stack-2x"></i></span>
                                                                <span class="fa fa-stack"><i class="fa fa-star fa-stack-2x"></i></span>
                                                                <span class="fa fa-stack"><i class="fa fa-star fa-stack-2x"></i></span>
                                                            </div>
                                                            <h4><a href="product.html" title="Ribeye hamhock" target="_self">Ribeye hamhock</a></h4>
                                                            <div class="price"> <span class="price-new">$65.00</span>
                                                                <span class="price-old">$70.00</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="item-inner product-layout transition product-grid">
                                                <div class="product-item-container">
                                                    <div class="left-block">
                                                        <div class="product-image-container second_img">
                                                            <a href="product.html" target="_self" title="Wamboudin ribeye">
                                                                <img src={process.env.PUBLIC_URL+'image/catalog/demo/product/270/8.jpg'} class="img-1 img-responsive" alt="noble" />
                                                                <img src={process.env.PUBLIC_URL+'image/catalog/demo/product/270/5.jpg'} class="img-2 img-responsive" alt="noble" />
                                                            </a>
                                                        </div>
                                                        
                                                        <div class="button-group so-quickview cartinfo--left">
                                                            <button type="button" class="addToCart btn-button" title="Add to cart" onclick="cart.add('60 ');">  <i class="fa fa-shopping-basket"></i>
                                                                <span>Add to cart </span>   
                                                            </button>
                                                            <button type="button" class="wishlist btn-button" title="Add to Wish List" onclick="wishlist.add('60');"><i class="fa fa-heart"></i><span>Add to Wish List</span>
                                                            </button>
                                                            <button type="button" class="compare btn-button" title="Compare this Product " onclick="compare.add('60');"><i class="fa fa-refresh"></i><span>Compare this Product</span>
                                                            </button>
                                                                                                                
                                                            <a class="iframe-link btn-button quickview quickview_handler visible-lg" href="quickview.html" title="Quick view" data-fancybox-type="iframe"><i class="fa fa-eye"></i><span>Quick view</span></a>                                                        
                                                           
                                                        </div>
                                                    </div>
                                                    <div class="right-block">
                                                        <div class="caption">
                                                            <div class="rating">    <span class="fa fa-stack"><i class="fa fa-star fa-stack-2x"></i></span>
                                                                <span class="fa fa-stack"><i class="fa fa-star fa-stack-2x"></i></span>
                                                                <span class="fa fa-stack"><i class="fa fa-star fa-stack-2x"></i></span>
                                                                <span class="fa fa-stack"><i class="fa fa-star fa-stack-2x"></i></span>
                                                                <span class="fa fa-stack"><i class="fa fa-star fa-stack-2x"></i></span>
                                                            </div>
                                                            <h4><a href="product.html" title="Wamboudin ribeye" target="_self">Wamboudin ribeye</a></h4>
                                                            <div class="price">$63.00</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div class="ltabs-item">
                                            <div class="item-inner product-layout transition product-grid">
                                                <div class="product-item-container">
                                                    <div class="left-block">
                                                        <div class="product-image-container second_img">
                                                            <a href="product.html" target="_self" title="Lamboudin ribeye">
                                                                <img src={process.env.PUBLIC_URL+'image/catalog/demo/product/270/9.jpg'} class="img-1 img-responsive" alt="noble" />
                                                                <img src={process.env.PUBLIC_URL+'image/catalog/demo/product/270/4.jpg'} class="img-2 img-responsive" alt="noble" />
                                                            </a>
                                                        </div>
                                                        
                                                        <div class="button-group so-quickview cartinfo--left">
                                                            <button type="button" class="addToCart btn-button" title="Add to cart" onclick="cart.add('60 ');">  <i class="fa fa-shopping-basket"></i>
                                                                <span>Add to cart </span>   
                                                            </button>
                                                            <button type="button" class="wishlist btn-button" title="Add to Wish List" onclick="wishlist.add('60');"><i class="fa fa-heart"></i><span>Add to Wish List</span>
                                                            </button>
                                                            <button type="button" class="compare btn-button" title="Compare this Product " onclick="compare.add('60');"><i class="fa fa-refresh"></i><span>Compare this Product</span>
                                                            </button>                                                      
                                                            <a class="iframe-link btn-button quickview quickview_handler visible-lg" href="quickview.html" title="Quick view" data-fancybox-type="iframe"><i class="fa fa-eye"></i><span>Quick view</span></a>                                                        
                                                           
                                                        </div>
                                                    </div>
                                                    <div class="right-block">
                                                        <div class="caption">
                                                            <div class="rating">    <span class="fa fa-stack"><i class="fa fa-star fa-stack-2x"></i></span>
                                                                <span class="fa fa-stack"><i class="fa fa-star fa-stack-2x"></i></span>
                                                                <span class="fa fa-stack"><i class="fa fa-star fa-stack-2x"></i></span>
                                                                <span class="fa fa-stack"><i class="fa fa-star fa-stack-2x"></i></span>
                                                                <span class="fa fa-stack"><i class="fa fa-star fa-stack-2x"></i></span>
                                                            </div>
                                                            <h4><a href="product.html" title="Lamboudin ribeye" target="_self">Lamboudin ribeye</a></h4>
                                                            <div class="price">$63.00</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="item-inner product-layout transition product-grid">
                                                <div class="product-item-container">
                                                    <div class="left-block">
                                                        <div class="product-image-container second_img">
                                                            <a href="product.html" target="_self" title="Ribeye hamhock">
                                                                <img src={process.env.PUBLIC_URL+'image/catalog/demo/product/270/10.jpg'} class="img-1 img-responsive" alt="noble" />
                                                                <img src={process.env.PUBLIC_URL+'image/catalog/demo/product/270/3.jpg'} class="img-2 img-responsive" alt="noble" />
                                                            </a>
                                                        </div>
                                                        <div class="box-label"> <span class="label-product label-sale"> -7% </span></div>
                                                        <div class="button-group so-quickview cartinfo--left">
                                                            <button type="button" class="addToCart btn-button" title="Add to cart" onclick="cart.add('60 ');">  <i class="fa fa-shopping-basket"></i>
                                                                <span>Add to cart </span>   
                                                            </button>
                                                            <button type="button" class="wishlist btn-button" title="Add to Wish List" onclick="wishlist.add('60');"><i class="fa fa-heart"></i><span>Add to Wish List</span>
                                                            </button>
                                                            <button type="button" class="compare btn-button" title="Compare this Product " onclick="compare.add('60');"><i class="fa fa-refresh"></i><span>Compare this Product</span>
                                                            </button>                                                     
                                                            <a class="iframe-link btn-button quickview quickview_handler visible-lg" href="quickview.html" title="Quick view" data-fancybox-type="iframe"><i class="fa fa-eye"></i><span>Quick view</span></a>                                                        
                                                            
                                                        </div>
                                                    </div>
                                                    <div class="right-block">
                                                        <div class="caption">
                                                            <div class="rating">    <span class="fa fa-stack"><i class="fa fa-star fa-stack-2x"></i></span>
                                                                <span class="fa fa-stack"><i class="fa fa-star fa-stack-2x"></i></span>
                                                                <span class="fa fa-stack"><i class="fa fa-star fa-stack-2x"></i></span>
                                                                <span class="fa fa-stack"><i class="fa fa-star fa-stack-2x"></i></span>
                                                                <span class="fa fa-stack"><i class="fa fa-star fa-stack-2x"></i></span>
                                                            </div>
                                                            <h4><a href="product.html" title="Ribeye hamhock" target="_self">Ribeye hamhock</a></h4>
                                                            <div class="price"> <span class="price-new">$65.00</span>
                                                                <span class="price-old">$70.00</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>                                    
                                        </div>
                                        <div class="ltabs-item">
                                            <div class="item-inner product-layout transition product-grid">
                                                <div class="product-item-container">
                                                    <div class="left-block">
                                                        <div class="product-image-container second_img">
                                                            <a href="product.html" target="_self" title="Kielbasa hamburg">
                                                                <img src={process.env.PUBLIC_URL+'image/catalog/demo/product/270/11.jpg'} class="img-1 img-responsive" alt="Pastrami bacon" />
                                                                <img src={process.env.PUBLIC_URL+'image/catalog/demo/product/270/2.jpg'} class="img-2 img-responsive" alt="Pastrami bacon" />
                                                            </a>
                                                        </div>
                                                        
                                                        <div class="button-group so-quickview cartinfo--left">
                                                            <button type="button" class="addToCart btn-button" title="Add to cart" onclick="cart.add('60 ');">  <i class="fa fa-shopping-basket"></i>
                                                                <span>Add to cart </span>   
                                                            </button>
                                                            <button type="button" class="wishlist btn-button" title="Add to Wish List" onclick="wishlist.add('60');"><i class="fa fa-heart"></i><span>Add to Wish List</span>
                                                            </button>
                                                            <button type="button" class="compare btn-button" title="Compare this Product " onclick="compare.add('60');"><i class="fa fa-refresh"></i><span>Compare this Product</span>
                                                            </button>
                                                                                                           
                                                            <a class="iframe-link btn-button quickview quickview_handler visible-lg" href="quickview.html" title="Quick view" data-fancybox-type="iframe"><i class="fa fa-eye"></i><span>Quick view</span></a>                                                        
                                                           
                                                        </div>
                                                    </div>
                                                    <div class="right-block">
                                                        <div class="caption">
                                                            <div class="rating">    <span class="fa fa-stack"><i class="fa fa-star fa-stack-2x"></i></span>
                                                                <span class="fa fa-stack"><i class="fa fa-star fa-stack-2x"></i></span>
                                                                <span class="fa fa-stack"><i class="fa fa-star fa-stack-2x"></i></span>
                                                                <span class="fa fa-stack"><i class="fa fa-star fa-stack-2x"></i></span>
                                                                <span class="fa fa-stack"><i class="fa fa-star fa-stack-2x"></i></span>
                                                            </div>
                                                            <h4><a href="product.html" title="Drumstick tempor" target="_self">Drumstick tempor</a></h4>
                                                            <div class="price">$75.00</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="item-inner product-layout transition product-grid">
                                                <div class="product-item-container">
                                                    <div class="left-block">
                                                        <div class="product-image-container second_img">
                                                            <a href="product.html" target="_self" title="Balltip nullaelit">
                                                                <img src={process.env.PUBLIC_URL+'image/catalog/demo/product/270/12.jpg'} class="img-1 img-responsive" alt="nbole" />
                                                                <img src={process.env.PUBLIC_URL+'image/catalog/demo/product/270/1.jpg'} class="img-2 img-responsive" alt="nbole" />
                                                            </a>
                                                        </div>
                                                        <div class="box-label"> <span class="label-product label-new"> New </span></div>
                                                        <div class="button-group so-quickview cartinfo--left">
                                                            <button type="button" class="addToCart btn-button" title="Add to cart" onclick="cart.add('60 ');">  <i class="fa fa-shopping-basket"></i>
                                                                <span>Add to cart </span>   
                                                            </button>
                                                            <button type="button" class="wishlist btn-button" title="Add to Wish List" onclick="wishlist.add('60');"><i class="fa fa-heart"></i><span>Add to Wish List</span>
                                                            </button>
                                                            <button type="button" class="compare btn-button" title="Compare this Product " onclick="compare.add('60');"><i class="fa fa-refresh"></i><span>Compare this Product</span>
                                                            </button>
                                                                                                                 
                                                            <a class="iframe-link btn-button quickview quickview_handler visible-lg" href="quickview.html" title="Quick view" data-fancybox-type="iframe"><i class="fa fa-eye"></i><span>Quick view</span></a>                                                        
                                                           
                                                        </div>
                                                    </div>
                                                    <div class="right-block">
                                                        <div class="caption">
                                                            <div class="rating">    <span class="fa fa-stack"><i class="fa fa-star fa-stack-2x"></i></span>
                                                                <span class="fa fa-stack"><i class="fa fa-star fa-stack-2x"></i></span>
                                                                <span class="fa fa-stack"><i class="fa fa-star fa-stack-2x"></i></span>
                                                                <span class="fa fa-stack"><i class="fa fa-star fa-stack-2x"></i></span>
                                                                <span class="fa fa-stack"><i class="fa fa-star fa-stack-2x"></i></span>
                                                            </div>
                                                            <h4><a href="product.html" title="Balltip nullaelit" target="_self">Balltip nullaelit</a></h4>
                                                            <div class="price">$80.00</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                </div>
                                <div class="ltabs-items items-category-18 grid" data-total="16">
                                    <div class="ltabs-loading"></div>
                                    
                                </div>
                                <div class="ltabs-items  items-category-25 grid" data-total="16">
                                    <div class="ltabs-loading"></div>
                                </div>
                            </div>
                            
                        </div>   
                    </div>
                </div>
        )
    }
}
export default TrendingItems