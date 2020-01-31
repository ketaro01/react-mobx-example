import React from 'react';
import styled from 'styled-components';
import { DefaultButton } from '../components/ui/Button';

const ProductWrap = styled.div`
  .product-front-ad {
    position: relative;
    width: 100%;
    height: 400px;
    .main-ad-info {
      width: 100%;
      height: 100%;
      background-image: url('https://source.unsplash.com/random/1600x900/?travel');
      background-repeat: no-repeat;
      .info-text {
        position: absolute;
        color: #fff;
        h1, h3 { margin: 0 };
        padding: 50px 0 0 35px;
        > button {
          margin-top: 15px;
        }
      }
    }
  }
  .product-box {
    .product-title {
      text-align: center;
    }
    .product-list {
      display: flex;
      flex-grow: 0;
      flex-shrink: 1;
      flex-direction: row;
      justify-content: center;
      flex-wrap: wrap;
      background-color: #eee;
      padding: 5px;
      .product-item {
        min-width: 300px;
        height: 600px;
        box-sizing: border-box;
        margin: 5px 5px 5px 5px;
        border-radius: 5px;
        background-color: #fff;
      }
      .filler {
        min-width: 300px;
        margin: 5px 5px 5px 5px;
      }
    }
  }
`;
const ProductPage = (props) => {
  const { params: { categoryNo } } = props.match;
  return (
    <ProductWrap>
      <div className="product-front-ad">
        <div className="main-ad-info">
          <div className="info-text">
            <h1>메인 광고 상품 타이틀</h1>
            <h3>서브 타이틀</h3>
            <DefaultButton>구입하러가기</DefaultButton>
          </div>
        </div>
      </div>
      <div className="product-box">
        <div className="product-title">
          <h3>상품을 선택하세요!</h3>
        </div>
        <div className="product-list">
          <div className="product-item">
            <div>
              <h5>내용1</h5>
            </div>
            <div>
              <img src="https://i.ibb.co/jfrfBNL/apple-1.jpg" width={200} height={200} alt="smartphone"/>
            </div>
            <div>
              <span>tag</span>
              <span>tag2</span>
              <span>tag3</span>
            </div>
            <div>
              <h5>상품명</h5>
              <div>
                상품설명 쏼라쏼
              </div>
              <div>
                ★★★★★
              </div>
              <div>
                가격
              </div>
              <DefaultButton>구입</DefaultButton>
            </div>
          </div>
          <div className="product-item">상품.2</div>
          <div className="product-item">상품.3</div>
          <div className="product-item">상품.1</div>
          <div className="product-item">상품.2</div>
          <div className="product-item">상품.3</div>
          <div className="product-item">상품.1</div>
          <div className="product-item">상품.2</div>
          <div className="product-item">상품.3</div>
          <div className="filler" />
          <div className="filler" />
          <div className="filler" />
        </div>
      </div>
    </ProductWrap>
  );
};

export default ProductPage;
