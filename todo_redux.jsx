import React from 'react';
import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux'

// import store from './store';

// window.store = store;


const ToDo = () => (
  <h1>
  Todos App</h1>
);


document.addEventListener("DOMContentLoaded", () => {
	ReactDOM.render(
		<ToDo />,
		document.getElementById('root')
	);
});
