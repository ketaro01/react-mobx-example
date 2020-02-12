import React, { useEffect } from 'react';
import styled from 'styled-components';
import { DefaultButton } from '../components/ui/Button';
import { STORE_PRODUCT } from '../lib/type/stores';
import { inject, observer } from 'mobx-react';

const ProductWrap = styled.div`
  .product-front-ad {
    position: relative;
    width: 100%;
    height: 400px;
    .main-ad-info {
      width: 100%;
      height: 100%;
      background-image: url(${props => props.adImg});
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
    font-size: 12px;
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
        height: 550px;
        box-sizing: border-box;
        margin: 5px 5px 5px 5px;
        border-radius: 5px;
        background-color: #fff;
        .item-header {
          h5 {
            font-size: 14px;
            margin: 10px 0;
            text-align: center;
          }
        }
        .item-img {
          width: 100%;
          text-align: center;
          img {
            width: 200px;
            height: 200px;
          }
          padding: 10px;
          box-sizing: border-box;
        }
        .item-tag {
          text-align: center;
          span {
            font-weight: bold;
            border: 2px solid #666;
            border-radius: 12px;
            padding: 2px 5px;
            margin: 0px 2.5px;
          }
        }
        .item-tag:after {
          content: '-';
          opacity: 0;
        }
        .item-info {
          text-align: center;
          .item-title {
            font-size: 16px;
            margin: 10px 0;
          }
          .item-star {
            height: 25px;
            margin: 10px 0;
            > div {
              display: inline-block;
              position: relative;
              width: 1.5625vw;
              height: 1.5625vw;
              margin: 0vw 0.06944vw;
            }
          }
          .item-description {
            border-top: 1px solid #aaa;
            border-bottom: 1px solid #aaa;
            margin: 10px auto;
            width: 90%;
            height: 80px;
            text-align: left;
            ul {
              list-style-type: initial;
              margin-block-start: 1em;
              margin-block-end: 1em;
              margin-inline-start: 0px;
              margin-inline-end: 0px;
              padding-inline-start: 20px;
            }
          }
        }
      }
      .filler {
        min-width: 300px;
        margin: 5px 5px 5px 5px;
      }
    }
  }
`;
const StarBox = styled.span`
  position: absolute;
  display: block;
  top: 0;
  left: 0;
  width: ${props => typeof props.percent !== 'undefined' ? props.percent : 100}%;
  height: 100%;
  overflow: hidden;
  &.full:after {
    position: absolute;
    display: block;
    width: 1.5625vw;
    height: 100%;
    background-image: url("/img/ico-star-full.svg");
    background-size: 100%;
    background-repeat: no-repeat;
    overflow: hidden;
    content: ' ';
  }
  &.empty:after {
    position: absolute;
    display: block;
    width: 100%;
    height: 100%;
    background-image: url("/img/ico-star-empty.svg");
    background-size: 100%;
    background-repeat: no-repeat;
    overflow: hidden;
    content: ' ';
  }
`;
const ProductPage = inject(STORE_PRODUCT)(observer((props) => {
  const { params: { categoryNo }, history } = props.match;
  const { getProductList, productList, adInfo } = props[STORE_PRODUCT];
  useEffect(() => {
    getProductList(categoryNo);
  }, [categoryNo, getProductList]);
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
          {productList.map((item) => {
            const { score } = item;
            const star_rating = new Array(5).fill('').map((_, index) => {
              const tmp = score - index;
              if (tmp >= 1) return 100;
              return tmp * 100;
            });

            return (
              <div className="product-item" key={`product_${item.product_no}`}>
                <div className="item-header">
                  <h5>{item.header}</h5>
                </div>
                <div className="item-img">
                  <img src={item.product_img} alt={item.name}/>
                </div>
                <div className="item-tag">
                  {item.services && item.services.map((tag, tag_index) => <span key={`tag_${item.product_no}_${tag_index}`}>{tag}</span>)}
                </div>
                <div className="item-info">
                  <h5 className="item-title">{item.name}</h5>
                  <div className="item-star">
                    {star_rating.map((percent, star_index) => <div key={`star_${item.product_no}_${star_index}`}>
                      <StarBox className="empty" />
                      <StarBox className="full" percent={percent} />
                    </div>)}
                  </div>
                  <div className="item-price">
                    가격
                  </div>
                  <div className="item-description">
                    <ul>
                      {item.description && item.description.map((description, description_index) => <li key={`tag_${item.product_no}_${description_index}`}>{description}</li>)}
                    </ul>
                  </div>
                  <DefaultButton>구입하러가기</DefaultButton>
                </div>
              </div>
            );
          })}
          <div className="filler" />
          <div className="filler" />
          <div className="filler" />
        </div>
      </div>
    </ProductWrap>
  );
}));

export default ProductPage;
