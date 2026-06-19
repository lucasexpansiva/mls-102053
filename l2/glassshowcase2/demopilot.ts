/// <mls fileReference="_102053_/l2/glassshowcase2/demopilot.ts" enhancement="_102020_/l2/enhancementAura"/>
// =============================================================================
// GLASS SHOWCASE 2 (mls-102055 por herança) — DEMO PILOTO
// =============================================================================
// Demonstra as moléculas glass do mls-102055 (herdadas do 102040, tag -glass).
import { html, TemplateResult } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { StateLitElement } from '/_102029_/l2/stateLitElement.js';

import '/_102055_/l2/molecules/groupenterboolean/ml-toggle-switch-glass';
import '/_102055_/l2/molecules/groupenterdate/ml-date-picker-glass';

@customElement('glassshowcase2--demopilot-102053')
export class GlassShowcase2DemoPilot extends StateLitElement {
  @state() private notif = false;
  @state() private terms = true;
  @state() private date: string | null = '2026-06-18';

  render(): TemplateResult {
    return html`
      <div class="page">
        <div class="shell">
          <header class="head">
            <div class="brand">◆ Aurora · 102055</div>
            <h1 class="title">Glass por Herança — Piloto</h1>
            <p class="subtitle">moléculas do mls-102055 (herdam o 102040, tag <code>-glass</code>)</p>
          </header>

          <section class="block">
            <h2 class="block-title">Toggle Switch (simples)</h2>
            <div style="display:flex; flex-direction:column; gap:1.25rem;">
              <groupenterboolean--ml-toggle-switch-glass
                .value=${this.notif}
                @change=${(e: CustomEvent) => {
                  this.notif = e.detail.value;
                }}
              >
                <Label>Notificações (${this.notif ? 'on' : 'off'})</Label>
                <Helper>Receber alertas por e-mail</Helper>
              </groupenterboolean--ml-toggle-switch-glass>

              <groupenterboolean--ml-toggle-switch-glass
                .value=${this.terms}
                @change=${(e: CustomEvent) => {
                  this.terms = e.detail.value;
                }}
              >
                <Label>Aceito os termos (${this.terms ? 'sim' : 'não'})</Label>
              </groupenterboolean--ml-toggle-switch-glass>
            </div>
          </section>

          <section class="block">
            <h2 class="block-title">Date Picker (pesada de lógica)</h2>
            <groupenterdate--ml-date-picker-glass
              .value=${this.date}
              locale="pt-BR"
              first-day-of-week="1"
              @change=${(e: CustomEvent) => {
                this.date = e.detail.value;
              }}
            >
              <Label>Data de início</Label>
              <Helper>Selecionada: ${this.date ?? '—'}</Helper>
            </groupenterdate--ml-date-picker-glass>
          </section>
        </div>
      </div>
    `;
  }
}
