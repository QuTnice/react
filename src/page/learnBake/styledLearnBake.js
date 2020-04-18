import styled from 'styled-components'

export const LearnWrap = styled.div  `
.fbRSMy img{
  background:none!important;
}
  /* overflow-x:hidden; */
  overflow-y:hidden;
  /* position: flex; */
  flex-direction:column;
  .main{
    overflow-x:hidden;
    overflow-y:scroll;
    /* height: calc(100%-.44rem) */
    height:100%;
    padding-bottom:.5rem;
    background: #fff;
  }
`

export const TopWrap = styled.div`
  display: flex;
  justify-content:space-between;
  align-items:center;
  height: .44rem;
  background: #fff;
  z-index: 6;
  padding: 0 .18rem;
  background: #fff;
  margin: 0 auto;
  box-sizing: border-box;
  font-family: sans-serif;
  .imgBox{

  }
  img{
    width:.27rem;
    height:.27rem;
    margin:.095rem 0;
    z-index:99999;
    position: relative;
    background: #fff;
  }
  .inputBox,.tabBox{
    width:2.5rem;
    height:.35rem;
    background:#F5F7F9;
    padding:0 .1rem ;
    border-radius:.04rem;
    display:flex;
    justify-content:space-between;
    img{
      width:.179rem;
      height:.179rem;
      z-index:99999
    }
    span{
      display:inline-block;
      width:2.01rem;
      height:100%;
      font-size:.12rem;
      color:#999999;
      vertical-align: middle;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space:nowrap;
      line-height:3
    }
  }
  .tabBox{
    padding:0;
    height:100%;
    position: relative;
  }
  .am-tabs-default-bar-tab-active{
font-weight:900!important
  }
`

export const BtnWrap = styled.div`
  font-family: sans-serif;
  display:flex;
  width:100%;
  height:1.05rem;
  background:#fff;
  padding:.1rem 0;
  >.skill{
    width:25%;
    height:.8531rem;
    background: #fff;
    text-align:center;
    img{
      width:.45rem;
      height:.45rem;
    }
    div{
      font-size: .12rem;
      color: #4A4945;
      margin-top: .05rem;
      line-height: .16rem;
    }
  }
`

export const ProSwipers = styled.div `
  width:100%;
  /* height:3.2839rem; */
  background: #fff;
  margin-bottom:.25rem;
  .title{
    width:100%;
    font-size: .17rem;
    line-height: .24rem;
    color: #313131;
    vertical-align: middle;
    display: inline-block;
    margin-left: .15rem;
    font-weight: bold;
    padding-top: .05rem;
    padding-bottom: .1rem;
  }
  .swiper-slide{
    width:1.6rem;
    /* height:2.7rem; */
    /* margin-right:0.5rem; */
    .imgDad{
      position: relative;

    }
    .imgbox{
      border-radius:.06rem;
      width:100%
      /* height:2.28rem; */
    }
    img{
      border-radius:.06rem;
      width:100%;
      /* height:100%; */
      position: relative;
    }
    .toast{
      font-family: sans-serif;
      position: absolute;
      left: 0;
      bottom: 7.5px;
      font-size: 11px;
      margin: 0 10px;
      padding: 2px 4px;
      border-radius: 4px;
      overflow: hidden;
      color: #4A4945;
      background-color: #fff;
    }
    span{
      color: #4A4945;
      font-weight: bold;
      line-height: 20.25px;
      display: block;
      /* width:1.6rem; */
      /* height:.41rem;    */
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      font-size: .14rem;
    }
  }
`