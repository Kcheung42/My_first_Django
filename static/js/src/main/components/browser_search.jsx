import React from 'react';
import ReactDOM from 'react-dom';
import { Button, Col, Form, FormGroup, ControlLabel, FormControl, InputGroup } from 'react-bootstrap';

export class Search extends React.Component{
	constructor(props) {
		super();
		this.state={
			search: props.initialSearch,
			location: props.initialLocation,
			status: 0,
			submit: false,
		}
	}

	handleChange(e) {
		this.setState({
			[e.target.id]: e.target.value
		});
	}
	componentWillReceiveProps(nextProps)
	{
		// console.log(this.search)
		const searchChanged = nextProps.initialSearch !== this.props.initialSearch
	}

	handleSubmit(e) {
		e.preventDefault();
		// #update is a callback function from browser.jsx
		this.props.update(this.state.search, this.state.location)
	}

	render(){
		return(
			<div>
				<Form onSubmit={this.handleSubmit.bind(this)}>
					<FormGroup controlId='itemName'>
						<Col sm={8}>
							<FormControl
								id="search"
								type="text"
								value={this.state.search}
								placeholder="What do you need"
								onChange={this.handleChange.bind(this)}
							/>
						</Col>
					</FormGroup>
					<FormGroup controlId='Location'>
						<Col sm={8}>
							<FormControl
								id="location"
								type="text"
								value={this.state.location}
								placeholder="Location"
								onChange={this.handleChange.bind(this)}
							/>
						</Col>
					</FormGroup>
					<Button type="submit"> Find it! </Button>
				</Form>
			</div>
		);
	}
}
					// <Button type="button" onClick={this.handleSubmit.bind(this)}>
					// 	Search 
					// </Button>

// Expected propterties Types for protection
// Search.propTypes = {
// 	initialSearch: React.propTyupes.String
// };
