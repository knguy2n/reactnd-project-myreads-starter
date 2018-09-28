import React, {Component} from 'react'
import sortBy from 'sort-by'
import SearchBox from './searchBox.js'
import Title from './title.js'
import * as BooksAPI from './BooksAPI.js'
	


class SearchPage extends Component {
	constructor(props) {
		super(props)
		this.state = {
			books: [],
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



	render() {
		return(
			<div className="app">
				<Title/>
				<SearchBox/>
			</div>
			



			)
	}



}

export default SearchPage