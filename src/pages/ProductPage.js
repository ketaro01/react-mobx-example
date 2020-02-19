import React, { useEffect } from 'react';
import { STORE_PRODUCT } from '../lib/type/stores';
import { inject, observer } from 'mobx-react';
import Product from '../components/Product/Product';

const ProductPage = inject(STORE_PRODUCT)(observer((props) => {
  const { params: { categoryNo } } = props.match;
  const { getProductList, addBasket, productList, adInfo } = props[STORE_PRODUCT];

  useEffect(() => {
    getProductList(categoryNo);
  }, [categoryNo, getProductList]);

  return <Product productList={productList} adInfo={adInfo} onClickAddBasket={addBasket}/>
}));

export default ProductPage;
