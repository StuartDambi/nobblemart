import React from 'react'
import {Router, Route} from 'react-router-dom'
import Home from './components/Pages/Home/Home'
import Categories from './components/Pages/Categories/Categories'

export default function navRoutes() {
	return (
		<div>
			<Router>
				<Route exact path='/' component={Home} />
				<Route path='/categories' component={Categories} />
			</Router>
		</div>
	)
}