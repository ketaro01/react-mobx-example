import React from 'react';
import AdItem from './AdItem';
import styled from 'styled-components';

const HomeWrap = styled.div`
  width: 100%;
  .ad-wrap {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const Home = ({ adData }) => {
  return (
    <HomeWrap>
      <div className="ad-wrap">
        {adData.map((item, index) => <AdItem key={index} item={item} />)}
      </div>
    </HomeWrap>
  );
};

export default Home;
