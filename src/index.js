import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import * as serviceWorker from './serviceWorker';
import Router from './router'
import './index.css'
{/* <Router /> store={store} */}

// store
import {rootStore} from './redux'
//const store = rootStore()

const RootApp = ()=>{
	return (
			<Router/>
	)
}

ReactDOM.render(<RootApp/>, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
