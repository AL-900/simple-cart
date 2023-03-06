/** @format */

import { useSelector } from "react-redux";
import ProductItem from "./ProductItem";

function ProductList() {
	const { productList } = useSelector((state) => state.addProduct);

	return (
		<div className='productContainer' id='lws-productContainer'>
			{productList.map((product, index) => (
				<ProductItem key={index} product={product} />
			))}
		</div>
	);
}

export default ProductList;
