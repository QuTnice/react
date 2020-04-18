import React, { Component } from 'react';
import { TopWrap } from './styledSearch'
import { withRouter} from 'react-router-dom'

// import Repice from './repice'


@withRouter
class InputTop extends Component {
  state = {
    keyword: ''
  }

  handleChange(e) {
    console.log(e.target.value);
    this.setState({
      keyword: e.target.value
    })
  }

  backClick() {
    this.props.history.push('/')
  }

  submitSearch() {
    if (this.state.keyword === '') {
      console.log('kong');
    }
    else {
      console.log(this.state.keyword);
      this.props.history.push('search/recipe/'+ this.state.keyword)
    }
  }

  handleKeyUp(e) {
    if (e.keyCode === 13) {
      this.props.history.push('/search/recipe/' + e.target.value);
      this.setState({
        keyword: ''
      });
      // window.location.reload(true); 
    }
  }

  render() {
    console.log(this.props);
    return (
      <TopWrap>
        <div className="back" onClick={this.backClick.bind(this)}>
          <img width='27px' src="https://image.hongbeibang.com/FoTuxKG5pqYKuAsT8BjrflkAxEpj?48X48&imageView2/1/w/48/h/48" alt="" />
        </div>

        <input value={this.state.keyword} onKeyUp={this.handleKeyUp.bind(this)} onChange={this.handleChange.bind(this)} type="text" placeholder='搜索食谱/食材，烘焙/家常菜一应俱全' />

        {/* <NavLink to='/search/recipe' className="comeon" onClick={this.submitSearch.bind(this)}>搜索</NavLink> */}
        <div className="comeon" onClick={this.submitSearch.bind(this)}>搜索</div>

      </TopWrap>
    );
  }
}

export default InputTop;