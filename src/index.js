import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'

// style
import './index.css'
// router
import Router from './router'


// store
//import {rootStore} from './redux'
import configureStore from './redux/store'
const store = configureStore()
const RootApp = ()=>{
	return (
		<Provider store={store}>
			<Router />
		</Provider>
	)
}

ReactDOM.render(<RootApp/>, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

