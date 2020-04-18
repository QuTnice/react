import styled from 'styled-components'

export const ProfileWrap = styled.div`
    font-family: sans-serif;
    display:flex;
    flex-direction:column; 
    height:100%;
  .topWrap{
    width:100%;
    height:.44rem;
    background:#fff;
    position: relative;
    .backImg{
      width:.1rem;
      height:.17rem;
      position: absolute;
      left:.2rem;
      top:calc(50% - .1rem)
    }
    span{
      display:inline-block;
      width:100%;
      height:100%;
      line-height:.44rem;
      font-size: .16git rem;
      font-weight: bold;
      text-align: center;
    }
    }
    .main{
      background:#fff;
      flex:1;
      padding-top:1rem;
    }
    .center{
      width: 80%;
      max-width: 400px;
      font-size: 0;
      /* background:#fa2; */
      margin: 0 auto;
      margin-bottom:.3rem;
      img{
        width:100%;
      }
    }
    .loginbtn{
      width: 2.95rem;
      height: .44rem;
      box-sizing: border-box;
      border-radius: 4px;
      margin: 30px auto 0px auto;
      display: flex;
      justify-content: center;
      align-items: center;
      background-image: linear-gradient(to top right,#2AC277,#09A458);
      color:#fff;
    }
    .loginText{
      color: #E98B71;
      font-size: .15rem;
      text-align: center;
      padding: .1rem 0;
      margin: .15rem auto;
    }
    .protocol{
      font-size: .12rem;
      color: #999999;
      text-align: center;
      height: .2rem;
      margin: .2rem auto;
      cursor: pointer;
      .deal{
        color: #E98B71;
      }
    }
`

export const MineWrap = styled.div`
  display:flex;
  flex-direction:column;
  font-family: sans-serif;
  .topWrap{
    width:100%;
    height:44px;
    background: #fff;
    padding: 0 18px;
    margin: 0 auto;
    max-width: 600px;
    box-sizing: border-box;
    text-align:right;
    img{
      width:.27rem;
      height:.27rem;
      margin: 9.5px 0;
    }
  }
  .main{
    flex:1;
    overflow-y:scroll;
    .clientInfo{
      background-color: #FFFFFF;
      position: relative;
      overflow: hidden;
      zoom: 1;
      z-index: 2;
      display:flex;
      flex-direction:column;
    }
      >div{
        width:100%;
        padding: 0 .15rem;
      }
      .first{
        display:flex;
        position: relative;
        .arrow{
          position:absolute;
          right:0;
          top:30%;
          img{
            width:23px;
            height:23px;
          }
        }
        .imgBox{
          width:.8rem;
          height:.8rem;
          border-radius:50%;
          border:.3px solid #E7E2E5;
          img{
            width:.8rem;
            height:.8rem;
            border-radius:50%;
            border:.3px solid #E7E2E5;
          }
        }
        .info{
          width:100%;
          display:flex;
          flex-direction:column;
          padding-left:.15rem;
          .infoFirst{
            display:flex;
          }
          .name{
            max-width: 46%;
            height: 28px;
            line-height: 28px;
            display: inline-block;
            vertical-align: middle;
            color: #4A4945;
            font-size: 20px;
            box-sizing: border-box;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
          .male{
            vertical-align: middle;
            margin-left: 7px;
            img{
            background: none;
            width: 15px;
            height: 15px;
            }
          }
          .level{
            vertical-align: middle;
            margin-left: 7px;
            img{
            background: none;
            width: 25px;
            height: 25px;
            }
          }
          .line{
            position: relative;
            width: 150px;
            height: 4px;
            background-color: #EEEDEB;
            margin: 0;
            border-radius: 5px;
            overflow: hidden;
            .lineHas{
              position: absolute;
              top: 0;
              bottom: 0;
              left: 0;
              z-index: 1;
              width: 1%;
              height: 4px;
              border-radius: 5px;
              background-color: #1976D2;
              width: 1%;
            }
          }
          .id{
            font-size: 12px;
            line-height: 16px;
            color: #999999;
            margin: 4px 0 10px 0;
          }
          .experience{
            margin: 0;
            font-size: 10px;
            line-height: 14px;
            color: #999999;
            margin-bottom: 5px;
          }
        }
      }
      .second{
        margin: 20px 37px;
        box-sizing: border-box;
        position: relative;
        border-bottom: 1px solid;
        border-bottom-color: #E7E2E5;
        display:flex;
        div{
          width:33.33%;
          height:30px;
          margin: 5px 0;
          padding: 0 6px;
          display: inline-flex;
          flex-direction:column;
          vertical-align: middle;
          box-sizing: border-box;
          border-right: 1px solid;
          border-right-color: #E7E2E5;
          text-align: center;
          justify-content:center;
          align-items:center;
          >p{
            &:nth-child(1){
              font-size: 14px;
              color: #4A4945;
              line-height: 20px;
              margin-top: -5px;
              position: relative;
            }
            &:nth-child(2){
              font-size: 11px;
              color: #999999;
              line-height: 15px;
            }
          }
          &:nth-child(3){
            border-right: none;
          }
        }
      }
      .btnBox{
        background-color: #FFFFFF;
        height: 65px;
        padding:0;
        display:flex;
        padding-bottom: 9px;
        >div{
          width:25%;
          p{
            width:100%;
            img{
              width: 40px;
              height: 40px;
            }
            line-height: 25px;
            font-size: 12px;
            color: #4A4945;
            text-align:center;
          }
        }
      }
      .itemFirst{
        margin: 10px auto;
        background-color: #FFFFFF;
        padding: 0 0 0 15px;
        >div{
          position: relative;
          height: 54px;
          padding: 15px 0;
          cursor: pointer;
          box-sizing: border-box;
          border-bottom: 1px solid;
          border-bottom-color: #E7E2E5;
          img{
            font-size: 0;
            display: inline-block;
            width: 24px;
            height: 24px;
            margin-right: 10px;
            vertical-align: middle;
          }
        }
      }
  }
`