import React from 'react'

function Footer() {
    return (
        <div className="MyFooter">
             <footer class="footer-container typefooter-1">
                <section class="footer-top">
                    <div class="container ftop">
                        <div class="row">
                            <div class="col-lg-8 col-md-7 col-sm-12 col-xs-12 ">

                                <div class="module newsletter-footer1">
                                    <div class="newsletter" style={{width: '100%', backgroundColor: '#fff'}}>

                                        <div class="title-block">
                                            <div class="page-heading font-title">
                                                Signup for Newsletter
                                            </div>
                                            <div class="promotext">We’ll never share your email address with a third-party. </div>
                                        </div>

                                        <div class="block_content">
                                            <form method="post" id="signup" name="signup" class="form-group form-inline signup send-mail">
                                                <div class="form-group">
                                                    <div class="input-box">
                                                        <input type="email" placeholder="Your email address..." value="" class="form-control" id="txtemail" name="txtemail" size="55" />
                                                    </div>
                                                    <div class="subcribe">
                                                        <button class="btn btn-primary btn-default font-title" type="submit" onclick="return subscribe_newsletter();" name="submit">
                                                    Subscribe
                                                </button>
                                                    </div>
                                                </div>
                                            </form>


                                        </div>

                                    </div>

                                </div>




                            </div>
                            <div class="col-lg-4 col-md-5 col-sm-12 col-xs-12 ">
                                <ul class="socials">
                                    <li class="facebook"><a class="_blank" href="../../../../www.facebook.com/MagenTech" target="_blank"><i class="fa fa-facebook"></i><span>Facebook</span></a></li>
                                    <li class="twitter"><a class="_blank" href="../../../../twitter.com/smartaddons" target="_blank"><i class="fa fa-twitter"></i><span>Twitter</span></a></li>
                                    <li class="google_plus"><a class="_blank" href="../../../../plus.google.com/%2bSmartaddons/posts.html" target="_blank"><i class="fa fa-google-plus"></i><span>Google Plus</span></a></li>
                                    <li class="pinterest"><a class="_blank" href="../../../../www.pinterest.com/smartaddons/index.html" target="_blank"><i class="fa fa-pinterest"></i><span>Pinterest</span></a></li>
                                </ul>


                            </div>
                        </div>
                    </div>
                </section>



                
                <div class="footer-middle ">
                    <div class="container">
                        <div class="row">

                            <div class="col-lg-2 col-md-2 col-sm-4 col-xs-12 col-style">
                                <div class="box-information box-footer">
                                    <div class="module clearfix">
                                        <h3 class="modtitle">Information</h3>
                                        <div class="modcontent">
                                            <ul class="menu">
                                                <li><a href="#">About Us</a></li>
                                                <li><a href="#">FAQ</a></li>
                                                <li><a href="#">Warranty And Services</a></li>
                                                <li><a href="#">Support 24/7 page</a></li>
                                                <li><a href="#">Product Registration</a></li>
                                                <li><a href="#">Product Support</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <div class="col-lg-2 col-md-2 col-sm-4 col-xs-12 col-style">
                                <div class="box-service box-footer">
                                    <div class="module clearfix">
                                        <h3 class="modtitle">Services</h3>
                                        <div class="modcontent">
                                            <ul class="menu">
                                                <li><a href="#">Contact Us</a></li>
                                                <li><a href="#">Returns</a></li>
                                                <li><a href="#">Support</a></li>
                                                <li><a href="#">Site Map</a></li>
                                                <li><a href="#">Customer Service</a></li>
                                                
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <div class="col-lg-2 col-md-2 col-sm-4 col-xs-12 col-style">
                                <div class="box-account box-footer">
                                    <div class="module clearfix">
                                        <h3 class="modtitle">My Account</h3>
                                        <div class="modcontent">
                                            <ul class="menu">
                                                <li><a href="#">Brands</a></li>
                                                <li><a href="#">Gift Certificates</a></li>
                                                <li><a href="#">Affiliates</a></li>
                                                <li><a href="#">Specials</a></li>
                                                <li><a href="#">FAQs</a></li>
                                                
                                            </ul>
                                        </div>
                                    </div>
                                </div>


                            </div>

                            <div class="col-lg-2 col-md-2 col-sm-4 col-xs-12 col-style">


                            </div>

                            <div class="col-lg-3 col-md-3 col-sm-12 col-xs-12 col-style">
                                <div class="infos-footer">
                                    <a href="#"><img src={process.env.PUBLIC_URL+'image/catalog/logo-footer.png'} alt="Noble-Pals logo"/></a>
                                    <ul class="menu">
                                        <li class="adres">
                                            Kampala Uganada, Wakaliga Opposite Nguvu Coffee terrace
                                        </li>
                                        <li class="mail">
                                            <a href="mailto:Noble_Pals.com">Noble-Palz.com</a>
                                        </li>
                                        <li class="phone">
                                            (+256)7 0211 4226 - +256 7596 06773
                                        </li>
                                        
                                        <li class="time">
                                            Open time: 8:00AM - 6:00PM
                                        </li>
                                    </ul>
                                </div>


                            </div>
                            

                            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-style">
                                <ul class="footer-links font-title">
                                    
                                    <li><a href="#">New Arrivals</a></li>
                                    <li><a href="#">Special Products</a></li>
                                    <li><a href="#">Payments</a></li>
                                    <li><a href="#">Returns</a></li>
                                    <li><a href="#">Refunds</a></li>
                                    <li><a href="#">Warantee</a></li>
                                    <li><a href="#">Promotions</a></li>
                                    <li><a href="#">Online Shopping</a></li>
                                    <li><a href="#">Promotions</a></li>
                                    <li><a href="#">Privacy Policy</a></li>
                                    <li><a href="#">Site Map</a></li>
                                    <li><a href="#">Orders and Returns</a></li>
                                    <li><a href="#">Help</a></li>
                                    <li><a href="#">Contact Us</a></li>
                                    <li><a href="#">Support</a></li>
                                    <li><a href="#">Most Populars</a></li>
                                    <li><a href="#">Customer Service</a></li>
                                    <li><a href="#">Our Stores</a></li>
                                    <li><a href="#">Discount</a></li>
                                    <li><a href="#">Checkout</a></li>
                                </ul>

                            </div>
                            
                        </div>
                    </div>
                </div>




            
                <div class="footer-bottom ">
                    <div class="container">
                        <div class="copyright">
                        noblemart. All Rights Reserved <a href="#" target="_blank">noblemart.Com</a>
                        </div>
                    </div>
                </div>
                
                
                    
                <div class="back-to-top"><i class="fa fa-angle-up"></i></div>
            </footer>
        </div>
    )
}
export default Footer