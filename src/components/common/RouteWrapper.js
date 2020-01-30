import React from 'react';
import { Route } from 'react-router-dom';

export default function RouteWrapper({
  component: Component, // 화면 컴포넌트
  layout: Layout, // 레이아웃 ui
  ...rest // 남은 그외 properties
}) {
  return (
    <Route
      {...rest}
      render={(props) =>
        <Layout {...props}>
          <Component {...props} />
        </Layout>
      }
    />
  )
}

