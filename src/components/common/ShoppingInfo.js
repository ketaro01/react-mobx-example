import React, { useState } from 'react';
import { inject, observer } from 'mobx-react';
import { STORE_PRODUCT } from '../../lib/type/stores';
import styled, { css } from 'styled-components';

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
    button {
      color: #333;
    }
  `}
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
      position: absolute;
      top: 10px;
      right: 15px;
    }
  }
`;
const ShoppingListWrap = styled.div`

`;
const ShoppingInfo = inject(STORE_PRODUCT)(observer((props) => {
  const { basketCount, basketList, removeBasket } = props[STORE_PRODUCT];
  const [isOpen, setIsOpen] = useState(false);
  return (
    <ShoppingWrap isOpen={isOpen}>
      <div className={isOpen ? 'open': 'not-open'}>
        <button onClick={() => setIsOpen(true)} className="btn-open">장바구니{basketCount > 0 && ` (${basketCount})`}</button>
        <div className="basket-open">
          <button onClick={() => setIsOpen(false)} className="btn-close">닫기</button>
          <ShoppingListWrap>
            {basketList && basketList.length > 0 ? <div>
              {basketList.map((item, index) => <div key={`basket_item_${index}`}>
                <img src={item.product_img} width={80} height={80} alt="thumbnail" />
                {item.duplicate}
                <button onClick={() => removeBasket(item.product_no)}>X</button>
              </div>)}
            </div> : <div>
              장바구니 내역이 업서용~
            </div>}
          </ShoppingListWrap>
        </div>
      </div>
    </ShoppingWrap>
  );
}));

export default ShoppingInfo;
