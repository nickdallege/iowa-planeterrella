import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/App.css';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { HashRouter, Route} from 'react-router-dom'

import App from './components/App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
	<HashRouter basename='/'>
		<Route path='' component={App}/>
	</HashRouter>, 
	document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
