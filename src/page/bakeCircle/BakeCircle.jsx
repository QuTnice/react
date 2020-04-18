import React, { Component } from 'react';
// import { get } from 'utils/http.js'
import { Route, Switch, withRouter, Redirect } from 'react-router-dom'
// import BScroll from 'better-scroll'

import {
  TopWrap
} from '../learnBake/styledLearnBake'
import {
  CircleWrap,
} from './styledCirclr'
import New from './new/New'
import Follow from './follow/Follow'
import Master from './master/Master'

import { Tabs, WhiteSpace } from 'antd-mobile';
const tabs = [
  { title: '关注', key: 'follow' },
  { title: '最新', key: 'new' },
  { title: '达人', key: 'master' },
];
@withRouter
class BakeCircle extends Component {

  tabClick = (tab) => {
    this.props.history.push(`/home/circle/${tab.key}`)
  }

  
  render() {
    let key=this.props.location.pathname.split("/").pop()
    return (
      <CircleWrap>
        <TopWrap>
          <div className="imgBox">
            <img src="https://image.hongbeibang.com/Fj1u8rBVnt5DLwXqhx8QKlRPLoGI?48X48&imageView2/1/w/48/h/48" alt="" />
          </div>
          <div className="tabBox">
            <WhiteSpace />
            <Tabs tabs={tabs}
              page={key==='learn'?'new':key}
              initialPage={key==='learn'?'new':key}
              animated={false}
              useOnPan={false}
              tabBarUnderlineStyle={{ border: '1px solid #e98b71', transform: 'scaleX(0.2)', }}
              tabBarTextStyle={{ fontSize: '16px', color: '#999' }}
              tabBarActiveTextColor='#000'
              tabBarInactiveTextColor='#999'
              onTabClick={this.tabClick}
            >
            </Tabs>
            <WhiteSpace />
          </div>
          <div className="imgBox">  
            <img src="https://image.hongbeibang.com/FjmYGE5z6RvQL-_fdLKuSGYfmwO2?48X48&imageView2/1/w/48/h/48" alt="" />
          </div>
        </TopWrap>
        <div className="main">
          <Switch>
            <Route
              path='/home/circle/follow'
              render={() => (
                <Follow></Follow>
              )
              }></Route>
            <Route
              path='/home/circle/new'
              render={() => (
                <New></New>
              )
              }></Route>
            <Route
              path='/home/circle/master'
              render={() => (
                <Master></Master>
              )
              }></Route>
            <Redirect from="/home/circle" to="/home/circle/new"></Redirect>
          </Switch>
        </div>
      </CircleWrap >
    );
  }
}

export default BakeCircle;