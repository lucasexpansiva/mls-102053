/// <mls fileReference="_102053_/l2/glassshowcase2/demolotea.ts" enhancement="_102020_/l2/enhancementAura"/>
// =============================================================================
// GLASS SHOWCASE 2 (mls-102055 por herança) — DEMO LOTE A (entrada)
// =============================================================================
import { html, TemplateResult } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { StateLitElement } from '/_102029_/l2/stateLitElement.js';

import '/_102055_/l2/molecules/groupentertext/ml-floating-text-input-glass';
import '/_102055_/l2/molecules/groupentertext/ml-password-strength-input-glass';
import '/_102055_/l2/molecules/groupentertext/ml-tag-input-glass';
import '/_102055_/l2/molecules/groupentermoney/ml-currency-input-glass';
import '/_102055_/l2/molecules/groupenternumber/ml-number-stepper-glass';
import '/_102055_/l2/molecules/groupenternumber/ml-range-slider-glass';

@customElement('glassshowcase2--demolotea-102053')
export class GlassShowcase2DemoLoteA extends StateLitElement {
  @state() private fullName = '';
  @state() private password = 'Senha1!';
  @state() private tags = 'design, glass, lit';
  @state() private price = 129.9;
  @state() private qty = 2;
  @state() private priceLow = 200;
  @state() private priceHigh = 800;

  render(): TemplateResult {
    return html`
      <div class="page">
        <div class="shell">
          <header class="head">
            <div class="brand">◆ Aurora · 102055</div>
            <h1 class="title">Lote A — Entrada (por herança)</h1>
            <p class="subtitle">texto · senha · tags · moeda · stepper · range</p>
          </header>

          <section class="block">
            <h2 class="block-title">Texto / Senha / Tags</h2>
            <div style="display:flex; flex-direction:column; gap:1.5rem;">
              <groupentertext--ml-floating-text-input-glass
                .value=${this.fullName}
                @input=${(e: CustomEvent) => { this.fullName = e.detail.value; }}
              >
                <Label>Full name</Label>
                <Helper>As shown on your document</Helper>
              </groupentertext--ml-floating-text-input-glass>

              <groupentertext--ml-password-strength-input-glass
                .value=${this.password}
                min-length="8"
                required
                @input=${(e: CustomEvent) => { this.password = e.detail.value; }}
              >
                <Label>Senha</Label>
                <Helper>Use letras, números e símbolos</Helper>
              </groupentertext--ml-password-strength-input-glass>

              <groupentertext--ml-tag-input-glass
                .value=${this.tags}
                @input=${(e: CustomEvent) => { this.tags = e.detail.value; }}
              >
                <Label>Tags</Label>
                <Helper>Enter ou vírgula para adicionar</Helper>
              </groupentertext--ml-tag-input-glass>
            </div>
          </section>

          <section class="block">
            <h2 class="block-title">Moeda</h2>
            <groupentermoney--ml-currency-input-glass
              .value=${this.price}
              currency="BRL"
              locale="pt-BR"
              @input=${(e: CustomEvent) => { this.price = e.detail.value; }}
            >
              <Label>Preço</Label>
              <Helper>Digite o valor em centavos</Helper>
            </groupentermoney--ml-currency-input-glass>
          </section>

          <section class="block">
            <h2 class="block-title">Número / Range</h2>
            <div style="display:flex; flex-direction:column; gap:1.5rem;">
              <groupenternumber--ml-number-stepper-glass
                .value=${this.qty}
                min="0"
                max="10"
                step="1"
                @input=${(e: CustomEvent) => { this.qty = e.detail.value; }}
              >
                <Label>Quantidade (${this.qty})</Label>
              </groupenternumber--ml-number-stepper-glass>

              <groupenternumber--ml-range-slider-glass
                .value=${this.priceLow}
                .valueHigh=${this.priceHigh}
                min="0"
                max="1000"
                step="50"
                locale="pt-BR"
                @input=${(e: CustomEvent) => { this.priceLow = e.detail.value.min; this.priceHigh = e.detail.value.max; }}
              >
                <Label>Faixa de preço</Label>
                <Helper>${this.priceLow} – ${this.priceHigh}</Helper>
                <Prefix>R$</Prefix>
              </groupenternumber--ml-range-slider-glass>
            </div>
          </section>
        </div>
      </div>
    `;
  }
}
