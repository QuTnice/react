import React, { Component } from 'react';
import { QuesWrap } from './styledQa'
import { Route, Switch, withRouter, Redirect } from 'react-router-dom'

import { Tabs } from 'antd-mobile';

import Top from './Top'
// import Qitem from './Qitem'

import CreamQ from './creamQ/CreamQ'
import NewQ from './newQ/NewQ'
import HotQ from './hotQ/HotQ'

const tabs = [
  { title: '精华问题', key: 'creamQ' },
  { title: '最新问题', key: 'newQ' },
  { title: '最热问题', key: 'hotQ' },
];


@withRouter
class Ques extends Component {

  tabClick = (tab) => {
    this.props.history.push(`/home/qa/${tab.key}`)
    console.log(this.props);
  }

  render() {
    let key=this.props.location.pathname.split("/").pop()
    return (
      <QuesWrap>
        <Top></Top>
        <div className="navR">
          <Tabs tabs={tabs} 
          page={key==='qa'?'newQ':key}
          initialPage={key==='qa'?'newQ':key}
          animated={false} 
          useOnPan={false}
          tabBarUnderlineStyle={{ border: '1px solid #E98B71', transform: 'scaleX(0.4)', }}
          tabBarTextStyle={{ fontSize: '14px', color: '#4A4945', fontWeight: 600 }}
          tabBarActiveTextColor='#000'
          tabBarInactiveTextColor='#999'
          onTabClick={this.tabClick}
          >
          </Tabs>
        </div>
        <div className="main">
        <Switch>
            <Route
              path='/home/qa/creamQ'
              render={() => (
                <CreamQ></CreamQ>
              )
              }></Route>
            <Route
              path='/home/qa/newQ'
              render={() => (
                <NewQ></NewQ>
              )
              }></Route>
            <Route
              path='/home/qa/hotQ'
              render={() => (
                <HotQ></HotQ>
              )
              }></Route>
            <Redirect from="/home/qa" to="/home/qa/newQ"></Redirect>
          </Switch>
          {/* <Qitem></Qitem> */}
        </div>
      </QuesWrap>
    );
  }
}

export default Ques;