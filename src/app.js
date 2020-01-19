class IndecisionApp extends React.Component {
	constructor(props) {
		super(props);
		this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
		this.handlePick = this.handlePick.bind(this);
		this.state = {
			options: ['Thing one', 'Thing two', 'Thing four']
		}
	}
	handleDeleteOptions() {
		this.setState(() => {
			return {
				options: []
			};
		});
	}
	handlePick () {
		const randomNum = Math.floor(Math.random() * this.state.options.length);
		const option = this.state.options[randomNum];
		alert(option);
	}
	render() {
		const title = 'Indecision'
		const subTitle = 'Put your life in the hands of a computer'

		return (
			<div>
				<Header title={title} subtitle={subTitle} /> 
				<Action 
					hasOptions={this.state.options.length > 0}
					handlePick={this.handlePick}
				/>
				<Options 
					options={this.state.options}
					handleDeleteOptions={this.handleDeleteOptions}
				/>
				<AddOption />
			</div>
		);
	}
}

class Header extends React.Component {
	render() {
		return (
			<div>
				<h1>{this.props.title}</h1>
				<h2>{this.props.subtitle}</h2>
			</div>
		);
	}
}

class Action extends React.Component {
	render() {
		return (
			<div>
				<button 
					onClick={this.props.handlePick}
					disabled={!this.props.hasOptions}
				>
					What should I do?
				</button>
			</div>
		);
	}
}

class Options extends React.Component {
	render() {
		const options = this.props.options;
		return (
			<div>
			<button onClick={this.props.handleDeleteOptions}>Remove All</button>
				{
				 options.map((option) => <Option key={option} optionText={option}/>)
				}
			</div>
		);
	}
}

class Option extends React.Component {
	render() {
		return (
			<div>
				<p>{this.props.optionText}</p>
			</div>
		);
	}
}

class AddOption extends React.Component {
	handleAddOption(e) {
		e.preventDefault();
		const optionValue = e.target.elements.option.value;
		if (optionValue) {
			alert(optionValue);
		}
	}
	render() {
		return (
			<div>
				<form onSubmit={this.handleAddOption}>
					<input type='text' name="option" />
					<button>Add Option</button>
				</form>
			</div>
		);
	}
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));