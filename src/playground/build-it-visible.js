class VisibilityToggle extends React.Component {
	constructor(props) {
		super(props);
		this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
		this.state = {
			visibility: false
		}
	}
	handleToggleVisibility() {
		this.setState((prevState) => {
			return {
				visibility: !prevState.visibility
			};
		});
	}
	render() {
		return (
			<div>
				<h1>Visibility Toggle</h1>
				<button onClick={this.handleToggleVisibility}>{this.state.visibility ? 'Hide Details' : 'Show Details'}</button>
				{this.state.visibility && ( 
					<p>Hey. These are some details you can now see!</p> 
				)}
			</div>
		);	
	}
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));

// let visibility = false;

// const toggleText = () => {
// 	visibility = !visibility;
// 	render();
// }

// const appRoot = document.querySelector('#app');

// const render = () => {
// 	const template = (
// 		<div>
// 			<h1>Visibility Toggle</h1>
// 			<button onClick={toggleText}>{visibility ? 'Hide Details' : 'Show Details'}</button>
// 			{visibility && <p>Hey. These are some details you can now see!</p>}
// 		</div>
// 	)

// 	ReactDOM.render(template, appRoot);
// }

// render();