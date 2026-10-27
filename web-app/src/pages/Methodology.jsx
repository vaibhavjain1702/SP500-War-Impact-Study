import React from 'react';

function Methodology() {
  return (
    <section className="container" style={{ paddingTop: '80px', paddingBottom: '80px' }}>
      <h2 className="section-title">Rigorous Methodology</h2>
      <p className="section-subtitle">An 8-step quantitative event-study pipeline using Mean-Adjusted Baseline models.</p>
      
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '48px' }}>
        <div style={{ maxWidth: '800px', width: '100%' }}>
          <img src="/assets/methodology_flowchart.png" alt="Methodology Flowchart" className="premium-image" />
        </div>
      </div>

      <div className="grid-2">
        <div className="glass-panel">
          <h3 style={{ marginBottom: '16px' }}>Why the Mean-Adjusted Model?</h3>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
            Unlike standard stock analysis which uses a "Market Model" (Regression), we are analyzing the S&P 500 index itself. Because the S&P 500 is already the benchmark for the broader market, we calculate the "Expected Return" as the simple historical mean from our T-120 to T-31 estimation window. This provides a statistically sound, pure baseline for measuring macroeconomic shocks.
          </p>
        </div>
        <div className="glass-panel">
          <h3 style={{ marginBottom: '16px' }}>Log Returns Normalization</h3>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
            To handle market compounding across 30 years of high-frequency daily data, all price data was transformed into logarithmic returns ({"$R_t = \\ln(P_t / P_{t-1})$"}). This allows our Cumulative Abnormal Return (CAR) calculations to be perfectly additive over the 90-day post-shock windows without distortion.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Methodology;
