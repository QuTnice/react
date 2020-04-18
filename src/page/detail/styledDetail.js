import styled from 'styled-components'
import border from '@/styled/border'



export const DetailWrap = styled.div`
    .space30{
      height:.3rem;
    }
    font-family: sans-serif;
    display:flex;
    flex-direction:column;
    background:#fff;
    height:100%;
    .top{
      display:flex;
      height:.44rem;
      background:#fff;
      justify-content:space-between;
      padding: 0 .18rem;
      align-items: center;
      img{
        width:.27rem;
        height:.27rem;
      }
      .collect{
        font-family: sans-serif;
        font-size: .14rem;
        width: .7rem;
        height: .3rem;
        color: #E98B71;
        background-color: #fff;
        border-radius: 30px;
        cursor: pointer;
        border:1px solid ;
        text-align:center;
        line-height:.3rem;
      }
    }
    .main{
      flex:1;
      overflow-y:scroll;
      >img{
        width:100%;
        
      }
      .titleBox{
        padding: 0 15px;
        margin: 0;
        overflow: hidden;
        position: relative;
        zoom: 1;
        .title{
          color: #4A4945;
          line-height: .35rem;
          font-size: .25rem;
          font-weight: bold;
          word-wrap: break-word;
          position: relative;
          margin: .15rem 0;
        }
        .clientBox{
          overflow: hidden;
          zoom: 1;
          border-top: 1px solid #F1F1F1;
          margin: .15rem auto;
          padding-top: .19rem;
          padding-bottom:.3rem;
          .clientName{
            display:flex;
            .name{
              width:75%;
              line-height:.35rem;
              padding-left:.1rem;
            }
            >img{
              width:.33rem;
              height:.33rem;
              border-radius:50%;
            }
            .attention{
              border: 0px;
              background-color: #E98B71;
              color: #FFFFFF;
              float: right;
              width: 70px;
              height: 30px;
              margin: 5px 0;
              font-size: 14px;
              border-radius: 30px;
              display: flex;
              justify-content: center;
              align-items: center;
            }
          }
          .intro{
            margin-top:.1rem;
            color: #313131;
            line-height: 27px;
            font-weight: 200;
            font-size: 17px;
            word-break: break-all;
            word-wrap: break-word;
            letter-spacing: 1px;
          }
        }
      }
      .materials{
        padding: 0 .15rem .3rem;
        .title{
          background-color: #fff;
          padding-top: 15px;
          /* padding-horizontal: 15px; */
          font-size: 16px;
          line-height: 22.5px;
          color: #313131;
          font-weight: bold;
        }
        .operate{
          padding:.2rem 0;
          border-bottom:0.1px solid #F1F1F1;
          .valueWrap{
            width: 47.2px;
            height: 33.04px;
            border-radius: 3.776px;
            background-color: #F5F7F9;
            margin-left: 2.832px;
            margin-right: 2.832px;
            justify-content: center;
            align-items: center;
            display: inline-flex;
            .valueBox{
              line-height: 28px;
              border: 0;
              border-radius: 0;
              text-align: center;
              display: inline-block;
              box-sizing: border-box;
              outline: none;
              vertical-align: middle;
              margin-left: 4.72px;
              margin-right: 4.72px;
              width: 33.04px;
              padding: 0 7.08px;
              height: 22.656px;
              font-size: 16.048px;
              font-weight: bold;
              color: #313131;
              background-color: #F5F7F9;
              border-style: none;
              border-bottom-style: solid;
              border-bottom-width: thin;
              border-bottom-color: #4a4640;
            }
          }
          .add,.minus{
            font-size: 0; 
            height: 33.04px;
            width: 33.04px;
            border-radius: 3.776px;
            background-color: #F5F7F9;
            padding: 5px;
            display: inline-block;
            vertical-align: top;
            box-sizing: border-box;
            position: relative;
            .addBox{
              width: 14.16px;
              height: 2.832px;
              left: 9.44px;
              background-color: #999;
              border-radius: 1.416px;
              position: absolute;
              top: 15.104px;
            }
            .standBox{
              height: 14.16px;
              width: 2.832px;
              top: 9.44px;
              left: 15.104px;
              background-color: #999;
              border-radius: 1.416px;
              position: absolute;
            }
          }
        }
      }
    }
    .step{
      padding:0 .15rem;
      width:100%;
      .stepItem{
        padding:.15rem 0;
        border-bottom:0.1px solid #F1F1F1;
      }
      .stepTitle{
        position: relative;
        margin: 0 auto;
        padding: 0;
        font-size: 15.104px;
        color: #313131;
        font-weight: bold;
        line-height: 25px;
        overflow: hidden;
        zoom: 1;  
      }
      .stepText{
        margin-top:.2rem;
        overflow: hidden;
        color: rgb(49, 49, 49);
        letter-spacing: -0.472px;
        font-weight: 200;
        font-size: 16.992px;
        line-height: 25.488px;      
      }
      img{
        margin-top:.15rem;
        width: 345px;
        height: 258.75px;
        border-radius: 4px;
      }
    }
`

export const ClientBox = border(styled.div`
`)

export const MaterialWrap = styled.div`
  display:flex;
  align-items:center;
  /* height:.48rem; */
  padding:.1rem 0 ;
  border-bottom:0.1px solid #F1F1F1;
  /* line-height:.48rem; */
  /* background:#fa3; */
  span{
    display:inline-block;
    width:50%;
    padding-right:.1rem;
    /* line-height:.48rem; */
    color: #313131;
    font-weight: 300;
    font-size: .17rem;
  }
`

