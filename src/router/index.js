import React, { Component } from 'react'
import { HashRouter, Route, Switch, Redirect, } from 'react-router-dom'

import Admin from './AdminRoute.js'
import Login from '../pages/login/index.js'
 

class IRouter extends Component{
	render(){
        return(
            <HashRouter>
                <Switch>
                    <Route path="/login" component={Login} />  
                    <Route path="/" render={() => 
                        <Admin>
                            <Switch>
                                {/* <Route path="/home" component={HomePage} /> */}
                            </Switch>
                        </Admin>
                    }/>
                </Switch>
            </HashRouter>
        )
    }
}

export default IRouter