import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { inject, observer } from 'mobx-react';
import styled from 'styled-components';
import ShoppingInfo from '../common/ShoppingInfo';
import { STORE_PRODUCT } from '../../lib/type/stores';

const LayoutBox = styled.div`
  max-width: 1280px;
  height: 100%;
  margin: 0 auto;
  header > div {
    ul {
      overflow: hidden;
      background-color: #333;
      display: flex;
      > li {
        flex: 1;
        float: left;
        transition: background 0.3s;
        > a {
          display: block;
          color: #fff;
          text-align: center;
          padding: 15px;
        }
        &:hover {
          background-color: #111111;
        }
      }
    }
  }
  footer {
    width: 100%;
    height: 141px;
    background-color: #525252;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    > div {
      font-size: 14px;
    }
  }
`;

const Layout = inject(STORE_PRODUCT)(observer((props) => {
  const { children } = props;
  const { categoryList, getCategoryList, lastError } = props[STORE_PRODUCT];

  useEffect(() => {
    getCategoryList();
  }, [getCategoryList]);

  useEffect(() => {
    if (lastError) {
      alert(lastError.message);
    }
  }, [lastError]);
  return (
    <LayoutBox>
      <header>
        <div>
          <ul>
            {categoryList.map((item) => <li key={item.name}>
              <Link to={`/product/${item.value}`}>{item.name}</Link>
            </li>)}
          </ul>
        </div>
      </header>
      {children}
      <footer>
        <div>Copyright 2020. daehun yoon All rights reserved.</div>
      </footer>
      <ShoppingInfo />
    </LayoutBox>
  );
}));

export default Layout;
