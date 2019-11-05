import React from 'react'
import Aside from './Aside'


class Category extends React.Component {
    render() {
        return (
            <div className="common-category">
                <div className="main-container container">
                    <ul className="breadcrumb">
                        <li><a href="#"><i class="fa fa-home"></i></a></li>
                        <li><a href="#">Smartphone & Tablets</a></li>
                    </ul>

                    <div className="row">
                        <Aside />

                        {/* Main Content */}
                        <div id="content" className="col-md-9 col-sm-8">
                            <div className="product-category">
                                <h3 className="title-category">Accessories</h3>
                                <div className="category-derc">
                                    <div className="row">
                                        <div className="col-sm-12">
                                            <div className="banners">
                                                <div>
                                                    <a href="!#"><img src={process.env.PUBLIC_URL+'image/catalog/demo/category/img-cate.jpg'} alt="img cate" /><br /></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Filters */}
                                <div className="product-filter product-filter-top filters-panel">
                                    <div className="row">
                                        <div className="col-md-5 col-sm-3 col-xs-12 view-mode">

                                            <div className="list-view">
                                                <button class="btn btn-default grid active" data-view="grid" data-toggle="tooltip"  data-original-title="Grid"><i class="fa fa-th"></i></button>
                                                <button class="btn btn-default list" data-view="list" data-toggle="tooltip" data-original-title="List"><i class="fa fa-th-list"></i></button>
                                            </div>
                                        </div>

                                        <div className="short-by-show form-inline text-right col-md-7 col-sm-9 col-xs-12">
                                            <div className="form-group short-by">
                                                <label class="control-label" for="input-sort">Sort By:</label>
                                                <select id="input-sort" class="form-control" onchange="location = this.value;">
                                                    <option value="" selected="selected">Default</option>
                                                    <option value="">Name (A - Z)</option>
                                                    <option value="">Name (Z - A)</option>
                                                    <option value="">Price (Low &gt; High)</option>
                                                    <option value="">Price (High &gt; Low)</option>
                                                    <option value="">Rating (Highest)</option>
                                                    <option value="">Rating (Lowest)</option>
                                                    <option value="">Model (A - Z)</option>
                                                    <option value="">Model (Z - A)</option>
                                                </select>
                                            </div>
                                            <div className="form-group">
                                                <label class="control-label" for="input-limit">Show:</label>
                                                <select id="input-limit" class="form-control" onchange="location = this.value;">
                                                    <option value="" selected="selected">15</option>
                                                    <option value="">25</option>
                                                    <option value="">50</option>
                                                    <option value="">75</option>
                                                    <option value="">100</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Changed listings */}
                                <div className="products-list row nopadding-xs so-filter-gird">

                                    <div className="product-layout col-lg-15 col-md-4 col-sm-6 col-xs-12">
                                        <div className="product-item-container">
                                            <div className="left-block">
                                                <div className="product-image-container second_img">
                                                    <a href="!#" target="_self" title="Chicken swinesha">
                                                        <img src={process.env.PUBLIC_URL+'image/catalog/demo/product/funiture/1.jpg'} class="img-1 img-responsive" alt="noble" />
                                                        <img src={process.env.PUBLIC_URL+'image/catalog/demo/product/funiture/2.jpg'} class="img-2 img-responsive" alt="noble" />
                                                    </a>
                                                </div>
                                                <div class="box-label"> <span class="label-product label-sale"> -16% </span></div>
                                                <div className="button-group so-quickview cartinfo--left">
                                                    <button type="button" class="addToCart btn-button" title="Add to cart" onclick="cart.add('60 ');">
                                                        <i class="fa fa-shopping-basket"></i>
                                                        <span>Add to cart </span>   
                                                    </button>
                                                    <button type="button" class="wishlist btn-button" title="Add to Wish List" onclick="wishlist.add('60');">
                                                        <i class="fa fa-heart"></i>
                                                        <span>Add to Wish List</span>
                                                    </button>
                                                    <button type="button" class="compare btn-button" title="Compare this Product " onclick="compare.add('60');">
                                                        <i class="fa fa-refresh"></i>
                                                        <span>Compare this Product</span>
                                                    </button>
                                                    <a class="iframe-link btn-button quickview quickview_handler visible-lg" href="quickview.html" title="Quick view" data-fancybox-type="iframe">
                                                        <i class="fa fa-eye"></i><span>Quick view</span>
                                                    </a>
                                                </div>
                                            </div>

                                            <div className="right-block">
                                                <div className="caption">
                                                    <div className="rating">
                                                        <span class="fa fa-stack"><i class="fa fa-star-o fa-stack-2x"></i></span>
                                                        <span class="fa fa-stack"><i class="fa fa-star-o fa-stack-2x"></i></span>
                                                        <span class="fa fa-stack"><i class="fa fa-star-o fa-stack-2x"></i></span>
                                                        <span class="fa fa-stack"><i class="fa fa-star-o fa-stack-2x"></i></span>
                                                        <span class="fa fa-stack"><i class="fa fa-star-o fa-stack-2x"></i></span>
                                                    </div>
                                                    <h4><a href="product.html" title="Chicken swinesha" target="_self">Chicken swinesha</a></h4>
                                                    <div className="price">
                                                        <span class="price-new">$46.00</span>
                                                        <span class="price-old">$55.00</span>
                                                    </div>

                                                    <div className="description item-descs">
                                                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est . </p>
                                                    </div>

                                                    <div className="list-block">
                                                        <button class="addToCart btn-button" type="button" title="Add to Cart" onclick="cart.add('101', '1');">
                                                            <i class="fa fa-shopping-basket"></i>
                                                        </button>
                                                        <button class="wishlist btn-button" type="button" title="Add to Wish List" onclick="wishlist.add('101');">
                                                            <i class="fa fa-heart"></i>
                                                        </button>
                                                        <button class="compare btn-button" type="button" title="Compare this Product" onclick="compare.add('101');">
                                                            <i class="fa fa-refresh"></i>
                                                        </button>                                                     
                                                        <a class="iframe-link btn-button quickview quickview_handler visible-lg" href="quickview.html" title="Quick view" data-fancybox-type="iframe"><i class="fa fa-eye"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="product-layout col-lg-15 col-md-4 col-sm-6 col-xs-12">
                                        <div className="product-item-container">
                                            <div className="left-block">
                                                <div className="product-image-container second_img">
                                                    <a href="!#" target="_self" title="Chicken swinesha">
                                                        <img src={process.env.PUBLIC_URL+'image/catalog/demo/product/funiture/1.jpg'} class="img-1 img-responsive" alt="noble" />
                                                        <img src={process.env.PUBLIC_URL+'image/catalog/demo/product/funiture/2.jpg'} class="img-2 img-responsive" alt="noble" />
                                                    </a>
                                                </div>
                                                <div class="box-label"> <span class="label-product label-sale"> -16% </span></div>
                                                <div className="button-group so-quickview cartinfo--left">
                                                    <button type="button" class="addToCart btn-button" title="Add to cart" onclick="cart.add('60 ');">
                                                        <i class="fa fa-shopping-basket"></i>
                                                        <span>Add to cart </span>   
                                                    </button>
                                                    <button type="button" class="wishlist btn-button" title="Add to Wish List" onclick="wishlist.add('60');">
                                                        <i class="fa fa-heart"></i>
                                                        <span>Add to Wish List</span>
                                                    </button>
                                                    <button type="button" class="compare btn-button" title="Compare this Product " onclick="compare.add('60');">
                                                        <i class="fa fa-refresh"></i>
                                                        <span>Compare this Product</span>
                                                    </button>
                                                    <a class="iframe-link btn-button quickview quickview_handler visible-lg" href="quickview.html" title="Quick view" data-fancybox-type="iframe">
                                                        <i class="fa fa-eye"></i><span>Quick view</span>
                                                    </a>
                                                </div>
                                            </div>

                                            <div className="right-block">
                                                <div className="caption">
                                                    <div className="rating">
                                                        <span class="fa fa-stack"><i class="fa fa-star-o fa-stack-2x"></i></span>
                                                        <span class="fa fa-stack"><i class="fa fa-star-o fa-stack-2x"></i></span>
                                                        <span class="fa fa-stack"><i class="fa fa-star-o fa-stack-2x"></i></span>
                                                        <span class="fa fa-stack"><i class="fa fa-star-o fa-stack-2x"></i></span>
                                                        <span class="fa fa-stack"><i class="fa fa-star-o fa-stack-2x"></i></span>
                                                    </div>
                                                    <h4><a href="product.html" title="Chicken swinesha" target="_self">Chicken swinesha</a></h4>
                                                    <div className="price">
                                                        <span class="price-new">$46.00</span>
                                                        <span class="price-old">$55.00</span>
                                                    </div>

                                                    <div className="description item-descs">
                                                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est . </p>
                                                    </div>

                                                    <div className="list-block">
                                                        <button class="addToCart btn-button" type="button" title="Add to Cart" onclick="cart.add('101', '1');">
                                                            <i class="fa fa-shopping-basket"></i>
                                                        </button>
                                                        <button class="wishlist btn-button" type="button" title="Add to Wish List" onclick="wishlist.add('101');">
                                                            <i class="fa fa-heart"></i>
                                                        </button>
                                                        <button class="compare btn-button" type="button" title="Compare this Product" onclick="compare.add('101');">
                                                            <i class="fa fa-refresh"></i>
                                                        </button>                                                     
                                                        <a class="iframe-link btn-button quickview quickview_handler visible-lg" href="quickview.html" title="Quick view" data-fancybox-type="iframe"><i class="fa fa-eye"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="product-layout col-lg-15 col-md-4 col-sm-6 col-xs-12">
                                        <div className="product-item-container">
                                            <div className="left-block">
                                                <div className="product-image-container second_img">
                                                    <a href="!#" target="_self" title="Chicken swinesha">
                                                        <img src={process.env.PUBLIC_URL+'image/catalog/demo/product/funiture/1.jpg'} class="img-1 img-responsive" alt="noble" />
                                                        <img src={process.env.PUBLIC_URL+'image/catalog/demo/product/funiture/2.jpg'} class="img-2 img-responsive" alt="noble" />
                                                    </a>
                                                </div>
                                                <div class="box-label"> <span class="label-product label-sale"> -16% </span></div>
                                                <div className="button-group so-quickview cartinfo--left">
                                                    <button type="button" class="addToCart btn-button" title="Add to cart" onclick="cart.add('60 ');">
                                                        <i class="fa fa-shopping-basket"></i>
                                                        <span>Add to cart </span>   
                                                    </button>
                                                    <button type="button" class="wishlist btn-button" title="Add to Wish List" onclick="wishlist.add('60');">
                                                        <i class="fa fa-heart"></i>
                                                        <span>Add to Wish List</span>
                                                    </button>
                                                    <button type="button" class="compare btn-button" title="Compare this Product " onclick="compare.add('60');">
                                                        <i class="fa fa-refresh"></i>
                                                        <span>Compare this Product</span>
                                                    </button>
                                                    <a class="iframe-link btn-button quickview quickview_handler visible-lg" href="quickview.html" title="Quick view" data-fancybox-type="iframe">
                                                        <i class="fa fa-eye"></i><span>Quick view</span>
                                                    </a>
                                                </div>
                                            </div>

                                            <div className="right-block">
                                                <div className="caption">
                                                    <div className="rating">
                                                        <span class="fa fa-stack"><i class="fa fa-star-o fa-stack-2x"></i></span>
                                                        <span class="fa fa-stack"><i class="fa fa-star-o fa-stack-2x"></i></span>
                                                        <span class="fa fa-stack"><i class="fa fa-star-o fa-stack-2x"></i></span>
                                                        <span class="fa fa-stack"><i class="fa fa-star-o fa-stack-2x"></i></span>
                                                        <span class="fa fa-stack"><i class="fa fa-star-o fa-stack-2x"></i></span>
                                                    </div>
                                                    <h4><a href="product.html" title="Chicken swinesha" target="_self">Chicken swinesha</a></h4>
                                                    <div className="price">
                                                        <span class="price-new">$46.00</span>
                                                        <span class="price-old">$55.00</span>
                                                    </div>

                                                    <div className="description item-descs">
                                                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est . </p>
                                                    </div>

                                                    <div className="list-block">
                                                        <button class="addToCart btn-button" type="button" title="Add to Cart" onclick="cart.add('101', '1');">
                                                            <i class="fa fa-shopping-basket"></i>
                                                        </button>
                                                        <button class="wishlist btn-button" type="button" title="Add to Wish List" onclick="wishlist.add('101');">
                                                            <i class="fa fa-heart"></i>
                                                        </button>
                                                        <button class="compare btn-button" type="button" title="Compare this Product" onclick="compare.add('101');">
                                                            <i class="fa fa-refresh"></i>
                                                        </button>                                                     
                                                        <a class="iframe-link btn-button quickview quickview_handler visible-lg" href="quickview.html" title="Quick view" data-fancybox-type="iframe"><i class="fa fa-eye"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="product-layout col-lg-15 col-md-4 col-sm-6 col-xs-12">
                                        <div className="product-item-container">
                                            <div className="left-block">
                                                <div className="product-image-container second_img">
                                                    <a href="!#" target="_self" title="Chicken swinesha">
                                                        <img src={process.env.PUBLIC_URL+'image/catalog/demo/product/funiture/1.jpg'} class="img-1 img-responsive" alt="noble" />
                                                        <img src={process.env.PUBLIC_URL+'image/catalog/demo/product/funiture/2.jpg'} class="img-2 img-responsive" alt="noble" />
                                                    </a>
                                                </div>
                                                <div class="box-label"> <span class="label-product label-sale"> -16% </span></div>
                                                <div className="button-group so-quickview cartinfo--left">
                                                    <button type="button" class="addToCart btn-button" title="Add to cart" onclick="cart.add('60 ');">
                                                        <i class="fa fa-shopping-basket"></i>
                                                        <span>Add to cart </span>   
                                                    </button>
                                                    <button type="button" class="wishlist btn-button" title="Add to Wish List" onclick="wishlist.add('60');">
                                                        <i class="fa fa-heart"></i>
                                                        <span>Add to Wish List</span>
                                                    </button>
                                                    <button type="button" class="compare btn-button" title="Compare this Product " onclick="compare.add('60');">
                                                        <i class="fa fa-refresh"></i>
                                                        <span>Compare this Product</span>
                                                    </button>
                                                    <a class="iframe-link btn-button quickview quickview_handler visible-lg" href="quickview.html" title="Quick view" data-fancybox-type="iframe">
                                                        <i class="fa fa-eye"></i><span>Quick view</span>
                                                    </a>
                                                </div>
                                            </div>

                                            <div className="right-block">
                                                <div className="caption">
                                                    <div className="rating">
                                                        <span class="fa fa-stack"><i class="fa fa-star-o fa-stack-2x"></i></span>
                                                        <span class="fa fa-stack"><i class="fa fa-star-o fa-stack-2x"></i></span>
                                                        <span class="fa fa-stack"><i class="fa fa-star-o fa-stack-2x"></i></span>
                                                        <span class="fa fa-stack"><i class="fa fa-star-o fa-stack-2x"></i></span>
                                                        <span class="fa fa-stack"><i class="fa fa-star-o fa-stack-2x"></i></span>
                                                    </div>
                                                    <h4><a href="product.html" title="Chicken swinesha" target="_self">Chicken swinesha</a></h4>
                                                    <div className="price">
                                                        <span class="price-new">$46.00</span>
                                                        <span class="price-old">$55.00</span>
                                                    </div>

                                                    <div className="description item-descs">
                                                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est . </p>
                                                    </div>

                                                    <div className="list-block">
                                                        <button class="addToCart btn-button" type="button" title="Add to Cart" onclick="cart.add('101', '1');">
                                                            <i class="fa fa-shopping-basket"></i>
                                                        </button>
                                                        <button class="wishlist btn-button" type="button" title="Add to Wish List" onclick="wishlist.add('101');">
                                                            <i class="fa fa-heart"></i>
                                                        </button>
                                                        <button class="compare btn-button" type="button" title="Compare this Product" onclick="compare.add('101');">
                                                            <i class="fa fa-refresh"></i>
                                                        </button>                                                     
                                                        <a class="iframe-link btn-button quickview quickview_handler visible-lg" href="quickview.html" title="Quick view" data-fancybox-type="iframe"><i class="fa fa-eye"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="product-layout col-lg-15 col-md-4 col-sm-6 col-xs-12">
                                        <div className="product-item-container">
                                            <div className="left-block">
                                                <div className="product-image-container second_img">
                                                    <a href="!#" target="_self" title="Chicken swinesha">
                                                        <img src={process.env.PUBLIC_URL+'image/catalog/demo/product/funiture/1.jpg'} class="img-1 img-responsive" alt="noble" />
                                                        <img src={process.env.PUBLIC_URL+'image/catalog/demo/product/funiture/2.jpg'} class="img-2 img-responsive" alt="noble" />
                                                    </a>
                                                </div>
                                                <div class="box-label"> <span class="label-product label-sale"> -16% </span></div>
                                                <div className="button-group so-quickview cartinfo--left">
                                                    <button type="button" class="addToCart btn-button" title="Add to cart" onclick="cart.add('60 ');">
                                                        <i class="fa fa-shopping-basket"></i>
                                                        <span>Add to cart </span>   
                                                    </button>
                                                    <button type="button" class="wishlist btn-button" title="Add to Wish List" onclick="wishlist.add('60');">
                                                        <i class="fa fa-heart"></i>
                                                        <span>Add to Wish List</span>
                                                    </button>
                                                    <button type="button" class="compare btn-button" title="Compare this Product " onclick="compare.add('60');">
                                                        <i class="fa fa-refresh"></i>
                                                        <span>Compare this Product</span>
                                                    </button>
                                                    <a class="iframe-link btn-button quickview quickview_handler visible-lg" href="quickview.html" title="Quick view" data-fancybox-type="iframe">
                                                        <i class="fa fa-eye"></i><span>Quick view</span>
                                                    </a>
                                                </div>
                                            </div>

                                            <div className="right-block">
                                                <div className="caption">
                                                    <div className="rating">
                                                        <span class="fa fa-stack"><i class="fa fa-star-o fa-stack-2x"></i></span>
                                                        <span class="fa fa-stack"><i class="fa fa-star-o fa-stack-2x"></i></span>
                                                        <span class="fa fa-stack"><i class="fa fa-star-o fa-stack-2x"></i></span>
                                                        <span class="fa fa-stack"><i class="fa fa-star-o fa-stack-2x"></i></span>
                                                        <span class="fa fa-stack"><i class="fa fa-star-o fa-stack-2x"></i></span>
                                                    </div>
                                                    <h4><a href="product.html" title="Chicken swinesha" target="_self">Chicken swinesha</a></h4>
                                                    <div className="price">
                                                        <span class="price-new">$46.00</span>
                                                        <span class="price-old">$55.00</span>
                                                    </div>

                                                    <div className="description item-descs">
                                                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est . </p>
                                                    </div>

                                                    <div className="list-block">
                                                        <button class="addToCart btn-button" type="button" title="Add to Cart" onclick="cart.add('101', '1');">
                                                            <i class="fa fa-shopping-basket"></i>
                                                        </button>
                                                        <button class="wishlist btn-button" type="button" title="Add to Wish List" onclick="wishlist.add('101');">
                                                            <i class="fa fa-heart"></i>
                                                        </button>
                                                        <button class="compare btn-button" type="button" title="Compare this Product" onclick="compare.add('101');">
                                                            <i class="fa fa-refresh"></i>
                                                        </button>                                                     
                                                        <a class="iframe-link btn-button quickview quickview_handler visible-lg" href="quickview.html" title="Quick view" data-fancybox-type="iframe"><i class="fa fa-eye"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="product-layout col-lg-15 col-md-4 col-sm-6 col-xs-12">
                                        <div className="product-item-container">
                                            <div className="left-block">
                                                <div className="product-image-container second_img">
                                                    <a href="!#" target="_self" title="Chicken swinesha">
                                                        <img src={process.env.PUBLIC_URL+'image/catalog/demo/product/funiture/1.jpg'} class="img-1 img-responsive" alt="noble" />
                                                        <img src={process.env.PUBLIC_URL+'image/catalog/demo/product/funiture/2.jpg'} class="img-2 img-responsive" alt="noble" />
                                                    </a>
                                                </div>
                                                <div class="box-label"> <span class="label-product label-sale"> -16% </span></div>
                                                <div className="button-group so-quickview cartinfo--left">
                                                    <button type="button" class="addToCart btn-button" title="Add to cart" onclick="cart.add('60 ');">
                                                        <i class="fa fa-shopping-basket"></i>
                                                        <span>Add to cart </span>   
                                                    </button>
                                                    <button type="button" class="wishlist btn-button" title="Add to Wish List" onclick="wishlist.add('60');">
                                                        <i class="fa fa-heart"></i>
                                                        <span>Add to Wish List</span>
                                                    </button>
                                                    <button type="button" class="compare btn-button" title="Compare this Product " onclick="compare.add('60');">
                                                        <i class="fa fa-refresh"></i>
                                                        <span>Compare this Product</span>
                                                    </button>
                                                    <a class="iframe-link btn-button quickview quickview_handler visible-lg" href="quickview.html" title="Quick view" data-fancybox-type="iframe">
                                                        <i class="fa fa-eye"></i><span>Quick view</span>
                                                    </a>
                                                </div>
                                            </div>

                                            <div className="right-block">
                                                <div className="caption">
                                                    <div className="rating">
                                                        <span class="fa fa-stack"><i class="fa fa-star-o fa-stack-2x"></i></span>
                                                        <span class="fa fa-stack"><i class="fa fa-star-o fa-stack-2x"></i></span>
                                                        <span class="fa fa-stack"><i class="fa fa-star-o fa-stack-2x"></i></span>
                                                        <span class="fa fa-stack"><i class="fa fa-star-o fa-stack-2x"></i></span>
                                                        <span class="fa fa-stack"><i class="fa fa-star-o fa-stack-2x"></i></span>
                                                    </div>
                                                    <h4><a href="product.html" title="Chicken swinesha" target="_self">Chicken swinesha</a></h4>
                                                    <div className="price">
                                                        <span class="price-new">$46.00</span>
                                                        <span class="price-old">$55.00</span>
                                                    </div>

                                                    <div className="description item-descs">
                                                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est . </p>
                                                    </div>

                                                    <div className="list-block">
                                                        <button class="addToCart btn-button" type="button" title="Add to Cart" onclick="cart.add('101', '1');">
                                                            <i class="fa fa-shopping-basket"></i>
                                                        </button>
                                                        <button class="wishlist btn-button" type="button" title="Add to Wish List" onclick="wishlist.add('101');">
                                                            <i class="fa fa-heart"></i>
                                                        </button>
                                                        <button class="compare btn-button" type="button" title="Compare this Product" onclick="compare.add('101');">
                                                            <i class="fa fa-refresh"></i>
                                                        </button>                                                     
                                                        <a class="iframe-link btn-button quickview quickview_handler visible-lg" href="quickview.html" title="Quick view" data-fancybox-type="iframe"><i class="fa fa-eye"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="product-layout col-lg-15 col-md-4 col-sm-6 col-xs-12">
                                        <div className="product-item-container">
                                            <div className="left-block">
                                                <div className="product-image-container second_img">
                                                    <a href="!#" target="_self" title="Chicken swinesha">
                                                        <img src={process.env.PUBLIC_URL+'image/catalog/demo/product/funiture/1.jpg'} class="img-1 img-responsive" alt="noble" />
                                                        <img src={process.env.PUBLIC_URL+'image/catalog/demo/product/funiture/2.jpg'} class="img-2 img-responsive" alt="noble" />
                                                    </a>
                                                </div>
                                                <div class="box-label"> <span class="label-product label-sale"> -16% </span></div>
                                                <div className="button-group so-quickview cartinfo--left">
                                                    <button type="button" class="addToCart btn-button" title="Add to cart" onclick="cart.add('60 ');">
                                                        <i class="fa fa-shopping-basket"></i>
                                                        <span>Add to cart </span>   
                                                    </button>
                                                    <button type="button" class="wishlist btn-button" title="Add to Wish List" onclick="wishlist.add('60');">
                                                        <i class="fa fa-heart"></i>
                                                        <span>Add to Wish List</span>
                                                    </button>
                                                    <button type="button" class="compare btn-button" title="Compare this Product " onclick="compare.add('60');">
                                                        <i class="fa fa-refresh"></i>
                                                        <span>Compare this Product</span>
                                                    </button>
                                                    <a class="iframe-link btn-button quickview quickview_handler visible-lg" href="quickview.html" title="Quick view" data-fancybox-type="iframe">
                                                        <i class="fa fa-eye"></i><span>Quick view</span>
                                                    </a>
                                                </div>
                                            </div>

                                            <div className="right-block">
                                                <div className="caption">
                                                    <div className="rating">
                                                        <span class="fa fa-stack"><i class="fa fa-star-o fa-stack-2x"></i></span>
                                                        <span class="fa fa-stack"><i class="fa fa-star-o fa-stack-2x"></i></span>
                                                        <span class="fa fa-stack"><i class="fa fa-star-o fa-stack-2x"></i></span>
                                                        <span class="fa fa-stack"><i class="fa fa-star-o fa-stack-2x"></i></span>
                                                        <span class="fa fa-stack"><i class="fa fa-star-o fa-stack-2x"></i></span>
                                                    </div>
                                                    <h4><a href="product.html" title="Chicken swinesha" target="_self">Chicken swinesha</a></h4>
                                                    <div className="price">
                                                        <span class="price-new">$46.00</span>
                                                        <span class="price-old">$55.00</span>
                                                    </div>

                                                    <div className="description item-descs">
                                                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est . </p>
                                                    </div>

                                                    <div className="list-block">
                                                        <button class="addToCart btn-button" type="button" title="Add to Cart" onclick="cart.add('101', '1');">
                                                            <i class="fa fa-shopping-basket"></i>
                                                        </button>
                                                        <button class="wishlist btn-button" type="button" title="Add to Wish List" onclick="wishlist.add('101');">
                                                            <i class="fa fa-heart"></i>
                                                        </button>
                                                        <button class="compare btn-button" type="button" title="Compare this Product" onclick="compare.add('101');">
                                                            <i class="fa fa-refresh"></i>
                                                        </button>                                                     
                                                        <a class="iframe-link btn-button quickview quickview_handler visible-lg" href="quickview.html" title="Quick view" data-fancybox-type="iframe"><i class="fa fa-eye"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="product-layout col-lg-15 col-md-4 col-sm-6 col-xs-12">
                                        <div className="product-item-container">
                                            <div className="left-block">
                                                <div className="product-image-container second_img">
                                                    <a href="!#" target="_self" title="Chicken swinesha">
                                                        <img src={process.env.PUBLIC_URL+'image/catalog/demo/product/funiture/1.jpg'} class="img-1 img-responsive" alt="noble" />
                                                        <img src={process.env.PUBLIC_URL+'image/catalog/demo/product/funiture/2.jpg'} class="img-2 img-responsive" alt="noble" />
                                                    </a>
                                                </div>
                                                <div class="box-label"> <span class="label-product label-sale"> -16% </span></div>
                                                <div className="button-group so-quickview cartinfo--left">
                                                    <button type="button" class="addToCart btn-button" title="Add to cart" onclick="cart.add('60 ');">
                                                        <i class="fa fa-shopping-basket"></i>
                                                        <span>Add to cart </span>   
                                                    </button>
                                                    <button type="button" class="wishlist btn-button" title="Add to Wish List" onclick="wishlist.add('60');">
                                                        <i class="fa fa-heart"></i>
                                                        <span>Add to Wish List</span>
                                                    </button>
                                                    <button type="button" class="compare btn-button" title="Compare this Product " onclick="compare.add('60');">
                                                        <i class="fa fa-refresh"></i>
                                                        <span>Compare this Product</span>
                                                    </button>
                                                    <a class="iframe-link btn-button quickview quickview_handler visible-lg" href="quickview.html" title="Quick view" data-fancybox-type="iframe">
                                                        <i class="fa fa-eye"></i><span>Quick view</span>
                                                    </a>
                                                </div>
                                            </div>

                                            <div className="right-block">
                                                <div className="caption">
                                                    <div className="rating">
                                                        <span class="fa fa-stack"><i class="fa fa-star-o fa-stack-2x"></i></span>
                                                        <span class="fa fa-stack"><i class="fa fa-star-o fa-stack-2x"></i></span>
                                                        <span class="fa fa-stack"><i class="fa fa-star-o fa-stack-2x"></i></span>
                                                        <span class="fa fa-stack"><i class="fa fa-star-o fa-stack-2x"></i></span>
                                                        <span class="fa fa-stack"><i class="fa fa-star-o fa-stack-2x"></i></span>
                                                    </div>
                                                    <h4><a href="product.html" title="Chicken swinesha" target="_self">Chicken swinesha</a></h4>
                                                    <div className="price">
                                                        <span class="price-new">$46.00</span>
                                                        <span class="price-old">$55.00</span>
                                                    </div>

                                                    <div className="description item-descs">
                                                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est . </p>
                                                    </div>

                                                    <div className="list-block">
                                                        <button class="addToCart btn-button" type="button" title="Add to Cart" onclick="cart.add('101', '1');">
                                                            <i class="fa fa-shopping-basket"></i>
                                                        </button>
                                                        <button class="wishlist btn-button" type="button" title="Add to Wish List" onclick="wishlist.add('101');">
                                                            <i class="fa fa-heart"></i>
                                                        </button>
                                                        <button class="compare btn-button" type="button" title="Compare this Product" onclick="compare.add('101');">
                                                            <i class="fa fa-refresh"></i>
                                                        </button>                                                     
                                                        <a class="iframe-link btn-button quickview quickview_handler visible-lg" href="quickview.html" title="Quick view" data-fancybox-type="iframe"><i class="fa fa-eye"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="product-layout col-lg-15 col-md-4 col-sm-6 col-xs-12">
                                        <div className="product-item-container">
                                            <div className="left-block">
                                                <div className="product-image-container second_img">
                                                    <a href="!#" target="_self" title="Chicken swinesha">
                                                        <img src={process.env.PUBLIC_URL+'image/catalog/demo/product/funiture/1.jpg'} class="img-1 img-responsive" alt="noble" />
                                                        <img src={process.env.PUBLIC_URL+'image/catalog/demo/product/funiture/2.jpg'} class="img-2 img-responsive" alt="noble" />
                                                    </a>
                                                </div>
                                                <div class="box-label"> <span class="label-product label-sale"> -16% </span></div>
                                                <div className="button-group so-quickview cartinfo--left">
                                                    <button type="button" class="addToCart btn-button" title="Add to cart" onclick="cart.add('60 ');">
                                                        <i class="fa fa-shopping-basket"></i>
                                                        <span>Add to cart </span>   
                                                    </button>
                                                    <button type="button" class="wishlist btn-button" title="Add to Wish List" onclick="wishlist.add('60');">
                                                        <i class="fa fa-heart"></i>
                                                        <span>Add to Wish List</span>
                                                    </button>
                                                    <button type="button" class="compare btn-button" title="Compare this Product " onclick="compare.add('60');">
                                                        <i class="fa fa-refresh"></i>
                                                        <span>Compare this Product</span>
                                                    </button>
                                                    <a class="iframe-link btn-button quickview quickview_handler visible-lg" href="quickview.html" title="Quick view" data-fancybox-type="iframe">
                                                        <i class="fa fa-eye"></i><span>Quick view</span>
                                                    </a>
                                                </div>
                                            </div>

                                            <div className="right-block">
                                                <div className="caption">
                                                    <div className="rating">
                                                        <span class="fa fa-stack"><i class="fa fa-star-o fa-stack-2x"></i></span>
                                                        <span class="fa fa-stack"><i class="fa fa-star-o fa-stack-2x"></i></span>
                                                        <span class="fa fa-stack"><i class="fa fa-star-o fa-stack-2x"></i></span>
                                                        <span class="fa fa-stack"><i class="fa fa-star-o fa-stack-2x"></i></span>
                                                        <span class="fa fa-stack"><i class="fa fa-star-o fa-stack-2x"></i></span>
                                                    </div>
                                                    <h4><a href="product.html" title="Chicken swinesha" target="_self">Chicken swinesha</a></h4>
                                                    <div className="price">
                                                        <span class="price-new">$46.00</span>
                                                        <span class="price-old">$55.00</span>
                                                    </div>

                                                    <div className="description item-descs">
                                                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est . </p>
                                                    </div>

                                                    <div className="list-block">
                                                        <button class="addToCart btn-button" type="button" title="Add to Cart" onclick="cart.add('101', '1');">
                                                            <i class="fa fa-shopping-basket"></i>
                                                        </button>
                                                        <button class="wishlist btn-button" type="button" title="Add to Wish List" onclick="wishlist.add('101');">
                                                            <i class="fa fa-heart"></i>
                                                        </button>
                                                        <button class="compare btn-button" type="button" title="Compare this Product" onclick="compare.add('101');">
                                                            <i class="fa fa-refresh"></i>
                                                        </button>                                                     
                                                        <a class="iframe-link btn-button quickview quickview_handler visible-lg" href="quickview.html" title="Quick view" data-fancybox-type="iframe"><i class="fa fa-eye"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="product-layout col-lg-15 col-md-4 col-sm-6 col-xs-12">
                                        <div className="product-item-container">
                                            <div className="left-block">
                                                <div className="product-image-container second_img">
                                                    <a href="!#" target="_self" title="Chicken swinesha">
                                                        <img src={process.env.PUBLIC_URL+'image/catalog/demo/product/funiture/1.jpg'} class="img-1 img-responsive" alt="noble" />
                                                        <img src={process.env.PUBLIC_URL+'image/catalog/demo/product/funiture/2.jpg'} class="img-2 img-responsive" alt="noble" />
                                                    </a>
                                                </div>
                                                <div class="box-label"> <span class="label-product label-sale"> -16% </span></div>
                                                <div className="button-group so-quickview cartinfo--left">
                                                    <button type="button" class="addToCart btn-button" title="Add to cart" onclick="cart.add('60 ');">
                                                        <i class="fa fa-shopping-basket"></i>
                                                        <span>Add to cart </span>   
                                                    </button>
                                                    <button type="button" class="wishlist btn-button" title="Add to Wish List" onclick="wishlist.add('60');">
                                                        <i class="fa fa-heart"></i>
                                                        <span>Add to Wish List</span>
                                                    </button>
                                                    <button type="button" class="compare btn-button" title="Compare this Product " onclick="compare.add('60');">
                                                        <i class="fa fa-refresh"></i>
                                                        <span>Compare this Product</span>
                                                    </button>
                                                    <a class="iframe-link btn-button quickview quickview_handler visible-lg" href="quickview.html" title="Quick view" data-fancybox-type="iframe">
                                                        <i class="fa fa-eye"></i><span>Quick view</span>
                                                    </a>
                                                </div>
                                            </div>

                                            <div className="right-block">
                                                <div className="caption">
                                                    <div className="rating">
                                                        <span class="fa fa-stack"><i class="fa fa-star-o fa-stack-2x"></i></span>
                                                        <span class="fa fa-stack"><i class="fa fa-star-o fa-stack-2x"></i></span>
                                                        <span class="fa fa-stack"><i class="fa fa-star-o fa-stack-2x"></i></span>
                                                        <span class="fa fa-stack"><i class="fa fa-star-o fa-stack-2x"></i></span>
                                                        <span class="fa fa-stack"><i class="fa fa-star-o fa-stack-2x"></i></span>
                                                    </div>
                                                    <h4><a href="product.html" title="Chicken swinesha" target="_self">Chicken swinesha</a></h4>
                                                    <div className="price">
                                                        <span class="price-new">$46.00</span>
                                                        <span class="price-old">$55.00</span>
                                                    </div>

                                                    <div className="description item-descs">
                                                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est . </p>
                                                    </div>

                                                    <div className="list-block">
                                                        <button class="addToCart btn-button" type="button" title="Add to Cart" onclick="cart.add('101', '1');">
                                                            <i class="fa fa-shopping-basket"></i>
                                                        </button>
                                                        <button class="wishlist btn-button" type="button" title="Add to Wish List" onclick="wishlist.add('101');">
                                                            <i class="fa fa-heart"></i>
                                                        </button>
                                                        <button class="compare btn-button" type="button" title="Compare this Product" onclick="compare.add('101');">
                                                            <i class="fa fa-refresh"></i>
                                                        </button>                                                     
                                                        <a class="iframe-link btn-button quickview quickview_handler visible-lg" href="quickview.html" title="Quick view" data-fancybox-type="iframe"><i class="fa fa-eye"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="product-layout col-lg-15 col-md-4 col-sm-6 col-xs-12">
                                        <div className="product-item-container">
                                            <div className="left-block">
                                                <div className="product-image-container second_img">
                                                    <a href="!#" target="_self" title="Chicken swinesha">
                                                        <img src={process.env.PUBLIC_URL+'image/catalog/demo/product/funiture/1.jpg'} class="img-1 img-responsive" alt="noble" />
                                                        <img src={process.env.PUBLIC_URL+'image/catalog/demo/product/funiture/2.jpg'} class="img-2 img-responsive" alt="noble" />
                                                    </a>
                                                </div>
                                                <div class="box-label"> <span class="label-product label-sale"> -16% </span></div>
                                                <div className="button-group so-quickview cartinfo--left">
                                                    <button type="button" class="addToCart btn-button" title="Add to cart" onclick="cart.add('60 ');">
                                                        <i class="fa fa-shopping-basket"></i>
                                                        <span>Add to cart </span>   
                                                    </button>
                                                    <button type="button" class="wishlist btn-button" title="Add to Wish List" onclick="wishlist.add('60');">
                                                        <i class="fa fa-heart"></i>
                                                        <span>Add to Wish List</span>
                                                    </button>
                                                    <button type="button" class="compare btn-button" title="Compare this Product " onclick="compare.add('60');">
                                                        <i class="fa fa-refresh"></i>
                                                        <span>Compare this Product</span>
                                                    </button>
                                                    <a class="iframe-link btn-button quickview quickview_handler visible-lg" href="quickview.html" title="Quick view" data-fancybox-type="iframe">
                                                        <i class="fa fa-eye"></i><span>Quick view</span>
                                                    </a>
                                                </div>
                                            </div>

                                            <div className="right-block">
                                                <div className="caption">
                                                    <div className="rating">
                                                        <span class="fa fa-stack"><i class="fa fa-star-o fa-stack-2x"></i></span>
                                                        <span class="fa fa-stack"><i class="fa fa-star-o fa-stack-2x"></i></span>
                                                        <span class="fa fa-stack"><i class="fa fa-star-o fa-stack-2x"></i></span>
                                                        <span class="fa fa-stack"><i class="fa fa-star-o fa-stack-2x"></i></span>
                                                        <span class="fa fa-stack"><i class="fa fa-star-o fa-stack-2x"></i></span>
                                                    </div>
                                                    <h4><a href="product.html" title="Chicken swinesha" target="_self">Chicken swinesha</a></h4>
                                                    <div className="price">
                                                        <span class="price-new">$46.00</span>
                                                        <span class="price-old">$55.00</span>
                                                    </div>

                                                    <div className="description item-descs">
                                                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est . </p>
                                                    </div>

                                                    <div className="list-block">
                                                        <button class="addToCart btn-button" type="button" title="Add to Cart" onclick="cart.add('101', '1');">
                                                            <i class="fa fa-shopping-basket"></i>
                                                        </button>
                                                        <button class="wishlist btn-button" type="button" title="Add to Wish List" onclick="wishlist.add('101');">
                                                            <i class="fa fa-heart"></i>
                                                        </button>
                                                        <button class="compare btn-button" type="button" title="Compare this Product" onclick="compare.add('101');">
                                                            <i class="fa fa-refresh"></i>
                                                        </button>                                                     
                                                        <a class="iframe-link btn-button quickview quickview_handler visible-lg" href="quickview.html" title="Quick view" data-fancybox-type="iframe"><i class="fa fa-eye"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="product-layout col-lg-15 col-md-4 col-sm-6 col-xs-12">
                                        <div className="product-item-container">
                                            <div className="left-block">
                                                <div className="product-image-container second_img">
                                                    <a href="!#" target="_self" title="Chicken swinesha">
                                                        <img src={process.env.PUBLIC_URL+'image/catalog/demo/product/funiture/1.jpg'} class="img-1 img-responsive" alt="noble" />
                                                        <img src={process.env.PUBLIC_URL+'image/catalog/demo/product/funiture/2.jpg'} class="img-2 img-responsive" alt="noble" />
                                                    </a>
                                                </div>
                                                <div class="box-label"> <span class="label-product label-sale"> -16% </span></div>
                                                <div className="button-group so-quickview cartinfo--left">
                                                    <button type="button" class="addToCart btn-button" title="Add to cart" onclick="cart.add('60 ');">
                                                        <i class="fa fa-shopping-basket"></i>
                                                        <span>Add to cart </span>   
                                                    </button>
                                                    <button type="button" class="wishlist btn-button" title="Add to Wish List" onclick="wishlist.add('60');">
                                                        <i class="fa fa-heart"></i>
                                                        <span>Add to Wish List</span>
                                                    </button>
                                                    <button type="button" class="compare btn-button" title="Compare this Product " onclick="compare.add('60');">
                                                        <i class="fa fa-refresh"></i>
                                                        <span>Compare this Product</span>
                                                    </button>
                                                    <a class="iframe-link btn-button quickview quickview_handler visible-lg" href="quickview.html" title="Quick view" data-fancybox-type="iframe">
                                                        <i class="fa fa-eye"></i><span>Quick view</span>
                                                    </a>
                                                </div>
                                            </div>

                                            <div className="right-block">
                                                <div className="caption">
                                                    <div className="rating">
                                                        <span class="fa fa-stack"><i class="fa fa-star-o fa-stack-2x"></i></span>
                                                        <span class="fa fa-stack"><i class="fa fa-star-o fa-stack-2x"></i></span>
                                                        <span class="fa fa-stack"><i class="fa fa-star-o fa-stack-2x"></i></span>
                                                        <span class="fa fa-stack"><i class="fa fa-star-o fa-stack-2x"></i></span>
                                                        <span class="fa fa-stack"><i class="fa fa-star-o fa-stack-2x"></i></span>
                                                    </div>
                                                    <h4><a href="product.html" title="Chicken swinesha" target="_self">Chicken swinesha</a></h4>
                                                    <div className="price">
                                                        <span class="price-new">$46.00</span>
                                                        <span class="price-old">$55.00</span>
                                                    </div>

                                                    <div className="description item-descs">
                                                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est . </p>
                                                    </div>

                                                    <div className="list-block">
                                                        <button class="addToCart btn-button" type="button" title="Add to Cart" onclick="cart.add('101', '1');">
                                                            <i class="fa fa-shopping-basket"></i>
                                                        </button>
                                                        <button class="wishlist btn-button" type="button" title="Add to Wish List" onclick="wishlist.add('101');">
                                                            <i class="fa fa-heart"></i>
                                                        </button>
                                                        <button class="compare btn-button" type="button" title="Compare this Product" onclick="compare.add('101');">
                                                            <i class="fa fa-refresh"></i>
                                                        </button>                                                     
                                                        <a class="iframe-link btn-button quickview quickview_handler visible-lg" href="quickview.html" title="Quick view" data-fancybox-type="iframe"><i class="fa fa-eye"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="product-layout col-lg-15 col-md-4 col-sm-6 col-xs-12">
                                        <div className="product-item-container">
                                            <div className="left-block">
                                                <div className="product-image-container second_img">
                                                    <a href="!#" target="_self" title="Chicken swinesha">
                                                        <img src={process.env.PUBLIC_URL+'image/catalog/demo/product/funiture/1.jpg'} class="img-1 img-responsive" alt="noble" />
                                                        <img src={process.env.PUBLIC_URL+'image/catalog/demo/product/funiture/2.jpg'} class="img-2 img-responsive" alt="noble" />
                                                    </a>
                                                </div>
                                                <div class="box-label"> <span class="label-product label-sale"> -16% </span></div>
                                                <div className="button-group so-quickview cartinfo--left">
                                                    <button type="button" class="addToCart btn-button" title="Add to cart" onclick="cart.add('60 ');">
                                                        <i class="fa fa-shopping-basket"></i>
                                                        <span>Add to cart </span>   
                                                    </button>
                                                    <button type="button" class="wishlist btn-button" title="Add to Wish List" onclick="wishlist.add('60');">
                                                        <i class="fa fa-heart"></i>
                                                        <span>Add to Wish List</span>
                                                    </button>
                                                    <button type="button" class="compare btn-button" title="Compare this Product " onclick="compare.add('60');">
                                                        <i class="fa fa-refresh"></i>
                                                        <span>Compare this Product</span>
                                                    </button>
                                                    <a class="iframe-link btn-button quickview quickview_handler visible-lg" href="quickview.html" title="Quick view" data-fancybox-type="iframe">
                                                        <i class="fa fa-eye"></i><span>Quick view</span>
                                                    </a>
                                                </div>
                                            </div>

                                            <div className="right-block">
                                                <div className="caption">
                                                    <div className="rating">
                                                        <span class="fa fa-stack"><i class="fa fa-star-o fa-stack-2x"></i></span>
                                                        <span class="fa fa-stack"><i class="fa fa-star-o fa-stack-2x"></i></span>
                                                        <span class="fa fa-stack"><i class="fa fa-star-o fa-stack-2x"></i></span>
                                                        <span class="fa fa-stack"><i class="fa fa-star-o fa-stack-2x"></i></span>
                                                        <span class="fa fa-stack"><i class="fa fa-star-o fa-stack-2x"></i></span>
                                                    </div>
                                                    <h4><a href="product.html" title="Chicken swinesha" target="_self">Chicken swinesha</a></h4>
                                                    <div className="price">
                                                        <span class="price-new">$46.00</span>
                                                        <span class="price-old">$55.00</span>
                                                    </div>

                                                    <div className="description item-descs">
                                                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est . </p>
                                                    </div>

                                                    <div className="list-block">
                                                        <button class="addToCart btn-button" type="button" title="Add to Cart" onclick="cart.add('101', '1');">
                                                            <i class="fa fa-shopping-basket"></i>
                                                        </button>
                                                        <button class="wishlist btn-button" type="button" title="Add to Wish List" onclick="wishlist.add('101');">
                                                            <i class="fa fa-heart"></i>
                                                        </button>
                                                        <button class="compare btn-button" type="button" title="Compare this Product" onclick="compare.add('101');">
                                                            <i class="fa fa-refresh"></i>
                                                        </button>                                                     
                                                        <a class="iframe-link btn-button quickview quickview_handler visible-lg" href="quickview.html" title="Quick view" data-fancybox-type="iframe"><i class="fa fa-eye"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="product-layout col-lg-15 col-md-4 col-sm-6 col-xs-12">
                                        <div className="product-item-container">
                                            <div className="left-block">
                                                <div className="product-image-container second_img">
                                                    <a href="!#" target="_self" title="Chicken swinesha">
                                                        <img src={process.env.PUBLIC_URL+'image/catalog/demo/product/funiture/1.jpg'} class="img-1 img-responsive" alt="noble" />
                                                        <img src={process.env.PUBLIC_URL+'image/catalog/demo/product/funiture/2.jpg'} class="img-2 img-responsive" alt="noble" />
                                                    </a>
                                                </div>
                                                <div class="box-label"> <span class="label-product label-sale"> -16% </span></div>
                                                <div className="button-group so-quickview cartinfo--left">
                                                    <button type="button" class="addToCart btn-button" title="Add to cart" onclick="cart.add('60 ');">
                                                        <i class="fa fa-shopping-basket"></i>
                                                        <span>Add to cart </span>   
                                                    </button>
                                                    <button type="button" class="wishlist btn-button" title="Add to Wish List" onclick="wishlist.add('60');">
                                                        <i class="fa fa-heart"></i>
                                                        <span>Add to Wish List</span>
                                                    </button>
                                                    <button type="button" class="compare btn-button" title="Compare this Product " onclick="compare.add('60');">
                                                        <i class="fa fa-refresh"></i>
                                                        <span>Compare this Product</span>
                                                    </button>
                                                    <a class="iframe-link btn-button quickview quickview_handler visible-lg" href="quickview.html" title="Quick view" data-fancybox-type="iframe">
                                                        <i class="fa fa-eye"></i><span>Quick view</span>
                                                    </a>
                                                </div>
                                            </div>

                                            <div className="right-block">
                                                <div className="caption">
                                                    <div className="rating">
                                                        <span class="fa fa-stack"><i class="fa fa-star-o fa-stack-2x"></i></span>
                                                        <span class="fa fa-stack"><i class="fa fa-star-o fa-stack-2x"></i></span>
                                                        <span class="fa fa-stack"><i class="fa fa-star-o fa-stack-2x"></i></span>
                                                        <span class="fa fa-stack"><i class="fa fa-star-o fa-stack-2x"></i></span>
                                                        <span class="fa fa-stack"><i class="fa fa-star-o fa-stack-2x"></i></span>
                                                    </div>
                                                    <h4><a href="product.html" title="Chicken swinesha" target="_self">Chicken swinesha</a></h4>
                                                    <div className="price">
                                                        <span class="price-new">$46.00</span>
                                                        <span class="price-old">$55.00</span>
                                                    </div>

                                                    <div className="description item-descs">
                                                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est . </p>
                                                    </div>

                                                    <div className="list-block">
                                                        <button class="addToCart btn-button" type="button" title="Add to Cart" onclick="cart.add('101', '1');">
                                                            <i class="fa fa-shopping-basket"></i>
                                                        </button>
                                                        <button class="wishlist btn-button" type="button" title="Add to Wish List" onclick="wishlist.add('101');">
                                                            <i class="fa fa-heart"></i>
                                                        </button>
                                                        <button class="compare btn-button" type="button" title="Compare this Product" onclick="compare.add('101');">
                                                            <i class="fa fa-refresh"></i>
                                                        </button>                                                     
                                                        <a class="iframe-link btn-button quickview quickview_handler visible-lg" href="quickview.html" title="Quick view" data-fancybox-type="iframe"><i class="fa fa-eye"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="product-layout col-lg-15 col-md-4 col-sm-6 col-xs-12">
                                        <div className="product-item-container">
                                            <div className="left-block">
                                                <div className="product-image-container second_img">
                                                    <a href="!#" target="_self" title="Chicken swinesha">
                                                        <img src={process.env.PUBLIC_URL+'image/catalog/demo/product/funiture/1.jpg'} class="img-1 img-responsive" alt="noble" />
                                                        <img src={process.env.PUBLIC_URL+'image/catalog/demo/product/funiture/2.jpg'} class="img-2 img-responsive" alt="noble" />
                                                    </a>
                                                </div>
                                                <div class="box-label"> <span class="label-product label-sale"> -16% </span></div>
                                                <div className="button-group so-quickview cartinfo--left">
                                                    <button type="button" class="addToCart btn-button" title="Add to cart" onclick="cart.add('60 ');">
                                                        <i class="fa fa-shopping-basket"></i>
                                                        <span>Add to cart </span>   
                                                    </button>
                                                    <button type="button" class="wishlist btn-button" title="Add to Wish List" onclick="wishlist.add('60');">
                                                        <i class="fa fa-heart"></i>
                                                        <span>Add to Wish List</span>
                                                    </button>
                                                    <button type="button" class="compare btn-button" title="Compare this Product " onclick="compare.add('60');">
                                                        <i class="fa fa-refresh"></i>
                                                        <span>Compare this Product</span>
                                                    </button>
                                                    <a class="iframe-link btn-button quickview quickview_handler visible-lg" href="quickview.html" title="Quick view" data-fancybox-type="iframe">
                                                        <i class="fa fa-eye"></i><span>Quick view</span>
                                                    </a>
                                                </div>
                                            </div>

                                            <div className="right-block">
                                                <div className="caption">
                                                    <div className="rating">
                                                        <span class="fa fa-stack"><i class="fa fa-star-o fa-stack-2x"></i></span>
                                                        <span class="fa fa-stack"><i class="fa fa-star-o fa-stack-2x"></i></span>
                                                        <span class="fa fa-stack"><i class="fa fa-star-o fa-stack-2x"></i></span>
                                                        <span class="fa fa-stack"><i class="fa fa-star-o fa-stack-2x"></i></span>
                                                        <span class="fa fa-stack"><i class="fa fa-star-o fa-stack-2x"></i></span>
                                                    </div>
                                                    <h4><a href="product.html" title="Chicken swinesha" target="_self">Chicken swinesha</a></h4>
                                                    <div className="price">
                                                        <span class="price-new">$46.00</span>
                                                        <span class="price-old">$55.00</span>
                                                    </div>

                                                    <div className="description item-descs">
                                                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est . </p>
                                                    </div>

                                                    <div className="list-block">
                                                        <button class="addToCart btn-button" type="button" title="Add to Cart" onclick="cart.add('101', '1');">
                                                            <i class="fa fa-shopping-basket"></i>
                                                        </button>
                                                        <button class="wishlist btn-button" type="button" title="Add to Wish List" onclick="wishlist.add('101');">
                                                            <i class="fa fa-heart"></i>
                                                        </button>
                                                        <button class="compare btn-button" type="button" title="Compare this Product" onclick="compare.add('101');">
                                                            <i class="fa fa-refresh"></i>
                                                        </button>                                                     
                                                        <a class="iframe-link btn-button quickview quickview_handler visible-lg" href="quickview.html" title="Quick view" data-fancybox-type="iframe"><i class="fa fa-eye"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                
                                    
                                </div>
                                
                                <div class="product-filter product-filter-bottom filters-panel">
                                    <div class="row">
                                        <div class="col-sm-6 text-left"></div>
                                        <div class="col-sm-6 text-right">Showing 1 to 15 of 15 (1 Pages)</div>
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
export default Category