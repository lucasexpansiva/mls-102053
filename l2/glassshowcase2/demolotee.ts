/// <mls fileReference="_102053_/l2/glassshowcase2/demolotee.ts" enhancement="_102020_/l2/enhancementAura"/>
// =============================================================================
// GLASS SHOWCASE 2 (mls-102055 por herança) — DEMO LOTE E (navegação)
// =============================================================================
import { html, TemplateResult } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { StateLitElement } from '/_102029_/l2/stateLitElement.js';

import '/_102055_/l2/molecules/groupnavigatesection/ml-tabs-glass';
import '/_102055_/l2/molecules/groupnavigatesection/ml-navigate-pills-glass';
import '/_102055_/l2/molecules/groupnavigatesection/ml-breadcrumb-trail-glass';
import '/_102055_/l2/molecules/groupnavigatemain/ml-sidebar-nav-glass';
import '/_102055_/l2/molecules/groupnavigatesteps/ml-horizontal-stepper-glass';
import '/_102055_/l2/molecules/groupnavigatesteps/ml-wizard-steps-glass';

@customElement('glassshowcase2--demolotee-102053')
export class GlassShowcase2DemoLoteE extends StateLitElement {
  @state() private bc = 'eletronicos';
  @state() private pill = 'overview';
  @state() private tab = 'details';
  @state() private navItem = 'dashboard';
  @state() private stepper = 1;
  @state() private wizard = 1;

  render(): TemplateResult {
    return html`
      <div class="page">
        <div class="shell">
          <header class="head">
            <div class="brand">◆ Aurora · 102055</div>
            <h1 class="title">Lote E — Navegação (por herança)</h1>
            <p class="subtitle">tabs · pills · breadcrumb · sidebar · stepper · wizard</p>
          </header>

          <section class="block">
            <h2 class="block-title">Breadcrumb</h2>
            <groupnavigatesection--ml-breadcrumb-trail-glass
              .value=${this.bc}
              @change=${(e: CustomEvent) => { this.bc = e.detail.value; }}
            >
              <Tab value="home" title="Início">Página inicial.</Tab>
              <Tab value="catalogo" title="Catálogo">Lista de categorias.</Tab>
              <Tab value="eletronicos" title="Eletrônicos">Categoria de eletrônicos.</Tab>
              <Tab value="produto" title="Notebook Pro">Detalhes do produto atual.</Tab>
            </groupnavigatesection--ml-breadcrumb-trail-glass>
          </section>

          <section class="block">
            <h2 class="block-title">Pills</h2>
            <groupnavigatesection--ml-navigate-pills-glass
              .value=${this.pill}
              @change=${(e: CustomEvent) => { this.pill = e.detail.value; }}
            >
              <Label>Seções</Label>
              <Tab value="overview" title="Visão geral">Resumo do projeto.</Tab>
              <Tab value="timeline" title="Cronograma">Marcos e entregas.</Tab>
              <Tab value="team" title="Equipe">Pessoas envolvidas.</Tab>
            </groupnavigatesection--ml-navigate-pills-glass>
          </section>

          <section class="block">
            <h2 class="block-title">Tabs</h2>
            <groupnavigatesection--ml-tabs-glass
              .value=${this.tab}
              @change=${(e: CustomEvent) => { this.tab = e.detail.value; }}
            >
              <Label>Produto</Label>
              <Tab value="details" title="Detalhes">Especificações do produto.</Tab>
              <Tab value="reviews" title="Avaliações">Comentários dos clientes.</Tab>
              <Tab value="shipping" title="Entrega">Prazos e custos.</Tab>
            </groupnavigatesection--ml-tabs-glass>
          </section>

          <section class="block">
            <h2 class="block-title">Sidebar</h2>
            <div style="height:22rem; border-radius:14px; overflow:hidden; display:flex;">
              <groupnavigatemain--ml-sidebar-nav-glass
                .value=${this.navItem}
                @change=${(e: CustomEvent) => { this.navItem = e.detail.value; }}
              >
                <Label>Aurora</Label>
                <Item value="dashboard" icon="▦">Dashboard</Item>
                <Item value="projects" icon="▤" badge="3">Projetos</Item>
                <Group label="Workspace">
                  <Item value="tasks" icon="✓">Tarefas</Item>
                  <Item value="calendar" icon="▣">Calendário</Item>
                </Group>
                <Footer>
                  <Item value="settings" icon="⚙">Configurações</Item>
                </Footer>
              </groupnavigatemain--ml-sidebar-nav-glass>
            </div>
          </section>

          <section class="block">
            <h2 class="block-title">Horizontal Stepper</h2>
            <groupnavigatesteps--ml-horizontal-stepper-glass
              .value=${this.stepper}
              @change=${(e: CustomEvent) => { this.stepper = e.detail.value; }}
            >
              <Label>Cadastro</Label>
              <Step title="Conta" description="Dados de acesso"></Step>
              <Step title="Perfil" description="Informações pessoais"></Step>
              <Step title="Pagamento" description="Plano e cobrança"></Step>
              <Step title="Pronto" description="Revisão final"></Step>
            </groupnavigatesteps--ml-horizontal-stepper-glass>
          </section>

          <section class="block">
            <h2 class="block-title">Wizard Steps</h2>
            <groupnavigatesteps--ml-wizard-steps-glass
              .value=${this.wizard}
              .linear=${false}
              @change=${(e: CustomEvent) => { this.wizard = e.detail.value; }}
            >
              <Label>Onboarding</Label>
              <Step title="Conta" description="Acesso" completed></Step>
              <Step title="Perfil" description="Dados pessoais"></Step>
              <Step title="Plano" description="Escolha do plano"></Step>
            </groupnavigatesteps--ml-wizard-steps-glass>
          </section>
        </div>
      </div>
    `;
  }
}
