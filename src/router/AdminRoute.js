/**
 * create at 07/23/18
 */
import React, { Component } from 'react'
import { Row, Col } from 'antd'

//import { Header,  NavLeft } from '../components'
import Header from '../components/Header/index.js'
import NavLeft from '../components/NavLeft/index.js'
// style
import '../style/common.less'

class AdminComponent extends Component{
	render(){
		return (
            <Row className="container">
                <Row className="header">
                    <Header/>
                </Row>
                <Row className="main">
                    <Col className="nav-left">
                        <NavLeft />
                    </Col>
                    <Col  className="content">
                        {this.props.children}
                    </Col>
                </Row>
            </Row>
		)
	}
}

export default AdminComponent