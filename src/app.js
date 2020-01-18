class IndecisionApp extends React.Component {
	render() {
		const title = 'Indecision'
		const subTitle = 'Put your life in the hands of a computer'
		const options = ['Thing one', 'Thing two', 'Thing three', 'Thing four']

		return (
			<div>
				<Header title={title} subtitle={subTitle} /> 
				<Action />
				<Options options={options}/>
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
				<button>What should I do?</button>
			</div>
		);
	}
}

class Options extends React.Component {
	render() {
		const options = this.props.options;
		return (
			<div>
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
	render() {
		return (
			<div>
				<p>AddOption component here</p>
			</div>
		);
	}
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));