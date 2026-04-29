import { Link } from "react-router-dom";

function ItemCard({ item, onDelete }) {

  // optional: calculate final price
  const finalPrice =
    item.price - (item.price * item.discountPercentage) / 100;

  return (
    <div className="card">
      <img
        src={item.imageUrl || "https://via.placeholder.com/400x220?text=Item"}
        alt={item.name}
        className="card-image"
      />

      <h3>{item.name}</h3>

      <p><strong>Category:</strong> {item.category}</p>

      <p><strong>Price:</strong> ${item.price}</p>

      {/* NEW FIELD */}
      <p><strong>Discount:</strong> {item.discountPercentage || 0}%</p>

      {/* OPTIONAL: Show final price */}
      <p><strong>Final Price:</strong> ${finalPrice.toFixed(2)}</p>

      <p>{item.description}</p>

      <div className="card-actions">
        <Link className="btn secondary" to={`/edit-item/${item._id}`}>
          Edit
        </Link>

        <button className="btn danger" onClick={() => onDelete(item._id)}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default ItemCard;