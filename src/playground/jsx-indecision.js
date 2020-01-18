console.log('app.js is running!');

const app = {
	title: "Indecision App",
	subtitle: 'This is some info',
	options: []
};

const onFormSubmit = (e) => {
	e.preventDefault();

	const option = e.target.elements.option.value;

	if (option) {
		app.options.push(option);
		e.target.elements.option.value = '';
		renderPage();;
	}
}

const onRemoveAll = () => {
	app.options = []
	renderPage();
}

const onMakeDecision = () => {
	const randomNum = Math.floor(Math.random() * app.options.length);
	const option = app.options[randomNum];
	alert(option)
}

const appRoot = document.getElementById('app');

const numbers = [55, 101, 1000];

const renderPage = () => {
	const template = (
		<div>
			<h1>{app.title}</h1>
			{app.subtitle && <p>{app.subtitle}</p>}
			<p>{app.options.length > 0 ? 'Here are your options' : 'No Options'}</p>
			<button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
			<button onClick={onRemoveAll}>Remove All</button>
			<ol>
				{
					app.options.map((item, index) => <li key={index}>{item}</li>)
				}
			</ol>
			<form onSubmit={onFormSubmit}>
				<input type='text' name="option" />
				<button>Add Option</button>
			</form>
		</div>
	);


	ReactDOM.render(template, appRoot);
}

renderPage();