import React, { Component } from 'react';

import { ProfileWrap } from './styledProfile'
import { withRouter } from 'react-router-dom'

@withRouter
class Profile extends Component {

  backClick(){
    this.props.history.goBack()
  }

  render() {
    return (
      <ProfileWrap>
        <div className="topWrap">
          <div onClick={this.backClick.bind(this)}>
            <img className='backImg' src="https://image.hongbeibang.com/FlqyNFosCk9hhyBMoPkej9xbh_Yf?imageView2/1/w/50/h/50" alt="" />
          </div>
          <span>登录</span>
        </div>
        <div className="main">
          <div className="center">
            <img src="https://image.hongbeibang.com/FoBGm71FF5SYiTw0Wc0xkeiL3eQz?imageMogr2/strip/thumbnail/510x510" alt="" />
          </div>
          <div className="loginbtn">
            <div>使用微信登录</div>
          </div>
          <div className="loginText">
            其他登录方式
          </div>
          <div className="protocol">
            <span className='text'>登录即代表阅读并同意</span>
            <span className='deal'>服务条款</span>
          </div>
        </div>
      </ProfileWrap>
    );
  }
}

export default Profile;