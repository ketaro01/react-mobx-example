import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { ProductWrap } from './style/ProductStyle';
import ProductItem from './ProductItem';
import { DefaultButton } from '../ui/Button';

const Product = (props) => {
  const {
    onClickAddBasket,
    productList,
    adInfo,
  } = props;

  const history = useHistory();

  return (
    <ProductWrap adImg={adInfo.img}>
      <div className="product-front-ad">
        <div className="main-ad-info">
          <div className="info-text">
            <h1>{adInfo.title}</h1>
            <h3>{adInfo.sub_title}</h3>
            <DefaultButton onClick={() => history.push(adInfo.link)}>구입하러가기</DefaultButton>
          </div>
        </div>
      </div>
      <div className="product-box">
        <div className="product-title">
          <h3>상품을 선택하세요!</h3>
        </div>
        <div className="product-list">
          {productList.map((item, i) => <ProductItem key={`p_item_${i}`} data={item} onClickBuy={() => console.log('onclick :: buy now')} onClickAddBasket={onClickAddBasket}/>)}
          <div className="filler" />
          <div className="filler" />
          <div className="filler" />
        </div>
      </div>
    </ProductWrap>
  );
};

Product.propTypes = {
  /** 장바구니에 데이터 추가를 위한 click 이벤트 */
  onClickAddBasket: PropTypes.func,
  /** 서버에서 가져온 상품 리스트 */
  productList: PropTypes.array,
  /** 서버에서 가져온 메인 광고 상품 정보 */
  adInfo: PropTypes.shape({}),
};
export default Product;
