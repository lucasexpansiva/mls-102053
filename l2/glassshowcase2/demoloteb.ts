/// <mls fileReference="_102053_/l2/glassshowcase2/demoloteb.ts" enhancement="_102020_/l2/enhancementAura"/>
// =============================================================================
// GLASS SHOWCASE 2 (mls-102055 por herança) — DEMO LOTE B (seleção/busca/upload)
// =============================================================================
import { html, TemplateResult } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { StateLitElement } from '/_102029_/l2/stateLitElement.js';

import '/_102055_/l2/molecules/groupselectone/ml-select-dropdown-glass';
import '/_102055_/l2/molecules/groupselectone/ml-radio-group-glass';
import '/_102055_/l2/molecules/groupselectone/ml-segmented-control-glass';
import '/_102055_/l2/molecules/groupselectone/ml-combobox-glass';
import '/_102055_/l2/molecules/groupselectone/ml-card-selector-glass';
import '/_102055_/l2/molecules/groupselectmany/ml-multi-select-dropdown-glass';
import '/_102055_/l2/molecules/groupselectmany/ml-popover-multi-select-glass';
import '/_102055_/l2/molecules/groupsearchcontent/ml-search-bar-glass';
import '/_102055_/l2/molecules/groupselectfileforupload/ml-file-upload-dropzone-glass';

@customElement('glassshowcase2--demoloteb-102053')
export class GlassShowcase2DemoLoteB extends StateLitElement {
  @state() private country = 'br';
  @state() private plan = 'pro';
  @state() private view = 'month';
  @state() private fruit = 'apple';
  @state() private tier = 'pro';
  @state() private skills = 'ts,js';
  @state() private langs = 'lit,ts';
  @state() private query: string | null = null;

  render(): TemplateResult {
    return html`
      <div class="page">
        <div class="shell">
          <header class="head">
            <div class="brand">◆ Aurora · 102055</div>
            <h1 class="title">Lote B — Seleção / Busca / Upload (por herança)</h1>
            <p class="subtitle">select · radio · segmented · combobox · cards · multi · popover-multi · search · upload</p>
          </header>

          <section class="block">
            <h2 class="block-title">Select One</h2>
            <div style="display:flex; flex-direction:column; gap:1.5rem;">
              <groupselectone--ml-select-dropdown-glass searchable="true" .value=${this.country} @change=${(e: CustomEvent) => { this.country = e.detail.value; }}>
                <Label>País</Label><Helper>Selecionado: ${this.country}</Helper>
                <Item value="br">Brasil</Item><Item value="us">Estados Unidos</Item><Item value="pt">Portugal</Item><Item value="jp">Japão</Item>
              </groupselectone--ml-select-dropdown-glass>
              <groupselectone--ml-radio-group-glass .value=${this.plan} @change=${(e: CustomEvent) => { this.plan = e.detail.value; }}>
                <Label>Plano</Label>
                <Item value="free">Gratuito</Item><Item value="standard">Standard</Item><Item value="pro">Pro</Item>
              </groupselectone--ml-radio-group-glass>
              <groupselectone--ml-segmented-control-glass .value=${this.view} @change=${(e: CustomEvent) => { this.view = e.detail.value; }}>
                <Label>Visualização</Label>
                <Item value="day">Dia</Item><Item value="week">Semana</Item><Item value="month">Mês</Item>
              </groupselectone--ml-segmented-control-glass>
              <groupselectone--ml-combobox-glass .value=${this.fruit} clearable @change=${(e: CustomEvent) => { this.fruit = e.detail.value; }}>
                <Label>Fruta</Label><Helper>Selecionado: ${this.fruit ?? '—'}</Helper>
                <Item value="apple">Maçã</Item><Item value="banana">Banana</Item><Item value="grape">Uva</Item><Item value="orange">Laranja</Item>
              </groupselectone--ml-combobox-glass>
              <groupselectone--ml-card-selector-glass .value=${this.tier} searchable @change=${(e: CustomEvent) => { this.tier = e.detail.value; }}>
                <Label>Tier</Label><Helper>Selecionado: ${this.tier}</Helper>
                <Item value="free"><strong>Free</strong><br /><span style="opacity:.7">R$ 0/mês</span></Item>
                <Item value="pro"><strong>Pro</strong><br /><span style="opacity:.7">R$ 49/mês</span></Item>
                <Item value="business"><strong>Business</strong><br /><span style="opacity:.7">R$ 149/mês</span></Item>
              </groupselectone--ml-card-selector-glass>
            </div>
          </section>

          <section class="block">
            <h2 class="block-title">Select Many</h2>
            <div style="display:flex; flex-direction:column; gap:1.5rem;">
              <groupselectmany--ml-multi-select-dropdown-glass searchable="true" .value=${this.skills} @change=${(e: CustomEvent) => { this.skills = e.detail.value; }}>
                <Label>Tecnologias</Label><Helper>Selecionadas: ${this.skills || '—'}</Helper>
                <Item value="ts">TypeScript</Item><Item value="js">JavaScript</Item><Item value="py">Python</Item><Item value="go">Go</Item>
              </groupselectmany--ml-multi-select-dropdown-glass>
              <groupselectmany--ml-popover-multi-select-glass searchable max-selection="3" .value=${this.langs} @change=${(e: CustomEvent) => { this.langs = e.detail.value; }}>
                <Label>Habilidades (máx. 3)</Label><Helper>Selecionadas: ${this.langs || '—'}</Helper>
                <Item value="lit">Lit</Item><Item value="ts">TypeScript</Item><Item value="less">LESS</Item><Item value="a11y">Acessibilidade</Item><Item value="design">Design Systems</Item>
              </groupselectmany--ml-popover-multi-select-glass>
            </div>
          </section>

          <section class="block">
            <h2 class="block-title">Search</h2>
            <groupsearchcontent--ml-search-bar-glass .value=${this.query} @change=${(e: CustomEvent) => { this.query = e.detail.value; }}>
              <Label>Buscar</Label><Helper>Digite para ver sugestões</Helper>
              <Suggestion value="lit">Lit</Suggestion><Suggestion value="ts">TypeScript</Suggestion><Suggestion value="less">LESS</Suggestion><Suggestion value="glass">Glassmorphism</Suggestion>
            </groupsearchcontent--ml-search-bar-glass>
          </section>

          <section class="block">
            <h2 class="block-title">Upload</h2>
            <groupselectfileforupload--ml-file-upload-dropzone-glass multiple accept="image/*" max-files="5" max-size-kb="2048">
              <Label>Imagens</Label><Helper>Até 5 imagens, máx. 2 MB cada</Helper>
            </groupselectfileforupload--ml-file-upload-dropzone-glass>
          </section>
        </div>
      </div>
    `;
  }
}
