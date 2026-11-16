import products from "./Data/products.json";
import { ProductCards } from "./ProductCard.jsx";

export const Products = () => {
    return (
        <section>
            <ul>
                {products.map((product) => (
                    <ProductCards
                        key={product.id}
                        productData={product}
                    />
                ))}
            </ul>
        </section>
    );
};