import React, { Component } from 'react';
import {withRouter,NavLink } from 'react-router-dom'
// import PageSearch from '../../page/search/Search'
import {
  TopWrap
} from '../../page/learnBake/styledLearnBake.js'
@withRouter
class SearchTop extends Component {
  handleClick = () => {
    // console.log(this.props);
    // this.props.history.push('/search')
  }

  render() {
    // console.log(this.props);
    return (
      <TopWrap>
        <img src="https://image.hongbeibang.com/Fj1u8rBVnt5DLwXqhx8QKlRPLoGI?48X48&imageView2/1/w/48/h/48" alt=""/>
        <NavLink to='/search'>
          <div className="inputBox">
            <img src="https://image.hongbeibang.com/FltPAS-35CZfvSpnHacXWoqcfFz5?42X42&imageView2/1/w/42/h/42" alt=""/>
            <span>搜索食谱/食材，烘焙/家常菜一应俱全</span>
          </div>
        </NavLink>
        <img src="https://image.hongbeibang.com/FjmYGE5z6RvQL-_fdLKuSGYfmwO2?48X48&imageView2/1/w/48/h/48" alt=""/>
      </TopWrap>
    );
  }
}

export default SearchTop;