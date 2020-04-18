import React, { Component } from 'react';
import { get } from 'utils/http.js'

import Swiper from 'swiper'

import 'swiper/css/swiper.min.css'

class ProSwiper extends Component {
  // constructor() {
  //   super()
  // }

  state = {
    list: []
  }
  async componentDidMount() {
     let result = await get({
       url:'https://api.hongbeibang.com/feed/getCategory?_t=1576056398285&csrfToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOjAsImV4cCI6MTc2NTAyNjAzNSwiaWF0IjoxNTc1NjM3MjM1fQ.wNBSKGKrvhFlU8-mPKnqY_rWYuiIL46xD5bvAcf6E9U'
     })
     this.setState({
       list:result.data.category[0].item,
     })
    //  console.log(result);
    var mySwiperone = new Swiper('.container1', {
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
      spaceBetween: 10,
      scrollbar: {
        el: '.swiper-scrollbar111',
        hide: true,
      },
    })
    mySwiperone.scrollbar.$el.css('height', '2px')
    mySwiperone.scrollbar.$el.css('background', 'none')
  }
  render() {
    // console.log(this.props.list);
    return (
      <div>
        <div className='banner'>
          <div className='swiper-container container1'>
            <div className='swiper-wrapper'>
              {
                this.state.list.map((value) =>               
                <div className='swiper-slide' key={value.activityContentId}>
                  <div className='imgDad'>
                    <img src={value.image} alt="" />
                  </div>
                </div>
              )}
            </div>
            <div className="swiper-scrollbar swiper-scrollbar111"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProSwiper;