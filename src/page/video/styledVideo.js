import styled from 'styled-components'

export const VideoWrap = styled.div`
  .space25{
    height:.25rem;
  }
  font-family: sans-serif;
  width:100%;
  height:100%;
  display:flex;
  flex-direction:column;
  .main{
    flex:1;
    overflow-y:scroll;
    .videoBox{
      position: relative;
      width:100%;
      /* height:2.1rem; */
      video{
        width:100%;
      }
    }
    .back{
      z-index:999;
      width:30px;
      display:flex;
      height:30px;
      background: #999;
      opacity:.5;
      position: absolute;
      left:10px;
      top:10px;
      text-align:center;
      border-radius:50%;
      line-height:30px;
      justify-content:center;
      align-items:center;
    }
    .contentInfo{
      padding-top: 12px;
      padding-left: 20px;
      padding-right: 20px;
      padding-bottom: 15px;
      background-color: #fff;
      .title{
        font-weight: bold;
        font-size: .2rem;
        line-height: .28rem;
        color: #313131;
      }
      .nowLearn{
        margin-top: 15px;
        position: relative;
        display:flex;
        >img{
          width:.27rem;
          height:.27rem;
          vertical-align:middle;
        }
        .num{
          color: #E98B71;
          vertical-align:middle;
          
        }
        span{
          margin-top: .03rem;
        }
      }
      .tryLearn{
        width: 80.5px;
        height: 27px;
        border-radius: 4px;
        border: 1px solid #E98B71;
        position: absolute;
        right: 0;
        bottom: 0;
        display: flex;
        align-items: center;
        font-size: 13px;
        color: #E98B71;
        img{
          width:.19rem;
          height:.19rem;
          margin-left: 2px;
          margin-right: 2px;
        }
      }
    }
    .advantage{
      width:100%;
      margin: .1rem 0;
      padding: .1rem .2rem;
      background: #fff;
      display:flex;
      flex-direction:column;
      position: relative;
      .item{
        width:100%;
        display:flex;
        flex-direction:row;
        justify-content:space-around;
        .circle{
          align-items: center;
          justify-content: center;
          display: inline-flex;
          height: 3px;
          width: 3px;
          border-radius: 1.5px;
          background-color: #E98B71;
          vertical-align:middle;
          margin-top: .08rem;
        }
        .text{
          color: #676767;
          font-weight: 200;
          font-size: .13rem;
          margin-left: 5px;
          margin-right: 15px;
          line-height: 18.5px;
        }
      }
      .arrow{
        position: absolute;
        right:.2rem;
        top:28%;
        img{
          width: 6.75px;
          height: 11.57px;
        }
      }
    }
    .otherProject{
      width:100%;
      background: #fff;
      .studentWork{
        padding-top: 15px;
        padding-bottom: 20px;
        padding-left: 20px;
        padding-right: 17.5px;
        background-color: #fff;
      }
      .willLearn{
        /* padding: 20px; */
        padding-right: 17.5px;
        background: #fff;
        padding:.2rem 0;
        border-bottom:.3px solid #F5F7F9;
        p{
          padding: 0  16px;
          font-weight: bold;
          font-size: 17px;
          line-height: 24px;
          color: #313131;
          margin-bottom: 10px;
        }
        span{
          font-size:.16rem!important;
        }
      }
      .teacher{
        padding:.2rem 0;
        .title{
          padding: 0  16px;
          font-weight: bold;
          font-size: 17px;
          line-height: 24px;
          color: #313131;
          margin-bottom: 10px;
        }
        .info{
          display:flex;
          padding: 0 .16rem;
          margin: .25rem 0 .115rem;
          img{
            width:.5rem;
            height:.5rem;
          }
          span{
            font-size: 17px;
            color: #313131;
            display: inline-block;
            margin-left: 12px;
          }
        }
      }
    }
    .tips{
      background-color: #fff;
      padding: 20px;
      padding-right: 17.5px;
      margin-top:.1rem;
      >img{
        width: 130px;
        height: 57.2px;
        background: none;
      }
      .text{
        font-weight: 300;
        font-size: 14px;
        line-height: 22px;
        color: #313131;
      }
      .icon{
        display: flex;
        flex-direction: row;
        margin-top: 15px;
        .iconitem{
          width:25%;
          text-align:center;
          img{
            width: 50px;
            height: 58px;
            background: none;
          }
        }
      }
    }
  }
  
  .footer{
    height:.49rem;
    width:100%;
    background: #fff;
    display:flex;
    .moreLesson,.refer{
      width: 69.5px;
      display:flex;
      flex-direction:column;
      justify-content: center;
      align-items: center;
      height: 100%;
      img{
        width: 20.5px!important;
        height: 19px;
      }
      .info{
        color: #313131;
        font-size: 11px;
        line-height: 15px;
        position: relative;
        top: 4px;
      }
    }
    .buyLesson{
      flex: 1;
      background-color: #E98B71;
      color: #fff;
      font-size: 15px;
      font-weight: bold;
      display: inline-flex;
      justify-content: center;
      align-items: center;
    }
  }
  
`
// export const MainWrap = styled.div`

// `
// export const FooterWrap = styled.div`


// `