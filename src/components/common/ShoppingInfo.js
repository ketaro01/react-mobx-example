import React from 'react';
import styled from 'styled-components';

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
  > div {
    margin: 10px;
    > button {
      font-size: 16px;
      border-radius: 20px;
      transition: 0.2s background-color;
      &:hover {
        background-color: #111;  
      }
    }
  }
`;
const ShoppingInfo = () => {
  return (
    <ShoppingWrap>
      <div><button>장바구니</button></div>
      <div><button>최근 본 상품</button></div>
    </ShoppingWrap>
  );
};

export default ShoppingInfo;
