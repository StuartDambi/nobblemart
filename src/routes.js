import React from 'react'
import {Router, Route, HashRouter, Switch } from 'react-router-dom'
import Home from './components/Pages/Home/Home'
import Categories from './components/Pages/Categories/Categories'

export default function routes() {
	return (
		<div>
			<HashRouter>
				<Switch>
					<Route exact path='/' component={Home} />
					<Route path='/categories' component={Categories} />
				</Switch>
			</HashRouter>
		</div>
	)
}