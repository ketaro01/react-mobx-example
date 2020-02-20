import React from 'react';
// import { MemoryRouter } from 'react-router-dom'; // * router 사용 시
import ProductItem from './ProductItem';
import { withKnobs } from '@storybook/addon-knobs'; // * knobs addon 사용 시
import productData from '../../lib/productData';
import { action } from '@storybook/addon-actions';
import '../../global.css';

export default {
  title: 'component|Product/ProductItem', // * 스토리북 그룹 경로
  component: ProductItem, // * 컴포넌트
  decorators: [withKnobs], // * decorator 사용 시
  parameters: {
    componentSubtitle: '',
  }
};

export const standard = () => <ProductItem  data={productData.product_data[0]} onClickAddBasket={action('addBasket - clicked')} onClickBuy={action('buy - clicked')}/>;
export const nullData = () => <ProductItem  data={{}} onClickAddBasket={action('addBasket - clicked')} onClickBuy={action('buy - clicked')}/>;
