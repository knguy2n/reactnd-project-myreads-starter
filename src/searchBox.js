// 
import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import escapeRegExp from 'escape-string-regexp' // need to copy over to search comp
import * as BooksAPI from './BooksAPI.js'


class SearchBox extends Component {
    constructor(props) {
    super(props)
    this.state = {
      books: [],
      showSearchPage: '',
      query: '',
      resultsList: []
  }
    }
  

    
  componentDidMount() {
    BooksAPI.getAll().then((allBooks)=>{
      this.setState({ books: allBooks})
    });
  }


  updateShelf = (book, shelf) => {
      book.shelf = shelf;
      BooksAPI.update(book, shelf).then(() => { 
            this.setState(state => ({ books: state.books.filter(a => a.id !== book.id).concat({book})
            }));
        });
    };
	

  updateQuery = (query) => (
    this.setState({query: query.trim() })
    )

	render() {
    const { query } = this.state
		return(
			<div className="search-books">
            <div className="search-books-bar">
              <Link to="/" className="close-search">Close</Link>
              <div className="search-books-input-wrapper">
                {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                <input type="text" 
                placeholder="Search by title or author"
                value={query}
                onChange={(e) => this.updateQuery(e.target.value)}
                />

              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid"></ol>
            </div>
          </div>
			)
	}	

}

export default SearchBox