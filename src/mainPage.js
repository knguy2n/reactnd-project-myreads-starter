//Main Page
import Title from './title.js'
import Search from './search.js'
import React, {Component} from 'react'
import Shelf from './Shelf.js'
import * as BooksAPI from './BooksAPI.js'


class MainPage extends Component {
	constructor(props) {
		super(props)
		this.state = {
			books: []
		}
	}

    

	componentDidMount() {
		BooksAPI.getAll().then((allBooks)=>{
			this.setState({ books: allBooks})
		});
	}


	updateShelf = (book, shelf) => {
    	
    	BooksAPI.update(book, shelf).then(allBooks => { 
    		book.shelf = shelf;
            this.setState(state => ({ 
            	books: state.books.filter(a => a.id !== book.id).concat([book])
            }));

        });
    };
		
	render(){
		return(
			<div>
				<Title/>
				<Shelf updateShelf={this.updateShelf} name="Currently Reading" books={this.state.books.filter(book => book.shelf ==="currentlyReading")} />
				<Shelf updateShelf={this.updateShelf}  name="Want to Read" books={this.state.books.filter(book => book.shelf ==="wantToRead")} />
				<Shelf updateShelf={this.updateShelf}  name="Read" books={this.state.books.filter(book => book.shelf ==="read")} />
				

				<Search/> {/*Search Button!*/} 	
			</div>

			  
			)
	}
}

export default MainPage