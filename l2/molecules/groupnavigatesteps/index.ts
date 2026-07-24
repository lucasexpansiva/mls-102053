/// <mls fileReference="_102053_/l2/molecules/groupnavigatesteps/index.ts" enhancement="_102020_/l2/enhancementAura"/>
import { html, TemplateResult } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { StateLitElement } from '/_102029_/l2/stateLitElement.js';
import '/_102053_/l2/molecules/groupnavigatesteps/ml-compact-step-indicator-glass';

@customElement('molecules--groupnavigatesteps--index-102053')
export class GroupNavigateStepsIndex extends StateLitElement {
  // ── Showcase card states ─────────────────────────────────────
  @state() private card1 = 1;

  render(): TemplateResult {
    return html`
      <div class="font-sans" style="min-height:100vh; background: linear-gradient(135deg, #0f172a 0%, #312e81 45%, #7e22ce 100%);">
        ${this.renderHero()}
        ${this.renderShowcaseCards()}
        ${this.renderReferenceTable()}
      </div>
    `;
  }

  // ===========================================================================
  // HERO
  // ===========================================================================
  private renderHero(): TemplateResult {
    return html`
      <header class="px-8 py-20 text-center" style="background: rgba(255,255,255,0.06); border-bottom: 1px solid rgba(255,255,255,0.25); backdrop-filter: blur(10px);">
        <span class="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest mb-6" style="background: rgba(99,102,241,0.25); color: rgba(255,255,255,0.9); border: 1px solid rgba(255,255,255,0.25);">
          groupNavigateSteps
        </span>
        <h1 class="text-5xl font-bold mb-5 tracking-tight" style="color: rgba(255,255,255,0.96); font-family: 'Inter', system-ui, sans-serif;">
          Navigate Steps
        </h1>
        <p class="text-lg max-w-2xl mx-auto leading-relaxed" style="color: rgba(255,255,255,0.72);">
          Allows the user to advance through a sequential multi-step process. Steps defined via Step slot tags with title, description, completed, and disabled attributes. Value is the active step index. Supports linear mode and free navigation.
        </p>
      </header>
    `;
  }

  // ===========================================================================
  // SHOWCASE CARDS
  // ===========================================================================
  private renderShowcaseCards(): TemplateResult {
    return html`
      <section class="px-8 py-12" style="border-bottom: 1px solid rgba(255,255,255,0.25);">
        <div class="max-w-2xl mx-auto flex flex-col gap-5">

          <div class="rounded-2xl" style="background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.25); box-shadow: 0 4px 18px rgba(0,0,0,0.18); backdrop-filter: blur(10px);">
            <div class="h-1 bg-violet-500 rounded-t-2xl"></div>
            <div class="p-6">
              <div class="flex items-center justify-between mb-1">
                <p class="text-sm font-bold" style="color: rgba(255,255,255,0.96);">Compact Step Indicator</p>
                <code class="text-xs px-2 py-0.5 rounded" style="background: rgba(255,255,255,0.1); color: rgba(255,255,255,0.65);">groupnavigatesteps--ml-compact-step-indicator-glass</code>
              </div>
              <p class="text-xs mb-5" style="color: rgba(255,255,255,0.5);">Compact glass stepper for linear multi-step flows with completed and active indicators</p>
              <groupnavigatesteps--ml-compact-step-indicator-glass
                name="card-1"
                .value=${this.card1}
                .isEditing=${true}
                .linear=${true}
                @change=${(e: CustomEvent) => { this.card1 = e.detail.value; }}>
                <Label>Checkout</Label>
                <Step title="Cart" description="Review your items" completed></Step>
                <Step title="Shipping" description="Delivery details"></Step>
                <Step title="Payment" description="Billing info"></Step>
                <Step title="Confirm" description="Place order" disabled></Step>
              </groupnavigatesteps--ml-compact-step-indicator-glass>
            </div>
          </div>

        </div>
      </section>
    `;
  }

  // ===========================================================================
  // REFERENCE TABLE
  // ===========================================================================
  private renderReferenceTable(): TemplateResult {
    const rows: Array<{ scenario: string; compactStepIndicatorGlass: boolean }> = [
      { scenario: 'Compact horizontal step indicator in a dense toolbar or header', compactStepIndicatorGlass: true },
      { scenario: 'Linear checkout or onboarding where steps must complete in order', compactStepIndicatorGlass: true },
      { scenario: 'Glass / translucent UI over a rich dark gradient backdrop', compactStepIndicatorGlass: true },
      { scenario: 'Show completed, active, and disabled steps with titles', compactStepIndicatorGlass: true },
      { scenario: 'Full-page vertical wizard with large step panels', compactStepIndicatorGlass: false },
    ];
    const headers = [
      { label: 'Compact Step Indicator', cls: 'text-violet-300' },
    ];

    return html`
      <section class="px-8 py-20" style="border-top: 1px solid rgba(255,255,255,0.25);">
        <div class="max-w-5xl mx-auto">
          <h2 class="text-2xl font-bold mb-2" style="color: rgba(255,255,255,0.96); font-family: 'Inter', system-ui, sans-serif;">Quick reference</h2>
          <p class="text-sm mb-8" style="color: rgba(255,255,255,0.65);">When to use the compact glass step indicator versus other multi-step navigation patterns</p>
          <div class="rounded-2xl overflow-hidden" style="background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.25); box-shadow: 0 4px 18px rgba(0,0,0,0.18); backdrop-filter: blur(10px);">
            <table class="w-full text-sm">
              <thead>
                <tr style="background: rgba(255,255,255,0.06); border-bottom: 1px solid rgba(255,255,255,0.25);">
                  <th class="text-left px-5 py-3.5 text-xs font-semibold uppercase tracking-wide w-3/4" style="color: rgba(255,255,255,0.55);">Scenario</th>
                  ${headers.map(h => html`
                    <th class="px-4 py-3.5 text-xs font-semibold uppercase tracking-wide ${h.cls}">${h.label}</th>
                  `)}
                </tr>
              </thead>
              <tbody>
                ${rows.map((row, i) => html`
                  <tr class="last:border-0" style="${i % 2 !== 0 ? 'background: rgba(255,255,255,0.04);' : ''} border-bottom: 1px solid rgba(255,255,255,0.12);">
                    <td class="px-5 py-3.5" style="color: rgba(255,255,255,0.8);">${row.scenario}</td>
                    ${([row.compactStepIndicatorGlass] as boolean[]).map(ok => html`
                      <td class="px-4 py-3.5 text-center">
                        ${ok
                          ? html`<span class="inline-flex items-center justify-center w-6 h-6 rounded-full text-xs font-bold" style="background: rgba(16,185,129,0.2); color: rgb(110,231,183);">✓</span>`
                          : html`<span class="text-sm" style="color: rgba(255,255,255,0.25);">—</span>`}
                      </td>
                    `)}
                  </tr>
                `)}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    `;
  }
}
