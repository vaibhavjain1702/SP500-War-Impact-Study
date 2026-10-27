import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="container" style={{ paddingTop: '120px', paddingBottom: '80px' }}>
        <div style={{ maxWidth: '800px' }}>
          <div className="mono-text" style={{ color: 'var(--accent-cyan)', marginBottom: '16px' }}>S&P 500 BEHAVIORAL FINANCE STUDY</div>
          <h1 className="serif-title" style={{ fontSize: '4.5rem', lineHeight: 1.1, marginBottom: '24px', background: 'linear-gradient(135deg, #fff, #8B949E)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            The Anatomy of Market Shock.
          </h1>
          <p className="section-subtitle" style={{ fontSize: '1.25rem', lineHeight: 1.6 }}>
            An empirical analysis surveying 21 geopolitical conflicts (with 19 valid events passing data-quality thresholds) from 1993 to 2024. We challenge the conventional wisdom of "front-loaded fear" and examine how duration, secondary escalations, and macro-economic transmission channels dictate institutional recovery.
          </p>
          <div style={{ display: 'flex', gap: '16px' }}>
            <Link to="/data" className="btn">Explore the Data</Link>
            <Link to="/hypotheses" className="btn btn-secondary">View Findings</Link>
          </div>
        </div>
      </section>

      {/* THEORETICAL FRAMEWORK */}
      <section style={{ background: '#090c10', borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)', padding: '80px 0' }}>
        <div className="container">
          <h2 className="section-title">Theoretical Framework</h2>
          <p className="section-subtitle">Challenging the Efficient Market Hypothesis (EMH)</p>
          
          <div className="grid-2">
            <div className="glass-panel">
              <h3 style={{ marginBottom: '16px' }}>Efficient Market Hypothesis (EMH)</h3>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '16px', lineHeight: 1.6 }}>
                Traditional financial theory (Fama, 1970) assumes that markets are perfectly efficient and instantly price in all available information. Under strict EMH, a geopolitical shock should be priced in on Day 0, resulting in a permanent structural shift without prolonged volatility or predictable recovery curves.
              </p>
            </div>
            <div className="glass-panel" style={{ borderColor: 'var(--accent-cyan)' }}>
              <h3 style={{ marginBottom: '16px' }}>Behavioral Finance & Herding</h3>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '16px', lineHeight: 1.6 }}>
                Our study leans heavily into Behavioral Finance, proving that institutional investors exhibit <strong>Herding Behavior</strong> and <strong>Delayed Adaptation</strong>. The empirical data across 21 events proves that markets do not instantly price in war; instead, they experience sustained, rolling volatility through secondary escalations that drag out over a 30 to 90-day cycle.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
