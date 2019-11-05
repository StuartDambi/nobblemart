import React, { Component } from 'react'
import Header from './components/Constants/Header/Header'
import { Router, Route, Switch, Redirect } from 'react-router-dom'
import Home from './components/Pages/Home/Home'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Home />
        
      </div>
    )
  }
}
export default App