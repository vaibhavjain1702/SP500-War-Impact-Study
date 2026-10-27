import React from 'react';

function Data() {
  return (
    <section className="container" style={{ paddingTop: '80px', paddingBottom: '80px' }}>
      <h2 className="section-title">The 21 Events Data Set</h2>
      <p className="section-subtitle">A comprehensive mapping of geopolitical shocks from 1993 to 2024.</p>
      
      <div className="grid-2" style={{ marginBottom: '48px' }}>
        <div className="glass-panel">
          <h3 style={{ marginBottom: '16px' }}>Event Categorization (21 Initial, 19 Valid)</h3>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '16px' }}>
            We initially curated 21 major geopolitical events over a 30-year timeframe. However, 2 events (The Gulf War and the Bosnian War) were ultimately excluded from the statistical hypothesis testing because they pre-dated our strict S&P 500 unified window, leaving us with exactly <strong>19 valid events</strong> for our core models.
          </p>
          <ul style={{ color: 'var(--text-secondary)', marginLeft: '20px', lineHeight: 1.6 }}>
            <li><strong>Short-Term (≤ 6 Months):</strong> 11 Valid Events (e.g., Kargil War, 9/11, Kosovo)</li>
            <li><strong>Long-Term ({'>'} 6 Months):</strong> 8 Valid Events (e.g., Russia-Ukraine, Israel-Hamas, Iraq 2003)</li>
          </ul>
        </div>
        <div className="glass-panel" style={{ borderColor: 'var(--accent-red)' }}>
          <h3 style={{ marginBottom: '16px' }}>Data Limitations</h3>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '16px' }}>
            <strong>Survivorship Bias Control:</strong> We used historical constituent data for the S&P 500 to ensure we aren't just measuring companies that survived the wars.
          </p>
          <p style={{ color: 'var(--text-secondary)' }}>
            <strong>Commodity Constraints:</strong> Gold futures (GC=F) data reliably begins in August 2000. Therefore, earlier events like the Gulf War and Kosovo do not feature Gold correlation data in our Macro channels.
          </p>
        </div>
      </div>

      <div style={{ marginBottom: '48px' }}>
        <h3 className="serif-title" style={{ marginBottom: '16px', fontSize: '2rem' }}>S&P 500 Log Return Timeline</h3>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '24px' }}>
          This visual maps out all 21 events against the S&P 500's daily log returns. Notice the volatility clustering around major long-term conflicts.
        </p>
        <img src="/assets/g1_sp500_war_timeline.png" alt="S&P 500 Timeline" className="premium-image" />
      </div>

      <div>
        <h3 className="serif-title" style={{ marginBottom: '16px', fontSize: '2rem' }}>VIX Fear Spike Analysis</h3>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '24px' }}>
          The Volatility Index (VIX) acts as our fear gauge. By overlaying the VIX spikes on our event timeline, we mathematically validate the exact days where institutional panic peaked.
        </p>
        <img src="/assets/g2_vix_fear_spike.png" alt="VIX Fear Spike" className="premium-image" />
      </div>
    </section>
  );
}

export default Data;
