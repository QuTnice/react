import React, { Component } from 'react';
import { MaterialWrap } from './styledDetail'

class Material extends Component {
  render() {
    // console.log(this.props.value);
    return (
      <div>
        {
          this.props.value.map((value1) => (
            <MaterialWrap
              key={value1.contentRecipeMaterialId}
              color="#f00"
            >
              <span>{value1.name}</span>
              <span>{value1.weight}</span>
            </MaterialWrap>
          ))
        }
      </div>
    );
  }
}

export default Material;