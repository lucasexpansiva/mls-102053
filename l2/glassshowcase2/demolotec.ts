/// <mls fileReference="_102053_/l2/glassshowcase2/demolotec.ts" enhancement="_102020_/l2/enhancementAura"/>
// =============================================================================
// GLASS SHOWCASE 2 (mls-102055 por herança) — DEMO LOTE C (pickers data/hora)
// =============================================================================
import { html, TemplateResult } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { StateLitElement } from '/_102029_/l2/stateLitElement.js';

import '/_102055_/l2/molecules/groupenterdatetime/ml-datetime-picker-glass';
import '/_102055_/l2/molecules/groupentertime/ml-clock-time-picker-glass';

@customElement('glassshowcase2--demolotec-102053')
export class GlassShowcase2DemoLoteC extends StateLitElement {
  @state() private dt: string | null = '2026-06-18T14:30:00';
  @state() private time: string | null = '14:30';

  render(): TemplateResult {
    return html`
      <div class="page">
        <div class="shell">
          <header class="head">
            <div class="brand">◆ Aurora · 102055</div>
            <h1 class="title">Lote C — Pickers de data/hora (por herança)</h1>
            <p class="subtitle">datetime-picker · clock-time-picker</p>
          </header>

          <section class="block">
            <h2 class="block-title">Datetime Picker</h2>
            <groupenterdatetime--ml-datetime-picker-glass
              .value=${this.dt}
              locale="pt-BR"
              minute-step="15"
              @change=${(e: CustomEvent) => { this.dt = e.detail.value; }}
            >
              <Label>Agendamento</Label>
              <Helper>Selecionado: ${this.dt ?? '—'}</Helper>
            </groupenterdatetime--ml-datetime-picker-glass>
          </section>

          <section class="block">
            <h2 class="block-title">Clock Time Picker</h2>
            <groupentertime--ml-clock-time-picker-glass
              .value=${this.time}
              locale="pt-BR"
              minute-step="5"
              @change=${(e: CustomEvent) => { this.time = e.detail.value; }}
            >
              <Label>Horário</Label>
              <Helper>Selecionado: ${this.time ?? '—'}</Helper>
            </groupentertime--ml-clock-time-picker-glass>
          </section>
        </div>
      </div>
    `;
  }
}
