import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import Product from './Product';
import { withKnobs } from '@storybook/addon-knobs';
import productData from '../../lib/productData';
import { action } from '@storybook/addon-actions';
import '../../global.css';

export default {
  title: 'component|Product/Product', // 스토리북에서 보여질 그룹과 경로를 명시
  component: Product, // 어떤 컴포넌트를 문서화 할지 명시
  decorators: [withKnobs],
  parameters: {
    componentSubtitle: 'test',
    // docs: {
    //   page: mdx,
    // }
  }
};

export const standard = () => (
  <MemoryRouter initialEntries={['/product/1']}>
    <Product productList={productData.product_data.filter(v => v.category_no === 1)} adInfo={productData.ad_data[0]} onClickAddBasket={action('addBasket - clicked')}/>
  </MemoryRouter>
);
export const badRequest = () => (
  <MemoryRouter initialEntries={['/product/1']}>
    <Product productList={[]} adInfo={{}} onClickAddBasket={action('addBasket - clicked')}/>
  </MemoryRouter>
);
