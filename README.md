# The S&P 500 War Impact Study (1993–2024)

> **A 30-Year Empirical Analysis of Geopolitical Shocks on the US Market** — Financial Markets Final Project

## 📋 Research Objective

**How do global wars and geopolitical crises systematically affect the S&P 500?**

This study builds a **generalized, quantitative framework** to test the impact of 19 geopolitical events across a 31-year period. By moving beyond single-event qualitative analysis, we use rigorous statistics to test behavioral finance theories against actual institutional market data.

## 🔬 The "Narrative Pivot" Hypothesis Testing

We tested three core assumptions. The data proved our initial assumptions wrong, revealing deep insights into how institutional markets actually behave:

1. **H1: Duration Independence** — Does a long war hurt more than a short war?
   - **Result: REJECTED (p=0.014).** Duration matters. Short and long wars produce significantly different market impacts.
2. **H2: Fear Overreaction (Prospect Theory)** — Do investors irrationally panic-sell in the first 5 days?
   - **Result: FAIL TO REJECT (p=0.694).** Fear is NOT front-loaded. The institutionalized S&P 500 methodically processes risk rather than blind-panicking.
3. **H3: Market Adaptation (AMH)** — Does the market stabilize by Day 30?
   - **Result: REJECTED (p=0.033).** The market fails to adapt quickly, with 52.6% of events resulting in a prolonged "No-Recovery" shape due to structural macroeconomic damage.

## 📊 Methodology & Data Pipeline

- **Market Proxies:** S&P 500 (`^GSPC`)
- **Macro Indicators:** VIX, WTI Crude Oil, Gold, US 10-Year Treasury
- **Event Study Methodology:** 
  - Estimation Window: t = -120 to t = -31 (90 trading days) to calculate expected returns.
  - Event Windows: Day +5, +30, +90 to capture short and medium-term impacts.
  - Metrics: Cumulative Abnormal Returns (CAR), Volatility Ratios, Shock Intensity.

## 🗂️ Project Structure

```
.
├── war_impact_study.ipynb     core notebook (data, analysis, statistics, graphs)
├── dashboard.py               Streamlit dashboard
├── web-app/                   React + Vite dashboard (src/, public/)
├── g*.png, report_imgs/       generated figures
├── *.csv                      price and log-return datasets (1993-2024)
├── SP500_*.pdf                project summary report
├── RESULTS_INTERPRETATION.md
├── requirements.txt
└── README.md
```

*(Note: Previous Python scripts have been superseded by the unified Jupyter Notebook pipeline).*

## 🚀 Quick Start

```bash
# 1. Install dependencies
pip install -r requirements.txt

# 2. Run the Interactive Dashboard
streamlit run dashboard.py
```

## 📄 Deliverables

1. **Jupyter Notebook** — End-to-end analytical pipeline
2. **Streamlit Dashboard** — Interactive presentation layer
3. **Documentation** — Results interpretation and written reports

## 👤 Author

Vaibhav Jain  
Financial Markets course project (Semester 6)
