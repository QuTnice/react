import React, { Component } from 'react';
import Top from './InputTop'
import { SearchWrap } from './styledSearch'
import { get } from 'utils/http.js'

class Search extends Component {
  state = {
    list:[]
  }

  async componentDidMount(){
    let result = await get({
      url: 'https://api.hongbeibang.com/keyword/detail?_t=1576150317692&csrfToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOjAsImV4cCI6MTc2NTAyNjAzNSwiaWF0IjoxNTc1NjM3MjM1fQ.wNBSKGKrvhFlU8-mPKnqY_rWYuiIL46xD5bvAcf6E9U'
    })
    // console.log(result.data.popularSearch);
    this.setState({
      list: result.data.popularSearch
    })
  }

  handleClick(id,keyword){
    console.log(id,keyword);
    this.props.history.push('/search/recipe/'+ keyword)
  }

  render() {
    return (
        <SearchWrap>
          <Top></Top>
          <div className="main">
            <p>热门搜索</p>
            {
              this.state.list.map((value) => 
                <div className="popular" key={value.popularSearchId} onClick={this.handleClick.bind(this,value.popularSearchId,value.keyword)} >{value.keyword}</div>
              )
            }
          </div>
        </SearchWrap>
    );
  }
}

export default Search;