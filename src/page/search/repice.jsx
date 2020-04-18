import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import { get } from 'utils/http.js'
import { TopWrap, Main, NavR, Recipe } from './styledSearch'
import { Tabs } from 'antd-mobile';
import RecipeItem from './RecipeItem'
import BScroll from 'better-scroll'

const tabs = [
  { title: '综合排序', key: '' },
  { title: '做过最多', key: 'dishNum' },
  { title: '达人食谱', key: 'master' },
];

@withRouter
class repice extends Component {

  state = {
    key: '',
    list: [],
    sort: '',
    keyword: '1',
    rout: '',
    page: 0,
    img: false,
    bScroll:''
  }

  async componentDidMount() { 
    this.props.history.listen(async route => {

      if (this.state.rout !== route.pathname) {
        let result = await get({
          url: `https://api.hongbeibang.com/search/getMoreRecipe?_t=1576719801486&csrfToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOjAsImV4cCI6MTc2NTAyNjAzNSwiaWF0IjoxNTc1NjM3MjM1fQ.wNBSKGKrvhFlU8-mPKnqY_rWYuiIL46xD5bvAcf6E9U&pageIndex=0&pageSize=10&keyword=${route.pathname.split('/')[3]}&sort=${this.state.sort}`
        })
        this.setState({
          list: result.data.search.list.recipe.data,
          rout: this.props.location.pathname
        })
      }
    })
    this.setState({
      key: this.props.location.pathname.split('/')[3]
    })

    let result = await get({
      url: `https://api.hongbeibang.com/search/getMoreRecipe?_t=1576719801486&csrfToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOjAsImV4cCI6MTc2NTAyNjAzNSwiaWF0IjoxNTc1NjM3MjM1fQ.wNBSKGKrvhFlU8-mPKnqY_rWYuiIL46xD5bvAcf6E9U&pageIndex=0&pageSize=10&keyword=${this.props.location.pathname.split('/')[3]}&sort=${this.state.sort}`
    })
    this.setState({
      list: result.data.search.list.recipe.data,
      rout: this.props.location.pathname
    })
    const wrapper = document.querySelector('.wrapper')

    var bScroll = new BScroll(wrapper, {
      scrollX: false,  //开启横向滚动
      click: true,  // better-scroll 默认会阻止浏览器的原生 click 事件
      scrollY: true, //关闭竖向滚动,
      pullUpLoad: true,
    })
    this.setState({
      bScroll:bScroll
    })
    // console.log(this.state.bScroll);
    bScroll.on('pullingUp', async () => {
      this.setState({
        page: this.state.page + 10,
        img: true
      })
      var result1 = await get({
        url: `https://api.hongbeibang.com/search/getMoreRecipe?_t=1576719801486&csrfToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOjAsImV4cCI6MTc2NTAyNjAzNSwiaWF0IjoxNTc1NjM3MjM1fQ.wNBSKGKrvhFlU8-mPKnqY_rWYuiIL46xD5bvAcf6E9U&pageIndex=${this.state.page}&pageSize=10&keyword=${this.props.location.pathname.split('/')[3]}&sort=${this.state.sort}`,

      })

      bScroll.refresh()
      this.state.list = [
        ...this.state.list,
        ...result1.data.search.list.recipe.data
      ]
      this.setState({
        img: false,
      })


      bScroll.finishPullUp()
    })
  }

  changeValue(e) {
    this.setState({
      key: e.target.value
    })
  }

  handleKeyUp(e) {
    if (e.keyCode === 13) {
      this.props.history.push('/search/recipe/' + e.target.value)
      this.setState({
        keyword: ''
      })
      // window.location.reload(true); 
    }
  }

  backClick() {
    this.props.history.goBack()
  }

  tabClick = async (tab) => {
    console.log(tab.key);
    this.setState({
      sort: tab.key
    })
    if (tab.key === 'dishNum') {
      this.state.bScroll.scrollTo(0, 0)
      let result = await get({
        url: `https://api.hongbeibang.com/search/getMoreRecipe?_t=1576719801486&csrfToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOjAsImV4cCI6MTc2NTAyNjAzNSwiaWF0IjoxNTc1NjM3MjM1fQ.wNBSKGKrvhFlU8-mPKnqY_rWYuiIL46xD5bvAcf6E9U&pageIndex=0&pageSize=10&keyword=${this.props.location.pathname.split('/')[3]}&sort=${tab.key}`
      })
      this.setState({
        list: result.data.search.list.recipe.data
      })
      // bScroll.scrollTo(0, 0)

    } else if (tab.key === '') {
      this.state.bScroll.scrollTo(0, 0)
      let result = await get({
        url: `https://api.hongbeibang.com/search/getMoreRecipe?_t=1576719801486&csrfToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOjAsImV4cCI6MTc2NTAyNjAzNSwiaWF0IjoxNTc1NjM3MjM1fQ.wNBSKGKrvhFlU8-mPKnqY_rWYuiIL46xD5bvAcf6E9U&pageIndex=0&pageSize=10&keyword=${this.props.location.pathname.split('/')[3]}&sort=${tab.key}`
      })
      this.setState({
        list: result.data.search.list.recipe.data
      })
      // bScroll.scrollTo(0, 0)
    } else {
      this.state.bScroll.scrollTo(0, 0)
      let result = await get({
        url: `https://api.hongbeibang.com/search/getMoreRecipe?_t=1576719801486&csrfToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOjAsImV4cCI6MTc2NTAyNjAzNSwiaWF0IjoxNTc1NjM3MjM1fQ.wNBSKGKrvhFlU8-mPKnqY_rWYuiIL46xD5bvAcf6E9U&pageIndex=0&pageSize=10&keyword=${this.props.location.pathname.split('/')[3]}&sort=${tab.key}`
      })
      this.setState({
        list: result.data.search.list.recipe.data
      })
      // bScroll.scrollTo(0, 0)
    }
  }


  render() {
    return (
      <Recipe>
        <TopWrap>
          <div className="back" onClick={this.backClick.bind(this)}>
            <img width='27px' src="https://image.hongbeibang.com/FoTuxKG5pqYKuAsT8BjrflkAxEpj?48X48&imageView2/1/w/48/h/48" alt="" />
          </div>
          <input type="text"
            value={this.state.key}
            onChange={this.changeValue.bind(this)}
            onKeyUp={this.handleKeyUp.bind(this)}
            placeholder='搜索食谱/食材，烘焙/家常菜一应俱全' />
          <div className="comeon">
            <span>食谱</span>
            <span><img src="https://image.hongbeibang.com/FnX5qtpWKlcHoDYC5KDFHulWfEZl?32X32&imageView2/1/w/32/h/32" alt="" /></span>
          </div>
        </TopWrap>
        <NavR className="navR">
          <Tabs tabs={tabs}
            // page={1}
            initialPage={0}
            animated={false}
            useOnPan={false}
            tabBarUnderlineStyle={{ border: '1.2px solid #E98B71', transform: 'scaleX(0.4)', }}
            tabBarTextStyle={{ fontSize: '14px', color: '#4A4945', fontWeight: 600 }}
            tabBarActiveTextColor='#000'
            tabBarInactiveTextColor='#999'
            onTabClick={this.tabClick}
          >
          </Tabs>
        </NavR>
        <Main className="main">
          <div className="wrapper">
            <div>

              {
                this.state.list.map((value) => (
                  <RecipeItem key={value.contentRecipeId} value={value}></RecipeItem>
                ))
              }
              {
                this.state.img &&
                <div className='loadingBox'>
                  <img src="https://image.hongbeibang.com/FhzJi79pYPlhhR-6ArGxcmvv2igr?100X20&imageView2/1/w/100/h/20" alt="" />
                </div>
              }
            </div>

          </div>
        </Main>
      </Recipe>
    )
  }
}

export default repice;