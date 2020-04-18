import styled from 'styled-components'
import border from '@/styled/border'

export const BaikeWrap = styled.div`
  display:flex;
  flex-direction:column;
  overflow:hidden;
  height:100%;
  .topWrap{
    width:100%;
    height:.44rem;
    background:#fff;
    position: relative;
    img{
      width:.27rem;
      position: absolute;
      left:.2rem;
      top:calc(80% - .27rem)
    }
  }
  .main{
    padding: 0 .15rem;
    font-family: sans-serif;
    background:#fff;
    /* flex:1; */
    max-height:calc(100% - .44rem);
    overflow-y:scroll;
    /* height:500px; */
    .Bitem{
      width:100%;
      padding:.15rem 0;
      min-height:1rem;
      background:#fff;
      display:flex;
      img{
        width:1.3rem;
        height:.8rem;
        background:olive;
      }
      .content{
        flex:1;
        margin-top:.05rem;
        padding-left:.1rem;
        font-size: .16rem;
        line-height: .225rem;
        color: #313131;
      }
    }
  }
`
export const Bitem = border(
  styled.div`

  `
)