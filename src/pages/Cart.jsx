import { Link } from 'react-router-dom';
import { Trash2, ArrowRight } from 'lucide-react';

const Cart = () => {
  return (
    <div className="container py-12">
      <h1 className="mb-8 text-center" style={{ fontSize: '2.5rem' }}>Your <span style={{ color: 'var(--primary-color)' }}>Order</span></h1>
      
      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2" style={{ gridColumn: 'span 2' }}>
          <div className="card p-6" style={{ padding: '1.5rem' }}>
            {/* Cart Item 1 */}
            <div className="flex items-center gap-4 pb-6" style={{ borderBottom: '1px solid var(--border-color)' }}>
              <div className="food-img-wrapper" style={{ width: '80px', height: '80px', borderRadius: '8px', overflow: 'hidden' }}>
                <img src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=80&w=800" alt="Cheeseburger" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div className="flex-grow">
                <h3 style={{ fontSize: '1.125rem' }}>Classic Cheeseburger</h3>
                <p style={{ color: 'var(--primary-color)', fontWeight: '700' }}>$12.99</p>
              </div>
              <div className="flex items-center gap-2">
                <input type="number" defaultValue="1" className="form-input" style={{ width: '60px', padding: '0.25rem 0.5rem' }} />
                <button style={{ color: 'var(--secondary-color)', padding: '0.5rem' }}><Trash2 size={20} /></button>
              </div>
            </div>
            
            {/* Cart Item 2 */}
            <div className="flex items-center gap-4 pt-6">
              <div className="food-img-wrapper" style={{ width: '80px', height: '80px', borderRadius: '8px', overflow: 'hidden' }}>
                <img src="https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=800" alt="Pizza" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div className="flex-grow">
                <h3 style={{ fontSize: '1.125rem' }}>Margherita Pizza</h3>
                <p style={{ color: 'var(--primary-color)', fontWeight: '700' }}>$16.50</p>
              </div>
              <div className="flex items-center gap-2">
                <input type="number" defaultValue="1" className="form-input" style={{ width: '60px', padding: '0.25rem 0.5rem' }} />
                <button style={{ color: 'var(--secondary-color)', padding: '0.5rem' }}><Trash2 size={20} /></button>
              </div>
            </div>
          </div>
        </div>
        
        <div>
          <div className="card p-6" style={{ padding: '1.5rem', position: 'sticky', top: '100px' }}>
            <h3 className="mb-4">Order Summary</h3>
            <div className="flex justify-between mb-2">
              <span style={{ color: 'var(--text-muted)' }}>Subtotal</span>
              <span style={{ fontWeight: 500 }}>$29.49</span>
            </div>
            <div className="flex justify-between mb-4 pb-4" style={{ borderBottom: '1px solid var(--border-color)' }}>
              <span style={{ color: 'var(--text-muted)' }}>Delivery Fee</span>
              <span style={{ fontWeight: 500 }}>$0.00</span>
            </div>
            <div className="flex justify-between mb-6">
              <span style={{ fontWeight: 700, fontSize: '1.125rem' }}>Total</span>
              <span style={{ fontWeight: 700, fontSize: '1.125rem', color: 'var(--primary-color)' }}>$29.49</span>
            </div>
            <Link to="/payment" className="btn btn-primary w-full flex justify-center gap-2" style={{ width: '100%', padding: '1rem' }}>
              Proceed to Checkout <ArrowRight size={18} />
            </Link>
            <div className="mt-4 text-center">
              <Link to="/menu" style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>or Add More Food</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
