import React, { Component } from 'react';
import { BaikeWrap,Bitem } from './styledBaike'

import { get } from 'utils/http.js'

import { withRouter } from 'react-router-dom'

@withRouter
class Baike extends Component {

  state = {
    list:[]
  }

  async componentDidMount(){
    let result = await get({
      url:'https://api.hongbeibang.com/education/getNewbieGuide?type=5&_t=1576585716330&csrfToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOjAsImV4cCI6MTc2NTAyNjAzNSwiaWF0IjoxNTc1NjM3MjM1fQ.wNBSKGKrvhFlU8-mPKnqY_rWYuiIL46xD5bvAcf6E9U'
    })
    console.log(result.data.courseGuide);
    this.setState({
      list: result.data.courseGuide
    })
  }

  clickBack(){
    this.props.history.goBack()
  }

  render() {
    return (
      <BaikeWrap>
        <div className="topWrap">
          <div onClick={this.clickBack.bind(this)}>
            <img src="https://image.hongbeibang.com/FoTuxKG5pqYKuAsT8BjrflkAxEpj?48X48&imageView2/1/w/48/h/48" alt="" />
          </div>
        </div>
        <div className="main">
          <div>

          {
            this.state.list.map((value) => (
              <Bitem className="Bitem"
              key={value.courseId}
              width="1px"
              color="#E7E2E5"
              direction="bottom"
            >
                <img src={value.image} alt=""/>
                <div className="content">
                {value.title}
                </div>
            </Bitem>
            ))
          }
          </div>
        </div>
      </BaikeWrap>
    );
  }
}

export default Baike;