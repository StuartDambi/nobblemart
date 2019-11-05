import React from 'react'
import SideMenu from '../../Constants/SideMenu/SideMenu'
import DailyDeals from './DailyDeals'
// import TrendingItems from './TrendingItems'
import NewItems from './NewItems'


class Home extends React.Component {
    render() {
        return (
            <div className="common-home">
                <div className="main-container container">
                    <div id="content">

                        <div className="box-top hidden-lg hidden-md hidden-sm">
                            <div className="module sohomepage-slider">
                                <div className="yt-content-slider" data-rtl="yes" data-autoplay="no" data-autoheight="no" data-delay="4" data-speed="0.6" data-margin="0" data-items_column0="1" data-items_column1="1" data-items_column2="1"  data-items_column3="1" data-items_column4="1" data-arrows="no" data-pagination="yes" data-lazyload="yes" data-loop="no" data-hoverpause="yes">
                                    <div className="yt-content-slide">
                                        <a href="!#"><img src={process.env.PUBLIC_URL+'image/catalog/slideshow/home1/slider-1.jpg'} alt="slider1" className="img-responsive" /></a>
                                    </div>
                                    <div className="yt-content-slide">
                                        <a href="!#"><img src={process.env.PUBLIC_URL+'image/catalog/slideshow/home1/slider-2.jpg'} alt="slider2" className="img-responsive" /></a>
                                    </div>
                                    <div className="yt-content-slide">
                                        <a href="!#"><img src={process.env.PUBLIC_URL+'image/catalog/slideshow/home1/slider-3.jpg'} alt="slider3" className="img-responsive" /></a>
                                    </div>
                                </div>
                                <div className="loadeding"></div>
                            </div>
                        </div>
                        
                        <div className="row">
                            {/* Side Menu */}
                            <SideMenu />

                            <div className="col-lg-10 col-md-9 col-sm-8 col-xs-12 main-right">
                                <div className="slider-container row"></div>
                                {/* Banners */}
                                <div class="slider-container row">  
                                    <div class="col-lg-9 col-md-8 col-sm-8 col-xs-12 col2">
                                        <div class="module sohomepage-slider ">
                                            <div class="yt-content-slider"  data-rtl="yes" data-autoplay="no" data-autoheight="no" data-delay="4" data-speed="0.6" data-margin="0" data-items_column0="1" data-items_column1="1" data-items_column2="1"  data-items_column3="1" data-items_column4="1" data-arrows="no" data-pagination="yes" data-lazyload="yes" data-loop="no" data-hoverpause="yes">
                                                <div class="yt-content-slide">
                                                    <a href="!#"><img src="image/catalog/slideshow/home1/slider-1.jpg" alt="slider1" class="img-responsive" /></a>
                                                </div>
                                                <div class="yt-content-slide">
                                                    <a href="!#"><img src="image/catalog/slideshow/home1/slider-2.jpg" alt="slider2" class="img-responsive" /></a>
                                                </div>
                                                <div class="yt-content-slide">
                                                    <a href="!#"><img src="image/catalog/slideshow/home1/slider-3.jpg" alt="slider3" class="img-responsive" /></a>
                                                </div>
                                            </div>
                                            
                                            <div class="loadeding"></div>
                                        </div>
                                        
                                    </div>

                                    
                                    <div class="col-lg-3 col-md-4 col-sm-4 col-xs-12 col3">
                                        <div class="modcontent clearfix">
                                            <div class="banners banners1"> 
                                                <div class="b-img">
                                                        <a href="!#"><img src="image/catalog/banners/banner1.jpg" alt="banner1" /></a>
                                                </div>
                                                <div class="b-img2">
                                                        <a href="!#"><img src="image/catalog/banners/banner2.jpg" alt="banner2" /></a>
                                                </div>    
                                                
                                                
                                            </div>
                                        </div>
                                    </div>                
                                </div>



                                <div class="banners banners3">
                                    <div class="banner">
                                        <a href="!#">
                                            <img src="image/catalog/banners/banner3.jpg" alt="noble" />
                                        </a>
                                    </div>
                                </div>
                                {/* Daily Deals */}
                                <DailyDeals />

                                <div class="banners banners6">
                                    <div class="banner">
                                        <a href="!#">
                                            <img src="image/catalog/banners/banner7.jpg" alt="noble" />
                                        </a>
                                    </div>
                                </div>

                                
                                {/* <TrendingItems /> */}

                                <NewItems />
                            </div>

                            
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home