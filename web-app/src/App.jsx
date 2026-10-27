import React from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';

import Home from './pages/Home';
import Data from './pages/Data';
import Methodology from './pages/Methodology';
import Hypotheses from './pages/Hypotheses';
import Macro from './pages/Macro';
import Conclusion from './pages/Conclusion';

function App() {
  const location = useLocation();

  const getLinkStyle = (path) => {
    const isActive = location.pathname === path;
    return {
      color: isActive ? 'var(--text-primary)' : 'inherit',
      textDecoration: 'none',
      fontWeight: isActive ? 600 : 400,
      borderBottom: isActive ? '2px solid var(--accent-cyan)' : '2px solid transparent',
      paddingBottom: '4px',
      transition: 'all 0.2s ease'
    };
  };

  return (
    <div className="app-wrapper">
      {/* HEADER */}
      <header style={{ borderBottom: '1px solid var(--border-color)', padding: '16px 0', position: 'sticky', top: 0, background: 'rgba(13, 17, 23, 0.8)', backdropFilter: 'blur(10px)', zIndex: 100 }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Link to="/" style={{ fontWeight: 700, letterSpacing: '0.5px', color: 'inherit', textDecoration: 'none' }}>
            MARKET CRISIS <span style={{ color: 'var(--text-secondary)' }}>RESEARCH</span>
          </Link>
          <nav style={{ display: 'flex', gap: '24px', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
            <Link to="/" style={getLinkStyle('/')}>Executive Summary</Link>
            <Link to="/data" style={getLinkStyle('/data')}>The 21 Events</Link>
            <Link to="/methodology" style={getLinkStyle('/methodology')}>Methodology</Link>
            <Link to="/hypotheses" style={getLinkStyle('/hypotheses')}>Hypotheses</Link>
            <Link to="/macro" style={getLinkStyle('/macro')}>Macro Channels</Link>
            <Link to="/conclusion" style={getLinkStyle('/conclusion')}>Recovery</Link>
          </nav>
        </div>
      </header>

      {/* ROUTES */}
      <main style={{ minHeight: 'calc(100vh - 160px)' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/data" element={<Data />} />
          <Route path="/methodology" element={<Methodology />} />
          <Route path="/hypotheses" element={<Hypotheses />} />
          <Route path="/macro" element={<Macro />} />
          <Route path="/conclusion" element={<Conclusion />} />
        </Routes>
      </main>

      {/* FOOTER */}
      <footer style={{ borderTop: '1px solid var(--border-color)', padding: '40px 0', textAlign: 'center', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
        <div className="container">
          <p style={{ marginBottom: '8px' }}>S&P 500 War Impact Study • Academic Research Use Only</p>
          <p className="mono-text">Financial Markets Project Portfolio</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
