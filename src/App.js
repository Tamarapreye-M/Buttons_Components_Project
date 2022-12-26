// import logo from "./logo.svg";
// import "./App.css";

// function App() {
// 	return (
// 		<div className="App">
// 			<header className="App-header">
// 				<img src={logo} className="App-logo" alt="logo" />
// 				<p>hello world</p>
// 				<a
// 					className="App-link"
// 					href="https://reactjs.org"
// 					target="_blank"
// 					rel="noopener noreferrer"
// 				>
// 					Learn React
// 				</a>
// 			</header>
// 		</div>
// 	);
// }

// export default App;

import React from "react";

import "./App.css";
import Button from "./components/Button";

const project = (
	<div className="grid">
		<div className="col">
			<h3>Button</h3>
			<Button />
		</div>
		<div className="col">
			<h3>Button with text variant</h3>
			<Button variant="text" />
		</div>
		<div className="col">
			<h3>Button with outline variant</h3>
			<Button variant="outline" />
		</div>
		<div className="col">
			<h3>Diabled Button</h3>
			<Button disabled />
		</div>
		<div className="col">
			<h3>Diabled Button with text Variant</h3>
			<Button variant="text" disabled />
		</div>
		<div className="col">
			<h3>Diabled Shadow Button</h3>
			<Button disabledShadow />
		</div>
		<div className="col">
			<h3>Button with Icon at the right</h3>
			<Button startIcon="add_shopping_cart" />
		</div>
		<div className="col">
			<h3>Button with Icon at the left</h3>
			<Button endIcon="add_shopping_cart" />
		</div>
		<div className="col">
			<h3>Small Button</h3>
			<Button size="sm" />
		</div>
		<div className="col">
			<h3>Medium Button</h3>
			<Button size="md" />
		</div>
		<div className="col">
			<h3>Large Button</h3>
			<Button size="lg" />
		</div>
		<div className="col">
			<h3>Default Button</h3>
			<Button color="default" />
		</div>
		<div className="col">
			<h3>Primary Button</h3>
			<Button color="primary" />
		</div>
		<div className="col">
			<h3>Secondary Button</h3>
			<Button color="secondary" />
		</div>
		<div className="col">
			<h3>Danger Button</h3>
			<Button color="danger" />
		</div>
	</div>
);
const App = () => {
	return <>{project}</>;
};

export default App;
