/// <mls fileReference="_102053_/l2/glassshowcase2/demoloted.ts" enhancement="_102020_/l2/enhancementAura"/>
// =============================================================================
// GLASS SHOWCASE 2 (mls-102055 por herança) — DEMO LOTE D (ações e cards)
// =============================================================================
import { html, TemplateResult } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { StateLitElement } from '/_102029_/l2/stateLitElement.js';

import '/_102055_/l2/molecules/grouptriggeraction/ml-button-standard-glass';
import '/_102055_/l2/molecules/grouptriggeraction/ml-icon-button-glass';
import '/_102055_/l2/molecules/grouptriggeraction/ml-split-button-glass';
import '/_102055_/l2/molecules/groupviewcard/ml-profile-card-glass';
import '/_102055_/l2/molecules/groupviewcard/ml-vertical-card-glass';

@customElement('glassshowcase2--demoloted-102053')
export class GlassShowcase2DemoLoteD extends StateLitElement {
  @state() private lastAction = '—';
  @state() private selectedPlan: 'pro' | 'enterprise' | null = 'pro';

  private onAction(label: string, e: CustomEvent) {
    const detail = e.detail as { value?: string };
    this.lastAction = detail && detail.value ? `${label}: ${detail.value}` : label;
  }

  render(): TemplateResult {
    return html`
      <div class="page">
        <div class="shell">
          <header class="head">
            <div class="brand">◆ Aurora · 102055</div>
            <h1 class="title">Lote D — Ações e Cards (por herança)</h1>
            <p class="subtitle">button · icon-button · split-button · profile-card · vertical-card</p>
            <p class="subtitle">Última ação: ${this.lastAction}</p>
          </header>

          <section class="block">
            <h2 class="block-title">Botões</h2>
            <div style="display:flex; flex-wrap:wrap; gap:0.75rem; align-items:center;">
              <grouptriggeraction--ml-button-standard-glass
                data-variant="primary"
                @action=${(e: CustomEvent) => this.onAction('Primary', e)}
              >
                <Label>Primary</Label>
              </grouptriggeraction--ml-button-standard-glass>
              <grouptriggeraction--ml-button-standard-glass
                data-variant="secondary"
                @action=${(e: CustomEvent) => this.onAction('Secondary', e)}
              >
                <Label>Secondary</Label>
              </grouptriggeraction--ml-button-standard-glass>
              <grouptriggeraction--ml-button-standard-glass
                data-variant="danger"
                @action=${(e: CustomEvent) => this.onAction('Danger', e)}
              >
                <Label>Danger</Label>
              </grouptriggeraction--ml-button-standard-glass>
              <grouptriggeraction--ml-button-standard-glass data-variant="ghost" loading="true">
                <Label>Loading</Label>
              </grouptriggeraction--ml-button-standard-glass>
            </div>
          </section>

          <section class="block">
            <h2 class="block-title">Icon Button / Split Button</h2>
            <div style="display:flex; flex-wrap:wrap; gap:1rem; align-items:center;">
              <grouptriggeraction--ml-icon-button-glass
                size="sm"
                @action=${(e: CustomEvent) => this.onAction('IconSearch', e)}
              >
                <Label>Buscar</Label>
                <Icon><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="100%" height="100%"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/></svg></Icon>
              </grouptriggeraction--ml-icon-button-glass>
              <grouptriggeraction--ml-icon-button-glass
                size="md"
                @action=${(e: CustomEvent) => this.onAction('IconAdd', e)}
              >
                <Label>Adicionar</Label>
                <Icon><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="100%" height="100%"><path d="M12 5v14M5 12h14"/></svg></Icon>
              </grouptriggeraction--ml-icon-button-glass>
              <grouptriggeraction--ml-icon-button-glass size="lg" loading="true"><Label>Carregando</Label></grouptriggeraction--ml-icon-button-glass>

              <grouptriggeraction--ml-split-button-glass @action=${(e: CustomEvent) => this.onAction('Split', e)}>
                <Label value="save">Salvar</Label>
                <span value="save-new">Salvar e criar novo</span>
                <span value="save-copy">Salvar como cópia</span>
              </grouptriggeraction--ml-split-button-glass>
            </div>
          </section>

          <section class="block">
            <h2 class="block-title">Cards</h2>
            <div style="display:grid; grid-template-columns:repeat(auto-fit,minmax(240px,1fr)); gap:1.5rem;">
              <groupviewcard--ml-profile-card-glass clickable="true">
                <CardTitle>Ada Lovelace</CardTitle>
                <CardDescription>Engenheira de software</CardDescription>
                <CardContent>Card de perfil clicável em vidro.</CardContent>
              </groupviewcard--ml-profile-card-glass>

              <groupviewcard--ml-vertical-card-glass
                clickable="true"
                .selected=${this.selectedPlan === 'pro'}
                @cardClick=${() => { this.selectedPlan = 'pro'; }}
              >
                <CardTitle>Plano Pro</CardTitle>
                <CardDescription>R$ 49/mês</CardDescription>
                <CardContent>Card vertical selecionável.</CardContent>
                <CardAction>
                  <grouptriggeraction--ml-button-standard-glass data-variant="primary"><Label>Assinar</Label></grouptriggeraction--ml-button-standard-glass>
                </CardAction>
              </groupviewcard--ml-vertical-card-glass>

              <groupviewcard--ml-vertical-card-glass
                clickable="true"
                .selected=${this.selectedPlan === 'enterprise'}
                @cardClick=${() => { this.selectedPlan = 'enterprise'; }}
              >
                <CardTitle>Plano Enterprise</CardTitle>
                <CardDescription>Sob consulta</CardDescription>
                <CardContent>Recursos dedicados e SLA.</CardContent>
                <CardAction>
                  <grouptriggeraction--ml-button-standard-glass data-variant="secondary"><Label>Vendas</Label></grouptriggeraction--ml-button-standard-glass>
                </CardAction>
              </groupviewcard--ml-vertical-card-glass>
            </div>
          </section>
        </div>
      </div>
    `;
  }
}
