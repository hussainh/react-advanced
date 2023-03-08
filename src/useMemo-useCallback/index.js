import React, { useState, useCallback, useMemo, useEffect } from "react";
import { useFetch } from "../custom-hooks/useFetch";

const url = "https://course-api.com/javascript-store-products";

const calculateMostExpensiveFurniture = (data) => {
    return (
        data.reduce((total, item) => {
            const price = item.fields.price;
            if (price >= total) {
                total = price;
            }
            return total;
        }, 0)/100
    );
};
const Index = () => {
    const { products } = useFetch(url);
    const [count, setCount] = useState(0);
    const [cart, setCart] = useState(0);

    const addToCart = useCallback(() => {
        setCart(cart + 1);
    }, [cart]);

    return (
        <>
            <h1>Count: {count}</h1>
            <button 
                className="btn" 
                onClick={() => setCount(count + 1)}
            >
                Increment count
            </button>

            <h1 style={{marginTop: "3rem"}}>Cart: { cart }</h1>
            <h1>Most Expensive: ${calculateMostExpensiveFurniture(products)}</h1>
            <BigList products = {products} addToCart={addToCart} />
        </>
    );
};

const BigList = React.memo(({ products, addToCart }) => {
    useEffect(() => {
        console.log("big list called");
    });

    return (
        <section className="products">
            {products.map((product) => {
                return (
                    <SingleProduct 
                        key={product.id} 
                        {...product} 
                        addToCart={addToCart}>
                    </SingleProduct>);
            })}
        </section>
    );
});

const SingleProduct = ({fields, addToCart}) => {
        
    useEffect(() => {
        console.log("single item called");
    });

    let { name, price } = fields;
    price = price / 100;

    // commenting images out as we are getting failed certificate
    //const image = fields.image[0].url;
    return (
        <article className="product">
            {/* <img src={image} alt={name} /> */}
            <h4>{name}</h4>
            <p>${price}</p>
            <button onClick={addToCart}>Add to cart</button>
        </article>
    );
};

export default Index;