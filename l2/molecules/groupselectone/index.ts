/// <mls fileReference="_102053_/l2/molecules/groupselectone/index.ts" enhancement="_102020_/l2/enhancementAura"/>
import { html, TemplateResult } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { StateLitElement } from '/_102029_/l2/stateLitElement.js';
import '/_102053_/l2/molecules/groupselectone/ml-combobox-glass';
import '/_102053_/l2/molecules/groupselectone/ml-select-one-test';

@customElement('molecules--groupselectone--index-102053')
export class GroupSelectOneIndex extends StateLitElement {
  // ── Showcase card states ─────────────────────────────────────────────
  @state() private card1: string | null = null;
  @state() private card2: string | null = 'pro';

  // ===========================================================================
  // HERO
  // ===========================================================================
  private renderHero(): TemplateResult {
    return html`
      <header class="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-700 px-8 py-20 text-center">
        <span class="inline-block px-3 py-1 bg-sky-100 dark:bg-sky-900 text-sky-600 dark:text-sky-300 rounded-full text-xs font-semibold uppercase tracking-widest mb-6">
          groupSelectOne
        </span>
        <h1 class="text-5xl font-bold text-slate-900 dark:text-slate-50 mb-5 tracking-tight">
          Select One
        </h1>
        <p class="text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
          Allows the user to select exactly one option from a list of mutually exclusive choices.
          Ideal for scenarios where a single, clear decision is required — dropdown, radio, segmented, list, or table layouts.
        </p>
      </header>
    `;
  }

  // ===========================================================================
  // SHOWCASE CARDS
  // ===========================================================================
  private renderShowcaseCards(): TemplateResult {
    return html`
      <section class="bg-slate-50 dark:bg-slate-950 px-8 py-12 border-b border-slate-200 dark:border-slate-700">
        <div class="max-w-2xl mx-auto flex flex-col gap-5">

          <div class="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm">
            <div class="h-1 bg-violet-500 rounded-t-2xl"></div>
            <div class="p-6">
              <div class="flex items-center justify-between mb-1">
                <p class="text-sm font-bold text-slate-900 dark:text-slate-50">Combobox Glass</p>
                <code class="text-xs bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-400 px-2 py-0.5 rounded">groupselectone--ml-combobox-glass</code>
              </div>
              <p class="text-xs text-slate-400 mb-5">Glass-themed dropdown combobox for picking a single option</p>
              <groupselectone--ml-combobox-glass
                name="card-1"
                .value=${this.card1}
                .isEditing=${true}
                placeholder="Select a country..."
                @change=${(e: CustomEvent) => { this.card1 = e.detail.value; }}>
                <Label>Country</Label>
                <Helper>Choose the country associated with this account</Helper>
                <Trigger>Select a country...</Trigger>
                <Item value="br">Brazil</Item>
                <Item value="us">United States</Item>
                <Item value="de">Germany</Item>
                <Item value="jp">Japan</Item>
                <Empty>No countries available</Empty>
              </groupselectone--ml-combobox-glass>
            </div>
          </div>

          <div class="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm">
            <div class="h-1 bg-emerald-500 rounded-t-2xl"></div>
            <div class="p-6">
              <div class="flex items-center justify-between mb-1">
                <p class="text-sm font-bold text-slate-900 dark:text-slate-50">Select One Test</p>
                <code class="text-xs bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-400 px-2 py-0.5 rounded">groupselectone--ml-select-one-test</code>
              </div>
              <p class="text-xs text-slate-400 mb-5">Test harness variant for single-select behaviour across layouts</p>
              <groupselectone--ml-select-one-test
                name="card-2"
                .value=${this.card2}
                .isEditing=${true}
                placeholder="Choose a plan..."
                @change=${(e: CustomEvent) => { this.card2 = e.detail.value; }}>
                <Label>Plan</Label>
                <Helper>You can change your plan later</Helper>
                <Trigger>Choose a plan...</Trigger>
                <Item value="basic">Basic</Item>
                <Item value="pro">Pro</Item>
                <Item value="enterprise">Enterprise</Item>
                <Empty>No plans available</Empty>
              </groupselectone--ml-select-one-test>
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
    const rows: Array<{ scenario: string; comboboxGlass: boolean; selectOneTest: boolean }> = [
      { scenario: 'Glass-themed dropdown / combobox for a polished single choice', comboboxGlass: true, selectOneTest: false },
      { scenario: 'General-purpose single-select test harness across variants', comboboxGlass: false, selectOneTest: true },
      { scenario: 'Mutually exclusive options with a stored string value', comboboxGlass: true, selectOneTest: true },
      { scenario: 'Grouped options under labeled headings', comboboxGlass: true, selectOneTest: true },
      { scenario: 'Searchable filtering of a long option list', comboboxGlass: true, selectOneTest: true },
      { scenario: 'Read-only display of the selected label (isEditing=false)', comboboxGlass: true, selectOneTest: true },
    ];
    const headers = [
      { label: 'Combobox Glass', cls: 'text-violet-600 dark:text-violet-400' },
      { label: 'Select One Test', cls: 'text-emerald-600 dark:text-emerald-400' },
    ];

    return html`
      <section class="bg-slate-100 dark:bg-slate-950 px-8 py-20 border-t border-slate-200 dark:border-slate-700">
        <div class="max-w-5xl mx-auto">
          <h2 class="text-2xl font-bold text-slate-900 dark:text-slate-50 mb-2">Quick reference</h2>
          <p class="text-sm text-slate-500 dark:text-slate-400 mb-8">Pick the right select-one implementation for your layout and theme — both store a single item value regardless of variant.</p>
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
                    ${([row.comboboxGlass, row.selectOneTest] as boolean[]).map(ok => html`
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
