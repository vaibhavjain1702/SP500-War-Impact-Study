import React from 'react';

function Hypotheses() {
  return (
    <section className="container" style={{ paddingTop: '80px', paddingBottom: '80px' }}>
      <h2 className="section-title">The Narrative Pivot</h2>
      <p className="section-subtitle">Our initial behavioral finance assumptions were tested mathematically using parametric t-tests. The data forced us to reject our assumptions.</p>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
        
        {/* H1 */}
        <div className="glass-panel" style={{ padding: '32px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px' }}>
            <span className="mono-text" style={{ color: 'var(--text-secondary)' }}>H1: DURATION</span>
            <span className="badge badge-red">REJECTED (p=0.014)</span>
          </div>
          <h3 className="serif-title" style={{ marginBottom: '16px', fontSize: '1.8rem' }}>Duration Independence</h3>
          
          <div className="grid-2">
            <div>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '16px' }}>
                <strong>Original Assumption:</strong> The initial shock is the only thing that matters. The market prices in the war immediately, making the actual length of the war irrelevant.
              </p>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '16px' }}>
                <strong>Empirical Finding:</strong> Duration matters fundamentally. Short wars produce unrecovered panic (average -2.2% return), while long wars force market adaptation (average +4.3% return by Day 30).
              </p>
              <img src="/assets/g6_duration_vs_car30_scatter.png" alt="Duration vs CAR" className="premium-image" style={{ marginTop: '16px' }} />
            </div>
            <div style={{ background: 'rgba(0,0,0,0.2)', padding: '16px', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
              <div className="mono-text" style={{ color: 'var(--accent-cyan)', marginBottom: '8px' }}>Statistical Test: Welch's t-test</div>
              <p className="mono-text" style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>
                Null Hypothesis (H0): μ_short = μ_long<br/>
                Alternative (H1): μ_short ≠ μ_long<br/>
                <br/>
                t-statistic: -2.85<br/>
                Degrees of Freedom (df): ~11.4<br/>
                <strong>Verdict: Reject H0</strong>
              </p>
            </div>
          </div>
        </div>

        {/* H2 */}
        <div className="glass-panel" style={{ padding: '32px', borderColor: 'var(--accent-cyan)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px' }}>
            <span className="mono-text" style={{ color: 'var(--text-secondary)' }}>H2: FEAR</span>
            <span className="badge badge-neutral">FAIL TO REJECT (p=0.694)</span>
          </div>
          <h3 className="serif-title" style={{ marginBottom: '16px', fontSize: '1.8rem' }}>Fear Overreaction (Front-loaded)</h3>
          
          <div className="grid-2">
            <div>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '16px' }}>
                <strong>Original Assumption:</strong> Market panic is entirely concentrated in the first 5 days (D0-D5), after which volatility completely dissipates.
              </p>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '16px' }}>
                <strong>Empirical Finding ("Achanak Bomb" Theory):</strong> Fear is NOT front-loaded. Secondary intra-war escalations keep institutional volatility sustained through the entire first month. The intensity of shocks in D6-D30 is statistically indistinguishable from D0-D5.
              </p>
              <img src="/assets/g10_h2_intensity_paired_bar.png" alt="Shock Intensity" className="premium-image" style={{ marginTop: '16px' }} />
            </div>
            <div style={{ background: 'rgba(0,0,0,0.2)', padding: '16px', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
              <div className="mono-text" style={{ color: 'var(--accent-cyan)', marginBottom: '8px' }}>Statistical Test: Paired t-test</div>
              <p className="mono-text" style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>
                Null Hypothesis (H0): μ_|AR_0-5| = μ_|AR_6-30|<br/>
                Alternative (H1): μ_|AR_0-5| {'>'} μ_|AR_6-30|<br/>
                <br/>
                p-value: 0.694<br/>
                <strong>Verdict: Fail to Reject H0</strong>
              </p>
            </div>
          </div>
        </div>

        {/* H3 */}
        <div className="glass-panel" style={{ padding: '32px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px' }}>
            <span className="mono-text" style={{ color: 'var(--text-secondary)' }}>H3: SETTLEMENT</span>
            <span className="badge badge-red">REJECTED (p=0.033)</span>
          </div>
          <h3 className="serif-title" style={{ marginBottom: '16px', fontSize: '1.8rem' }}>Market Adaptation (30-Day Settlement)</h3>
          
          <div className="grid-2">
            <div>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '16px' }}>
                <strong>Original Assumption:</strong> By Day 30, the market has fully digested the geopolitical shock. From D30 to D90, the Cumulative Abnormal Return (CAR) drift should be flat (zero).
              </p>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '16px' }}>
                <strong>Empirical Finding:</strong> The market does not settle. Shocks take a full 90-day cycle to digest alongside shifting macro-economic transmission channels, proving that recovery is a dynamic, ongoing process rather than a static 30-day event.
              </p>
              <img src="/assets/g5_car30_ranked_bar.png" alt="Ranked CAR" className="premium-image" style={{ marginTop: '16px' }} />
            </div>
            <div style={{ background: 'rgba(0,0,0,0.2)', padding: '16px', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
              <div className="mono-text" style={{ color: 'var(--accent-cyan)', marginBottom: '8px' }}>Statistical Test: One-Sample t-test</div>
              <p className="mono-text" style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>
                Null Hypothesis (H0): μ_drift = 0<br/>
                (where drift = CAR_90 - CAR_30)<br/>
                Alternative (H1): μ_drift ≠ 0<br/>
                <br/>
                p-value: 0.033<br/>
                <strong>Verdict: Reject H0</strong>
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Hypotheses;
