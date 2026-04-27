import { Link } from 'react-router-dom';
import { CreditCard, CheckCircle } from 'lucide-react';
import { useState } from 'react';

const Payment = () => {
  const [isSuccess, setIsSuccess] = useState(false);

  const handlePayment = (e) => {
    e.preventDefault();
    setIsSuccess(true);
  };

  if (isSuccess) {
    return (
      <div className="section container text-center" style={{ minHeight: '60vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <CheckCircle size={80} color="var(--primary-color)" style={{ marginBottom: '2rem' }} />
        <h1 style={{ marginBottom: '1rem' }}>Payment Successful!</h1>
        <p style={{ color: 'var(--text-muted)', fontSize: '1.25rem', marginBottom: '2rem' }}>
          Your order is confirmed and will be delivered shortly. Enjoy your food!
        </p>
        <Link to="/menu" className="btn btn-primary">
          Order More Food
        </Link>
      </div>
    );
  }

  return (
    <div className="section container">
      <h1 className="text-center" style={{ marginBottom: '3rem' }}>Checkout & <span style={{ color: 'var(--primary-color)' }}>Payment</span></h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="card" style={{ padding: '2rem' }}>
            <h2 style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <CreditCard size={24} color="var(--primary-color)" /> Payment Details
            </h2>
            
            <form onSubmit={handlePayment}>
              <div className="form-group">
                <label className="form-label">Name on Card</label>
                <input type="text" className="form-input" placeholder="John Doe" required />
              </div>
              
              <div className="form-group">
                <label className="form-label">Card Number</label>
                <input type="text" className="form-input" placeholder="XXXX XXXX XXXX XXXX" required />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="form-group">
                  <label className="form-label">Expiration Date</label>
                  <input type="text" className="form-input" placeholder="MM/YY" required />
                </div>
                <div className="form-group">
                  <label className="form-label">CVV</label>
                  <input type="text" className="form-input" placeholder="123" required />
                </div>
              </div>

              <div className="form-group mt-4">
                <label className="form-label">Delivery Address</label>
                <textarea className="form-input" placeholder="123 Main St, City" rows="3" required></textarea>
              </div>

              <button type="submit" className="btn btn-primary w-full mt-4" style={{ width: '100%', fontSize: '1.125rem' }}>
                Pay $29.49
              </button>
            </form>
          </div>
        </div>
        
        <div className="lg:col-span-1">
          <div className="card" style={{ padding: '2rem', backgroundColor: 'var(--bg-color)' }}>
            <h2 style={{ marginBottom: '1.5rem' }}>Order Summary</h2>
            
            <div className="flex justify-between mb-4" style={{ borderBottom: '1px solid var(--border-color)', paddingBottom: '1rem' }}>
              <div>
                <p style={{ fontWeight: 600 }}>Classic Cheeseburger</p>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>x 1</p>
              </div>
              <p style={{ fontWeight: 600 }}>$12.99</p>
            </div>

            <div className="flex justify-between mb-4" style={{ borderBottom: '1px solid var(--border-color)', paddingBottom: '1rem' }}>
              <div>
                <p style={{ fontWeight: 600 }}>Margherita Pizza</p>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>x 1</p>
              </div>
              <p style={{ fontWeight: 600 }}>$16.50</p>
            </div>
            
            <div className="flex justify-between mb-2">
              <p style={{ color: 'var(--text-muted)' }}>Subtotal</p>
              <p>$29.49</p>
            </div>
            <div className="flex justify-between mb-2">
              <p style={{ color: 'var(--text-muted)' }}>Delivery Fee</p>
              <p>$0.00</p>
            </div>
            
            <div className="flex justify-between mt-4 pt-4" style={{ borderTop: '2px dashed var(--border-color)' }}>
              <p style={{ fontWeight: 700, fontSize: '1.25rem' }}>Total</p>
              <p style={{ fontWeight: 700, fontSize: '1.25rem', color: 'var(--primary-color)' }}>$29.49</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
