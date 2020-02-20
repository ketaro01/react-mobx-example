import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const AdItemWrap = styled.div`
  position: relative;
  z-index: 10;
  max-width: 600px;
  height: 300px;
  margin: 10px;
  overflow: hidden;
  border-radius: 10px;
  transition: 0.5s box-shadow ease-in-out, .35s transform ;
  .ad-thumbnail {
    z-index: -1;
    width: 100%;
    opacity: 1;
  }
  .ad-title {
    position: absolute;
    display: inline-block;
    background-color: rgba( 0, 0, 0, 0.5 );
    color: #fff;
    top: 0;
    width: 100%;
    padding: 10px 15px;
    transition: 0.5s background-color;
  }
  &:hover {
    box-shadow: 0 0 15px 3px rgba(0,0,0,.3); 
    transform: scale(1.05, 1.05);
    .ad-title {
      background-color: rgba( 0, 0, 0, 1 );
    }
  }
`;

const AdItem = ({ item }) => {
  return (
    <AdItemWrap>
      <div className="ad-title">{item.description}</div>
      <Link to={item.link_url}>
        <img className="ad-thumbnail" src={item.img_url} alt={item.description} />
      </Link>
    </AdItemWrap>
  );
};

AdItem.propTypes = {
  item: PropTypes.shape({
    description: PropTypes.string,
    link_url: PropTypes.string,
    img_url: PropTypes.string,
  }),
};

export default AdItem;
