//Main Page
import Title from './title.js'
import Search from './search.js'
import React, {Component} from 'react'
import Shelf from './Shelf.js'
import * as BooksAPI from './BooksAPI.js'
import PropTypes from 'prop-types'

class MainPage extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			books: []
		}
	}




	componentDidMount() {
		BooksAPI.getAll().then((books)=>{
			this.setState({
				books: books})
		})

	}
		








	render(){
		return(
			<div>
				<Title/>
				<Shelf name="Currently Reading" books={this.state.books.filter(book => book.shelf ==="currentlyReading")} />
				<Shelf name="Want to Read" books={this.state.books.filter(book => book.shelf ==="wantToRead")} />
				<Shelf name="Read" books={this.state.books.filter(book => book.shelf ==="read")} />
				

				<Search/> {/*Search Button!*/} 	
			</div>

			  
			)
	}
}

export default MainPage