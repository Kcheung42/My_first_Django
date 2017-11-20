import React from 'react';
import { render } from 'react-dom';

export class TemplateClass extends React.Component {
	render() {
		return (
			<div className="react-root">
				<div className="row">
					<div className="col-xs-10 col-xs-offset-1">
						<h1>Hello World from React</h1>
					</div>
				</div>
			</div>
		);
	}
}
