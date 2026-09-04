import type PropsType from './PropsType';

export default function ProductCard({productName, price, inStock}:PropsType ){
    return(
        <div>
            <hr />
            <h1>ProductCard.tsx</h1>
            <p>Product Name: {productName}</p>
            <p>Price: {price}</p>
            {inStock ? <button>Available</button>: <p>Out of Stock</p>}
            {/* {inStock ? <button>Buy</button>: <p>Out of Stock</p>} */}
        </div>
    );
}

// export default function ProductCard(props: PropsType){
//     return(
//         <div>
//             <hr />
//             <h2>Product Name: {props.productName}</h2>
//             <p>Price: {props.price}</p>
//         </div>
//     );
// }