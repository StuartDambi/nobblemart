import React, { Component } from 'react'

// Externals
import Header from '../Constants/Header/Header'
import Footer from '../Constants/Footer/Footer'

export default class BaseLayout extends Component {
    render() {
        return (
            <div>
                <div className="header">
                    <Header /> <br/><br/>
                </div>
                <div className="content">
                    {this.props.children}
                </div>
                <Footer />
            </div>
        )
    }
}
