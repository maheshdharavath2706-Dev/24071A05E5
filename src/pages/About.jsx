const About = () => {
  return (
    <div className="container py-12">
      <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
        <h1 className="mb-6" style={{ marginBottom: '1.5rem', fontWeight: 800 }}>About <span style={{ color: 'var(--primary-color)' }}>Crave</span></h1>
        <p className="mb-4" style={{ fontSize: '1.25rem', color: 'var(--text-main)', marginBottom: '1rem', fontWeight: 500 }}>
          At Crave, we believe that great food should be accessible, delicious, and delivered hot right to your door.
        </p>
        <p style={{ fontSize: '1.125rem', color: 'var(--text-muted)' }}>
          Founded in 2026, our mission is to curate the best culinary experiences and bring them straight to your dining table. We partner with top local chefs and source only the freshest ingredients to ensure every bite you take is memorable. Whether it's a quick lunch or a family feast, Crave has you covered.
        </p>
      </div>
    </div>
  );
};

export default About;
