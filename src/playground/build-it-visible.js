let visibility = false;

const toggleText = () => {
	visibility = !visibility;
	render();
}

const appRoot = document.querySelector('#app');

const render = () => {
	const template = (
		<div>
			<h1>Visibility Toggle</h1>
			<button onClick={toggleText}>{visibility ? 'Hide Details' : 'Show Details'}</button>
			{visibility && <p>Hey. These are some details you can now see!</p>}
		</div>
	)

	ReactDOM.render(template, appRoot);
}

render();