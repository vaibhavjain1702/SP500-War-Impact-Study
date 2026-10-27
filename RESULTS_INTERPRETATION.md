# VIVA DEFENSE: EXHAUSTIVE GRAPH INSIGHTS

This document serves as your definitive "Viva Script." If an examiner points to **any** of the 11 graphs generated in your project, you will use the exact insights below to provide a mathematically rigorous, academically sound explanation.

---

## PART 1: The Macro Foundations

### Graph 1: S&P 500 Log Returns Timeline (`g1_sp500_war_timeline.png`)
![S&P 500 Timeline](./g1_sp500_war_timeline.png)
*   **What it shows:** The daily log returns of the S&P 500 from 1993 to 2024, overlaid with vertical markers for the 19 valid geopolitical events.
*   **The Viva Insight:** "This graph establishes our foundational baseline. By plotting log returns rather than nominal price, we normalize volatility across three decades. You can clearly see 'volatility clustering'—periods of extreme variance—aligning perfectly with the vertical markers for long-term conflicts like the 2008 Georgia-Russia War and the 2022 Russia-Ukraine War. It visually justifies why we use a Mean-Adjusted Return model; we need to isolate these specific clusters from the background noise of the market."

### Graph 2: VIX Fear Spike (`g2_vix_fear_spike.png`)
![VIX Fear Spike](./g2_vix_fear_spike.png)
*   **What it shows:** The Volatility Index (VIX) daily returns overlaid with the event timeline.
*   **The Viva Insight:** "The VIX acts as our explicit fear gauge. While the S&P 500 shows the *damage*, Graph 2 shows the *panic*. This graph is crucial because it mathematically validates our Event Date (T=0). You can observe massive, isolated spikes in the VIX immediately following our event markers, proving that institutional investors were actively reacting to the geopolitical shock, not just domestic economic data."

---

## PART 2: The Core Hypotheses (The Narrative Pivot)

### The Narrative Pivot Explanation
*If asked why all three of your theories failed:*
"Our project's greatest strength is its intellectual honesty. We started with three standard behavioral finance assumptions—that duration wouldn't matter, that fear would be front-loaded, and that markets would adapt quickly. **The empirical data forced us to reject all three initial theories.** We didn't manipulate the data to fit a narrative; we let the institutional behavior of the S&P 500 speak for itself."

### Graph 6: Duration vs. CAR Scatter (`g6_duration_vs_car30_scatter.png`) [Relates to H1]
![Duration vs CAR Scatter](./g6_duration_vs_car30_scatter.png)
*   **What it shows:** A scatter plot mapping the duration of a war (Short vs Long) against its Cumulative Abnormal Return at Day 30 (CAR_30).
*   **The Viva Insight:** "This graph visually proves why we rejected our first theory. We assumed duration was irrelevant, but this scatter plot shows a stark divide. **Short, ambiguous shocks actually cause deeper unrecovered damage (averaging -2.2%).** Long wars, paradoxically, force institutional adaptation, resulting in positive drift (averaging +4.3%). The Welch t-test (p=0.014) confirms this visual divide is statistically significant."

### Graph 10: Shock Intensity Paired Bar (`g10_h2_intensity_paired_bar.png`) [Relates to H2]
![Shock Intensity Paired Bar](./g10_h2_intensity_paired_bar.png)
*   **What it shows:** A side-by-side comparison of absolute shock intensity in the first 5 days (D0-D5) versus the next 25 days (D6-D30).
*   **The Viva Insight:** "This is the proof of our **'Achanak Bomb' (Secondary Escalation) Theory**. We assumed panic would be front-loaded in the first 5 days. However, this bar chart shows the intensity of volatility in D6-D30 is almost identical to D0-D5. The paired t-test yielded a p-value of 0.694, meaning we **fail to reject** the null hypothesis. Institutional fear is sustained, not front-loaded, as secondary escalations keep the market off-balance for a full month."

### Graph 5: Ranked CAR at Day 30 (`g5_car30_ranked_bar.png`) [Relates to H3]
![Ranked CAR at Day 30](./g5_car30_ranked_bar.png)
*   **What it shows:** A waterfall-style bar chart ranking the severity of market damage across all 19 events at the 30-day mark.
*   **The Viva Insight:** "Graph 5 shows the market state at Day 30. We assumed the market would have fully 'settled' and priced in the risk by this point. However, looking at the massive negative drawdowns for events like 9/11 and the Syrian Escalation, we see the market is still deeply unbalanced. This leads perfectly into Graph 8."

### Graph 8: Ranked CAR at Day 90 (`g8_car90_ranked_bar.png`) [Relates to H3]
![Ranked CAR at Day 90](./g8_car90_ranked_bar.png)
*   **What it shows:** The same ranked bar chart, but expanded to the 90-day mark.
*   **The Viva Insight:** "Comparing Graph 5 to Graph 8 disproves the Adaptive Market Hypothesis. By Day 90, **52.6% of events exhibit a No-Recovery shape**. The one-sample t-test on the 'drift' between Day 30 and Day 90 (p=0.033) proved that the market does *not* settle. The structural impairment continues to bleed into the quarter."

### Graph 7: Day-by-Day CAR Curves (`g7_day_by_day_car_curve.png`)
![Day-by-Day CAR Curves](./g7_day_by_day_car_curve.png)
*   **What it shows:** The aggregated, day-by-day trajectory of the S&P 500 for Short, Medium, and Long wars from T-5 to T+90.
*   **The Viva Insight:** "This is the master timeline of recovery. It clearly illustrates the distinct recovery archetypes. You can see the 'V-Shape' recovery characteristic of anticipated events (like Iraq 2003), contrasted sharply against the 'L-Shape' or 'No-Recovery' curves characteristic of prolonged, inflation-driving conflicts (like Russia-Ukraine)."

---

## PART 3: The Macro-Economic Transmission Channels

### Graph 11: Correlation Heatmap (`g11_macro_correlation_heatmap.png`)
![Correlation Heatmap](./g11_macro_correlation_heatmap.png)
*   **What it shows:** A Pearson correlation matrix between the SP500, VIX, OIL, GOLD, and TNX during the 30-day shock windows.
*   **The Viva Insight:** "Wars do not operate in a vacuum. This heatmap proves that geopolitical shocks physically alter the structural relationship between asset classes. We see strong inverse correlations between the S&P 500 and the VIX, and critical positive correlations between Oil and Yields, which dictates the severity of the equity drawdown."

### Graph 3: WTI Oil Shock (`g3_oil_pct_change_by_war.png`)
![WTI Oil Shock](./g3_oil_pct_change_by_war.png)
*   **What it shows:** The percentage change in Oil prices during the conflict windows.
*   **The Viva Insight:** "Oil is our primary supply-side transmission channel. During conflicts involving energy-producers (Middle East/Eastern Europe), oil spikes. This compresses corporate margins and drives inflation, acting as a massive anchor that prevents the S&P 500 from recovering."

### Graph 4: Gold Safe Haven (`g4_gold_pct_change_by_war.png`)
![Gold Safe Haven](./g4_gold_pct_change_by_war.png)
*   **What it shows:** The percentage change in Gold futures.
*   **The Viva Insight:** "Gold represents institutional capital flight. When the 'Achanak Bomb' drops and uncertainty peaks, this graph shows the sheer volume of capital abandoning equities for a risk-off safe haven. It is the physical manifestation of the fear quantified in the VIX."

### Graph 9: 10-Year Yield (TNX) (`g9_tnx_pct_change_by_war.png`)
![10-Year Yield (TNX)](./g9_tnx_pct_change_by_war.png)
*   **What it shows:** The percentage change in the US 10-Year Treasury Yield.
*   **The Viva Insight:** "This is arguably the most important macro graph in the project. The 10-Year Yield is the ultimate dictator of the S&P 500's recovery. If a war causes yields to spike (usually due to oil-driven inflation expectations), it tightly restricts financial conditions. **Every single 'No-Recovery' event in our dataset was accompanied by a spike in the TNX.** It proves that the market isn't just reacting to the war; it's reacting to the central bank's expected response to the war."
