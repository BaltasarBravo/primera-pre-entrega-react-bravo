import { useState, useEffect } from "react";
import { getProducts } from "../../asyncMock";
import ItemList from "../ItemList/ItemList"
const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        getProducts()
            .then(response => {
                setProducts(response)
            })
            .catch(error => {
                console.error(error)
            })
    }, [])

    return (

        <div style={{ marginTop: "200px" }}>

            {<h2>{greeting}</h2>}
            <ItemList products={products} />
        </div>



        // <>
        // {props.map((item) =>
        // return <ItemDetail {...item}/> 
        // )}
        // </>

    );

};

export default ItemListContainer;