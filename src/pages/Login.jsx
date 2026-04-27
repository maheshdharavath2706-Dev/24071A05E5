import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div 
      className="flex justify-center items-center" 
      style={{ 
        minHeight: 'calc(100vh - 72px)', 
        backgroundImage: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&q=80&w=2000)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '2rem'
      }}
    >
      <div className="card glass p-8" style={{ width: '100%', maxWidth: '400px', padding: '2.5rem', margin: '0 auto', border: '1px solid rgba(255,255,255,0.3)', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)' }}>
        <h2 className="text-center mb-6" style={{ textAlign: 'center', marginBottom: '1.5rem', fontWeight: 800 }}>Welcome Back</h2>
        <form>
          <div className="form-group">
            <label className="form-label" htmlFor="email" style={{ fontWeight: 600 }}>Email</label>
            <input type="email" id="email" className="form-input" placeholder="you@example.com" style={{ backgroundColor: 'rgba(255,255,255,0.9)' }} />
          </div>
          <div className="form-group mb-6">
            <label className="form-label" htmlFor="password" style={{ fontWeight: 600 }}>Password</label>
            <input type="password" id="password" className="form-input" placeholder="••••••••" style={{ backgroundColor: 'rgba(255,255,255,0.9)' }} />
          </div>
          <button className="btn btn-primary w-full" style={{ width: '100%', marginBottom: '1.5rem', padding: '0.875rem' }}>Sign In</button>
        </form>
        <p className="text-center" style={{ color: 'var(--text-main)', textAlign: 'center', fontWeight: 500 }}>
          Don't have an account? <Link to="/register" style={{ color: 'var(--primary-color)', fontWeight: 800 }}>Sign up</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
