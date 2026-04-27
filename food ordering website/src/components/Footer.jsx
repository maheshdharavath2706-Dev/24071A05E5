import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: 'var(--text-main)', color: 'var(--white)', padding: '3rem 0', marginTop: 'auto' }}>
      <div className="container grid md:grid-cols-3 gap-8">
        <div>
          <h3 className="mb-4" style={{ color: 'var(--white)', fontWeight: 800 }}>Crave</h3>
          <p style={{ color: 'var(--text-muted)' }}>Premium culinary delights delivered hot and fresh to your door. Elevate your everyday meals.</p>
        </div>
        <div>
          <h4 className="mb-4" style={{ color: 'var(--white)' }}>Quick Links</h4>
          <ul className="flex flex-col gap-2" style={{ color: 'var(--text-muted)' }}>
            <li><Link to="/menu">Menu</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="mb-4" style={{ color: 'var(--white)' }}>Newsletter</h4>
          <p style={{ color: 'var(--text-muted)', marginBottom: '1rem' }}>Subscribe for updates and exclusive offers.</p>
          <div className="flex gap-2">
            <input type="email" placeholder="Your email" className="form-input" style={{ backgroundColor: 'rgba(255,255,255,0.1)', color: 'white', border: 'none' }} />
            <button className="btn btn-primary">Subscribe</button>
          </div>
        </div>
      </div>
      <div className="container mt-8 pt-8" style={{ borderTop: '1px solid #334155', textAlign: 'center', color: 'var(--text-muted)' }}>
        <p>&copy; 2026 Crave. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
