import React from 'react';
import ReactDOM from 'react-dom';
import Cookies from 'universal-cookie';
import { Button, Col, Form, FormGroup, ControlLabel, FormControl, InputGroup } from 'react-bootstrap';

export class CreateListing extends React.Component {
	constructor() {
		super();
		this.state = {
			value: '',
			item: {
				item_name: "",
				item_image: "",
				item_description: "",
				daily_price_in_dollars: 0,
			},
			submit: false,
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	
	handleChange(e) {
		// console.log(e.target.value);
		// console.log(e.target.id);
		const returnObj = this.state.item;
		returnObj[e.target.id] = e.target.value;
		// console.log(returnObj);
		this.setState({item: returnObj});
	}

	handleSubmit() {
		const cookies = new Cookies();
		this.setState({submit: true});
		// console.log(this.state.item);
		// console.log(document.cookie);
		// console.log(cookies.get('csrftoken'));
		fetch('./api/create/', {
			method: 'POST',
			body: JSON.stringify(this.state.item),
			credentials: 'same-origin',
			headers: {
				"Content-Type": "application/json",
				"X-CSRFTOKEN": cookies.get('csrftoken'),
				"Accept": "application/json",
			}
		}).then((resp) => {
			// console.log("Succesful POST");
			// console.log(resp);
		}).catch((error) => {
			// console.log(error);
		});
	}
	_renderSubmission() {
		if (this.state.submit) {
			return (
				<div>
					<ul>
						<li><h2>{this.state.item.item_name}</h2><h4>${this.state.item.daily_price_in_dollars}</h4><p>{this.state.item.item_description}</p><img src={this.state.item.item_image}/></li>
					</ul>
				</div>
			);
		}
	}

	listingRedirect(){
		window.location="../";
	}

	render() {
		return(
			<div>
			<Button type="button" onClick={this.listingRedirect}>
				View All Listings
			</Button>
			<Form horizontal>
				<FormGroup controlId='itemName'>
					<Col componentClass={ControlLabel} sm={4}>
						Item Name
					</Col>
					<Col sm={8}>
						<FormControl
							id="item_name"
							type="text"
							value={this.state.item_name}
							placeholder="Enter Item Name Here"
							onChange={this.handleChange}
						/>
					</Col>
				</FormGroup>
				<FormGroup controlId='itemImage'>
					<Col componentClass={ControlLabel} sm={4}>
						Item Image
					</Col>
					<Col sm={8}>
						<FormControl
							id="item_image"
							type="text"
							value={this.state.image_description}
							placeholder="Enter Image Url"
							onChange={this.handleChange}
						/>
					</Col>
				</FormGroup>
				<FormGroup controlId='itemDescription'>
					<Col componentClass={ControlLabel} sm={4}>
						Item Description
					</Col>
					<Col sm={8}>
						<FormControl
							id="item_description"
							componentClass="textarea"
							type="text"
							value={this.state.item_description}
							placeholder="Enter Item Description Here"
							onChange={this.handleChange}
						/>
					</Col>
				</FormGroup>
				<FormGroup controlId='dailyPriceInDollars'>
					<Col componentClass={ControlLabel} sm={4}>
						Daily Price
					</Col>
					<Col sm={8}>
						<InputGroup>
							<InputGroup.Addon>$</InputGroup.Addon>
							<FormControl
								id="daily_price_in_dollars"
								type="number"
								value={this.state.daily_price_in_dollars}
								placeholder="Set Daily Price"
								onChange={this.handleChange}
							/>
							<InputGroup.Addon>.00</InputGroup.Addon>
						</InputGroup>
					</Col>
				</FormGroup>
				<Button type="button" onClick={this.handleSubmit}>
					Create Listing
				</Button>
			</Form>
			{this._renderSubmission()}
			</div>
		)
	}
};
