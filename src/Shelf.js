//BookShelves

import React, {Component} from 'react'
import Book from './book.js'


class Shelf extends Component {	
	render() {
		return(
 
  		        
			<div className="list-books"> 
        <div className="list-books-content">
          <div>
            <div className="bookshelf">
            <h2 className="bookshelf-title">{ this.props.name }</h2>
              <div className="bookshelf-books">
               <ol className="books-grid">
                {this.props.books.map((book, key) => <Book updateShelf={this.props.updateShelf} book={book} key={key}/> ) }
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>


                       

			)
	}

}


export default Shelf