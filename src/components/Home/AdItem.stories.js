import React from 'react';
import { MemoryRouter } from 'react-router-dom'; // * router 사용 시
import AdItem from './AdItem';
import { withKnobs, object } from '@storybook/addon-knobs'; // * knobs addon 사용 시

export default {
  title: 'component|Home/AdItem', // * 스토리북 그룹 경로
  component: AdItem, // * 컴포넌트
  decorators: [withKnobs], // * decorator 사용 시
  parameters: {
    componentSubtitle: '홈화면 배너 item',
  }
};
const adItemData = {
  img_url: 'https://source.unsplash.com/random/800x600/?night',
  link_url: '/product/3',
  description: 'blah blah',
};

export const adItem = () => {
  const obj = object('item', adItemData, 'GROUP-ID1');
  // knobs 만들기
  return <MemoryRouter initialEntries={['/']}><AdItem item={obj} /></MemoryRouter>;
};
adItem.story = {
  name: 'Default'
};

export const standard = () => <MemoryRouter initialEntries={['/']}><AdItem item={adItemData} /></MemoryRouter>;
