// import preact
import { h, render, Component } from 'preact';

// this component represents the suggestions given based on the weather
export default class Suggestions extends Component {

	// rendering a function when the button is clicked
	render() {

		if (this.props.display == true) {
			return (
				<div>
				<ul style='text-align: left'>
					<li>Wear a jacket!</li>
					<li>It's cold out there!</li>
				</ul>
				</div>
			);
		}
	}

}
