import React, { useState } from 'react';
import { inject, observer } from 'mobx-react';
import BasketItem from './BasketItem';
import { STORE_PRODUCT } from '../../lib/type/stores';
import styled, { css } from 'styled-components';
import { DefaultButton } from '../ui/Button';
import {
  CSSTransition,
  TransitionGroup,
} from 'react-transition-group';

const ShoppingWrap = styled.div`
  position: fixed;
  z-index: 9999;
  right: 20px;
  bottom: 10px;
  background-color: #333;
  color: #fff;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  ${props => props.isOpen && css`
    background-color: white;
    border: 1px solid #333;
    color: #333;
  `}
  .basket-header {
    padding: 10px;
  }
  > div {
    transition: width 0.3s ease, height 0.3s ease;
  }
  > div.not-open {
    width: 110px;
    height: 35px;
    margin: 5px;
    text-align: center;
    > button {
      padding: 5px;
      font-size: 16px;
      border-radius: 20px;
      transition: 0.2s background-color;
      &:hover {
        background-color: #111;  
      }
    }
    .basket-open { display: none; }
  }
  > div.open {
    position: relative;
    width: 400px;
    height: 600px;
    .btn-open { display: none; }
    .btn-close {
      color: #333;
      position: absolute;
      right: 15px;
    }
  }
  .buy-now-box {
    position: absolute;
    width: 100%;
    height: 100px;
    bottom: 0;
    line-height: 100px;
    text-align: center;
  }
`;
const ShoppingListWrap = styled.div`
  position: absolute;
  top: 40px;
  margin: 10px;
  width: 380px;
  height: 445px;
  overflow: scroll;
  .basket-exists {
    border-bottom: 1px solid #aaa;
  }
  .basket-empty {
    text-align: center;
    line-height: 500px;
  }
`;
const ShoppingInfo = inject(STORE_PRODUCT)(observer((props) => {
  const { basketCount, checkedProduct, basketList, removeBasket, checkProduct } = props[STORE_PRODUCT];
  const [isOpen, setIsOpen] = useState(false);
  const onClickBuyNow = () => {
    if (checkedProduct.length === 0) {
      alert('구입할 상품을 선택 해주세요.');
      return false;
    }
    console.log('submit :: go to payment page', checkedProduct);
  };
  return (
    <ShoppingWrap isOpen={isOpen}>
      <div className={isOpen ? 'open': 'not-open'}>
        <button onClick={() => setIsOpen(true)} className="btn-open">장바구니{basketCount > 0 && ` (${basketCount})`}</button>
        <div className="basket-open">
          <div className="basket-header">
            <span>선택된 상품 : {checkedProduct.length}개</span>
            <button onClick={() => setIsOpen(false)} className="btn-close">닫기</button>
          </div>
          <ShoppingListWrap>
            <div>
              {basketList && basketList.length > 0 ? <div className="basket-exists">
                <TransitionGroup className="basket-list">
                  {basketList.map((item, index) => (
                    <CSSTransition
                      key={`basket_item_${index}`}
                      timeout={500}
                      classNames="item"
                    >
                      <BasketItem
                        item={item}
                        productName={item.name}
                        productNo={item.product_no}
                        duplicate={item.duplicate}
                        productImg={item.product_img}
                        isCheck={item.isCheck}
                        onClickRemoveBasket={removeBasket}
                        onClickCheckProduct={checkProduct}
                      />
                    </CSSTransition>
                  ))}
                </TransitionGroup>
              </div> : <div className="basket-empty">
                장바구니에 담긴 상품이 없습니다.
              </div>}
            </div>
          </ShoppingListWrap>
          <div className="buy-now-box">
            <DefaultButton onClick={onClickBuyNow}>구매하러 가기</DefaultButton>
          </div>
        </div>
      </div>
    </ShoppingWrap>
  );
}));

export default ShoppingInfo;
