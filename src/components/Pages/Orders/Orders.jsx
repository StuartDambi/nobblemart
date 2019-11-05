import React from 'react'
import LoggedInAside from '../../Constants/LoggedInAside/LoggedInAside'

class Orders extends React.Component {
    render() {
        return (
            <div className="common-home">
                <div className="main-container container">
                    <ul className="breadcrumb">
                        <li><a href="!#"><i class="fa fa-home"></i></a></li>
			            <li><a href="!#">Order History</a></li>
                    </ul>

                    <div className="row">
                        <div id="content" className="col-sm-9">
                            <h2 className="title">Order History</h2>
                            <div className="table-responsive">
                                <table class="table table-bordered table-hover">
                                    <thead>
                                        <tr>
                                            <td class="text-center">Image</td>
                                            <td class="text-left">Product Name</td>
                                            <td class="text-center">Order ID</td>
                                            <td class="text-center">Qty</td>
                                            <td class="text-center">Status</td>
                                            <td class="text-center">Date Added</td>
                                            <td class="text-right">Total</td>
                                            <td></td>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td class="text-center">
                                                <a href="product.html"><img width="85" class="img-thumbnail" title="Aspire Ultrabook Laptop" alt="Aspire Ultrabook Laptop" src={process.env.PUBLIC_URL+'image/catalog/demo/product/funiture/1.jpg'} />
                                                </a>
                                            </td>
                                            <td class="text-left"><a href="product.html">Aspire Ultrabook Laptop</a>
                                            </td>
                                            <td class="text-center">#214521</td>
                                            <td class="text-center">1</td>
                                            <td class="text-center">Shipped</td>
                                            <td class="text-center">21/06/2016</td>
                                            <td class="text-right">$228.00</td>
                                            <td class="text-center"><a class="btn btn-info" title="" data-toggle="tooltip" href="order-information.html" data-original-title="View"><i class="fa fa-eye"></i></a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="text-center">
                                                <a href="product.html"><img  width="85" class="img-thumbnail" title="Xitefun Causal Wear Fancy Shoes" alt="Xitefun Causal Wear Fancy Shoes" src={process.env.PUBLIC_URL+'image/catalog/demo/product/funiture/4.jpg'} />
                                                </a>
                                            </td>
                                            <td class="text-left"><a href="product.html">Xitefun Causal Wear Fancy Shoes</a>
                                            </td>
                                            <td class="text-center">#1565245</td>
                                            <td class="text-center">1</td>
                                            <td class="text-center">Shipped</td>
                                            <td class="text-center">20/06/2016</td>
                                            <td class="text-right">$133.20</td>
                                            <td class="text-center"><a class="btn btn-info" title="" data-toggle="tooltip" href="order-information.html" data-original-title="View"><i class="fa fa-eye"></i></a>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* Aside */}
                        <LoggedInAside />
                    </div>
                </div>
            </div>
        )
    }
}
export default Orders