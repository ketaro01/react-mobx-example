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
const ProductPage = (props) => {
  // const { params: { categoryNo } } = props.match;
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
          {new Array(9).fill('').map(() => (
            <div className="product-item">
              <div className="item-header">
                <h5>신상품</h5>
              </div>
              <div className="item-img">
                <img src="https://i.ibb.co/jfrfBNL/apple-1.jpg" alt="smartphone"/>
              </div>
              <div className="item-tag">
                <span>256 GB</span>
                <span>512 GB</span>
                <span>자급제</span>
              </div>
              <div className="item-info">
                <h5 className="item-title">상품명</h5>
                <div className="item-star">
                  <div>
                    <StarBox className="empty" />
                    <StarBox className="full" percent={100} />
                  </div>
                  <div>
                    <StarBox className="empty" />
                    <StarBox className="full" percent={100} />
                  </div>
                  <div>
                    <StarBox className="empty" />
                    <StarBox className="full" percent={100} />
                  </div>
                  <div>
                    <StarBox className="empty" />
                    <StarBox className="full" percent={50} />
                  </div>
                  <div>
                    <StarBox className="empty" />
                    <StarBox className="full" percent={0} />
                  </div>
                </div>
                <div className="item-price">
                  가격
                </div>
                <div className="item-description">
                  <ul>
                    <li>특별한 나를 만드는 폴더블 디자인</li>
                    <li>끊김없이 이어지는 혁신적인 사용성</li>
                    <li>전문가 수준의 촬영이 가능한 여섯 개의 카메라</li>
                  </ul>
                </div>
                <DefaultButton>구입하러가기</DefaultButton>
              </div>
            </div>
          ))}
          <div className="filler" />
          <div className="filler" />
          <div className="filler" />
        </div>
      </div>
    </ProductWrap>
  );
};

export default ProductPage;
