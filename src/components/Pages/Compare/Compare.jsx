import React from 'react'
import { NavLink } from 'react-router-dom'

class Compare extends React.Component {
    render() {
        return (
            <div className="common-home">
                <div className="main-container container">
                    <ul class="breadcrumb">
                        <li><NavLink to="/"><i class="fa fa-home"></i></NavLink></li>
                        <li><NavLink to="/compare">Product Comparison</NavLink></li>
                        
                    </ul>

                    <div className="row">
                        <div id="content" className="col-sm-12">
                            <h2 class="title">Product Comparison</h2>
                            <div className="table-responsive">
                                <table className="table table-bordered table-hover">
                                    <thead>
                                        <tr>
                                        <td colspan="4"><strong>Product Details</strong></td>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Product</td>
                                            <td><a href="product.html">Lorem ipsum dolor"</a></td>
                                            <td><a href="product.html">Lorem ipsum dolor</a></td>
                                            <td><a href="product.html">Lorem ipsum dolor</a></td>
                                        </tr>
                                        <tr>
                                            <td>Image</td>
                                            <td class="text-center"><img class="img-thumbnail" title="Laptop Silver black" alt="Laptop Silver black" width="100px" src="image/catalog/demo/product/270/1.jpg" /></td>
                                            <td class="text-center"><img class="img-thumbnail" title=" Strategies for Acquiring Your Own Laptop " alt=" Strategies for Acquiring Your Own Laptop " width="100px" src="image/catalog/demo/product/270/2.jpg" /></td>
                                            <td class="text-center"><img class="img-thumbnail" title="Aspire Ultrabook Laptop" alt="Aspire Ultrabook Laptop" width="100px" src="image/catalog/demo/product/270/3.jpg" /></td>
                                        </tr>
                                        <tr>
                                            <td>Price</td>
                                            <td><div class="price"><span class="price-new">$93.73</span> <span class="price-old">$84.36</span> </div></td>
                                            <td><div class="price"> <span class="price-new">$45</span> <span class="price-old">$80</span></div></td>
                                            <td><div class="price"><span class="price-new">$56</span> </div></td>
                                        </tr>
                                        <tr>
                                            <td>Model</td>
                                            <td>Pt 001</td>
                                            <td>Pt 002</td>
                                            <td>Pt 003</td>
                                        </tr>
                                        <tr>
                                            <td>Brand</td>
                                            <td>Apple</td>
                                            <td>Apple</td>
                                            <td>Apple</td>
                                        </tr>
                                        <tr>
                                            <td>Availability</td>
                                            <td>In Stock</td>
                                            <td>In Stock</td>
                                            <td>Pre-Order</td>
                                        </tr>

                                        <tr>
                                            <td>Rating</td>
                                            <td class="rating">
                                                <div class="rating-box">
                                                <span class="fa fa-stack"><i class="fa fa-star fa-stack-1x"></i><i class="fa fa-star-o fa-stack-1x"></i></span>
                                                <span class="fa fa-stack"><i class="fa fa-star fa-stack-1x"></i><i class="fa fa-star-o fa-stack-1x"></i></span>
                                                <span class="fa fa-stack"><i class="fa fa-star fa-stack-1x"></i><i class="fa fa-star-o fa-stack-1x"></i></span>
                                                <span class="fa fa-stack"><i class="fa fa-star fa-stack-1x"></i><i class="fa fa-star-o fa-stack-1x"></i></span>
                                                <span class="fa fa-stack"><i class="fa fa-star fa-stack-1x"></i><i class="fa fa-star-o fa-stack-1x"></i></span>
                                                </div>
                                                Based on 0 reviews.</td>
                                            <td class="rating">
                                                <div class="rating-box">
                                                <span class="fa fa-stack"><i class="fa fa-star fa-stack-1x"></i><i class="fa fa-star-o fa-stack-1x"></i></span>
                                                <span class="fa fa-stack"><i class="fa fa-star fa-stack-1x"></i><i class="fa fa-star-o fa-stack-1x"></i></span>
                                                <span class="fa fa-stack"><i class="fa fa-star fa-stack-1x"></i><i class="fa fa-star-o fa-stack-1x"></i></span>
                                                <span class="fa fa-stack"><i class="fa fa-star fa-stack-1x"></i><i class="fa fa-star-o fa-stack-1x"></i></span>
                                                <span class="fa fa-stack"><i class="fa fa-star fa-stack-1x"></i><i class="fa fa-star-o fa-stack-1x"></i></span>
                                                </div>
                                                Based on 0 reviews.</td>
                                            <td class="rating">
                                                <div class="rating-box">
                                                <span class="fa fa-stack"><i class="fa fa-star-o fa-stack-1x"></i></span>
                                                    <span class="fa fa-stack"><i class="fa fa-star-o fa-stack-1x"></i></span>
                                                    <span class="fa fa-stack"><i class="fa fa-star-o fa-stack-1x"></i></span>
                                                <span class="fa fa-stack"><i class="fa fa-star-o fa-stack-1x"></i></span>
                                                <span class="fa fa-stack"><i class="fa fa-star-o fa-stack-1x"></i></span>
                                                </div>
                                                Based on 1 reviews.
                                            </td>
                                        </tr>

                                        <tr>
                                            <td>Summary</td>
                                            <td class="description">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat..</td>
                                            <td class="description"> Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat..</td>
                                            <td class="description">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat..</td>
                                        </tr>
                                        <tr>
                                            <td>Weight</td>
                                            <td>1.50kg</td>
                                            <td>1.80kg</td>
                                            <td>2.00kg</td>
                                        </tr>
                                        <tr>
                                            <td>Dimensions (L x W x H)</td>
                                            <td>0.00mm x 0.00mm x 0.00mm</td>
                                            <td>0.00mm x 0.00mm x 0.00mm</td>
                                            <td>0.00cm x 0.00cm x 0.00cm</td>
                                        </tr>
                                    </tbody>


                                    <thead>
                                        <tr>
                                            <td colspan="4">
                                                <strong>Processor</strong>
                                            </td>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Clockspeed</td>
                                            <td>100mhz</td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                    </tbody>

                                    <thead>
                                        <tr>
                                            <td colspan="4">
                                                <strong>Memory</strong>
                                            </td>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>test 1</td>
                                            <td></td>
                                            <td>Hammered metal outer - Semi-precious stone embellishments</td>
                                            <td></td>
                                        </tr>
                                    
                                        <tr>
                                            <td>test 2</td>
                                            <td></td>
                                            <td>H: 11cm/4" W: 12cm/5" D: 5cm/2"</td>
                                            <td></td>
                                        </tr>
                                    
                                        <tr>
                                            <td>test 3</td>
                                            <td></td>
                                            <td>Green - Black - Brown</td>
                                            <td></td>
                                        </tr>
                                    
                                        <tr>
                                        <td></td>
                                        <td><input type="button" onClick="" class="btn btn-primary btn-block" value="Add to Cart" />
                                            <a class="btn btn-danger btn-block" href="!#">Remove</a></td>
                                        <td><input type="button" onClick="" class="btn btn-primary btn-block" value="Add to Cart" />
                                            <a class="btn btn-danger btn-block" href="!#">Remove</a></td>
                                        <td><input type="button" onClick="" class="btn btn-primary btn-block" value="Add to Cart" />
                                            <a class="btn btn-danger btn-block" href="!#">Remove</a></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        
                    </div>
                </div>
            </div>
        )
    }
}
export default Compare