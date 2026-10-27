"""
Generate a high-resolution, light-themed methodology workflow flowchart 
exactly matching the user's provided design.
"""

import matplotlib.pyplot as plt
import matplotlib.patches as mpatches
from matplotlib.patches import FancyBboxPatch, FancyArrowPatch

# ── Canvas ───────────────────────────────────────────────────────────
fig, ax = plt.subplots(figsize=(10, 24))
fig.patch.set_facecolor("#FFFFFF")
ax.set_facecolor("#FFFFFF")
ax.set_xlim(0, 10)
ax.set_ylim(0, 28)
ax.axis("off")

# ── Helpers ──────────────────────────────────────────────────────────
def draw_box(ax, x, y, w, h, color, title, desc="", font_color="#FFFFFF", title_fontsize=10, desc_fontsize=8):
    box = FancyBboxPatch(
        (x, y), w, h,
        boxstyle="round,pad=0.1,rounding_size=0.15",
        facecolor=color, edgecolor="none", zorder=3,
    )
    ax.add_patch(box)
    
    if desc:
        ax.text(x + w / 2, y + h * 0.65, title,
                color=font_color, fontsize=title_fontsize, fontweight="bold",
                ha="center", va="center", fontfamily="sans-serif", zorder=5)
        ax.text(x + w / 2, y + h * 0.3, desc,
                color=font_color, fontsize=desc_fontsize, ha="center", va="center",
                fontfamily="sans-serif", zorder=5)
    else:
        ax.text(x + w / 2, y + h / 2, title,
                color=font_color, fontsize=title_fontsize, fontweight="bold",
                ha="center", va="center", fontfamily="sans-serif", zorder=5)

def draw_arrow(ax, x, y_from, y_to):
    ax.annotate(
        "", xy=(x, y_to), xytext=(x, y_from),
        arrowprops=dict(arrowstyle="-|>", color="#B0B0B0", lw=1.2, mutation_scale=15),
        zorder=2,
    )

def draw_multi_line_box(ax, x, y, w, h, color, text, font_color="#FFFFFF", fontsize=9):
    box = FancyBboxPatch(
        (x, y), w, h,
        boxstyle="round,pad=0.1,rounding_size=0.15",
        facecolor=color, edgecolor="none", zorder=3,
    )
    ax.add_patch(box)
    ax.text(x + w / 2, y + h / 2, text,
            color=font_color, fontsize=fontsize, fontweight="bold" if "Phase" not in text else "normal",
            ha="center", va="center", fontfamily="sans-serif", zorder=5)

# ── Colors ───────────────────────────────────────────────────────────
C_PURPLE = "#483D8B"
C_GREEN = "#1E7145"
C_BROWN = "#965B00"
C_RED = "#8B2500"
C_VSHAPE = "#008B66"
C_USHAPE = "#555555"
C_DASHBOARD = "#00684A"

# ── Header ───────────────────────────────────────────────────────────
ax.text(5, 27.2, "S&P 500 War Impact Study — Methodology Workflow", 
        color="#D3D3D3", fontsize=14, fontweight="bold", ha="center", fontfamily="sans-serif")
ax.text(5, 26.8, "Behavioural Finance Research · 21 Geopolitical Events · 1993 – 2024", 
        color="#A9A9A9", fontsize=10, ha="center", fontfamily="sans-serif")

# Legend
lx = 1.5
ax.add_patch(plt.Rectangle((lx, 26.1), 0.3, 0.3, color=C_PURPLE))
ax.text(lx+0.4, 26.25, "Data pipeline", color="#A9A9A9", va="center", fontsize=9)

ax.add_patch(plt.Rectangle((lx+2.5, 26.1), 0.3, 0.3, color=C_GREEN))
ax.text(lx+2.9, 26.25, "Statistical test", color="#A9A9A9", va="center", fontsize=9)

ax.add_patch(plt.Rectangle((lx+5.2, 26.1), 0.3, 0.3, color=C_BROWN))
ax.text(lx+5.6, 26.25, "Output / classification", color="#A9A9A9", va="center", fontsize=9)

ax.add_patch(plt.Rectangle((lx+8.3, 26.1), 0.3, 0.3, color=C_RED))
ax.text(lx+8.7, 26.25, "Limitation", color="#A9A9A9", va="center", fontsize=9)


# ── Phases ───────────────────────────────────────────────────────────
w_main = 8
x_main = 1

# Phase 1
y = 24.5
draw_box(ax, x_main, y, w_main, 1.2, C_PURPLE, "Phase 1 — Data acquisition", "Yahoo Finance via yfinance · unified window start='1993-01-01' end='2024-12-31'")

# 5 sub boxes for Phase 1
y -= 1.8
w_sub = 1.4
gap = 0.25
for i, (t1, t2) in enumerate([("S&P 500", "^GSPC"), ("VIX", "^VIX"), ("WTI Oil", "CL=F / BZ=F"), ("Gold", "GC=F"), ("US 10Y", "^TNX")]):
    draw_box(ax, x_main + i*(w_sub+gap), y, w_sub, 0.9, C_PURPLE, t1, t2, title_fontsize=9, desc_fontsize=8)
    draw_arrow(ax, x_main + i*(w_sub+gap) + w_sub/2, y+0.9+0.9, y+0.9)

draw_arrow(ax, 5, y, y-0.6)

# Phase 2
y -= 1.8
draw_box(ax, x_main, y, w_main, 1.2, C_PURPLE, "Phase 2 — Log returns computation", "R_t = ln(P_t / P_{t-1}) · forward-fill NaNs · align all 5 assets to S&P 500 trading calendar")
draw_arrow(ax, 5, y, y-0.6)

# Phase 3
y -= 1.8
draw_box(ax, x_main, y, w_main, 1.2, C_PURPLE, "Phase 3 — Event mapping & visualisation", "21 events tagged · Short / Medium / Long / Event · G1 log-return timeline · G2 VIX fear overlay")
draw_arrow(ax, 5, y, y-0.6)

# Phase 4
y -= 1.8
draw_box(ax, x_main, y, w_main, 1.2, C_PURPLE, "Phase 4 — Event window resolution", "Estimation: T-120 → T-31 (90-day expected-return baseline)\nShock: T+5 · Short-term: T+30 · Medium: T+90 · Long-term: T+180")
draw_arrow(ax, 5, y, y-0.6)

# Phase 5
y -= 1.8
draw_box(ax, x_main, y, w_main, 1.2, C_GREEN, "Phase 5 — Event study engine ★ core", "E(R_t) = mean(estimation window) · AR_t = R_t - E(R_t) · CAR = Σ AR_t\nVol ratio = σ_war / σ_normal · Shock intensity = mean|AR_t| per window")
draw_arrow(ax, 5, y, y-0.6)

# Phase 6
y -= 1.5
draw_box(ax, x_main, y, w_main, 0.9, C_GREEN, "Phase 6 — Hypothesis testing (α = 0.05)", "Three parametric t-tests across all 19 valid events")
draw_arrow(ax, 5, y, y-0.4)

# 3 sub boxes for Phase 6
y -= 1.8
w_sub3 = 2.5
gap3 = 0.25
draw_multi_line_box(ax, x_main, y, w_sub3, 1.4, C_GREEN, "H1 — Herding\nWelch's t-test\nShort vs Long CAR₃₀\np = 0.014 · REJECT")
draw_multi_line_box(ax, x_main + w_sub3 + gap3, y, w_sub3, 1.4, C_GREEN, "H2 — Fear\nPaired t-test\nD0-D5 vs D6-D30 intensity\np = 0.694 · FAIL TO REJECT")
draw_multi_line_box(ax, x_main + 2*(w_sub3 + gap3), y, w_sub3, 1.4, C_GREEN, "H3 — Adaptation\nOne-sample t-test\nΔ = CAR₉₀ - CAR₃₀ = 0?\np = 0.033 · REJECT")

for i in range(3):
    draw_arrow(ax, x_main + w_sub3/2 + i*(w_sub3+gap3), y+1.4+0.4, y+1.4)

draw_arrow(ax, 5, y, y-0.8)

# Phase 7
y -= 2.0
draw_box(ax, x_main, y, w_main, 1.2, C_BROWN, "Phase 7 — Macro transmission analysis", "% change at T+30 · Oil (supply shock) · Gold (safe haven) · TNX (rate expectations)")

y -= 1.3
draw_multi_line_box(ax, x_main, y, w_sub3, 0.9, C_BROWN, "Oil channel\navg −0.6% at T+30")
draw_multi_line_box(ax, x_main + w_sub3 + gap3, y, w_sub3, 0.9, C_BROWN, "Gold channel\navg +0.4% at T+30")
draw_multi_line_box(ax, x_main + 2*(w_sub3 + gap3), y, w_sub3, 0.9, C_BROWN, "TNX channel\navg +6.2% — dominant")

for i in range(3):
    draw_arrow(ax, x_main + w_sub3/2 + i*(w_sub3+gap3), y+0.9+0.4, y+0.9)

draw_arrow(ax, 5, y, y-0.8)

# Phase 8
y -= 2.0
draw_box(ax, x_main, y, w_main, 1.2, C_BROWN, "Phase 8 — Recovery shape classification", "Rules-based · CAR₇ · CAR₃₀ · CAR₉₀ thresholds · 19 events classified")

y -= 1.6
draw_multi_line_box(ax, x_main, y, w_sub3, 1.2, C_RED, "No-recovery\nCAR₉₀ < 0\n52.6% · 10 events\nKosovo, Russia-Ukraine...")
draw_multi_line_box(ax, x_main + w_sub3 + gap3, y, w_sub3, 1.2, C_VSHAPE, "V-shape recovery\nCAR₃₀ > CAR₇ × 0.5\n42.1% · 8 events\n9/11, Iraq 2003, Israel-Hamas...")
draw_multi_line_box(ax, x_main + 2*(w_sub3 + gap3), y, w_sub3, 1.2, C_USHAPE, "U-shape recovery\nCAR₃₀ < CAR₇ × 0.5\n5.3% · 1 event\nN. Korea missiles")

for i in range(3):
    draw_arrow(ax, x_main + w_sub3/2 + i*(w_sub3+gap3), y+1.2+0.4, y+1.2)

draw_arrow(ax, 5, y, y-1.0)
ax.plot([x_main + w_sub3/2, x_main + 2*(w_sub3 + gap3) + w_sub3/2], [y-0.5, y-0.5], color="#B0B0B0", lw=1.2, zorder=2)
for i in [0, 2]:
    draw_arrow(ax, x_main + w_sub3/2 + i*(w_sub3+gap3), y, y-0.5)


# Dashboard
y -= 2.2
w_dash = 6
x_dash = 2
draw_box(ax, x_dash, y, w_dash, 1.2, C_DASHBOARD, "Streamlit interactive dashboard", "Real-time event explorer · 19 events analysed\nHypothesis panel · CAR trajectory viewer · Macro transmission chart")
draw_arrow(ax, 5, y+1.2+0.5, y+1.2)

# Limitation Note
y -= 1.8
draw_box(ax, x_main, y, w_main, 0.8, C_RED, "Data limitation note", "GOLD data begins Aug 2000 · Kosovo and Kargil show N/A for commodity channels · Gulf War & Bosnia pre-date S&P window (skipped)", font_color="#FFB6C1", title_fontsize=10, desc_fontsize=7)

# Footer
ax.text(5, y + 1.1, "S&P 500 War Impact Study · Behavioural Finance · Financial Markets Course Project", 
        color="#D3D3D3", fontsize=8, ha="center", fontfamily="sans-serif")


# ── Save ─────────────────────────────────────────────────────────────
plt.tight_layout(pad=0)
out_path = "web-app/public/assets/methodology_flowchart.png"
plt.savefig(out_path, dpi=400, bbox_inches="tight", facecolor=fig.get_facecolor())
plt.close()
print(f"✅ Ultra-High-Res Flowchart saved -> {out_path}")
