import React from 'react';
import { Provider } from 'mobx-react';
import ShoppingInfo from './ShoppingInfo';
import { createStore } from '../../stores';
import ProductStore from '../../stores/ProductStore';
import { STORE_PRODUCT } from '../../lib/type/stores';
import productData from '../../lib/productData';
import '../../global.css';

const rootStore = new createStore();

export default {
  title: 'component/Shopping/ShoppingInfo', // * 스토리북 그룹 경로
  component: ShoppingInfo, // * 컴포넌트
  parameters: {
    componentSubtitle: '',
  }
};

/** 상품이 없는 경우 */
export const standard = () => {
  return (
    <Provider {...rootStore}>
      <h3>상품 X</h3>
      <ShoppingInfo />
    </Provider>
  )
};

export const productExists = () => {
  const store = {
    [STORE_PRODUCT]: new ProductStore(),
  };
  store[STORE_PRODUCT].addBasket(productData.product_data[0]);
  return (
    <Provider {...store}>
      <h3>1개의 상품</h3>
      <ShoppingInfo />
    </Provider>
  );
};

export const productExistsMultiple = () => {
  const store = {
    [STORE_PRODUCT]: new ProductStore(),
  };
  for (let i = 0; i < 15; i++) {
    store[STORE_PRODUCT].addBasket(productData.product_data[i]);
  }
  return (
    <Provider {...store}>
      <div>
        <h3>15개의 상품</h3>
        <ShoppingInfo />
      </div>
    </Provider>
  );
};