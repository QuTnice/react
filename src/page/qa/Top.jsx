import React, { Component } from 'react';
import { withRouter,NavLink } from 'react-router-dom'
import { TopWrap } from './styledQa'
// import { TopBox } from './styledQa'
@withRouter
class Top extends Component {
  render() {
    return (
      <TopWrap>
        <div className='quiz'>提问</div>
        <NavLink to='/search'>
          <div className="inputBox">
            {/* <img src="https://image.hongbeibang.com/FltPAS-35CZfvSpnHacXWoqcfFz5?42X42&imageView2/1/w/42/h/42" alt=""/> */}
            <span>搜索问题</span>
          </div>
        </NavLink>
        <img src="https://image.hongbeibang.com/FjmYGE5z6RvQL-_fdLKuSGYfmwO2?48X48&imageView2/1/w/48/h/48" alt=""/>
      </TopWrap>
    );
  }
}

export default Top;