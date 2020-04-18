import React, { Component } from 'react';
import { get } from 'utils/http.js'

import Swiper from 'swiper'

import 'swiper/css/swiper.min.css'

class ProSwiper1 extends Component {
  // constructor() {
  //   super()
  // }

  state = {
    list: [],
    bgc:['94BFBB','927472','E5AA9C','5BADA6','b78b9f','acbcc9','8f7671','acb99b','aca6bb','c3d0ad','94BFBB','927472','E5AA9C','5BADA6','b78b9f','acbcc9','8f7671','acb99b','aca6bb','c3d0ad']
  }

  async componentDidMount() {
    let result = await get({
      url: 'https://api.hongbeibang.com/community/getByLimit?isShow=4&_t=1576058206446&csrfToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOjAsImV4cCI6MTc2NTAyNjAzNSwiaWF0IjoxNTc1NjM3MjM1fQ.wNBSKGKrvhFlU8-mPKnqY_rWYuiIL46xD5bvAcf6E9U&pageIndex=0&pageSize=99'
    })
    this.setState({
      list: result.data.data
    })
    // console.log(result.data.data);
    var mySwipertwo = new Swiper('.container2', {
      direction: 'horizontal',
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
      slidesPerView: "auto",
      slidesOffsetBefore: 18,
      slidesOffsetAfter: 18,
      freeMode: true,
      freeModeMomentum: false,
      spaceBetween: 0,
      scrollbar: {
        el: '.scrollbar2',
        hide: true,
      },
    })
    mySwipertwo.scrollbar.$el.css('height', '2px')
    mySwipertwo.scrollbar.$el.css('background', 'none')

  }
  render() {
    return (
      <div>
        <div className='banner1'>
          <div className='swiper-container container2'>
            <div className='swiper-wrapper'>
              {
                this.state.list.map((value,index) =>               
                <div className='swiper-slide' key={value.communityId}>
                  <div className='spanDad' style={{background:'#'+this.state.bgc[index]}}>
                    <span>{value.name}</span>
                  </div>
                </div>
              )}
            </div>
            <div className="swiper-scrollbar  scrollbar2"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProSwiper1;