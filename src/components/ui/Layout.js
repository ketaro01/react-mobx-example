import React, { Children, useEffect } from 'react';
import styled from 'styled-components';
import BackendApi from '../../service/BackendApi';

const LayoutBox = styled.div`
  width: 1280px;
  height: 100%;
  margin: 0 auto;
`;

const Layout = ({ children }) => {
  useEffect(() => {
    BackendApi.getCategoryList().then((response) => {
      if (response.status === 200) {
        console.log(response.data);
      }
    });
  }, []);
  const childrenWithProps = Children.map(children,
    child => React.cloneElement(child, { common_data: 'test-value' }));
  return (
    <LayoutBox>
      <header>
        헤더
        <div>
          <ul>
            <li>apple</li>
            <li>samsung</li>
            <li>lg</li>
          </ul>
        </div>
      </header>
      {childrenWithProps}
      <footer>
        푸터
      </footer>
    </LayoutBox>
  );
};

export default Layout;
