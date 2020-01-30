import React from 'react';
import Layout from '../components/ui/Layout';

const HomePage = (props) => {
  return (
    <div>
      Home, {props.common_data}
    </div>
  );
};

export default HomePage;