import React, { Component } from 'react'
import { Redirect } from 'react-router';
import { Tabs  } from 'antd'
import './main.less'
const { TabPane } = Tabs;
class Main extends Component{
	constructor(props) {
		super(props);
		this.newTabIndex = 0;
		const panes = [
		  {
			title: '首页',
			content: 'Content of Tab 3',
			key: '3',
			url:'/home',
			closable: false,
		  },{
			title: '数据字典',
			content: 'Content of Tab 3',
			key: '4',
			url:'/data',
			closable: true,
		  },
		];
		this.state = {
		  activeKey: panes[0].key,
		  panes,
		};
	  }
	  onChange = activeKey => {
		
		this.setState({ activeKey });
		let url=(this.state.panes.filter(item=>item.key===activeKey))[0].url
		console.log(url)
		window.location.href='/#'+url
	  };
	
	  onEdit = (targetKey, action) => {
		this[action](targetKey);
	  };
	  
	  remove = targetKey => {
		let { activeKey } = this.state;
		let lastIndex;
		this.state.panes.forEach((pane, i) => {
		  if (pane.key === targetKey) {
			lastIndex = i - 1;
		  }
		});
		const panes = this.state.panes.filter(pane => pane.key !== targetKey);
		if (panes.length && activeKey === targetKey) {
		  if (lastIndex >= 0) {
			activeKey = panes[lastIndex].key;
		  } else {
			activeKey = panes[0].key;
		  }
		}
		this.setState({ panes, activeKey });
	  };
	
	  render() {
		return (
			<div className="main-wrapper">
				<Tabs
					onChange={this.onChange}
					activeKey={this.state.activeKey}
					type="editable-card"
					hideAdd={true}
					onEdit={this.onEdit}
				>
					{this.state.panes.map(pane => (
						<TabPane tab={pane.title} key={pane.key} closable={pane.closable}>
							{this.props.children}
						</TabPane>
					))}
				</Tabs>
			</div>
		);
	  }
}

export default Main