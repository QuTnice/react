import React, { Component } from 'react';

import { withRouter } from 'react-router-dom'

import { TabBar } from 'antd-mobile'

import LearnBake from "./learnBake/LearnBake";
import BakeCircle from "./bakeCircle/BakeCircle";
import QuesAnswer from './qa/Ques'
// import Profile from './profile/Profile'
import Mine from './profile/Mine'


@withRouter
class home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'learn',
      hidden: false,
      fullScreen: true,
    };
  }

  componentDidMount(){
    let rou = this.props.location.pathname.split('/')[2]
    this.setState({
      selectedTab: rou
    })
  }

  render() {
    return (
      <div style={this.state.fullScreen ? { position: 'fixed', height: '100%', width: '100%', top: 0 } : { height: 400 }}>
        <TabBar
          unselectedTintColor="#666"
          tintColor="#000"
          barTintColor="white"
          hidden={this.state.hidden}
        >
          <TabBar.Item
              title="学烘焙"
              key="learn"
              icon={<div style={{
                width: '22px',
                height: '22px',
                background: `url(https://image.hongbeibang.com/FhngZoiK_s7Zw4K3DxLogRfqoO06?50X50&imageView2/1/w/50/h/50) center center /  22px 22px no-repeat` 
              }}
              />
              }
              selectedIcon={<div style={{
                width: '22px',
                height: '22px',
                background: `url(https://image.hongbeibang.com/FsxN7RUFRJ9Zdris5Z22haR2xIhj?50X50&imageView2/1/w/50/h/50) center center /  22px 22px no-repeat` 
              }}
              />
              }
              selected={this.state.selectedTab === 'learn'}
              onPress={() => {
                this.props.history.push('/home/learn')
                this.setState({
                  selectedTab: 'learn',
                });
              }}
            >
              <LearnBake></LearnBake>
            </TabBar.Item>
          <TabBar.Item
            icon={
              <div style={{
                width: '22px',
                height: '22px',
                background: `url(https://image.hongbeibang.com/Fkpdn7F9EWxvNeSS8M7V4_xbRPlf?50X50&imageView2/1/w/50/h/50) center center /  21px 21px no-repeat` 
              }}
              />
            }
            selectedIcon={
              <div style={{
                width: '22px',
                height: '22px',
                background: `url(https://image.hongbeibang.com/Flc4c0tB_BGGFnA-ORFowqfNOpaD?50X50&imageView2/1/w/50/h/50) center center /  21px 21px no-repeat` 
              }}
              />
            }
            title="烘焙圈"
            key="circle"
            selected={this.state.selectedTab === 'circle'}
            onPress={() => {
              this.props.history.push('/home/circle')
              this.setState({
                selectedTab: 'circle',
              });
            }}
          >
            <BakeCircle></BakeCircle>
          </TabBar.Item>
          <TabBar.Item
            icon={
              <div style={{
                width: '22px',
                height: '22px',
                background: `url(https://image.hongbeibang.com/Flm_lYHJQA56h0VyhdRhQ1i5iO06?50X50&imageView2/1/w/50/h/50) center center /  21px 21px no-repeat` 
              }}
              />
            }
            selectedIcon={
              <div style={{
                width: '22px',
                height: '22px',
                background: `url(https://image.hongbeibang.com/Fj5pW1jZYwlS9rB3h_nsvXNptuPX?50X50&imageView2/1/w/50/h/50) center center /  21px 21px no-repeat` 
              }}
              />
            }
            title="问答"
            key="qa"
            selected={this.state.selectedTab === 'qa'}
            onPress={() => {
              this.props.history.push('/home/qa')
              this.setState({
                selectedTab: 'qa',
              });
            }}
          >
            <QuesAnswer></QuesAnswer>
          </TabBar.Item>
          <TabBar.Item
            icon={
              <div style={{
                width: '22px',
                height: '22px',
                background: `url(https://image.hongbeibang.com/FrYeKj0MohOJQuNzUgCugg90cHCS?50X50&imageView2/1/w/50/h/50) center center /  21px 21px no-repeat` 
              }}
              />
            }
            selectedIcon={
              <div style={{
                width: '22px',
                height: '22px',
                background: `url(https://image.hongbeibang.com/FpNSY800vY0I5ytvWaqDbdJqT0HR?50X50&imageView2/1/w/50/h/50) center center /  21px 21px no-repeat` 
              }}
              />
            }            
            title="小窝"
            key="profile"
            selected={this.state.selectedTab === 'profile'}
            onPress={() => {
              this.props.history.push('/home/profile')
              this.setState({
                selectedTab: 'profile',
              });
            }}
          >
            <Mine></Mine>
          </TabBar.Item>
        </TabBar>
      </div>
    );
  }
}

export default home;