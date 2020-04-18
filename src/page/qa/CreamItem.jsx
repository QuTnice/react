import React, { Component } from 'react';

import { Citems } from './styledQa'
 
class Citem extends Component {
  render() {
    console.log(this.props.value);
    return (
      <Citems className="qitem"
      width="1px"
      color="#E7E2E5"
      direction="bottom"
      >
        <div className="clientInfo">
          <div className="portrait">
            <img src={this.props.value.clientImage} alt=""/>
          </div>
          <div className="masterImg">
            <img src="https://image.hongbeibang.com/Fj1UT_HuSX4MkdcukYhWRpioEyWx?200X200&imageView2/1/w/80/h/80" alt=""/>
          </div>
          <div className="clitentNma">{this.props.value.clientName}</div>
        </div>
        <div className="content">
          <div className="title">{this.props.value.coverTitle}</div>
          <div className="detail">{this.props.value.coverSummary}</div>
        </div>
        <div className="like">
          <span>{this.props.value.hotNum}</span>个赞
        </div>
      </Citems>
    );
  }
}

export default Citem;