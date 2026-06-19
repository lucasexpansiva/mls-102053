/// <mls fileReference="_102053_/l2/glassshowcase2/demolotef.ts" enhancement="_102020_/l2/enhancementAura"/>
// =============================================================================
// GLASS SHOWCASE 2 (mls-102055 por herança) — DEMO LOTE F (expand / notify)
// =============================================================================
import { html, TemplateResult } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { StateLitElement } from '/_102029_/l2/stateLitElement.js';

import '/_102055_/l2/molecules/groupexpandcontent/ml-accordion-glass';
import '/_102055_/l2/molecules/groupexpandcontent/ml-collapsible-panel-glass';
import '/_102055_/l2/molecules/groupexpandcontent/ml-reveal-overlay-glass';
import '/_102055_/l2/molecules/groupnotifyuser/ml-alert-modal-glass';
import '/_102055_/l2/molecules/groupnotifyuser/ml-notify-banner-glass';
import '/_102055_/l2/molecules/groupnotifyuser/ml-toast-notification-glass';

@customElement('glassshowcase2--demolotef-102053')
export class GlassShowcase2DemoLoteF extends StateLitElement {
  @state() private bannerVisible = true;
  @state() private toastVisible = true;
  @state() private modalOpen = false;

  render(): TemplateResult {
    return html`
      <div class="page">
        <div class="shell">
          <header class="head">
            <div class="brand">◆ Aurora · 102055</div>
            <h1 class="title">Lote F — Expand / Notify (por herança)</h1>
            <p class="subtitle">accordion · collapsible · reveal · alert-modal · banner · toast</p>
          </header>

          <section class="block">
            <h2 class="block-title">Accordion</h2>
            <groupexpandcontent--ml-accordion-glass multiple="true">
              <Label>Project details</Label>
              <Section title="Overview" expanded>Share the project scope and expected outcomes.</Section>
              <Section title="Timeline">Milestones are due every Friday.</Section>
              <Section title="Risks">Track vendor delays closely.</Section>
            </groupexpandcontent--ml-accordion-glass>
          </section>

          <section class="block">
            <h2 class="block-title">Collapsible Panel</h2>
            <groupexpandcontent--ml-collapsible-panel-glass>
              <Label>Perguntas frequentes</Label>
              <Section title="Como começar?" subtitle="Primeiros passos" icon="🚀" expanded>
                Crie a conta e siga o onboarding.
              </Section>
              <Section title="Posso cancelar?" subtitle="Assinatura">Sim, a qualquer momento.</Section>
            </groupexpandcontent--ml-collapsible-panel-glass>
          </section>

          <section class="block">
            <h2 class="block-title">Reveal Overlay</h2>
            <groupexpandcontent--ml-reveal-overlay-glass multiple="true">
              <Label>Conteúdo oculto até revelar</Label>
              <Section title="Chave de API">sk-live-9f8a7b6c5d4e3f2a1b0c9d8e7f6a5b4c</Section>
              <Section title="Token">eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...</Section>
            </groupexpandcontent--ml-reveal-overlay-glass>
          </section>

          <section class="block">
            <h2 class="block-title">Notify Banner</h2>
            <groupnotifyuser--ml-notify-banner-glass
              type="info"
              .visible=${this.bannerVisible}
              @dismiss=${() => {
                this.bannerVisible = false;
              }}
            >
              <Title>Atualização disponível</Title>
              <Message>Uma nova versão está pronta para instalar.</Message>
              <Action>Atualizar</Action>
            </groupnotifyuser--ml-notify-banner-glass>
            ${!this.bannerVisible
              ? html`<button
                  style="margin-top:0.75rem; padding:0.4rem 0.9rem; border-radius:10px; border:1px solid rgba(255,255,255,0.25); background:rgba(255,255,255,0.1); color:#fff; cursor:pointer; font-size:0.8125rem;"
                  @click=${() => {
                    this.bannerVisible = true;
                  }}
                >
                  Mostrar banner
                </button>`
              : html``}
          </section>

          <section class="block">
            <h2 class="block-title">Toast Notification</h2>
            <groupnotifyuser--ml-toast-notification-glass
              type="success"
              .visible=${this.toastVisible}
              @dismiss=${() => {
                this.toastVisible = false;
              }}
            >
              <Title>Salvo!</Title>
              <Message>Suas alterações foram salvas.</Message>
            </groupnotifyuser--ml-toast-notification-glass>
            ${!this.toastVisible
              ? html`<button
                  style="margin-top:0.75rem; padding:0.4rem 0.9rem; border-radius:10px; border:1px solid rgba(255,255,255,0.25); background:rgba(255,255,255,0.1); color:#fff; cursor:pointer; font-size:0.8125rem;"
                  @click=${() => {
                    this.toastVisible = true;
                  }}
                >
                  Mostrar toast
                </button>`
              : html``}
          </section>

          <section class="block">
            <h2 class="block-title">Alert Modal</h2>
            <button
              style="padding:0.5rem 1rem; border-radius:10px; border:1px solid rgba(255,255,255,0.25); background:rgba(255,255,255,0.12); color:#fff; cursor:pointer;"
              @click=${() => {
                this.modalOpen = true;
              }}
            >
              Abrir modal
            </button>
          </section>
        </div>

        <groupnotifyuser--ml-alert-modal-glass
          type="warning"
          .visible=${this.modalOpen}
          @dismiss=${() => {
            this.modalOpen = false;
          }}
        >
          <Title>Confirmar ação</Title>
          <Message>O scrim desfoca esta página atrás do modal.</Message>
        </groupnotifyuser--ml-alert-modal-glass>
      </div>
    `;
  }
}
