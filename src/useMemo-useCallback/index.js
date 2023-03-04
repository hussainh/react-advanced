import React, { useState, useCallback, useMemo } from "react";
import { useFetch } from "../custom-hooks/useFetch";

const url = "https://course-api.com/javascript-store-products";

const Index = () => {
    const { products } = useFetch(url);
    const [count, setCount] = useState(0);

    return (
        <>
            <h1>Count: {count}</h1>
            <button 
                className="btn" 
                onClick={() => setCount(count + 1)}
            >
                Increment count
            </button>

            <BigList products = {products}/>
        </>
    );
};

const BigList = ({products}) => {
    return (
        <section className="products">
            {products.map((product) => {
                return <SingleProduct key={product.id} {...product}></SingleProduct>
            })}
        </section>
    );
};

const SingleProduct = ({fields}) => {
    let { name, price } = fields;
    price = price / 100;

    const image = fields.image[0].url;
    return (
        <article className="product">
            <img src={image} alt={name} />
            <h4>{name}</h4>
            <p>${price}</p>
        </article>
    );
};

export default Index;