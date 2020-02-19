import React from 'react';
import PropTypes from 'prop-types';
import { StarBox } from './style/ProductStyle';
import { DefaultButton } from '../ui/Button';
import { FaShoppingBasket } from 'react-icons/fa';

const ProductItem = (props) => {
  const {
    data,
    onClickBuy,
    onClickAddBasket,
  } = props;
  const {
    product_no,
    header,
    score,
    product_img,
    services,
    name,
    description,
    price,
  } = data;
  const star_rating = new Array(5).fill('').map((_, index) => {
    const tmp = score - index;
    if (tmp >= 1) return 100;
    return tmp * 100;
  });
  return (
    <div className="product-item">
      <div className="item-header">
        <h5>{header}</h5>
      </div>
      <div className="item-img">
        <img src={product_img} alt={name}/>
      </div>
      <div className="item-tag">
        {services && services.map((tag, tag_index) => <span key={`tag_${product_no}_${tag_index}`}>{tag}</span>)}
      </div>
      <div className="item-info">
        <h5 className="item-title">{name}</h5>
        <div className="item-star">
          {star_rating.map((percent, star_index) => <div key={`star_${product_no}_${star_index}`}>
            <StarBox className="empty" />
            <StarBox className="full" percent={percent} />
          </div>)}
        </div>
        <div className="item-price">
          {price}
        </div>
        <div className="item-description">
          <ul>
            {description && description.map((description, description_index) => <li key={`tag_${product_no}_${description_index}`}>{description}</li>)}
          </ul>
        </div>
        <DefaultButton className="item-button" onClick={() => onClickBuy(product_no)}>구입하러가기</DefaultButton>
        <DefaultButton className="item-button" onClick={() => onClickAddBasket(data)}><FaShoppingBasket color="#fff" /></DefaultButton>
      </div>
    </div>
  );
};

ProductItem.propTypes = {
  data: PropTypes.shape({}).isRequired,
  onClickBuy: PropTypes.func.isRequired,
  onClickAddBasket: PropTypes.func.isRequired,
};

export default ProductItem;
