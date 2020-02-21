import styled from 'styled-components';

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
    width: 100%;
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
      .filler {
        min-width: 300px;
        margin: 5px 5px 5px 5px;
      }
    }
  }
`;

const ProductItemWrap = styled.div`
  font-size: 12px;
  min-width: 300px;
  max-width: 400px;
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
        max-width: 28px;
        height: 1.5625vw;
        max-height: 28px;
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
    .item-button {
      margin: 0 5px;
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
    max-width: 28px;
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

export {
  ProductWrap,
  ProductItemWrap,
  StarBox,
}