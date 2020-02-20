import React from 'react';
// import { MemoryRouter } from 'react-router-dom'; // * router 사용 시
import { Provider } from 'mobx-react';
import ShoppingInfo from './ShoppingInfo';
import { createStore } from '../../stores';
// import { withKnobs } from '@storybook/addon-knobs'; // * knobs addon 사용 시
import '../../global.css';

const rootStore = new createStore();

export default {
  title: 'component/Shopping/ShoppingInfo', // * 스토리북 그룹 경로
  component: ShoppingInfo, // * 컴포넌트
  //  decorators: [withKnobs], // * decorator 사용 시
  parameters: {
    componentSubtitle: '',
  }
};

export const standard = () => (
  <Provider {...rootStore}>
    <ShoppingInfo />
  </Provider>
);
