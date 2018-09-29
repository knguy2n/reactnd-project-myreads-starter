import React, {Component} from 'react'
import sortBy from 'sort-by'
import Title from './title.js'
import * as BooksAPI from './BooksAPI.js'

import Book from './book.js'
import { Link } from 'react-router-dom'



class SearchPage extends Component {
	constructor(props) {
		super(props)
		this.state = {
			books: [],
			query: '',
      		resultsList: []
		}
	}   

	componentDidMount() {
		BooksAPI.getAll().then((allBooks)=>{
			this.setState({ books: allBooks})
			console.log(allBooks)
		});
	}

 	updateQuery = (query) => (
    	this.setState({query: query.trim() }, this.showResults)
    )

  	showResults() {
    	if(this.state.query === '' || this.state.query === undefined) {
      		return this.setState({resultsList: []});
    }
    	BooksAPI.search(this.state.query.trim()).then(results => {
      		if(results.error) {
        		return(
          			this.setState({resultsList: []}), this.errorMessage         
          		) 
      		}
      			else {
        			return(
        				results.forEach(b => {
        					let booksonShelf= this.state.books.filter(B => B.id === b.id)
        					if(booksonShelf[0]) {
        						b.shelf = booksonShelf[0].shelf;
        					}
        					else {b.shelf = null}
        				}),
          				this.setState({resultsList: results})
          				)
      			}
    	});
    }

	updateShelf = (book, shelf) => {    	
    	BooksAPI.update(book, shelf).then(allBooks => { 
    		book.shelf = shelf;
            this.setState(state => ({ 
            	books: state.books.filter(a => a.id !== book.id).concat([book])
            }));

        });
    }

	render() {
		return(
			<div className="app">
				<Title/>
				<div className="search-books">
            		<div className="search-books-bar">
            			<Link to="/" className="close-search">Close</Link>
            			<div className="search-books-input-wrapper">
            				<input type="text" 
                				placeholder="Search by title or author"
                				value={this.state.query}
                				onChange={(e) => this.updateQuery(e.target.value)}
                			/>
                		</div>
            		</div>
            	</div>
            	<div className="search-books-results" id="results-div">
              		<ol className="books-grid" >
               		{
                  		this.state.resultsList.map((item, key) => <Book updateShelf={this.updateShelf} book={item} key={key} />).sort(sortBy('title'))
                	}
              		</ol>
            	</div>
            </div>
          		
			)
	}	
			
			



	


}

export default SearchPage