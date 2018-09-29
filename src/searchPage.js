import React, {Component} from 'react'
import sortBy from 'sort-by'
import SearchBox from './searchBox.js'
import Title from './title.js'
class SearchPage extends Component {
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