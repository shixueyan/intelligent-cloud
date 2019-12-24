import React, { Component } from 'react'
import { Row, Col,Menu,Button,Icon } from 'antd'
import './nav.less'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { MenuConfig }  from '../../config'

import { switchMenu } from '../../redux'

const { SubMenu } = Menu;
class NavLeft extends Component{
	constructor(props){
        super(props);
        this.state={
            collapsed: true,
			menuTreeNode: []

        }
	}
	componentWillReceiveProps(props){
		const collapsed=props.collapsed;
		console.log(this.state.collapsed)
        this.setState({collapsed});
    }
	componentWillMount(){
		console.log('menuConfig')
		console.log(MenuConfig)
		const menuTreeNode = this._renderMenu(MenuConfig)
		this.setState({
			menuTreeNode
			//currentKey: window.location.hash.replace(/#|\?.*$/g, '')
		})
	}
	_menuClick = ({item, key})=>{
		const {dispatch} = this.props
		if(item){
			dispatch(switchMenu(item.props.moduleNm))
		}
	}

	_renderMenu = (data)=>{
		return data.map((item)=>{
			if(item.child.length>0&&item.moduleType=='0'&&item.smallIcon){
				return (
					<SubMenu title={
								<span>
									<img src={require('../../assets/'+item.smallIcon)} />
									<span className="hidden">{item.moduleNm}</span>
								</span>
								} key={item.moduleId}>
						{this._renderMenu(item.child)}
					</SubMenu>
				)
			}else if(item.smallIcon&&item.moduleType=='0'){
				return (
					<Menu.Item onClick={this._menuClick} key={item.moduleId} title={item.moduleNm}>
						{/* <NavLink to={item.key}>{item.title}</NavLink> */}
						<NavLink to={item.key}>
							<img src={require('../../assets/'+item.smallIcon)} />
							<span className="hidden">{item.moduleNm}</span>
						</NavLink>
					</Menu.Item>
				)
			}else {
				return (
					<Menu.Item onClick={this._menuClick} key={item.moduleId} >   
						<NavLink to={item.key}>
							{item.moduleNm} 
						</NavLink>
					</Menu.Item>
				)
			}
		})
	}

	toggleCollapsed = () => {
		this.setState({
			collapsed: !this.state.collapsed,
		});
	};


	render(){
		return (
			<div className="wrapper">
				{/* <Button type="primary" onClick={this.toggleCollapsed} style={{ marginBottom: 16 }}>
					<Icon type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'} />
				</Button> */}
				<Menu
				//	defaultOpenKeys={['sub1']}
					mode="inline"
					theme="dark"
					inlineCollapsed={this.state.collapsed}
				>
					{this.state.menuTreeNode}
        		</Menu>
      		</div>
		)
	}
}

export default connect()(NavLeft)