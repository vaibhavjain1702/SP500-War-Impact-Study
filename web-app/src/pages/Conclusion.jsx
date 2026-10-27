import React from 'react';

function Conclusion() {
  return (
    <section className="container" style={{ paddingTop: '80px', paddingBottom: '80px' }}>
      <div className="grid-2" style={{ alignItems: 'center' }}>
        <div>
          <h2 className="section-title">The Recovery Myth</h2>
          <p className="section-subtitle" style={{ marginBottom: '24px' }}>
            Conventional wisdom suggests markets reliably rebound following geopolitical shocks. Our classification algorithm (evaluating CAR at Day 7, 30, and 90) tells a radically different story.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div className="glass-panel" style={{ padding: '24px', borderColor: 'var(--accent-red)' }}>
              <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: 'var(--accent-red)', marginBottom: '8px' }}>52.6%</div>
              <h4 style={{ marginBottom: '8px' }}>No-Recovery (10 Events)</h4>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                The majority of conflicts result in sustained, long-term capital destruction. The market fails to recapture its pre-war baseline within a 90-day window.
              </p>
            </div>
            
            <div className="glass-panel" style={{ padding: '24px', borderColor: 'var(--accent-green)' }}>
              <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: 'var(--accent-green)', marginBottom: '8px' }}>42.1%</div>
              <h4 style={{ marginBottom: '8px' }}>V-Shape Recovery (8 Events)</h4>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                A rapid panic followed by an equally rapid buying spree. Typically observed when the conflict is short and does not fundamentally disrupt global supply chains.
              </p>
            </div>

            <div className="glass-panel" style={{ padding: '24px', borderColor: 'var(--text-secondary)' }}>
              <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: 'var(--text-secondary)', marginBottom: '8px' }}>5.3%</div>
              <h4 style={{ marginBottom: '8px' }}>U-Shape Recovery (1 Event)</h4>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                A prolonged period of depression before eventual recovery, requiring significant time for macro-economic transmission channels (like rate cuts) to take effect.
              </p>
            </div>
          </div>
        </div>
        
        <div>
           <img src="/assets/g7_day_by_day_car_curve.png" alt="CAR Recovery Curves" className="premium-image" style={{ marginBottom: '24px' }} />
           
           <div className="glass-panel" style={{ marginBottom: '24px' }}>
            <h3 style={{ marginBottom: '16px' }}>Case Study: Russia-Ukraine (No-Recovery)</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginBottom: '16px' }}>
              The Russia-Ukraine war is the quintessential "No-Recovery" event. The war triggered a massive secondary supply shock in the energy sector. Oil surged by +12.4%, driving inflation expectations, which subsequently forced the 10-Year Yield (TNX) up by +8.5%. This double-strangle on corporate margins kept the S&P 500 depressed deeply into the negative through Day 90.
            </p>
           </div>

           <div className="glass-panel">
            <h3 style={{ marginBottom: '16px' }}>Case Study: Iraq War 2003 (V-Shape)</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
              Unlike Russia-Ukraine, the US invasion of Iraq resulted in a massive V-Shape recovery. Why? Because the war was largely priced-in (anticipated), and it did not disrupt global oil supplies as initially feared. Once the "uncertainty premium" collapsed on D0, the market violently rebounded, proving that resolving uncertainty is often more bullish than peace itself.
            </p>
           </div>
        </div>
      </div>
    </section>
  );
}

export default Conclusion;
