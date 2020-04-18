import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import { get } from 'utils/http.js'

import { VideoWrap } from './styledVideo'
import VideoBox from './Video'

import { Modal, List, WingBlank} from 'antd-mobile';

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
class VideoLesson extends Component {
  state = {
    list: [],
    introduces: [],
    modal1: false,
    modal2: false,
  }

  async componentDidMount() {
    // console.log(this.props);
    let result = await get({
      url: `https://api.hongbeibang.com/education/getCourse?_t=1576842010950&csrfToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOjAsImV4cCI6MTc2NTAyNjAzNSwiaWF0IjoxNTc1NjM3MjM1fQ.wNBSKGKrvhFlU8-mPKnqY_rWYuiIL46xD5bvAcf6E9U&educationCourseId=${this.props.location.pathname.split('/')[2]}`
    })
    this.setState({
      list: result.data,
      introduces: result.data.introduces
    })
    console.log(this.state.list);
  }

  showModal = key => (e) => {
    e.preventDefault(); // 修复 Android 上点击穿透
    this.setState({
      [key]: true,
    });
  }
  onClose = key => () => {
    this.setState({
      [key]: false,
    });
  }

  buyClick(){
    console.log('buy');
    this.props.history.push('/cart/'+ this.state.list.educationCourseId)
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
    render() {
      return (
        <VideoWrap>
          <div className="main">
            <VideoBox value={this.state.list}></VideoBox>
            <div className="advantage" onClick={this.showModal('modal2')} >
              <div className='item' >
                <div className='circle'></div>
                <div className='text'>永久回看</div>
                <div className='circle'></div>
                <div className='text'>报名即学</div>
                <div className='circle'></div>
                <div className='text'>自营课程</div>
                <div className='circle'></div>
                <div className='text'>高效学习体验</div>
              </div>
              <div className='item' >
                <div className='circle'></div>
                <div className='text'>分步骤学</div>
                <div className='circle'></div>
                <div className='text'>唯一品类</div>
                <div className='circle'></div>
                <div className='text'>图片下载</div>
                <div className='circle'></div>
                <div className='text'>工具材料参考</div>
              </div>
              <div className="arrow">
                <img src="https://image.hongbeibang.com/Fqee_DzmTrYWinRY2tMPfDtu1ym8" alt="" />
              </div>
            </div>
            <WingBlank>
              <Modal
                popup
                visible={this.state.modal2}
                onClose={this.onClose('modal2')}
                animationType="slide-up"
                // afterClose={() => { alert('afterClose'); }}
              >
                <List renderHeader={() => <div>服务</div>} className="popup-list">
                  {['永久无限次回看', '购买后即看', '烘焙帮自营课程', '高效的学习体验', '分步骤学习', '专注打造唯一品类'].map((i, index) => (
                    <List.Item key={index}>{i}</List.Item>
                  ))}
                  {/* <List.Item>
                    <Button type="primary" onClick={this.onClose('modal2')}>买入</Button>
                  </List.Item> */}
                </List>
              </Modal>
            </WingBlank>
            <div className="otherProject">
              <div className="studentWork"></div>
              {
                this.state.introduces.map((value) => (
                  <div key={value.educationCourseSummaryExtendId} className="willLearn">
                    <p>{value.title}</p>
                    <span dangerouslySetInnerHTML={{ __html: value.introduce }}></span>
                  </div>
                ))
              }
              <div className="teacher">
                <div className="title">导师介绍</div>
                <div className="info">
                  <img src={this.state.list.teacherImage} alt="" />
                  <span>{this.state.list.teacherName}</span>
                </div>
                <span dangerouslySetInnerHTML={{ __html: this.state.list.teacherIntroduce }} ></span>
              </div>

            </div>
            <div className="tips">
              <img src="https://image.hongbeibang.com/FgyNuZ8yE795vzF-O4lGF3G5Caxr?551X245&imageView2/1/w/551/h/242" alt="" />
              <div className="text">
                烘焙帮学堂，是由烘焙帮推出的课程品牌，通过官方自制的教学视频，用科学的烘焙配方、细致的步骤讲解、贴心的答疑服务，让烘焙更简单！
            </div>
              <div className="icon">
                <div className="iconitem">
                  <img src="https://image.hongbeibang.com/FvihrbO1twdtKSkz2WqB9KxUjjeg?100X116&imageView2/1/w/100/h/116" alt="" />
                  <p>蛋糕</p>
                </div>
                <div className="iconitem">
                  <img src="https://image.hongbeibang.com/Frs8TmZhk4PrxBY2cvA9e3jbbdrB?100X116&imageView2/1/w/100/h/116" alt="" />
                  <p>蛋糕</p>
                </div>
                <div className="iconitem">
                  <img src="https://image.hongbeibang.com/ForyDTluoYKimnQmobG6agmowKzy?100X116&imageView2/1/w/100/h/116" alt="" />
                  <p>蛋糕</p>
                </div>
                <div className="iconitem">
                  <img src="https://image.hongbeibang.com/FuCKHBljrYAFuTjTs0B1fkNcUhWw?100X116&imageView2/1/w/100/h/116" alt="" />
                  <p>蛋糕</p>
                </div>
                <div className="space25"></div>
              </div>
            </div>
          </div>
          <div className="footer">
            <div className='moreLesson'>
              <img src="https://image.hongbeibang.com/FjlY1hEsTozcG0oGvSXzNqRIc8gb?imageView2/1/w/640/h/640" alt="" />
              <div className='info'>更多课程</div>
            </div>
            <div className='refer'>
              <img src="https://image.hongbeibang.com/FoOJzEIUP4G3Ub0wp_XeNNYIHH0s?imageView2/1/w/640/h/640" alt="" />
              <div className='info'>咨询</div>
            </div>
            <div className='buyLesson' onClick={this.buyClick.bind(this)}>
              <span>￥{this.state.list.price}</span><span>购买本课程</span>
            </div>
          </div>
        </VideoWrap>
      );
    }
  }

  export default VideoLesson;