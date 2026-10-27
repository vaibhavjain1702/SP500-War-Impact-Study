import React from 'react';

function Macro() {
  return (
    <section className="container" style={{ paddingTop: '80px', paddingBottom: '80px' }}>
      <h2 className="section-title">Macro Transmission Channels</h2>
      <p className="section-subtitle">Wars don't operate in a vacuum. We isolated three specific macro-economic channels to see how the S&P 500 shock is transmitted.</p>
      
      <div style={{ marginBottom: '48px' }}>
        <h3 className="serif-title" style={{ marginBottom: '16px', fontSize: '2rem' }}>Correlation Heatmap</h3>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '24px' }}>
          By running a Pearson correlation across our 5 assets during the 30-day shock windows, we identified massive structural shifts in how these assets behave during wartime compared to peacetime.
        </p>
        <img src="/assets/g11_macro_correlation_heatmap.png" alt="Macro Correlation Heatmap" className="premium-image" />
      </div>

      <div className="grid-2" style={{ marginBottom: '48px' }}>
        <div>
          <h3 style={{ marginBottom: '16px' }}>The Energy Shock (WTI Oil)</h3>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '24px' }}>
            Oil acts as a primary supply-side shock mechanism. During conflicts in the Middle East or Eastern Europe, crude prices spike, compressing corporate margins and driving inflation, which historically forces the S&P 500 lower.
          </p>
          <img src="/assets/g3_oil_pct_change_by_war.png" alt="Oil Shock" className="premium-image" />
        </div>
        <div>
          <h3 style={{ marginBottom: '16px' }}>The Safe Haven (Gold)</h3>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '24px' }}>
            Gold predictably operates as the primary risk-off asset. As institutional capital flees the equity market during the D0-D5 panic window, it historically parks in Gold futures.
          </p>
          <img src="/assets/g4_gold_pct_change_by_war.png" alt="Gold Safe Haven" className="premium-image" />
        </div>
      </div>

      <div style={{ marginBottom: '48px' }}>
        <h3 className="serif-title" style={{ marginBottom: '16px', fontSize: '2rem', color: 'var(--accent-red)' }}>The Dominant Channel: Interest Rates (US 10Y)</h3>
        <div className="glass-panel" style={{ padding: '32px', borderColor: 'var(--accent-red)' }}>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '24px', fontSize: '1.1rem' }}>
            Our most significant finding was that the <strong>US 10-Year Treasury Yield (TNX)</strong> is the ultimate dictator of the S&P 500's recovery. If a war causes yields to spike (tightening financial conditions), the equity market physically cannot recover, resulting in a "No-Recovery" classification.
          </p>
          <img src="/assets/g9_tnx_pct_change_by_war.png" alt="Interest Rates" className="premium-image" />
        </div>
      </div>

    </section>
  );
}

export default Macro;
