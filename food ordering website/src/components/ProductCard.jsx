import { ShoppingCart } from 'lucide-react';

const ProductCard = ({ product }) => {
  return (
    <div className="card flex flex-col h-full">
      <div className="food-img-wrapper" style={{ height: '220px', width: '100%' }}>
        <img src={product.image} alt={product.name} style={{ height: '100%', width: '100%', objectFit: 'cover' }} />
      </div>
      <div className="flex flex-col flex-grow" style={{ padding: '1.5rem' }}>
        <div className="flex justify-between items-start mb-2">
          <div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 700 }}>{product.name}</h3>
            {product.category && <span className="badge mt-1 inline-block">{product.category}</span>}
          </div>
          <span style={{ fontWeight: 800, fontSize: '1.25rem', color: 'var(--primary-color)' }}>${product.price}</span>
        </div>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', marginTop: '0.5rem', marginBottom: '1.5rem', flexGrow: 1 }}>{product.description}</p>
        <button className="btn btn-primary w-full flex justify-center gap-2" style={{ width: '100%' }}>
          <ShoppingCart size={18} />
          Add to Order
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
