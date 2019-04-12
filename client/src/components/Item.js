import React, {Component} from 'react';

import './styles/Item.scss';

class Item extends Component {
  constructor(props) {
    super(props);

    this.state = {
      
    };
  }

  render() {
    const {item} = this.props;

    return (
      <div className="item">
        <div className="item-img">
          <div className="img"></div>
        </div>
        <div className="item-info">
          <div className="name">{ item.name }</div>
          <div className="brand">{ item.brand }</div>
          <div className="price">{ item.currentPrice }</div>
          <div className="sku">{ item.sku }</div>
        </div>
      </div>
    );
  }
}

export default Item;