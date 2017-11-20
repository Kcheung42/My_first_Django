import React from 'react';
import { render } from 'react-dom';
import { ItemLister } from './ItemLister';
import { Search } from './browser_search';

export class Browser extends React.Component{
	constructor(){
		super();
		this.state={ 
			search:'',
			location:''
		}
	}

	// callback function to update hammer
	updateSearch = (search, location) => {
		this.setState({
			search: search, 
			location: location
		})
	};

	render(){
		console.log('browser:search: ' + this.state.search);
		console.log('browser:location: ' + this.state.location);
		return (
			<div>
				<Search
					url='./api/'
					initialSearch={this.state.search}
					initialLocation={this.state.location }
					update={this.updateSearch}
				/>
				<br></br>
				<ItemLister
					url='./api/'
					initialSearch={this.state.search}
					initialLocation={this.state.location}
				/>
			</div>
		)
	}
}
