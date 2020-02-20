import React, { useEffect } from 'react';
import { inject, observer } from 'mobx-react';
import { STORE_AD } from '../lib/type/stores';
import Home from '../components/Home/Home';

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
    <Home adData={adData} />
  );
}));

export default HomePage;