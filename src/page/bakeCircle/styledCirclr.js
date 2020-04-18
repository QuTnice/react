import styled from 'styled-components'
import border from '@/styled/border'


export const CircleWrap = styled.div`
  .swiper-scrollbar-drag{
    background:#BFBFBF;
  }
    font-family: sans-serif;
    height:100%;
  /* .sc-ifAKCX {
    height:100%!important
  } */
  .main{
    height:100%;
    overflow-y:scroll;
    background:#fff;
    padding-bottom:.4rem;
    overflow:hidden;
    .wrapper{
      height:100%;
    }
    .space10{
      height:.1rem;
      background:#F5F7F9;
    }
    .container1{
      height:.95rem;
    }
    .banner{
      img{
        width:1.5rem;
        height:.85rem;
        border-radius:5px;
      }
      /* height:.96rem; */
      padding-top:.05rem;
      .swiper-slide{
        width:1.5rem;
        
      }
    }
    .banner1{
      padding: .1rem 0 .02rem;
      overflow-x:hidden;
      .container2{
        height:.44rem;
      }
      .swiper-slide{
      width:auto!important
      }
    }
    .banner1 .spanDad{
      padding: .07rem .1rem;
      background:#fa3;
      margin-right:.08rem;
      border-radius:.04rem;
    }
    
    
  }
`
export const DyamicWrap = styled.div`
  background:#fff;
  /* margin-bottom:.1rem; */
  width:100%;
  min-height:200px;
  /* background:#fa3; */
  .userinfo{
    width:100%;
    height:.44rem;
    background:#fff;
    padding:0 .15rem;
    margin:.1rem 0 0;
    display:flex;
    .headImg{
      width:.4rem;
      height:.4rem;
      border-radius:50%;
      background:#ad3;
      border:.3px solid #E7E2E5;
      margin-right:.1rem;
      img{
        width:100%;
        height:100%;
        border-radius:50%;
      }
    }
    .master{
      display:flex;
      img{
        overflow:hidden;
      }
    }
    .name{
      color:#4A4945;
      font-size:.13rem;
      line-height:.2rem;
    }
    .time{
      font-size:.12rem;
      color:#999999;
      span{
        line-height:.2rem;
        display:inline-block;
      }
      .classify{
        padding-left:.1rem;
      }
    }
  }
  .contentinfo{
    width:100%;
    min-height:.2rem;
    background:#fff;
    padding:0 .15rem;
    margin:.1rem 0;
    font-size:.14rem;
    line-height:.2rem;
    color: #4A4945;
    span{
      color: #498DD0;
      font-size:.14rem;
    }
  }
  .imgBox{
    width:100%;
    min-height:1.1rem;
    background:#fff;
    padding: 0 .15rem;
    margin-bottom:.15rem;
    display:flex;
    flex-wrap:wrap;
    margin-top:.1rem;
    .imgwrap{
      padding:4px;
      display:inline;
    }
    img{
      /* max-width:100%; */
      /* height:auto; */
      margin:2px;
      /* max-height:.3 */
    }
  }
  .category{
    padding:0 .15rem;
    margin-bottom:.15rem;
    width:100%;
    .cateBox{
      width:100%;
      height:.7rem;
      background:#F5F7F9;
      border-radius: 4px;
      display: flex;
      img{
        background: none;
        width: .7rem;
        height: .7rem;
        display: inline-flex;
        border-radius: 4px;
      }
      .info{
        display: inline-flex;
        flex: 1;
        flex-direction: column;
        justify-content: center;
        padding-left: .15rem;
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
        .writer{
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
  }
  .operateinfo{
    width:100%;
    height:.3rem;
    padding:0 .15rem;
    /* background:#d3a; */
  }
`

export const OperateInfo = border(styled.div`
    width:100%;
    height:.3rem;
    padding:0 .15rem;
    background:#fff;
    display:flex;
    div{
      margin-top:.04rem;
      width:33.33%;
      height:.2rem;
      border-right:1px solid #E7E2E5;
      background:#fff;
      text-align:center;
      color:#999999;
      font-size:.12rem;
      line-height:.2rem;
      vertical-align:middle;
      display:flex;
      align-items: center;
      justify-content:center;
      & span:nth-child(1){
        line-height:.2rem;
        display:flex;
        /* padding-top:.03rem; */
        svg{
          line-height:.2rem;
        }
      }
      & span:nth-child(2){
        
        padding-left:.05rem;
        font-size:.12rem;
      line-height:.2rem;
        
      /* height:.2rem; */
      }
    }
      & div:last-child{
        border-right:none;
      }
`)

export const Bar = border(styled.div`
    width:100%;
    height:.001rem;
    margin-top:.05rem;
    /* background:#f00; */
`)