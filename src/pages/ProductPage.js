import React from 'react';

const ProductPage = (props) => {
  const { params: { categoryNo } } = props.match;
  return (
    <div>
      PRODUCT PAGE {categoryNo}
    </div>
  );
};

export default ProductPage;
