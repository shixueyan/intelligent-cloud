/**
 * create 07/23/18
 */
import React, { Component } from 'react'
import { Row, Col,Button } from 'antd'
import './header.less'


class Header extends Component{
	render(){
		return (
			<div className="header">
				<div class="left-nav-button">
					<Button type="primary" >
					</Button>
				</div>
				<div class='logo-wrapper'>
					<img src="http://10.10.49.25:9080/imp/images/Image/logo2.png"></img>
					<span>南天云智维管理平台</span>
				</div>
			</div>
		)
	}
}

export default Header