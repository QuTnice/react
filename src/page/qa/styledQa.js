import styled from 'styled-components'
import border from '@/styled/border'

export const Qitems = border(
  styled.div`
`
)
export const Citems = border(
  styled.div`
    position: relative;
    overflow: hidden;
    zoom: 1;
    background-color: #FFFFFF;
    border-bottom: 1px solid;
    border-bottom-color: #E7E2E5;
    margin: 0 auto;
    box-sizing: border-box;
    padding: 10px 0;
    display:flex;
    flex-direction:column;
    .clientInfo{
      display:flex;
   
    .portrait{
      width:.5rem;
      height:.4rem;
      /* background: #fa3; */
      padding-right:.1rem;      
      img{
        width:100%;
        height:100%;
        border-radius:50%;
        }
    }
    .masterImg{
      width:.45rem;
      height:.4rem;
      padding-right:.05rem;
      img{
        width:100%;
        height:100%;
        border-radius:50%;
        }
    }
    .clitentNma{
      font-size: .13rem;
    height:.4rem;
    line-height: .4rem;
    text-align: left;
    color: #4A4945;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    } 
    }
    .content{
      margin: 10px 0;
      padding: 0;
      overflow: hidden;
      position: relative;
      .title{
        font-size: .18rem;
        font-weight: bold;
        color: #4A4945;
        line-height: .25rem;
        max-height: .5rem;
        text-overflow: ellipsis;
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      }
      .detail{
        font-size: .14rem;
        color: #4A4945;
        line-height: .2rem;
        margin: 5px 0 0 0;
        max-height: .6rem;
        text-overflow: ellipsis;
        overflow: hidden;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
      }
    }
    .like{
      overflow: hidden;
      font-size: .14rem;
      line-height: .2rem;
      color: #999999;
      box-sizing: border-box;
    }
    
`
)

export const TopWrap = styled.div`
  display: flex;
  justify-content:space-between;
  align-items:center;
  height: .44rem;
  background: #fff;
  z-index: 6;
  padding: 0 .18rem;
  /* margin: 0 auto; */
  box-sizing: border-box;
  font-family: sans-serif;
  img{
    width:.27rem;
    height:.27rem;
    margin:.095rem 0;
  }
  .quiz{
    color:#E98B71;
    font-size: .16rem;
  }
  .inputBox,.tabBox{
    width:2.4rem;
    height:.35rem;
    background:#F5F7F9;
    padding:0 .1rem ;
    border-radius:.04rem;
    display:flex;
    justify-content:center;
    span{
      display:inline-block;
      width:2.01rem;
      height:100%;
      font-size:.14rem;
      color: #4A4945;
      vertical-align: middle;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space:nowrap;
      line-height:2.5;
      text-align:center;
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

export const QuesWrap = styled.div`
    display:flex;
    flex-direction:column;
    height:100%;
    font-family: sans-serif;
    .top-nav{
      width:100%;
      height:.44rem;
      background:#fa3;
    }
    .sssss{
      width:100%;
      height:.45rem;
      background:#a30;
    }
    .main{
      flex:1;
      width:100%;
      background:#fff;
      height:100%;
      overflow-y:scroll;
      padding:0 .15rem;
      .wrapper{
        height:100%;
      }
      .qitem{
        padding:.15rem 0 .1rem;
        p{
          font-size: 18px;
          font-weight: bold;
          color: #4A4945;
          line-height: 25px;
          max-height: 50px;
          text-overflow: ellipsis;
          overflow: hidden;
          -webkit-line-clamp: 2;
          -moz-line-clamp: 2;
          line-clamp: 2;
          -webkit-box-orient: vertical;
          margin-bottom:.05rem;
        }
      }

      .infoBox{
        margin: .1rem 0;
        height:.7rem;
        width:100%;
        background:#F5F7F9;
        border-radius:5px;
        display:flex;
        .imgbox{
          width:.7rem;
          height:.7rem;
          background:#fa3;
          img{
            width:100%;
            height:100%;
            border-radius:5px;
          }
        }
        .clientbox{
          
          padding-left:.15rem;
          flex:1;
          /* line-height:.35rem; */
          display:flex;
          flex-direction:column;
          vertical-align:middle;
          /* align-items: center; */
          justify-content: center;
          .name{
            font-size: .14rem;
            color: #313131;
            font-weight: bold;
            text-align: justify;
            text-overflow: ellipsis;
            overflow: hidden;
            display: -webkit-box;
            -webkit-line-clamp: 1;
            -webkit-box-orient: vertical;
            word-break: break-all;
          }
          .author{
            margin-top: .05rem;
            font-size: .13rem;
            color: #999;
            text-align: justify;
            text-overflow: ellipsis;
            overflow: hidden;
            display: -webkit-box;
            -webkit-line-clamp: 1;
            -webkit-box-orient: vertical;
            word-break: break-all;
          }
        }
      }
      .answer{
        display:flex;
        justify-content:space-between;
        img{
          width:.19rem;
          height:.19rem;
          margin-right:.03rem;
        }
        .write{
          font-size: .14rem;
          line-height: 20px;
          vertical-align: middle;
          display: inline-block;
          color: #E98B71;
        }
        .answer{
          overflow: hidden;
          font-size: 14px;
          line-height: 20px;
          color: #999999;
          box-sizing: border-box;
        }
        .noneA{
          color: #498DD0;
        }
        .hasA{
          color: #999999;
        }
      }
    }
`