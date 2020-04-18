import React, { Component } from 'react';

import { MineWrap } from './styledProfile'

class Mine extends Component {
  render() {
    return (
      <MineWrap>
        <div className="topWrap">
          <img src="https://image.hongbeibang.com/FthUBRvh6uWFq7omAeGtn8A-0E4s?48X48&imageView2/1/w/48/h/48" alt="" />
        </div>
        <div className="main">
          <div className="clientInfo">
            <div className='first'>
              <div className='imgBox'>
                <img src="https://image.hongbeibang.com//Fu0Ww9_hY9WTD9D3I_tOUXVV53Vf?200X200&imageView2/1/w/160/h/160" alt="" />
              </div>
              <div className='info'>
                <div className='infoFirst'>
                  <div className='name'>小丸子</div>
                  <div className='male'>
                    <img src="https://image.hongbeibang.com/Fkwt9tYiYAFxX-lC-WHvmbPSOUwv?94X94&imageView2/1/w/30/h/30" alt="" />
                  </div>
                  <div className='level'>
                    <img src="https://image.hongbeibang.com/FmFlZjZn6BHHnqrYVMz6MGecwc0J?200X200&imageView2/2/w/50/h/50" alt="" />
                  </div>
                </div>
                <div className="id">ID：d8c220191206210054421</div>
                <div className="experience">经验值：1/100</div>
                <div className="line">
                  <div className="lineHas"></div>
                </div>
              </div>
              <div className='arrow'>
                <img src="https://image.hongbeibang.com/Fr2noR6eeftUXEWQp5xx3DZjUj16?94X94&imageView2/1/w/46/h/46" alt="" />
              </div>
            </div>
            <div className='second'>
              <div>
                <p className='firstP'>1</p>
                <p className='secondP'>关注</p>
              </div>
              <div>
                <p className='firstP'>0</p>
                <p>关注</p>
              </div>
              <div>
                <p className='firstP'>1</p>
                <p>关注</p>
              </div>
            </div>
          </div>
          <div className="btnBox">
            <div>
              <p>
                <img src="https://image.hongbeibang.com/FgyV7GBC4RPoagtZnK-npLaoB1N6?160X160&imageView2/1/w/80/h/80" alt="" />
              </p>
              <p>作品</p>
            </div>
            <div>
              <p>
                <img src="https://image.hongbeibang.com/FhxeeHCgOPEcoLPR3sP6XNbybdvK?160X160&imageView2/1/w/80/h/80" alt="" />
              </p>
              <p>食谱</p>
            </div>
            <div>
              <p>
                <img src="https://image.hongbeibang.com/FkmRCthKDaI5Afc_NdkTZaqNLPE1?160X160&imageView2/1/w/80/h/80" alt="" />
              </p>
              <p>收藏</p>
            </div>
            <div>
              <p>
                <img src="https://image.hongbeibang.com/FgKxvkwdg8OOr9mhPok2JBVnCG2n?160X160&imageView2/1/w/80/h/80" alt="" />
              </p>
              <p>问题</p>
            </div>

          </div>
          <div className="itemFirst">
            <div>
              <img src="https://image.hongbeibang.com/FpFAELJdsHHxStgBnhPdgYgGmAYo?48X48&imageView2/1/w/48/h/48" alt=""/>
              <span>勋章库</span>
            </div>
            <div>
              <img src="https://image.hongbeibang.com/FjqJkpwIsLMWXY0LsNTSRG853oJR?48X48&imageView2/1/w/48/h/48" alt=""/>
              <span>精彩活动</span>
            </div>
            <div>
              <img src="https://image.hongbeibang.com/Fu1OwEAsExJ20OHVI2ZqBEtLtubY?48X48&imageView2/1/w/48/h/48" alt=""/>
              <span>每日签到</span>
            </div>
            <div>
              <img src="https://image.hongbeibang.com/FnuWoFzlqjbUFcZHkVG64M-cKA_N?48X48&imageView2/1/w/48/h/48" alt=""/>
              <span>我的课程</span>
            </div>
          </div>
          <div className="itemFirst">
            <div>
              <img src="https://image.hongbeibang.com/FloihK3c4UsgFSSuiI6ZNNFiYWHN?48X48&imageView2/1/w/48/h/48" alt=""/>
              <span>浏览记录</span>
            </div>
            <div>
              <img src="https://image.hongbeibang.com/FrIG0d-LU4bOADQE1euyCOGWO7Ep?48X48&imageView2/1/w/48/h/48" alt=""/>
              <span>达人申请</span>
            </div>
            <div>
              <img src="https://image.hongbeibang.com/Fn2YVwr3Ng_AQlJvQCWtBoRBDyjR?48X48&imageView2/1/w/48/h/48" alt=""/>
              <span>帮贡兑换</span>
            </div>
          </div>
        
        
        </div>
      </MineWrap>
    );
  }
}

export default Mine;