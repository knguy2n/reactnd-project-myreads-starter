//Book component 
import React, {Component} from 'react'
import ShelfChanger from './shelfChanger'


class Book extends Component {




	render() {
		return(
			<li>
            	<div className="book">
                	<div className="book-top">
                        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${this.props.book.imageLinks.thumbnail}")` }}></div>
                        <ShelfChanger/>
                    </div>
                    <div className="book-title">{this.props.book.title}</div>
                    <div className="book-authors">{this.props.book.authors[0]}</div>
                </div>
            </li>

			)
	}
}

export default Book; 