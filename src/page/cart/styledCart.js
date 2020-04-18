import styled from 'styled-components'

export const CartWrap = styled.div`
  width:100%;
  height:100%;
  display:flex;
  flex-direction:column;
  .infoBox{
    width: 100%;
    display:flex;
    max-height:1rem;
    margin-top: 10px;
    padding: 10px;
    overflow: hidden;
    box-sizing: border-box;
    background-color: #fff;
    .imgBox{
      width:1.2rem;
      height:.8rem;
      margin-right:.15rem;
      background-size:cover;
    }
    .infoContent{
      flex:1;
    .title{
      font-family: sans-serif;
      font-size: 14px;
      line-height: 20px;
      font-weight: bold;
      color: #4A4945;
      overflow: hidden;
      text-overflow: ellipsis;
      text-decoration: underline;
      -webkit-line-clamp: 2;
    }
    .teacher{
      font-family: sans-serif;
      font-size: 11px;
      line-height: 15px;
      color: #999;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      margin: 10px 0 0 0;
    }
    }
  }
  .priceBox{
    font-family: sans-serif;
    width: 100%;
    margin-top: 10px;
    padding: 10px;
    position: relative;
    overflow: hidden;
    box-sizing: border-box;
    background-color: #fff;
    .subtotal{
      display: inline-flex;
      font-size: 14px;
      color: #313131;
      width: 100%;
      justify-content: space-between;
      margin-bottom: 5px;
    }
    .line{
      width: 100%;
      height: 1px;
      background-color: #F1F1F1;
      margin: 10px auto;
    }
    .total{
      width: 100%;
      text-align: right;
      display: inline-flex;
      flex: 1;
      justify-content: flex-end;
      margin-top: 10px;
      font-weight: bold;
      color: #313131;
      font-size: 18px;
      line-height: 30px;
      span{
        color: #EA937B;
      }
    }
  }
  .wechatPay{
    cursor: pointer;
    display: flex;
    background-color: #44A92F;
    justify-content: center;
    align-items: center;
    height: 49px;
    font-size: 17px;
    color: #fff;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
  }
`