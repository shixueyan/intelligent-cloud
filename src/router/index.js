import React, { Component } from 'react'
import { HashRouter, Route, Switch, Redirect, } from 'react-router-dom'

import Admin from './AdminRoute.js'
import Login from '../pages/login/index.js'
import Main from '../components/Main'
import {Data,Home} from '../pages'

class IRouter extends Component{
	render(){
        return(
            <HashRouter>
                <Switch>
                    <Route path="/login" component={Login} />  
                    <Route path="/" render={() => 
                        <Admin>
                            <Main>
                                <Switch>
                                    <Route path="/home" component={Home} /> 
                                    <Route path="/data" component={Data} /> 
                                    <Redirect to="/home"/>
                                </Switch>
                            </Main>
                        </Admin>
                    }/>
                </Switch>
            </HashRouter>
        )
    }
}

export default IRouter