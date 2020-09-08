import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import * as i18n from './i18n';
import { I18nextProvider } from 'react-i18next';
import { Provider } from 'react-redux';
import store from './redux/index';
import App from './components/app';

ReactDOM.render(
	<BrowserRouter>
		<Provider store={store}>
			<App />
		</Provider>
	</BrowserRouter>,
	document.getElementById("app")
);