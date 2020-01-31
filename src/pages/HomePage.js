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
      position: relative;
      z-index: 10;
      max-width: 600px;
      height: 300px;
      margin: 10px;
      overflow: hidden;
      border-radius: 10px;
      transition: 0.5s box-shadow ease-in-out, .35s transform ;
      .ad-thumbnail {
        z-index: -1;
        width: 100%;
        opacity: 1;
      }
      .ad-title {
        position: absolute;
        display: inline-block;
        background-color: rgba( 0, 0, 0, 0.5 );
        color: #fff;
        top: 0;
        width: 100%;
        padding: 10px 15px;
        transition: 0.5s background-color;
      }
      &:hover {
        box-shadow: 0 0 15px 3px rgba(0,0,0,.3); 
        transform: scale(1.05, 1.05);
        .ad-title {
          background-color: rgba( 0, 0, 0, 1 );
        }
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
          <div className="ad-title">{item.description}</div>
          <Link to={item.link_url}>
            <img className="ad-thumbnail" src={item.img_url} alt={item.description} />
          </Link>
        </div>)}
      </div>
    </HomeWrap>
  );
}));

export default HomePage;