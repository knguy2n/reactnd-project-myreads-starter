import React, {Component} from 'react'
import sortBy from 'sort-by'
import SearchBox from './searchBox.js'
import Title from './title.js'


class SearchPage extends Component {
	state = {}
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