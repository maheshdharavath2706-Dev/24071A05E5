import { Link } from 'react-router-dom';
import { ShoppingCart, User, Pizza } from 'lucide-react';

const Navbar = () => {
  return (
    <header className="glass" style={{ position: 'sticky', top: 0, zIndex: 10 }}>
      <div className="container flex items-center justify-between" style={{ height: '72px' }}>
        <Link to="/" className="flex items-center gap-2">
          <Pizza color="var(--primary-color)" size={32} />
          <span style={{ color: 'var(--primary-color)', fontWeight: '900', fontSize: '1.75rem', letterSpacing: '-0.025em' }}>Crave</span>
        </Link>
        
        <nav className="flex items-center gap-6" style={{ display: 'none' }} id="desktop-nav">
          <Link to="/" style={{ fontWeight: 600 }}>Home</Link>
          <Link to="/menu" style={{ fontWeight: 600 }}>Menu</Link>
          <Link to="/about" style={{ fontWeight: 600 }}>About</Link>
          <Link to="/contact" style={{ fontWeight: 600 }}>Contact</Link>
        </nav>
        <style>{`
          @media (min-width: 768px) { #desktop-nav { display: flex !important; } }
          .md-block { display: none; }
          @media (min-width: 768px) { .md-block { display: block; } }
        `}</style>

        <div className="flex items-center gap-4">
          <Link to="/login" className="flex items-center gap-2" style={{ color: 'var(--text-muted)' }}>
            <User size={20} />
            <span className="md-block">Login</span>
          </Link>
          <Link to="/cart" className="flex items-center gap-2" style={{ color: 'var(--text-muted)', position: 'relative' }}>
            <ShoppingCart size={20} />
            <span className="badge" style={{ position: 'absolute', top: '-8px', right: '-8px' }}>2</span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
