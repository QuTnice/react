import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'

import { Qitems } from './styledQa'
 
@withRouter
class Qitem extends Component {

  handleClick(id){
    this.props.history.push('/detail/' + id)
  }
  render() {
    // console.log(this.props.value);
    return (
      <Qitems className="qitem"
      width="1px"
      color="#E7E2E5"
      direction="bottom"
      onClick={this.handleClick.bind(this,this.props.value.recipeContentId)}
      >
        <p>{this.props.value.coverTitle}</p>
        {
          this.props.value.recipe.clientId>0?
        <div className="infoBox">
          <div className="imgbox">
            <img src={this.props.value.recipe.image} alt=""/>
          </div>
          <div className="clientbox">
            <div className='name'>{this.props.value.recipe.title}</div>
            <div className='author'>{this.props.value.recipe.clientName}</div>
          </div>
        </div>
        :''
        }
        <div className="answer">
          {
            this.props.value.answerNum>0?
          <div className="hasA">
            <span>{this.props.value.answerNum}</span>个回答
          </div>:
          <div className='noneA'>暂无回答</div>
          }
          <div>
            <div className="write">
              <img src="https://image.hongbeibang.com/FlSZI5KwZLrR9-QXD9Vu7u0lVvCE?48X48&imageView2/1/w/40/h/40" alt="" />
              写答案
            </div>
          </div>
        </div>

      </Qitems>
    );
  }
}

export default Qitem;