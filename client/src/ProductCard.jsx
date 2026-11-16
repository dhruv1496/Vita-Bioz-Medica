import "./index.css"

export const ProductCards = ({ productData }) => {

    const {
        image,
        name,
        form,
        packSize,
        description
    } = productData;

    return (
        <li className="product-card">

            <img
                src={image}
                alt={name}
                className="product-image"
            />

            <div className="product-info">

                <h2>{name}</h2>

                <p>
                    <strong>{form}</strong> • {packSize}
                </p>

                <p>
                    {description}
                </p>

                <button className="details-btn">
                    View Details
                </button>

            </div>

        </li>
    );
}