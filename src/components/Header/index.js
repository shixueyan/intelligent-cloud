import React, { Component } from 'react'
import { Row, Col,Button } from 'antd'
import './header.less'


class Header extends Component{
	constructor(props){
		super(props);
		this.state={
            collapsed: true
        }
	}
	setCollapsed = () =>{
		this.props.setCollapsed(!this.state.collapsed);
		const collapsed=!this.state.collapsed
		this.setState({
			collapsed
		})
    }
	render(){
		return (
			<div className="header">
				<div className="left-nav-button">
					<Button onClick={this.setCollapsed} type="primary" >
					</Button>
				</div>
				<div className='logo-wrapper'>
					<img src="http://10.10.49.25:9080/imp/images/Image/logo2.png"></img>
					<span>南天云智维管理平台</span>
				</div>
			</div>
		)
	}
}

export default Header