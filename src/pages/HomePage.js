import React, { useEffect } from 'react';
import { inject, observer } from 'mobx-react';
import styled from 'styled-components';
import { STORE_AD } from '../lib/type/stores';
import { Link } from 'react-router-dom';

const HomeWrap = styled.div`
  width: 100%;
  .ad-wrap {
    display: flex;
    flex-direction: column;
    align-items: center;
    > .ad-item {
      z-index: 10;
      max-width: 600px;
      height: 300px;
      margin: 10px;
      overflow: hidden;
      border-radius: 10px;
      transition: 0.5s opacity;
      &:hover {
        opacity: 0.8;
      }
      img {
        z-index: -1;
        width: 100%;
      }
    }
  }
`;
const HomePage = inject(STORE_AD)(observer((props) => {
  const { getAdData, root: { lastError }, adData } = props[STORE_AD];
  useEffect(() => {
    getAdData();
  }, [getAdData]);
  useEffect(() => {
    if (lastError) {
      alert(lastError.message);
    }
  }, [lastError]);
  return (
    <HomeWrap>
      <div className="ad-wrap">
        {adData.map((item) => <div className="ad-item">
          <Link to={item.link_url}>
            <img src={item.img_url} alt={item.description} />
          </Link>
        </div>)}
      </div>
    </HomeWrap>
  );
}));

export default HomePage;