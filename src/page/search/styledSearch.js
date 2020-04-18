import styled from 'styled-components'

export const SearchWrap = styled.div`
  display:flex;
  flex-direction:column;
  .main{
    flex:1;
    font-family: sans-serif;
    min-height:500px;
    background:#fff;
    padding: 0 .15rem;
    p{
      padding:.15rem;
      padding-left:0;
      font-size: 14px;
      line-height: 20px;
      color: #999999;
      overflow: hidden;
      zoom: 1;
    }
    .popular{
      max-width: 100%;
      height: .32rem;
      line-height: .32rem;
      font-size: .16rem;
      padding: 0 10px;
      text-align: center;
      margin-right: 10px;
      margin-bottom: 10px;
      border-radius: 100px;
      box-sizing: border-box;
      color: #4A4945;
      background-color: #F5F7F9;
      cursor: pointer;
      zoom: 1;
      display: inline-block;
      vertical-align: middle;
      overflow: hidden;
      text-overflow: ellipsis;
      -otext-overflow: ellipsis;
      -webkit-text-overflow: ellipsis;
      -moz-text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
`

export const Recipe = styled.div`
  display:flex;
  flex-direction:column;
  height:100%;
`

export const Main = styled.div`
    flex:1;
    overflow-y:scroll;
    overflow-x:hidden;
    background:#fff;
    .wrapper{
      height:100%;
    }
    .loadingBox{
      width:100%;
      text-align:center;
    }
    .itemBox{
      width:100%;
      padding: 0 .15rem .025rem;
      height:1.03rem;
      display:flex;
      .leftBox{
        width:1.3rem;
        height:1rem;

        img{
          width:1.25rem;
          height:.9rem;
          overflow: hidden;
          border-radius: 4px;
        }
      }
      .rightBox{
        font-family: sans-serif;
        flex:1;
        padding:0 0 0 .15rem;
        max-width:62%;
        .title{
          font-size: .18rem;
          font-weight: bold;
          color: #4A4945;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
        }
        .detail{
          width:100%;
          margin: .03rem 0 .05rem 0;
          font-size: .1rem;
          color: #4A4945;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          -webkit-line-clamp: 1;
        }
        .clientName{
          margin-top: 3px;
          font-size: .11rem;
          color: #999999;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .collect{
          font-size: .11rem;
          color: #4A4945;
          margin-top: 3.75px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
      }
    }
`

export const NavR = styled.div`
  height:.53rem;
  background:#fff; 
`

export const TopWrap = styled.div`
  font-family: sans-serif;
  width:100%;
  height:.44rem;
  display:flex;
  background:#fff;
  padding:0 .18rem;
  align-items:center;
  justify-content:space-between;
  .comeon{
    font-size: .16rem;
    line-height: .3rem;
    color: #4A4945;
    span{
      font-size: 14px;
      color: #E98B71;
      img{
        
        width:.19rem;
        height:.19rem;
      }
    }
  }
  input{
    height:.35rem;
    width:2.39rem;
    padding:0 .1rem  ;
    border:none;
    background:#F5F7F9;
    border-radius:3px;
  }
`