import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import ProductCard from '../components/ProductCard';

const POPULAR_DISHES = [
  {
    id: 1,
    name: "Classic Cheeseburger",
    description: "Juicy beef patty with melted cheddar, lettuce, tomato, and our signature sauce.",
    price: 12.99,
    category: "Burgers",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 2,
    name: "Margherita Pizza",
    description: "Traditional Italian pizza with fresh mozzarella, basil, and rich tomato sauce.",
    price: 16.50,
    category: "Pizza",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 3,
    name: "Spicy Tuna Roll",
    description: "Fresh tuna with spicy mayo, cucumber, and scallions. 8 pieces.",
    price: 14.00,
    category: "Sushi",
    image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&q=80&w=800"
  }
];

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section 
        className="section relative" 
        style={{ 
          padding: '10rem 0',
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=2000)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: 'var(--white)'
        }}
      >
        <div className="container flex flex-col items-center text-center relative z-10">
          <h1 style={{ fontSize: '4rem', fontWeight: 900, marginBottom: '1.5rem', maxWidth: '800px', lineHeight: 1.1 }}>
            Crave It? <span style={{ color: 'var(--primary-color)' }}>We Deliver.</span>
          </h1>
          <p style={{ fontSize: '1.25rem', marginBottom: '2.5rem', maxWidth: '600px', color: 'rgba(255,255,255,0.9)' }}>
            Experience the finest culinary delights delivered hot and fresh to your doorstep in minutes.
          </p>
          <Link to="/menu" className="btn btn-primary" style={{ fontSize: '1.125rem', padding: '1rem 2rem', borderRadius: '9999px' }}>
            Explore Our Menu <ArrowRight className="ml-2" size={20} style={{ marginLeft: '0.5rem' }} />
          </Link>
        </div>
      </section>

      {/* Featured Products */}
      <section className="section container">
        <div className="flex justify-between items-end mb-8">
          <div>
            <h2 style={{ marginBottom: '0.5rem', fontSize: '2.5rem', fontWeight: 800 }}>Popular Dishes</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>Our most loved creations, ordered again and again.</p>
          </div>
          <Link to="/menu" style={{ color: 'var(--primary-color)', fontWeight: 700, display: 'flex', alignItems: 'center' }}>
            View Full Menu <ArrowRight size={16} style={{ marginLeft: '4px' }} />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {POPULAR_DISHES.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
