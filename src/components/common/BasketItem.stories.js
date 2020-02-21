import React from 'react';
import BasketItem from './BasketItem';
import { action } from '@storybook/addon-actions'; // * action addon 사용 시
import { withKnobs, text, number } from '@storybook/addon-knobs'; // * knobs addon 사용 시
import '../../global.css';

export default {
  title: 'component|Shopping/BasketItem', // * 스토리북 그룹 경로
  component: BasketItem, // * 컴포넌트
  decorators: [withKnobs], // * decorator 사용 시
  parameters: {
    componentSubtitle: '',
  }
};

export const basketItem = () => {
  const product_no = number('product_no', 1);
  const product_name = text('product_name', '아이폰');
  const product_img = text('product_img', 'https://i.ibb.co/jfrfBNL/apple-1.jpg');
  const duplicate = number('duplicate', 1);
  return (
    <BasketItem
      product_no={product_no}
      product_name={product_name}
      product_img={product_img}
      duplicate={duplicate}
      onClickRemoveBasket={action('clicked :: remove basket')}
    />
  );
};
BasketItem.story = {
  name: 'Default'
};

// export const standard = () => <BasketItem />;
