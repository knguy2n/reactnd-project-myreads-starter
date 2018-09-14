import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Title from './title.js'
import escapeRegExp from 'escape-string-regexp' // need to copy over to search comp
import SearchPage from './searchPage.js'
import Search from './search.js'
import { Route } from 'react-router-dom'
import BookShelves from './bookShelves.js'

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false,
    allBooks:[]
  }

  componentDidMount() {
  BooksAPI.getAll().then((allBooks) => {
    this.setState({ allBooks })
  })
}




  render() {
    return (
      <div className="app">
        <Title/>
        
        <Route exact path="/" render={() => (
          <BookShelves/>
          )} 
        />
        <Route path='/search' component= {SearchPage}/>       
            <Search/>
          
         
        
      </div>
    )
  }
}

export default BooksApp
