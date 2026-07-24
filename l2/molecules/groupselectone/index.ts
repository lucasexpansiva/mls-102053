/// <mls fileReference="_102053_/l2/molecules/groupselectone/index.ts" enhancement="_102020_/l2/enhancementAura"/>
import { html, TemplateResult } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { StateLitElement } from '/_102029_/l2/stateLitElement.js';
import '/_102053_/l2/molecules/groupselectone/ml-discrete-slider-glass';

@customElement('molecules--groupselectone--index-102053')
export class GroupSelectOneIndex extends StateLitElement {
  // ── Showcase card states ─────────────────────────────────────
  @state() private card1: string | null = 'pro';

  // ===========================================================================
  // HERO
  // ===========================================================================
  private renderHero(): TemplateResult {
    return html`
      <header
        class="px-8 py-20 text-center"
        style="background: rgba(255,255,255,0.06); border-bottom: 1px solid rgba(255,255,255,0.25); backdrop-filter: blur(10px);"
      >
        <span
          class="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest mb-6"
          style="background: rgba(99,102,241,0.25); color: rgba(255,255,255,0.9); border: 1px solid rgba(255,255,255,0.25);"
        >
          groupSelectOne
        </span>
        <h1
          class="text-5xl font-bold mb-5 tracking-tight"
          style="color: rgba(255,255,255,0.96); font-family: 'Inter', system-ui, sans-serif; font-weight: 600;"
        >
          Select One
        </h1>
        <p
          class="text-lg max-w-2xl mx-auto leading-relaxed"
          style="color: rgba(255,255,255,0.65);"
        >
          Allows the user to select exactly one option from a list of mutually exclusive choices.
          Ideal for scenarios where a single, clear decision is required — layout via variant
          (dropdown, radio, segmented, list, table, or discrete slider).
        </p>
      </header>
    `;
  }

  // ===========================================================================
  // SHOWCASE CARDS
  // ===========================================================================
  private renderShowcaseCards(): TemplateResult {
    return html`
      <section
        class="px-8 py-12"
        style="border-bottom: 1px solid rgba(255,255,255,0.25);"
      >
        <div class="max-w-2xl mx-auto flex flex-col gap-5">
          <!-- Card 1: ml-discrete-slider-glass -->
          <div
            class="rounded-2xl overflow-hidden"
            style="background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.25); box-shadow: 0 4px 18px rgba(0,0,0,0.18); backdrop-filter: blur(10px);"
          >
            <div class="h-1 bg-violet-500 rounded-t-2xl"></div>
            <div class="p-6">
              <div class="flex items-center justify-between mb-1">
                <p class="text-sm font-bold" style="color: rgba(255,255,255,0.96);">Discrete Slider</p>
                <code
                  class="text-xs px-2 py-0.5 rounded"
                  style="background: rgba(255,255,255,0.1); color: rgba(255,255,255,0.55);"
                >groupselectone--ml-discrete-slider-glass</code>
              </div>
              <p class="text-xs mb-5" style="color: rgba(255,255,255,0.45);">
                Glass discrete slider for picking exactly one ordered option along a track
              </p>
              <groupselectone--ml-discrete-slider-glass
                name="card-1"
                .value=${this.card1}
                .isEditing=${true}
                @change=${(e: CustomEvent) => { this.card1 = e.detail.value; }}
              >
                <Label>Plan tier</Label>
                <Helper>Slide to choose the tier that fits your team</Helper>
                <Item value="free">Free</Item>
                <Item value="starter">Starter</Item>
                <Item value="pro">Pro</Item>
                <Item value="business">Business</Item>
                <Item value="enterprise">Enterprise</Item>
                <Empty>No tiers available</Empty>
              </groupselectone--ml-discrete-slider-glass>
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
    const rows: Array<{ scenario: string; discreteSlider: boolean }> = [
      { scenario: 'Ordered tiers or steps along a continuous visual track', discreteSlider: true },
      { scenario: 'Few mutually exclusive options the user can scan at a glance', discreteSlider: true },
      { scenario: 'Glass / translucent UI on a rich dark backdrop', discreteSlider: true },
      { scenario: 'Compare multi-attribute options side-by-side (use table variant)', discreteSlider: false },
      { scenario: 'Searchable long lists of unrelated labels (use dropdown/list)', discreteSlider: false },
    ];
    const headers = [
      { label: 'Discrete Slider', cls: 'text-violet-300' },
    ];

    return html`
      <section class="px-8 py-20" style="border-top: 1px solid rgba(255,255,255,0.25);">
        <div class="max-w-5xl mx-auto">
          <h2
            class="text-2xl font-bold mb-2"
            style="color: rgba(255,255,255,0.96); font-family: 'Inter', system-ui, sans-serif; font-weight: 600;"
          >
            Quick reference
          </h2>
          <p class="text-sm mb-8" style="color: rgba(255,255,255,0.55);">
            When to reach for the discrete-slider glass select-one versus other layouts in this group
          </p>
          <div
            class="rounded-2xl overflow-hidden"
            style="background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.25); box-shadow: 0 4px 18px rgba(0,0,0,0.18); backdrop-filter: blur(10px);"
          >
            <table class="w-full text-sm">
              <thead>
                <tr style="background: rgba(255,255,255,0.06); border-bottom: 1px solid rgba(255,255,255,0.25);">
                  <th
                    class="text-left px-5 py-3.5 text-xs font-semibold uppercase tracking-wide w-3/4"
                    style="color: rgba(255,255,255,0.5);"
                  >
                    Scenario
                  </th>
                  ${headers.map(
                    (h) => html`
                      <th class="px-4 py-3.5 text-xs font-semibold uppercase tracking-wide ${h.cls}">
                        ${h.label}
                      </th>
                    `
                  )}
                </tr>
              </thead>
              <tbody>
                ${rows.map(
                  (row, i) => html`
                    <tr
                      class="last:border-0"
                      style="border-bottom: 1px solid rgba(255,255,255,0.12); ${i % 2 !== 0
                        ? 'background: rgba(255,255,255,0.04);'
                        : ''}"
                    >
                      <td class="px-5 py-3.5" style="color: rgba(255,255,255,0.75);">
                        ${row.scenario}
                      </td>
                      ${
                        ([row.discreteSlider] as boolean[]).map(
                          (ok) => html`
                            <td class="px-4 py-3.5 text-center">
                              ${
                                ok
                                  ? html`<span
                                      class="inline-flex items-center justify-center w-6 h-6 rounded-full text-xs font-bold"
                                      style="background: rgba(16,185,129,0.2); color: rgb(110,231,183);"
                                      >✓</span
                                    >`
                                  : html`<span style="color: rgba(255,255,255,0.2);" class="text-sm"
                                      >—</span
                                    >`
                              }
                            </td>
                          `
                        )
                      }
                    </tr>
                  `
                )}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    `;
  }

  render(): TemplateResult {
    return html`
      <div
        class="font-sans"
        style="min-height:100vh; background: linear-gradient(135deg, #0f172a 0%, #312e81 45%, #7e22ce 100%);"
      >
        ${this.renderHero()}
        ${this.renderShowcaseCards()}
        ${this.renderReferenceTable()}
      </div>
    `;
  }
}
