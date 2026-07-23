/// <mls fileReference="_102053_/l2/molecules/groupenterboolean/index.ts" enhancement="_102020_/l2/enhancementAura"/>
import { html, TemplateResult } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { StateLitElement } from '/_102029_/l2/stateLitElement.js';
import '/_102053_/l2/molecules/groupenterboolean/ml-boolean-segmented-glass';
import '/_102053_/l2/molecules/groupenterboolean/ml-toggle-switch';

@customElement('molecules--groupenterboolean--index-102053')
export class GroupEnterBooleanIndex extends StateLitElement {
  // ── Showcase card states ─────────────────────────────────────
  @state() private card1 = false;
  @state() private card2 = false;

  // ===========================================================================
  // RENDER HERO
  // ===========================================================================
  private renderHero(): TemplateResult {
    return html`
      <header class="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-700 px-8 py-20 text-center">
        <span class="inline-block px-3 py-1 bg-sky-100 dark:bg-sky-900 text-sky-600 dark:text-sky-300 rounded-full text-xs font-semibold uppercase tracking-widest mb-6">
          groupEnterBoolean
        </span>
        <h1 class="text-5xl font-bold text-slate-900 dark:text-slate-50 mb-5 tracking-tight">
          Enter Boolean
        </h1>
        <p class="text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
          Allows the user to input a true/false decision. Value is boolean — starts as false until the user changes it.
          Supports Label and Helper slot tags. Implementations are toggle/switch and checkbox, fully interchangeable by swapping the component tag.
        </p>
      </header>
    `;
  }

  // ===========================================================================
  // RENDER SHOWCASE CARDS
  // ===========================================================================
  private renderShowcaseCards(): TemplateResult {
    return html`
      <section class="bg-slate-50 dark:bg-slate-950 px-8 py-12 border-b border-slate-200 dark:border-slate-700">
        <div class="max-w-2xl mx-auto flex flex-col gap-5">

          <div class="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm">
            <div class="h-1 bg-violet-500 rounded-t-2xl"></div>
            <div class="p-6">
              <div class="flex items-center justify-between mb-1">
                <p class="text-sm font-bold text-slate-900 dark:text-slate-50">Boolean Segmented Glass</p>
                <code class="text-xs bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-400 px-2 py-0.5 rounded">groupenterboolean--ml-boolean-segmented-glass</code>
              </div>
              <p class="text-xs text-slate-400 mb-5">Segmented true/false control with a glass visual treatment</p>
              <groupenterboolean--ml-boolean-segmented-glass
                name="card-1"
                .value=${this.card1}
                .isEditing=${true}
                @change=${(e: CustomEvent) => { this.card1 = e.detail.value; }}>
                <Label>Enable notifications</Label>
                <Helper>Toggle to receive alerts about account activity</Helper>
              </groupenterboolean--ml-boolean-segmented-glass>
            </div>
          </div>

          <div class="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm">
            <div class="h-1 bg-emerald-500 rounded-t-2xl"></div>
            <div class="p-6">
              <div class="flex items-center justify-between mb-1">
                <p class="text-sm font-bold text-slate-900 dark:text-slate-50">Toggle Switch</p>
                <code class="text-xs bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-400 px-2 py-0.5 rounded">groupenterboolean--ml-toggle-switch</code>
              </div>
              <p class="text-xs text-slate-400 mb-5">Classic on/off switch for binary settings</p>
              <groupenterboolean--ml-toggle-switch
                name="card-2"
                .value=${this.card2}
                .isEditing=${true}
                @change=${(e: CustomEvent) => { this.card2 = e.detail.value; }}>
                <Label>I accept the terms and conditions</Label>
                <Helper>You must accept to continue</Helper>
              </groupenterboolean--ml-toggle-switch>
            </div>
          </div>

        </div>
      </section>
    `;
  }

  // ===========================================================================
  // RENDER REFERENCE TABLE
  // ===========================================================================
  private renderReferenceTable(): TemplateResult {
    const rows: Array<{ scenario: string; segmentedGlass: boolean; toggleSwitch: boolean }> = [
      { scenario: 'Settings panel on/off preference with a glass aesthetic', segmentedGlass: true, toggleSwitch: false },
      { scenario: 'Classic binary switch for feature flags or notifications', segmentedGlass: false, toggleSwitch: true },
      { scenario: 'Terms acceptance or consent checkbox-style decision', segmentedGlass: true, toggleSwitch: true },
      { scenario: 'Compact segmented Yes/No choice in a dense form layout', segmentedGlass: true, toggleSwitch: false },
      { scenario: 'Familiar toggle affordance for mobile-first interfaces', segmentedGlass: false, toggleSwitch: true },
      { scenario: 'Interchangeable true/false input — same contract, swap the tag', segmentedGlass: true, toggleSwitch: true },
    ];
    const headers = [
      { label: 'Segmented Glass', cls: 'text-violet-600 dark:text-violet-400' },
      { label: 'Toggle Switch', cls: 'text-emerald-600 dark:text-emerald-400' },
    ];

    return html`
      <section class="bg-slate-100 dark:bg-slate-950 px-8 py-20 border-t border-slate-200 dark:border-slate-700">
        <div class="max-w-5xl mx-auto">
          <h2 class="text-2xl font-bold text-slate-900 dark:text-slate-50 mb-2">Quick reference</h2>
          <p class="text-sm text-slate-500 dark:text-slate-400 mb-8">Choose between a glass segmented control and a classic toggle switch — both share the same boolean contract and are fully interchangeable.</p>
          <div class="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 overflow-hidden shadow-sm">
            <table class="w-full text-sm">
              <thead>
                <tr class="bg-slate-50 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-700">
                  <th class="text-left px-5 py-3.5 text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wide w-3/4">Scenario</th>
                  ${headers.map(h => html`
                    <th class="px-4 py-3.5 text-xs font-semibold uppercase tracking-wide ${h.cls}">${h.label}</th>
                  `)}
                </tr>
              </thead>
              <tbody>
                ${rows.map((row, i) => html`
                  <tr class="${i % 2 !== 0 ? 'bg-slate-50/60 dark:bg-slate-900/40' : ''} border-b border-slate-100 dark:border-slate-700/60 last:border-0">
                    <td class="px-5 py-3.5 text-slate-700 dark:text-slate-300">${row.scenario}</td>
                    ${([row.segmentedGlass, row.toggleSwitch] as boolean[]).map(ok => html`
                      <td class="px-4 py-3.5 text-center">
                        ${ok
                          ? html`<span class="inline-flex items-center justify-center w-6 h-6 rounded-full bg-emerald-100 dark:bg-emerald-900/50 text-emerald-600 dark:text-emerald-400 text-xs font-bold">✓</span>`
                          : html`<span class="text-slate-200 dark:text-slate-700 text-sm">—</span>`}
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

  // ===========================================================================
  // RENDER
  // ===========================================================================
  render(): TemplateResult {
    return html`
      <div class="font-sans min-h-screen">
        ${this.renderHero()}
        ${this.renderShowcaseCards()}
        ${this.renderReferenceTable()}
      </div>
    `;
  }
}
