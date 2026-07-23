/// <mls fileReference="_102053_/l2/molecules/groupenterdate/index.ts" enhancement="_102020_/l2/enhancementAura"/>
import { html, TemplateResult } from 'lit';
import { customElement } from 'lit/decorators.js';
import { StateLitElement } from '/_102029_/l2/stateLitElement.js';

// Registra as moléculas do grupo (side-effect import)
import '/_102053_/l2/molecules/groupenterdate/ml-compact-calendar-glass';

@customElement('molecules--groupenterdate--index-102053')
export class GroupEnterDateIndex extends StateLitElement {
  render(): TemplateResult {
    return html`
      <div style="min-height:100vh; padding:2rem; background: linear-gradient(135deg, #0f172a 0%, #312e81 45%, #7e22ce 100%);">
        <h1>groupEnterDate · glass · 102053</h1>
        <groupenterdate--ml-compact-calendar-glass></groupenterdate--ml-compact-calendar-glass>
      </div>
    `;
  }
}
