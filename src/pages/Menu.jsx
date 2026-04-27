import { useState } from 'react';
import ProductCard from '../components/ProductCard';
import { Search } from 'lucide-react';

const MENU_ITEMS = [
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
  },
  {
    id: 4,
    name: "Caesar Salad",
    description: "Crisp romaine lettuce, parmesan cheese, croutons, and creamy Caesar dressing.",
    price: 9.99,
    category: "Salads",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 5,
    name: "Truffle Pasta",
    description: "Homemade linguine tossed in a rich black truffle cream sauce with parmesan.",
    price: 19.50,
    category: "Pasta",
    image: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 6,
    name: "Crispy Fish Tacos",
    description: "Three tacos with battered cod, slaw, and cilantro-lime crema.",
    price: 13.50,
    category: "Mexican",
    image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&q=80&w=800"
  }
];

const CATEGORIES = ["All", "Burgers", "Pizza", "Sushi", "Salads", "Pasta", "Mexican"];

const Menu = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredItems = MENU_ITEMS.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          item.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === 'All' || item.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="section container">
      <div className="text-center mb-8">
        <h1 style={{ marginBottom: '1rem' }}>Our <span style={{ color: 'var(--primary-color)' }}>Menu</span></h1>
        <p style={{ color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto' }}>
          Explore our wide range of delicious dishes prepared with fresh ingredients and passion.
        </p>
      </div>

      <div className="flex flex-col md-flex-row gap-6 mb-8 items-center justify-between">
        <div className="flex gap-2" style={{ overflowX: 'auto', paddingBottom: '10px', width: '100%' }}>
          {CATEGORIES.map(category => (
            <button 
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`btn ${activeCategory === category ? 'btn-primary' : 'btn-secondary'}`}
              style={{ borderRadius: '9999px', padding: '0.5rem 1rem', whiteSpace: 'nowrap' }}
            >
              {category}
            </button>
          ))}
        </div>
        
        <div className="relative" style={{ width: '100%', maxWidth: '300px' }}>
          <input 
            type="text" 
            placeholder="Search menu..." 
            className="form-input"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{ paddingLeft: '2.5rem', borderRadius: '9999px' }}
          />
          <Search size={18} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
        </div>
      </div>

      {filteredItems.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map(item => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <h3 style={{ marginBottom: '1rem' }}>No items found</h3>
          <p style={{ color: 'var(--text-muted)' }}>Try adjusting your search or category filter.</p>
          <button 
            className="btn btn-secondary mt-4"
            onClick={() => { setSearchTerm(''); setActiveCategory('All'); }}
          >
            Clear Filters
          </button>
        </div>
      )}
    </div>
  );
};

export default Menu;
