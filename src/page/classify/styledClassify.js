import styled from 'styled-components'

export const ClassifyWrap = styled.div `
  display:flex;
  flex-direction:column;
  height:100%;
  .top{
    display:flex;
    width:100%;
    height:.44rem;
    background:#fff;
    position: relative;
    .back{
      position: absolute;
      left:.2rem;
      top:20%;
    }
    input{
      width:2.49rem;
      margin: .045rem auto;
      border-radius: 4px;
      zoom: 1;
      background-color: #F5F7F9;
      box-sizing: border-box;
      padding: 0 10px;
      border:none;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #4A4945;
      font-size: 14px;
      vertical-align: middle;
      text-overflow: ellipsis;
      overflow: hidden;
      display: -webkit-box;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
    }
  }
  .main{
    width:100%;
    font-family: sans-serif;
    flex:1;
    background:#fff;
    flex-direction:row;
    display:flex;
    overflow:hidden;
    .title{
      height:100%;
      /* width:.8rem; */
      width:23%;
      background:#F5F7F9;
      li{
        height:.5rem;
        font-size:.14rem;
        text-align:center;
        line-height:.5rem;
        color:#4A4945;
      }
      .chose{
        background: #fff;
        border-left: 3px solid #E98B71;
      }
    }
    .subContent{
      font-family: sans-serif;
      overflow-y:scroll;
      width:77%;
        p{
          padding-top: .1rem;
          padding-left: .16875rem;
          padding-bottom: .12rem;
          font-size: .12rem;
          font-weight: bold;
          line-height: .22rem;
          color: #313131;
          overflow: hidden;
          zoom: 1;
        }
      } 
      .contentBox{
        display:flex;
        /* width:77%; */
        flex-wrap:wrap;
        padding: 0 15px;
        margin: 0 auto;
        overflow: hidden;
        zoom: 1;
        .itemBox{
          width:33.33%;
          padding: 0px 0px 10px 0px;
          img{
            font-size: 0;
            width: 80px !important;
            height: 80px !important;
            border-radius: 4px;
            overflow: hidden;
            margin: 0 auto;
          }
          
        }
      }
      .imgName{
        font-size: 12px;
        color: #313131;
        margin-top: 5px;
        text-align: center;
      }
    }
  }
`