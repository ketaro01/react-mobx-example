import React, { Children } from 'react';
import styled from 'styled-components';

const LayoutBox = styled.div`
  width: 1280px;
  height: 100%;
  margin: 0 auto;
`;

const Layout = ({ children }) => {
  const childrenWithProps = Children.map(children,
    child => React.cloneElement(child, { common_data: 'test-value' }));
  return (
    <LayoutBox>
      {childrenWithProps}
    </LayoutBox>
  );
};

export default Layout;
