import React from 'react';
import ReactDOM from 'react-dom';
import { Button, Col, Form, FormGroup, ControlLabel, FormControl, InputGroup } from 'react-bootstrap';
import { Search } from "./browser_search"

export class ItemLister extends React.Component {
	constructor(props) {
		super(props);
		this.state={
			items:[],
			search: props.initialSearch,
			location: props.initialSearch
		};
		this.fetchSearchResults(props)
	}

	componentWillReceiveProps(nextProps)
	{
		console.log(this.search)
		const searchChanged = nextProps.initialSearch !== this.props.initialSearch

		if (searchChanged){
			this.fetchSearchResults(nextProps)
		}
	}

	fetchSearchResults = (props) => {
		let collections = [];
		var string = ''
		var url = props.url

		// console.log(props.initialSearch)
		if (props.initialSearch) {
			string = '?search=' + props.initialSearch
			console.log(url + string)
		}
		fetch(url + string,{
			credentials: 'include'
		})
		.then((resp)=> resp.json())
		.then((newItem) => {
			newItem.forEach((object) => {
				collections.push(object);
			});
			this.setState({items: collections});
			})
	}

	componentDidMount() {
		this.fetchSearchResults(this.props)
		// this.setState()
		// let collections = [];
		// console.log('Itemlister:search: ' + this.state.search)
		// console.log(this.props.url);
		// fetch(this.props.url,{
		// 	credentials: 'include'
		// })
		// .then((resp)=> resp.json())
		// .then((newItem) => {
				// console.log(newItem);
			// newItem.forEach((object) => {
				// console.log(object);
				// collections.push(object);
			// });
			// this.setState({items: collections});
			// })
		// console.log(this.state.items);
	}

	createRedirect(){
		window.location="./create";
	}

	render() {
		return(
			<div>
			<ul>
				{this.state.items.length ? 
					this.state.items.map((item) => 
						<li
							key={item.id}>
							<h2>{item.item_name}</h2>
							<h4>${item.daily_price_in_dollars}</h4>
							<img src={item.item_image}/>
							<p>{item.item_description}</p>
						</li>
					) : <li>Loading...</li>
				 }
			</ul>
			</div>
		);
	}
};
