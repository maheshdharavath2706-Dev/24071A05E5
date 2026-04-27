const Contact = () => {
  return (
    <div className="container py-12">
      <h1 className="text-center mb-8" style={{ textAlign: 'center', marginBottom: '2rem' }}>Contact Us</h1>
      <div className="grid md:grid-cols-2 gap-12" style={{ maxWidth: '900px', margin: '0 auto' }}>
        <div>
          <h3 className="mb-4" style={{ marginBottom: '1rem', fontWeight: 800 }}>Get in Touch</h3>
          <p className="mb-6" style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', fontSize: '1.1rem' }}>
            Have a question about a dish, your food order, or just want to tell us how much you loved your meal? We're all ears.
          </p>
          <div className="flex flex-col gap-4" style={{ color: 'var(--text-main)', fontSize: '1.1rem' }}>
            <p><strong>Email:</strong> support@crave.com</p>
            <p><strong>Phone:</strong> +1 (800) HOT-FOOD</p>
            <p><strong>Kitchen:</strong> 123 Culinary Lane, Foodie City, CA 90210</p>
          </div>
        </div>
        <div className="card p-6" style={{ padding: '1.5rem' }}>
          <form>
            <div className="form-group">
              <label className="form-label">Name</label>
              <input type="text" className="form-input" placeholder="Your Name" />
            </div>
            <div className="form-group">
              <label className="form-label">Email</label>
              <input type="email" className="form-input" placeholder="your@email.com" />
            </div>
            <div className="form-group mb-6">
              <label className="form-label">Message</label>
              <textarea className="form-input" rows="4" placeholder="How can we help?"></textarea>
            </div>
            <button className="btn btn-primary w-full" style={{ width: '100%' }}>Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
