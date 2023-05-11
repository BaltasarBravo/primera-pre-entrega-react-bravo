const products = [
{
    id: "1",
    name: "Arnes para conejo",
    price: "$2500",
    category:"Accesorios",
    img:"",
    stock:"12",
    description:"Ver Detalle",
},

{
    id: "2",
    name: "Alfalfa para roedores",
    price: "700",
    category:"Alimentos",
    img:"",
    stock:"40",
    description:"Ver Detalle",
},

{
    id: "3",
    name: "Cepillo quita pelos",
    price: "$1300",
    category:"Accesorios",
    img:"",
    stock:"24",
    description:"Ver Detalle",
}


]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}