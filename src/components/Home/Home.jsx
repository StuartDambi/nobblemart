import React from 'react'
import SideMenu from '../Partials/SideMenu'
import DailyDeals from './DailyDeals'
import TrendingItems from './TrendingItems'

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
                                {/* Daily Deals */}
                                <DailyDeals />

                                <div className="row">
                                    <TrendingItems />
                                </div>
                            </div>

                            
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home