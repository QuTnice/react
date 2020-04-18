import React, { Component } from 'react';
import { get } from 'utils/http.js'

import { withRouter } from 'react-router-dom'
import { ClassifyWrap } from './styledClassify'

@withRouter
class Classify extends Component {

  state = {
    list: [],
    list1: [],
    index: 0,
    show:[]
  }

  async componentDidMount() {
    let result = await get({
      url: 'https://api.hongbeibang.com/classify/get?_t=1576588859718&csrfToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOjAsImV4cCI6MTc2NTAyNjAzNSwiaWF0IjoxNTc1NjM3MjM1fQ.wNBSKGKrvhFlU8-mPKnqY_rWYuiIL46xD5bvAcf6E9U'
    })
    this.setState({
      list: result.data.classify
    })
    this.setState({
      show:this.state.list[0].list
    })

  }

  handleClick(id, index) {
    let show = this.state.list[index].list
    this.setState({
      index: index,
      show:show,
    })
    console.log(id);
  }

  clickBack(){
    this.props.history.goBack()
  }

  detailClick(id, name){
    // console.log(id, name);
    this.props.history.push('/search/recipe/' + name)
  }

  render() {
    return (
      <ClassifyWrap>
        <div className="top">
          <div className="back" onClick={this.clickBack.bind(this)}>
            <img width='27px' src="https://image.hongbeibang.com/FoTuxKG5pqYKuAsT8BjrflkAxEpj?48X48&imageView2/1/w/48/h/48" alt="" />
          </div>
          <input type="text" placeholder='搜索食谱/食材，烘焙/家常菜一应俱全' />
        </div>
        <div className="main">
          <div className="title">
            <ul>
              {/* <li>推荐</li> */}
              {
                this.state.list.map((value, index) => (
                  this.state.index === index ? <li key={value.classifyId} onClick={this.handleClick.bind(this, value.classifyId, index)} className='chose'>{value.name}</li> : <li key={value.classifyId} onClick={this.handleClick.bind(this, value.classifyId, index)}>{value.name}</li>
                ))
              }
            </ul>
          </div>
          <div className="subContent">
              {
                this.state.show.map((value) => (
                  <div className='subTitle'  key={value.classifyId}>
                    <p>{value.name}</p>
                    <div className="contentBox">
                    {
                      value.list.map((value1) => (
                        
                        <div className='itemBox'  key={value1.classifyId} onClick={this.detailClick.bind(this, value1.classifyId, value1.name)}>
                          <img src={value1.image} alt=""/>
                          <div className='imgName'>{value1.name}</div>
                        </div>
                      ))
                    }
                    </div>
                  </div>
                ))
              }
          </div>
        </div>

      </ClassifyWrap>
    );
  }
}

export default Classify;