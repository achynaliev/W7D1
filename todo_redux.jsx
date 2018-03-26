import React from 'react';
import ReactDOM from 'react-dom';
import Root from './frontend/components/root';

import configureStore from './frontend/store/store';
import { allTodos } from './frontend/reducers/selectors';

const ToDo = () => (
  <h1>
  Todos App</h1>
);


document.addEventListener("DOMContentLoaded", () => {
  const store = configureStore();
  window.store = store;
  window.todos = allTodos(store.getState());
	ReactDOM.render(
		<Root store={store} />,
		document.getElementById('root')
	);
});
