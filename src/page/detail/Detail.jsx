import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import { get } from 'utils/http.js'
import MeterialBox from './Material'
import { Modal } from 'antd-mobile';

import { DetailWrap, ClientBox } from './styledDetail'


function closest(el, selector) {
  const matchesSelector = el.matches || el.webkitMatchesSelector || el.mozMatchesSelector || el.msMatchesSelector;
  while (el) {
    if (matchesSelector.call(el, selector)) {
      return el;
    }
    el = el.parentElement;
  }
  return null;
}


@withRouter
class Detail extends Component {


  state = {
    list: [],
    material: [],
    step: [],
    value: '4',
    modal1: false,
    // modal2: false,
  }

  // showModal = key => (e) => {
  //   e.preventDefault(); // 修复 Android 上点击穿透
  //   this.setState({
  //     [key]: true,
  //   });
  // }
  onClose = key => () => {
    this.setState({
      [key]: false,
    });
  }

  onWrapTouchStart = (e) => {
    // fix touch to scroll background page on iOS
    if (!/iPhone|iPod|iPad/i.test(navigator.userAgent)) {
      return;
    }
    const pNode = closest(e.target, '.am-modal-content');
    if (!pNode) {
      e.preventDefault();
    }
  }


  async componentDidMount() {
    console.log(this.props.location.pathname.split('/')[2]);
    let result = await get({
      url: `https://api.hongbeibang.com/recipe/get?_t=1576740514081&csrfToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOjAsImV4cCI6MTc2NTAyNjAzNSwiaWF0IjoxNTc1NjM3MjM1fQ.wNBSKGKrvhFlU8-mPKnqY_rWYuiIL46xD5bvAcf6E9U&contentId=${this.props.location.pathname.split('/')[2]}&quantity=`
    })

    // console.log(result.data.recipe);
    this.setState({
      list: result.data.recipe,
      material: result.data.recipe.material,
      step: result.data.recipe.step,
      value: result.data.recipe.quantity
    })
  }

  applyAjax() {
    (async () => {

      let result = await get({
        url:
          `https://api.hongbeibang.com/recipe/get?_t=1576759025493&csrfToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOjAsImV4cCI6MTc2NTAyNjAzNSwiaWF0IjoxNTc1NjM3MjM1fQ.wNBSKGKrvhFlU8-mPKnqY_rWYuiIL46xD5bvAcf6E9U&contentId=${this.props.location.pathname.split('/')[2]}&quantity=${this.state.value}`
      });
      console.log(this.state.material);
      this.setState({
        material: result.data.recipe.material,
        // value: e.target.value
      })
    })()
  }

  async inputChange(e) {
    // console.log(e.target.value);
    if (e.target.value <= 9999 && e.target.value > 0 || e.target.value === '') {
      await this.setState({
        value: e.target.value
      })
      this.applyAjax()

    }
    else {
      this.setState({
        modal1: true,
      })
    }

  }
  addClick() {
    if (this.state.value < 9999) {
      this.setState({
        value: ++this.state.value
      })
      this.applyAjax()
    } else {
      this.setState({
        modal1: true,
      })
    }
  }

  keyUp(e) {
    console.log(e.target.value);
    // if (e.target.value == 13) {
    //   this.applyAjax()
    // }
  }

  minusClick() {
    if (this.state.value > 1) {
      this.setState({
        value: --this.state.value
      })
      this.applyAjax()
    } else {
      this.setState({
        modal1: true,
      })
    }

    console.log(this.state.value);
  }

  backClick() {
    this.props.history.push('/')
  }

  render() {
    return (
      <DetailWrap>
        <div className="top">
          <img onClick={this.backClick.bind(this)} width='27px' src="https://image.hongbeibang.com/FoTuxKG5pqYKuAsT8BjrflkAxEpj?48X48&imageView2/1/w/48/h/48" alt="" />
          <div className="collect">收藏</div>
        </div>
        <div className="main">
          <img src={this.state.list.image} alt="" />
          <div className="titleBox">
            <div className="title">{this.state.list.coverTitle}</div>
            <ClientBox className="clientBox">
              <div className="clientName">
                <img src={this.state.list.clientImage} alt="" />
                <div className='name'>{this.state.list.clientName}</div>
                <div className='attention'>+关注</div>
              </div>
              <div className="intro">{this.state.list.coverSummary}</div>
            </ClientBox>
          </div>
          <div className="materials">
            <div className="title">食材用料</div>
            <div className="operate">
              <div className="add" onClick={this.minusClick.bind(this)}>
                <div className="addBox"></div>
              </div>
              <div className="valueWrap">
                <input type="text" value={this.state.value} onKeyUp={this.keyUp.bind(this)} className="valueBox" onChange={this.inputChange.bind(this)} />
              </div>
              {/* <Button onClick={this.showModal('modal1')}><Icon type="up" />basic<Icon type="up" /></Button> */}
              <Modal
                visible={this.state.modal1}
                transparent
                maskClosable={false}
                onClose={this.onClose('modal1')}
                title="提示"
                footer={[{ text: '确定', onPress: () => { console.log('确定'); this.onClose('modal1')(); } }]}
                wrapProps={{ onTouchStart: this.onWrapTouchStart }}
              // afterClose={() => { alert('afterClose'); }}
              >
                <div style={{ height: 20, overflow: 'scroll' }}>
                  只能输入数字1～9999哦
                </div>
              </Modal>
              <div className="minus" onClick={this.addClick.bind(this)}>
                <div className="addBox"></div>
                <div className="standBox"></div>
              </div>

              <span style={{ color: '#999' }}>&nbsp;&nbsp;&nbsp;(份量/{this.state.list.unit})</span>
            </div>
            <MeterialBox value={this.state.material}></MeterialBox>

          </div>
          <div className="space30"></div>
          <div className="step">
            {
              this.state.step.map((value, index) => (
                <div className="stepItem" key={value.contentRecipeStepId}>
                  <p className='stepTitle'>步骤{index + 1}</p>
                  <img src={value.image} alt="" />
                  <p className='stepText'>{value.text}</p>
                </div>
              ))
            }

          </div>
        </div>
      </DetailWrap>
    );
  }
}

export default Detail;