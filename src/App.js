import React from 'react'

import './App.css'

import SearchPage from './searchPage.js'
import { Route } from 'react-router-dom'
import MainPage from './mainPage.js'

class BooksApp extends React.Component {

  render() {
    return (
      <div className="app">
        <Route exact path="/" component= { MainPage } />
        <Route path='/search' component= { SearchPage }/>       
      </div>
    )
  }
}

export default BooksApp
