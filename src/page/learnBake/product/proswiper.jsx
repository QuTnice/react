import React, { Component } from 'react';
// import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { ProSwipers } from '../styledLearnBake'

import Swiper from 'swiper'
// import 'swiper/dist/css/swiper.min.css'
import 'swiper/css/swiper.min.css'

@withRouter
// @connect(mapState, mapDispatch)
class proswiper extends Component {
  // constructor() {
  //   super()
  // }


  componentDidMount() {
    var mySwiper123 = new Swiper('.containerall', {
      direction: 'horizontal',
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
      slidesPerView: "auto",
      slidesOffsetBefore: 18,
      slidesOffsetAfter: 18,
      freeMode: true,
      freeModeMomentum: true,
      mousewheelControl:true,
      roundLengths:true,
      spaceBetween: 10,
    });
    // console.log(mySwiper123);
  }

  handleClick(id){
    // console.log(id);
    this.props.history.push('/lessonvideo/' + id)
  }

  render() {
    // console.log(this.props.swiperPro);
    return (
      <ProSwipers>

        <div className="title">
          {this.props.title}
        </div>
        <div className='banner'>
          <div className='swiper-container1 containerall'>
            <div className='swiper-wrapper'>
              {
                this.props.swiperPro.item.map((value) =>
                  <div className='swiper-slide' key={value.categoryItemId}  onClick={this.handleClick.bind(this,value.educationCourseId)}>
                    <div className='imgDad'>
                      <div className="imgbox">
                        <img src={value.image} alt="" />
                      </div>
              <div className="toast"><i>{value.buyNum>=1000?1000+'+':value.buyNum}</i>在学</div>
                    </div>
                    <span>{value.title}</span>
                  </div>
                )}
            </div>
          </div>
        </div>
      </ProSwipers>
    );
  }
}

export default proswiper;