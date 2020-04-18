import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'

@withRouter
class Video extends Component {

  backClick(){
    this.props.history.goBack() 
    // console.log(123123);
  }
  render() {
    // console.log(this.props);
    return (
      <>
        <div className='videoBox'>
          <div className="back" onClick={this.backClick.bind(this)}>
          <svg t="1576851750152" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2341" width="20" height="20"><path d="M766.862 1021.724c-10.24 0-20.594-3.64-28.444-10.922L228.693 538.396c-15.701-14.563-15.701-38.229 0-52.792L738.418 13.198c15.701-14.563 41.187-14.563 56.889 0 15.701 14.564 15.701 38.23 0 52.793L314.027 512l481.28 446.009c15.701 14.563 15.701 38.23 0 52.793-7.851 7.282-18.205 10.922-28.445 10.922z" fill="#333333" p-id="2342"></path></svg>
          </div>
          <video src={this.props.value.playURL} controls autoPlay poster={this.props.value.image}></video>
        </div>
        <div className="contentInfo">
          <div className="title">{this.props.value.shareTitle}</div>
          <div className="nowLearn">
            <img src="https://image.hongbeibang.com/FgRQxfAWq4kOdLc5xd_GxWm03Vs_?54X54&imageView2/1/w/54/h/54" alt="" />
            <span className='num'>
              {
                this.props.value.buyNum >= 1000 ?
                  <span>1000+</span>
                  : <span>{this.props.value.buyNum}</span>
              }
            </span>
            <span>人在学</span>
            <div className="tryLearn">
              <img src="https://image.hongbeibang.com/FvlaRxbO9YVI0n8uMoFepUzffkWK?imageView2/1/w/640/h/640" alt="" />试看课程
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Video;