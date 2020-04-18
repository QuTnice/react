import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'

@withRouter
class RecipeItem extends Component {

  itemClick(id){
    console.log(id);
    this.props.history.push('/detail/' + id)
  }
  render() {
    // console.log(this.props.value);
    return (
      <div className='itemBox' onClick={this.itemClick.bind(this, this.props.value.contentId)}>
        <div className="leftBox">
          <img src={this.props.value.coverImage} alt=""/>
        </div>
        <div className="rightBox">
          <div className='title'>{this.props.value.coverTitle}</div>
          <div className='detail'>
            {
              this.props.value.material.map((value) => (
                <span key={value.contentRecipeMaterialId}>{value.name}、</span>
              ))
            }
          </div>
          <div className='clientName'>{this.props.value.clientName}</div>
          {
            this.props.value.collectNum?
            <div className='collect'>
              <span>26收藏</span>&nbsp;
              <span>1人做过</span>
            </div>
            :''
          }
        </div>
      </div>
    );
  }
}

export default RecipeItem;