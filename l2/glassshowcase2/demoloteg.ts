/// <mls fileReference="_102053_/l2/glassshowcase2/demoloteg.ts" enhancement="_102020_/l2/enhancementAura"/>
// =============================================================================
// GLASS SHOWCASE 2 (mls-102055 por herança) — DEMO LOTE G (métricas / progresso / rating)
// =============================================================================
import { html, TemplateResult } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { StateLitElement } from '/_102029_/l2/stateLitElement.js';

import '/_102055_/l2/molecules/groupviewmetric/ml-metric-card-glass';
import '/_102055_/l2/molecules/groupviewmetric/ml-metric-big-number-glass';
import '/_102055_/l2/molecules/groupshowprogress/ml-linear-progress-glass';
import '/_102055_/l2/molecules/groupshowprogress/ml-circular-progress-glass';
import '/_102055_/l2/molecules/grouprateitem/ml-star-rating-glass';
import '/_102055_/l2/molecules/grouprateitem/ml-emoji-mood-scale-glass';

@customElement('glassshowcase2--demoloteg-102053')
export class GlassShowcase2DemoLoteG extends StateLitElement {
  @state() private stars = 3;
  @state() private mood = 4;

  render(): TemplateResult {
    return html`
      <div class="page">
        <div class="shell">
          <header class="head">
            <div class="brand">◆ Aurora · 102055</div>
            <h1 class="title">Lote G — Métricas, Progresso e Rating (por herança)</h1>
            <p class="subtitle">metric-card · big-number · linear · circular · stars · mood</p>
          </header>

          <section class="block">
            <h2 class="block-title">Métricas</h2>
            <div class="grid">
              <groupviewmetric--ml-metric-card-glass>
                <Icon>📈</Icon>
                <Label>Receita mensal</Label>
                <Value>R$ 128.430</Value>
                <Trend direction="up">+12,5%</Trend>
                <Helper>vs. mês anterior</Helper>
              </groupviewmetric--ml-metric-card-glass>
              <groupviewmetric--ml-metric-card-glass>
                <Icon>👥</Icon>
                <Label>Churn</Label>
                <Value>3,2%</Value>
                <Trend direction="down">-0,8%</Trend>
                <Helper>últimos 30 dias</Helper>
              </groupviewmetric--ml-metric-card-glass>
              <groupviewmetric--ml-metric-big-number-glass>
                <Label>Usuários ativos</Label>
                <Value>24.918</Value>
                <Trend direction="up">▲ 8,1%</Trend>
                <Helper>há 5 min</Helper>
              </groupviewmetric--ml-metric-big-number-glass>
            </div>
          </section>

          <section class="block">
            <h2 class="block-title">Progresso</h2>
            <div style="display:flex; flex-direction:column; gap:1.25rem;">
              <groupshowprogress--ml-linear-progress-glass value="72" show-value label="Upload"></groupshowprogress--ml-linear-progress-glass>
              <groupshowprogress--ml-linear-progress-glass value="40" variant="success" size="sm" show-value></groupshowprogress--ml-linear-progress-glass>
              <groupshowprogress--ml-linear-progress-glass value="88" variant="warning" size="lg" show-value></groupshowprogress--ml-linear-progress-glass>
              <div style="display:flex; align-items:center; gap:2rem; justify-content:center; margin-top:0.5rem;">
                <groupshowprogress--ml-circular-progress-glass value="68" size="lg" show-value></groupshowprogress--ml-circular-progress-glass>
                <groupshowprogress--ml-circular-progress-glass value="33" size="lg" show-value></groupshowprogress--ml-circular-progress-glass>
                <groupshowprogress--ml-circular-progress-glass size="lg"></groupshowprogress--ml-circular-progress-glass>
              </div>
            </div>
          </section>

          <section class="block">
            <h2 class="block-title">Star Rating</h2>
            <grouprateitem--ml-star-rating-glass
              .value=${this.stars}
              min="1"
              max="5"
              @change=${(e: CustomEvent) => {
                this.stars = e.detail.value;
              }}
            >
              <Label>Avaliação (${this.stars} ★)</Label>
              <Helper>Clique ou use as setas</Helper>
            </grouprateitem--ml-star-rating-glass>
          </section>

          <section class="block">
            <h2 class="block-title">Emoji Mood Scale</h2>
            <grouprateitem--ml-emoji-mood-scale-glass
              .value=${this.mood}
              @change=${(e: CustomEvent) => {
                this.mood = e.detail.value;
              }}
            >
              <Label>Como foi sua experiência? (${this.mood})</Label>
              <Item value="1">😡</Item>
              <Item value="2">🙁</Item>
              <Item value="3">😐</Item>
              <Item value="4">🙂</Item>
              <Item value="5">😍</Item>
            </grouprateitem--ml-emoji-mood-scale-glass>
          </section>
        </div>
      </div>
    `;
  }
}
