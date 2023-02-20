import { useState, useEffect } from "react";

export const useFetch = (url) => {
    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState([]);

    const GetProducts = async () => {
        const response = await fetch(url);
        const products = await response.json();
        setProducts(products);
        setLoading(false);
    };

    useEffect(() => {
        GetProducts();
    }, [url]);

    return (
        {loading, products}
    );
};