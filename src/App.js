import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import BaseLayout from './components/BaseLayout/BaseLayout'
import Home from './components/Pages/Home/Home'
import Categories from './components/Pages/Categories/Categories'


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <BaseLayout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/categories" component={Categories} />
          </Switch>
        </BaseLayout>
      </BrowserRouter>
    )
  }
}
export default App