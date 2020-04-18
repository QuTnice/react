import React, { Component } from 'react';
import { get } from 'utils/http.js'

import SearchTop from "../../components/search/SearchTop";
import Btn from './Btn/Btn'
import ProSwiper from './product/proswiper'
 
import { LearnWrap } from './styledLearnBake'

class learnBake extends Component {
  state = {
    list: []
  }
  async componentDidMount() {
    let result = await get({
      url: 'https://api.hongbeibang.com/education/getIndexByWeb?_t=1576037002923&csrfToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOjAsImV4cCI6MTc2NTAyNjAzNSwiaWF0IjoxNTc1NjM3MjM1fQ.wNBSKGKrvhFlU8-mPKnqY_rWYuiIL46xD5bvAcf6E9U'
    })
    // let result11 = await get({
    //   url: '/api/education/getIndexByWeb?_t=1576037002923&csrfToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOjAsImV4cCI6MTc2NTAyNjAzNSwiaWF0IjoxNTc1NjM3MjM1fQ.wNBSKGKrvhFlU8-mPKnqY_rWYuiIL46xD5bvAcf6E9U'
    // })
    // console.log(result11);
    // console.log(result);
    this.setState({
      list: result.data.category
    })
  }

  render() {
    return (
      <LearnWrap>
        <SearchTop></SearchTop>
        <div className="main">
          <Btn></Btn>
          {
            this.state.list.slice(1,8).map((value) => 
              <ProSwiper key={value.categoryId} swiperPro={value} title={value.title}></ProSwiper>
            )
          }
        </div>
      </LearnWrap>
    );
  }
}

export default learnBake;