import React, { Component } from 'react';
import { get } from 'utils/http.js'
import BScroll from 'better-scroll'
import Citem from '../CreamItem'

class CreamQ extends Component {
  state = {
    list: [],
    page:0
  }

  async componentDidMount() {
    let result = await get({
      url: 'https://api.hongbeibang.com/question/getEssence?_t=1576503466260&csrfToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOjAsImV4cCI6MTc2NTAyNjAzNSwiaWF0IjoxNTc1NjM3MjM1fQ.wNBSKGKrvhFlU8-mPKnqY_rWYuiIL46xD5bvAcf6E9U&pageIndex=0&pageSize=10'
    })
    // console.log(result.data.content.data);
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
        url: `https://api.hongbeibang.com/question/getEssence?_t=1576503466260&csrfToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOjAsImV4cCI6MTc2NTAyNjAzNSwiaWF0IjoxNTc1NjM3MjM1fQ.wNBSKGKrvhFlU8-mPKnqY_rWYuiIL46xD5bvAcf6E9U&pageIndex=${this.state.page}&pageSize=10`,

      })

      bScroll.refresh()
      this.state.list = [
        ...this.state.list,
        ...result1.data.content.data
      ]


      bScroll.finishPullUp()
    })
  }
  render() {
    return (
      <div className="wrapper">
        <div>
          {
            this.state.list.map((value) => (
              <Citem key={value.contentId} value={value}></Citem>
            ))
          }
        </div>
      </div>
    );
  }
}

export default CreamQ;