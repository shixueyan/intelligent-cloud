/**
 * create at 07/23/18
 */
import React, { Component } from 'react'
import { Row, Col } from 'antd'

//import { Header,  NavLeft } from '../components'
import Header from '../components/Header'
import NavLeft from '../components/NavLeft'
import Main from '../components/Main'
// style
import '../style/common.less'

class AdminComponent extends Component{
    constructor(props){
        super(props);
        this.state={
            collapsed: ''
        }
    }
    setCollapsed = (collapsed) => {
        this.setState({
            collapsed
        })
    }
	render(){
		return (
            <Row className="container">
                <Row className="header">
                    <Header setCollapsed={this.setCollapsed}/>
                </Row>
                <Row className="main">
                    <Col className="nav-left">
                        <NavLeft collapsed={this.state.collapsed}/>
                    </Col>
                    <Col  className="content">
                          {this.props.children} 
                         {/* <Main/> */}
                    </Col>
                </Row>
            </Row>
		)
	}
}

export default AdminComponent