import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Title from './title.js'
import escapeRegExp from 'escape-string-regexp' // need to copy over to search comp
import SearchPage from './searchPage.js'
import Search from './search.js'
import { Route } from 'react-router-dom'
import Shelf from './bookShelves.js'

class BooksApp extends React.Component {


  state = {
    allBooks:[]
  }

  componentDidMount() {
  BooksAPI.getAll().then((allBooks) => {
    this.setState({ allBooks });
  })
}

  render() {
    return (
      <div className="app">
        <Title/>
        <Route exact path="/" component= { Shelf } />
        <Route path='/search' component= { SearchPage }/>       
        <Search/> {/*Search Button!*/}   
          
         <div>
           <li>
             <p>{/*this.state.allBooks*/}</p>
           </li>
         </div>
        
      </div>
    )
  }
}

export default BooksApp
