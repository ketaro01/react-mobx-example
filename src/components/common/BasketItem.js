import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const BasketItemWrap = styled.div`
  position: relative;
  border-top: 1px solid #aaa;
  height: 90px;
  max-width: 380px;
  padding: 10px;
  display: flex;
  align-items: center;
  button {
    position: absolute;
    right: 15px;
    color: #333;
  }
  img.basket-thumbnail {
    border: 1px solid #666;
    border-radius: 8px;
    width: 80px;
    height: 80px;
  }
  .p-item-name {
    margin-left: 5px;
  }
  .p-item-count {
    position: absolute;
    right: 50px;
  }
`;

const BasketItem = ({ item, productNo, productName, productImg, duplicate, isCheck, onClickRemoveBasket, onClickCheckProduct }) => {
  return (
    <BasketItemWrap>
      <input
        type="checkbox"
        checked={!!isCheck}
        onClick={() => onClickCheckProduct(item, !!isCheck)}
        readOnly
      />
      <img className="basket-thumbnail" src={productImg} alt="thumbnail" />
      <div>
        <span className='p-item-name'>{productName}</span>
        <span className='p-item-count'>{duplicate} 개</span>
      </div>
      <button onClick={() => onClickRemoveBasket(productNo)}>X</button>
    </BasketItemWrap>
  );
};

BasketItem.propTypes = {
  productNo: PropTypes.number.isRequired,
  productName: PropTypes.string.isRequired,
  productImg: PropTypes.string.isRequired,
  duplicate: PropTypes.number,
  onClickRemoveBasket: PropTypes.func.isRequired,
};

BasketItem.defaultProps = {
  duplicate: 1,
};

export default BasketItem;
