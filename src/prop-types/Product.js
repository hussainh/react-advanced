import React from "react";
import PropTypes from 'prop-types'

const defaultImageUrl = "https://raw.githubusercontent.com/john-smilga/react-advanced-2020/master/src/assets/default-image.jpeg";

const Product = ({image, name, price}) => {
    const imageUrl = image && image.url;
    return (
    <article className="product">
        <img src={imageUrl || defaultImageUrl } alt={name} />
        <h4>{ name }</h4>
        <p>${ price || 3.99 }</p>
    </article>
    );
};

Product.propTypes = {
    image: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
};

// Product.defaultProps = {
//     name: "default name",
//     price: 3.99,
//     image: { url: "https://raw.githubusercontent.com/john-smilga/react-advanced-2020/master/src/assets/default-image.jpeg"}
// };

export default Product;