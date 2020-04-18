import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import { Modal} from 'antd-mobile';

import { CartWrap } from './styledCart'


@withRouter
class Cart extends Component {

  state = {
    modal1: false,
  }

  payClick(){
    this.setState({
      modal1:true
    })
  }

  onClose = key => () => {
    this.setState({
      [key]: false,
    });
  }

  render() {
    return (
      <CartWrap>
        <div className="infoBox">
          <div className='imgBox' style={{ backgroundImage: 'url(https://image.hongbeibang.com/FuU3dWpyPIQeG9NGdQLL1ST7Ofut?750X420)' }} ></div>
          <div className='infoContent'>
            <div className="title">酥松化口酸甜不腻：正宗台式凤梨酥（赠：凤凰酥做法）</div>
            <div className="teacher">
              讲师：
            <span>微光</span>
            </div>
          </div>
        </div>
        <div className="priceBox">
          <div className="subtotal">
            <div className="text">小计：</div>
            <div className="price">
              ￥9.9
            </div>
          </div>
          <div className="line"></div>
          <div className="total">
            合计：
            <span>￥9.9</span>

          </div>
        </div>
        <div className='wechatPay' onClick={this.payClick.bind(this)}>微信支付</div>
        <Modal
                
                visible={this.state.modal1}
                transparent
                maskClosable={false}
                onClose={this.onClose('modal1')}
                title="提示"
                footer={[{ text: '确定', onPress: () => {  this.onClose('modal1')(); } }]}
                wrapProps={{ onTouchStart: this.onWrapTouchStart }}
              // afterClose={() => { alert('afterClose'); }}
              >
                <div style={{ height: 20, overflow: 'scroll',color: '#4A4945',fontFamily: 'sans-serif' }}>
                请进入微信应用进行支付
                </div>
              </Modal>
      </CartWrap>
    );
  }
}

export default Cart;