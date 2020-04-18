import React, { Component } from 'react';
import { get } from 'utils/http.js'
import { withRouter } from 'react-router-dom'
import BScroll from 'better-scroll'
import Qitem from '../Qitem'

@withRouter
class NewQ extends Component {

  state = {
    list: [],
    page: 0
  }

  async componentDidMount() {
    let result = await get({
      url: 'https://api.hongbeibang.com/question/getNew?_t=1576502354036&csrfToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOjAsImV4cCI6MTc2NTAyNjAzNSwiaWF0IjoxNTc1NjM3MjM1fQ.wNBSKGKrvhFlU8-mPKnqY_rWYuiIL46xD5bvAcf6E9U&pageIndex=0&pageSize=10'
    })
    this.setState({
      list: result.data.content.data
    })
    const wrapper = document.querySelector('.wrapper')

    const bScroll = new BScroll(wrapper, {
      scrollX: false,  //开启横向滚动
      click: true,  // better-scroll 默认会阻止浏览器的原生 click 事件
      scrollY: true, //关闭竖向滚动,
      pullUpLoad: true,
      // click: true,
    })
    // let page = 0
    bScroll.on('pullingUp', async () => {
      console.log(123);
      this.setState({
        page: this.state.page + 10
      })
      var result1 = await get({
        url: `https://api.hongbeibang.com/question/getNew?_t=1576502354036&csrfToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOjAsImV4cCI6MTc2NTAyNjAzNSwiaWF0IjoxNTc1NjM3MjM1fQ.wNBSKGKrvhFlU8-mPKnqY_rWYuiIL46xD5bvAcf6E9U&pageIndex=${this.state.page}&pageSize=10`,

      })

      bScroll.refresh()
      this.state.list = [
        ...this.state.list,
        ...result1.data.content.data
      ]


      bScroll.finishPullUp()
    })
  }

  handleClick() {
    console.log(123);
    // this.props.histort.push('/search/recipe/千层酥')
  }

  render() {
    return (
      <div className='wrapper'>
        <div>
          {
            this.state.list.map((value) => (
              <Qitem key={value.contentId} value={value}></Qitem>
            ))
          }
        </div>
      </div>
    );
  }
}

export default NewQ;