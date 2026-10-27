"""
Generate a professional methodology workflow flowchart for the
S&P 500 War Impact Study project.
"""

import matplotlib.pyplot as plt
import matplotlib.patches as mpatches
from matplotlib.patches import FancyBboxPatch, FancyArrowPatch
import numpy as np

# ── Canvas ───────────────────────────────────────────────────────────
fig, ax = plt.subplots(figsize=(14, 22))
fig.patch.set_facecolor("#0D1117")
ax.set_facecolor("#0D1117")
ax.set_xlim(0, 14)
ax.set_ylim(0, 22)
ax.axis("off")

# ── Helpers ──────────────────────────────────────────────────────────
def draw_step_box(ax, x, y, w, h, accent, step_num, title, desc,
                  radius=0.25):
    """Draw a rounded box with coloured left accent bar."""
    # Main box
    box = FancyBboxPatch(
        (x, y), w, h,
        boxstyle=f"round,pad=0.15,rounding_size={radius}",
        facecolor="#161B22", edgecolor="#30363D", linewidth=1.2,
        zorder=3,
    )
    ax.add_patch(box)

    # Accent bar (left edge)
    bar = FancyBboxPatch(
        (x, y), 0.25, h,
        boxstyle=f"round,pad=0.0,rounding_size={radius}",
        facecolor=accent, edgecolor="none", zorder=4, alpha=0.9,
    )
    ax.add_patch(bar)

    # Step number circle
    circle = plt.Circle((x + 0.65, y + h / 2), 0.32,
                         color=accent, zorder=5, alpha=0.95)
    ax.add_patch(circle)
    ax.text(x + 0.65, y + h / 2, str(step_num),
            color="#0D1117", fontsize=13, fontweight="bold",
            ha="center", va="center", zorder=6,
            fontfamily="monospace")

    # Title
    ax.text(x + 1.25, y + h * 0.68, title,
            color="#E6EDF3", fontsize=11.5, fontweight="bold",
            va="center", fontfamily="sans-serif", zorder=5)

    # Description
    ax.text(x + 1.25, y + h * 0.30, desc,
            color="#8B949E", fontsize=8.2, va="center",
            fontfamily="monospace", zorder=5, style="italic")


def draw_arrow(ax, x, y_from, y_to, color="#30363D"):
    ax.annotate(
        "", xy=(x, y_to), xytext=(x, y_from),
        arrowprops=dict(arrowstyle="-|>", color=color, lw=1.8,
                        mutation_scale=18),
        zorder=2,
    )


def draw_sub_box(ax, x, y, w, h, accent, text, fontsize=8):
    box = FancyBboxPatch(
        (x, y), w, h,
        boxstyle="round,pad=0.1,rounding_size=0.15",
        facecolor="#21262D", edgecolor=accent, linewidth=1.0,
        zorder=4, alpha=0.95,
    )
    ax.add_patch(box)
    ax.text(x + w / 2, y + h / 2, text,
            color="#CDD9E5", fontsize=fontsize, ha="center",
            va="center", fontfamily="monospace", zorder=5)


# ── Title ────────────────────────────────────────────────────────────
ax.text(7, 21.5,
        "S&P 500 War Impact Study — Methodology Workflow",
        color="#E6EDF3", fontsize=16, fontweight="bold",
        ha="center", va="center", fontfamily="sans-serif")
ax.text(7, 21.1,
        "Behavioural Finance Research  •  21 Geopolitical Events  •  1993 – 2024",
        color="#8B949E", fontsize=9, ha="center", va="center",
        fontfamily="monospace")

# ── Step boxes (x, y, w, h) ─────────────────────────────────────────
bx, bw, bh = 1.5, 11.0, 1.15
gap = 0.45  # vertical gap between boxes

steps = [
    # (y, accent, num, title, description)
    (19.5, "#4FC3F7", 1,
     "📥  Data Acquisition",
     "Yahoo Finance → S&P 500, VIX, WTI Oil, Gold, US 10Y Treasury  (1993–2024)"),

    (17.7, "#A5D6A7", 2,
     "📉  Log Returns Computation",
     "R_t = ln(P_t / P_{t-1})  —  Daily log returns for all 5 assets"),

    (15.9, "#FF9800", 3,
     "🗺️  Event Mapping & Visualization",
     "21 events classified: Short (<6mo) / Medium (6mo–2yr) / Long (>2yr) / Event (1-day)"),

    (14.1, "#CE93D8", 4,
     "⏱️  Event Window Resolution",
     "Estimation (T-120→T-31) · Shock (T→T+5) · Short (T→T+30) · Med (T→T+90) · Long (T→T+180)"),

    (12.3, "#EF5350", 5,
     "🚀  Event Study Engine",
     "E(R), Abnormal Returns (AR), Cumulative AR (CAR), Vol Ratio, Shock Intensity"),
]

for (y, accent, num, title, desc) in steps:
    draw_step_box(ax, bx, y, bw, bh, accent, num, title, desc)

# Arrows between steps 1-5
for i in range(len(steps) - 1):
    y_from = steps[i][0]
    y_to   = steps[i + 1][0] + bh
    draw_arrow(ax, 7, y_from, y_to, "#30363D")

# Arrow from step 5 down
draw_arrow(ax, 7, 12.3, 11.65, "#30363D")

# ── Step 6: Hypothesis Testing (3 parallel branches) ────────────────
step6_y = 10.0
draw_step_box(ax, bx, step6_y, bw, bh, "#29B6F6", 6,
              "🧪  Hypothesis Testing",
              "Three parametric tests at α = 0.05 significance level")

# Arrow from label to sub-boxes
draw_arrow(ax, 7, step6_y, step6_y + 0.0, "#29B6F6")

# Three sub-boxes below step 6
sub_y = 8.6
sub_h = 0.95
sub_w = 3.4

draw_sub_box(ax, 1.6, sub_y, sub_w, sub_h, "#29B6F6",
             "H1: Welch's t-test\nCAR₃₀: Short vs Long\np = 0.014 → REJECT", 7.5)
draw_sub_box(ax, 5.3, sub_y, sub_w, sub_h, "#29B6F6",
             "H2: Paired t-test\nIntensity D0-5 vs D6-30\np = 0.694 → FAIL TO REJECT", 7.5)
draw_sub_box(ax, 9.0, sub_y, sub_w, sub_h, "#29B6F6",
             "H3: One-sample t\nCAR drift (Δ=CAR₉₀−CAR₃₀)\np = 0.033 → REJECT", 7.5)

# Arrows from step 6 to sub-boxes
for sx in [3.3, 7.0, 10.7]:
    draw_arrow(ax, sx, step6_y, sub_y + sub_h, "#29B6F6")

# ── Converge arrow ──────────────────────────────────────────────────
for sx in [3.3, 7.0, 10.7]:
    draw_arrow(ax, sx, sub_y, 8.15, "#30363D")

# Horizontal merge line
ax.plot([3.3, 10.7], [8.15, 8.15], color="#30363D", lw=1.8, zorder=2)
draw_arrow(ax, 7, 8.15, 7.75, "#30363D")

# ── Step 7: Macro Transmission ──────────────────────────────────────
step7_y = 6.4
draw_step_box(ax, bx, step7_y, bw, bh, "#FFD54F", 7,
              "🌍  Macro Transmission Analysis",
              "% change at T+30 → Oil (supply shock) · Gold (safe-haven) · TNX (rate expectations)")

draw_arrow(ax, 7, 7.75, step7_y + bh, "#30363D")

# ── Arrow to step 8 ─────────────────────────────────────────────────
draw_arrow(ax, 7, step7_y, step7_y - gap + 0.1, "#30363D")

# ── Step 8: Recovery Classification ─────────────────────────────────
step8_y = 4.6
draw_step_box(ax, bx, step8_y, bw, bh, "#66BB6A", 8,
              "📊  Recovery Shape Classification",
              "Rules-based classification using CAR₇, CAR₃₀, CAR₉₀ thresholds")

draw_arrow(ax, 7, step7_y - 0.0, step8_y + bh, "#30363D")

# Three outcome boxes
out_y = 3.2
out_h = 0.85
out_w = 3.4

draw_sub_box(ax, 1.6, out_y, out_w, out_h, "#EF5350",
             "❌ No-Recovery\n52.6%  (10 events)", 8.5)
draw_sub_box(ax, 5.3, out_y, out_w, out_h, "#66BB6A",
             "✅ V-shape Recovery\n42.1%  (8 events)", 8.5)
draw_sub_box(ax, 9.0, out_y, out_w, out_h, "#FF9800",
             "🔄 U-shape Recovery\n5.3%  (1 event)", 8.5)

# Arrows to outcomes
for sx in [3.3, 7.0, 10.7]:
    draw_arrow(ax, sx, step8_y, out_y + out_h, "#66BB6A")

# ── Converge to dashboard ───────────────────────────────────────────
for sx in [3.3, 7.0, 10.7]:
    draw_arrow(ax, sx, out_y, 2.75, "#30363D")

ax.plot([3.3, 10.7], [2.75, 2.75], color="#30363D", lw=1.8, zorder=2)
draw_arrow(ax, 7, 2.75, 2.35, "#30363D")

# ── Final output box: Streamlit Dashboard ────────────────────────────
dash_y = 1.1
dash_box = FancyBboxPatch(
    (3.0, dash_y), 8.0, 1.1,
    boxstyle="round,pad=0.15,rounding_size=0.3",
    facecolor="#1A1E2E", edgecolor="#4FC3F7", linewidth=2.0,
    zorder=4, alpha=0.95,
)
ax.add_patch(dash_box)

ax.text(7, dash_y + 0.65,
        "🚀  Streamlit Interactive Dashboard",
        color="#4FC3F7", fontsize=13, fontweight="bold",
        ha="center", va="center", fontfamily="sans-serif", zorder=5)
ax.text(7, dash_y + 0.30,
        "Real-time event explorer  •  19 events analysed  •  Visual narrative pivot",
        color="#8B949E", fontsize=8, ha="center", va="center",
        fontfamily="monospace", zorder=5)

# ── Footer ───────────────────────────────────────────────────────────
ax.text(7, 0.5,
        "S&P 500 War Impact Study  |  Behavioural Finance  |  Financial Markets Course Project",
        color="#484F58", fontsize=7.5, ha="center", va="center",
        fontfamily="monospace", style="italic")

# ── Save ─────────────────────────────────────────────────────────────
plt.tight_layout(pad=0.5)
out_path = "methodology_flowchart.png"
plt.savefig(out_path, dpi=300, bbox_inches="tight",
            facecolor=fig.get_facecolor())
plt.close()
print(f"✅ Flowchart saved → {out_path}")
