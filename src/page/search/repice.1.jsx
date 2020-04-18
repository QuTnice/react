import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { get } from 'utils/http.js';
import { TopWrap, Main, NavR, Recipe } from './styledSearch';
import { Tabs } from 'antd-mobile';
import RecipeItem from './RecipeItem';
import { tabs } from './repice';
@withRouter
export class repice extends Component {
  state = {
    key: '',
    list: [],
    sort: '',
    keyword: '1',
    rout: '',
  };
  async componentDidMount() {
    this.props.history.listen(async (route) => {
      if (this.state.rout !== route.pathname) {
        let result = await get({
          url: `https://api.hongbeibang.com/search/getMoreRecipe?_t=1576719801486&csrfToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOjAsImV4cCI6MTc2NTAyNjAzNSwiaWF0IjoxNTc1NjM3MjM1fQ.wNBSKGKrvhFlU8-mPKnqY_rWYuiIL46xD5bvAcf6E9U&pageIndex=0&pageSize=10&keyword=${route.pathname.split('/')[3]}&sort=${this.state.sort}`
        });
        this.setState({
          list: result.data.search.list.recipe.data,
          rout: this.props.location.pathname
        });
      }
    });
    this.setState({
      key: this.props.location.pathname.split('/')[3]
    });
    let result = await get({
      url: `https://api.hongbeibang.com/search/getMoreRecipe?_t=1576719801486&csrfToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOjAsImV4cCI6MTc2NTAyNjAzNSwiaWF0IjoxNTc1NjM3MjM1fQ.wNBSKGKrvhFlU8-mPKnqY_rWYuiIL46xD5bvAcf6E9U&pageIndex=0&pageSize=10&keyword=${this.props.location.pathname.split('/')[3]}&sort=${this.state.sort}`
    });
    this.setState({
      list: result.data.search.list.recipe.data,
      rout: this.props.location.pathname
    });
  }
  changeValue(e) {
    this.setState({
      key: e.target.value
    });
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

  
  componentDidUpdate() {
    // console.log('componentDidUpdate');
  }
  backClick() {
    this.props.history.goBack();
  }
  tabClick = async (tab) => {
    console.log(tab.key);
    this.setState({
      sort: tab.key
    });
    if (tab.key === 'dishNum') {
      let result = await get({
        url: `https://api.hongbeibang.com/search/getMoreRecipe?_t=1576719801486&csrfToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOjAsImV4cCI6MTc2NTAyNjAzNSwiaWF0IjoxNTc1NjM3MjM1fQ.wNBSKGKrvhFlU8-mPKnqY_rWYuiIL46xD5bvAcf6E9U&pageIndex=0&pageSize=10&keyword=${this.props.location.pathname.split('/')[3]}&sort=${tab.key}`
      });
      this.setState({
        list: result.data.search.list.recipe.data
      });
    }
    else if (tab.key === '') {
      let result = await get({
        url: `https://api.hongbeibang.com/search/getMoreRecipe?_t=1576719801486&csrfToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOjAsImV4cCI6MTc2NTAyNjAzNSwiaWF0IjoxNTc1NjM3MjM1fQ.wNBSKGKrvhFlU8-mPKnqY_rWYuiIL46xD5bvAcf6E9U&pageIndex=0&pageSize=10&keyword=${this.props.location.pathname.split('/')[3]}&sort=${tab.key}`
      });
      this.setState({
        list: result.data.search.list.recipe.data
      });
    }
    else {
      let result = await get({
        url: `https://api.hongbeibang.com/search/getMoreRecipe?_t=1576719801486&csrfToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOjAsImV4cCI6MTc2NTAyNjAzNSwiaWF0IjoxNTc1NjM3MjM1fQ.wNBSKGKrvhFlU8-mPKnqY_rWYuiIL46xD5bvAcf6E9U&pageIndex=0&pageSize=10&keyword=${this.props.location.pathname.split('/')[3]}&sort=${tab.key}`
      });
      this.setState({
        list: result.data.search.list.recipe.data
      });
    }
  };
  render() {
    return (<Recipe>
      <TopWrap>
        <div className="back" onClick={this.backClick.bind(this)}>
          <img width='27px' src="https://image.hongbeibang.com/FoTuxKG5pqYKuAsT8BjrflkAxEpj?48X48&imageView2/1/w/48/h/48" alt="" />
        </div>
        <input type="text" value={this.state.key} onChange={this.changeValue.bind(this)} onKeyUp={this.handleKeyUp.bind(this)} placeholder='搜索食谱/食材，烘焙/家常菜一应俱全' />
        <div className="comeon">
          <span>食谱</span>
          <span><img src="https://image.hongbeibang.com/FnX5qtpWKlcHoDYC5KDFHulWfEZl?32X32&imageView2/1/w/32/h/32" alt="" /></span>
        </div>
      </TopWrap>
      <NavR className="navR">
        <Tabs tabs={tabs}
          // page={1}
          initialPage={0} animated={false} useOnPan={false} tabBarUnderlineStyle={{ border: '1.2px solid #E98B71', transform: 'scaleX(0.4)', }} tabBarTextStyle={{ fontSize: '14px', color: '#4A4945', fontWeight: 600 }} tabBarActiveTextColor='#000' tabBarInactiveTextColor='#999' onTabClick={this.tabClick}>
        </Tabs>
      </NavR>
      <Main className="main">
        {this.state.list.map((value) => (<RecipeItem key={value.contentRecipeId} value={value}></RecipeItem>))}
      </Main>
    </Recipe>);
  }
}
