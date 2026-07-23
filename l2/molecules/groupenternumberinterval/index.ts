/// <mls fileReference="_102053_/l2/molecules/groupenternumberinterval/index.ts" enhancement="_102020_/l2/enhancementAura"/>
import { html, TemplateResult } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { StateLitElement } from '/_102029_/l2/stateLitElement.js';
import '/_102053_/l2/molecules/groupenternumberinterval/ml-number-range-slider';
import '/_102053_/l2/molecules/groupenternumberinterval/ml-number-range-slider2';

@customElement('molecules--groupenternumberinterval--index-102053')
export class GroupEnterNumberIntervalIndex extends StateLitElement {
  // ── Showcase card states ─────────────────────────────────────
  @state() private card1Start: number | null = 100;
  @state() private card1End: number | null = 500;
  @state() private card2Start: number | null = 18;
  @state() private card2End: number | null = 65;
  @state() private card3Start: number | null = 2.5;
  @state() private card3End: number | null = 12.0;

  // =========================================================================== RENDER
  render(): TemplateResult {
    return html`
      <div class="font-sans min-h-screen">
        ${this.renderHero()}
        ${this.renderShowcaseCards()}
        ${this.renderReferenceTable()}
      </div>
    `;
  }

  // =========================================================================== HERO
  private renderHero(): TemplateResult {
    return html`
      <header class="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-700 px-8 py-20 text-center">
        <span class="inline-block px-3 py-1 bg-sky-100 dark:bg-sky-900 text-sky-600 dark:text-sky-300 rounded-full text-xs font-semibold uppercase tracking-widest mb-6">
          groupEnterNumberInterval
        </span>
        <h1 class="text-5xl font-bold text-slate-900 dark:text-slate-50 mb-5 tracking-tight">
          Enter Number Interval
        </h1>
        <p class="text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
          Allows the user to input a numeric range with a lower and an upper value. Ideal for price bands, age brackets, value filters, weight or measurement ranges, and any bounded numeric interval. Implementations include dual-handle range slider and from/to number inputs.
        </p>
      </header>
    `;
  }

  // =========================================================================== SHOWCASE CARDS
  private renderShowcaseCards(): TemplateResult {
    return html`
      <section class="bg-slate-50 dark:bg-slate-950 px-8 py-12 border-b border-slate-200 dark:border-slate-700">
        <div class="max-w-2xl mx-auto flex flex-col gap-5">

          <!-- Card 1: ml-number-range-slider — price band -->
          <div class="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm">
            <div class="h-1 bg-violet-500 rounded-t-2xl"></div>
            <div class="p-6">
              <div class="flex items-center justify-between mb-1">
                <p class="text-sm font-bold text-slate-900 dark:text-slate-50">Range Slider</p>
                <code class="text-xs bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-400 px-2 py-0.5 rounded">groupenternumberinterval--ml-number-range-slider</code>
              </div>
              <p class="text-xs text-slate-400 mb-5">Dual-handle slider for continuous numeric ranges such as price bands</p>
              <groupenternumberinterval--ml-number-range-slider
                name="card-1"
                .startValue=${this.card1Start}
                .endValue=${this.card1End}
                .min=${0}
                .max=${1000}
                .step=${50}
                .isEditing=${true}
                locale="pt-BR"
                @change=${(e: CustomEvent) => { this.card1Start = e.detail.startValue; this.card1End = e.detail.endValue; }}>
                <Label>Faixa de preço</Label>
                <LabelStart>De</LabelStart>
                <LabelEnd>Até</LabelEnd>
                <Prefix>R$</Prefix>
                <Helper>Arraste os controles para definir o intervalo de preço</Helper>
              </groupenternumberinterval--ml-number-range-slider>
            </div>
          </div>

          <!-- Card 2: ml-number-range-slider2 — age bracket -->
          <div class="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm">
            <div class="h-1 bg-emerald-500 rounded-t-2xl"></div>
            <div class="p-6">
              <div class="flex items-center justify-between mb-1">
                <p class="text-sm font-bold text-slate-900 dark:text-slate-50">From / To Inputs</p>
                <code class="text-xs bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-400 px-2 py-0.5 rounded">groupenternumberinterval--ml-number-range-slider2</code>
              </div>
              <p class="text-xs text-slate-400 mb-5">Paired number inputs for precise from/to entry such as age brackets</p>
              <groupenternumberinterval--ml-number-range-slider2
                name="card-2"
                .startValue=${this.card2Start}
                .endValue=${this.card2End}
                .min=${0}
                .max=${120}
                .step=${1}
                .isEditing=${true}
                @change=${(e: CustomEvent) => { this.card2Start = e.detail.startValue; this.card2End = e.detail.endValue; }}>
                <Label>Faixa etária</Label>
                <LabelStart>Idade mínima</LabelStart>
                <LabelEnd>Idade máxima</LabelEnd>
                <Suffix>anos</Suffix>
                <Helper>Informe a idade mínima e máxima do público-alvo</Helper>
              </groupenternumberinterval--ml-number-range-slider2>
            </div>
          </div>

          <!-- Card 3: ml-number-range-slider — weight with decimals & minGap -->
          <div class="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm">
            <div class="h-1 bg-amber-500 rounded-t-2xl"></div>
            <div class="p-6">
              <div class="flex items-center justify-between mb-1">
                <p class="text-sm font-bold text-slate-900 dark:text-slate-50">Range Slider · Decimals & Min Gap</p>
                <code class="text-xs bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-400 px-2 py-0.5 rounded">groupenternumberinterval--ml-number-range-slider</code>
              </div>
              <p class="text-xs text-slate-400 mb-5">Slider with decimal precision and a enforced minimum gap between handles</p>
              <groupenternumberinterval--ml-number-range-slider
                name="card-3"
                .startValue=${this.card3Start}
                .endValue=${this.card3End}
                .min=${0}
                .max=${50}
                .step=${0.5}
                .decimals=${1}
                .minGap=${5}
                .isEditing=${true}
                locale="pt-BR"
                @change=${(e: CustomEvent) => { this.card3Start = e.detail.startValue; this.card3End = e.detail.endValue; }}>
                <Label>Faixa de peso</Label>
                <LabelStart>Mínimo</LabelStart>
                <LabelEnd>Máximo</LabelEnd>
                <Suffix>kg</Suffix>
                <Helper>Diferença mínima de 5 kg entre os limites</Helper>
              </groupenternumberinterval--ml-number-range-slider>
            </div>
          </div>

        </div>
      </section>
    `;
  }

  // =========================================================================== REFERENCE TABLE
  private renderReferenceTable(): TemplateResult {
    const rows: Array<{ scenario: string; slider: boolean; inputs: boolean }> = [
      { scenario: 'Continuous visual exploration (price, score, percentage filters)', slider: true, inputs: false },
      { scenario: 'Precise typed entry where exact numbers matter more than gesture', slider: false, inputs: true },
      { scenario: 'Compact filter bar with limited horizontal space', slider: true, inputs: false },
      { scenario: 'Form fields that sit alongside other text inputs', slider: false, inputs: true },
      { scenario: 'Decimal values with locale formatting and unit prefix/suffix', slider: true, inputs: true },
      { scenario: 'Enforced minimum or maximum gap between the two bounds', slider: true, inputs: true },
      { scenario: 'Touch-first mobile experience with large drag targets', slider: true, inputs: false },
      { scenario: 'Keyboard-heavy desktop workflows and accessibility-first forms', slider: false, inputs: true },
    ];
    const headers = [
      { label: 'Range Slider', cls: 'text-violet-600 dark:text-violet-400' },
      { label: 'From/To Inputs', cls: 'text-emerald-600 dark:text-emerald-400' },
    ];

    return html`
      <section class="bg-slate-100 dark:bg-slate-950 px-8 py-20 border-t border-slate-200 dark:border-slate-700">
        <div class="max-w-5xl mx-auto">
          <h2 class="text-2xl font-bold text-slate-900 dark:text-slate-50 mb-2">Quick reference</h2>
          <p class="text-sm text-slate-500 dark:text-slate-400 mb-8">Choose a dual-handle slider for visual continuous ranges, or paired from/to inputs when users need to type exact bounds.</p>
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
                    ${([row.slider, row.inputs] as boolean[]).map(ok => html`
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
}
