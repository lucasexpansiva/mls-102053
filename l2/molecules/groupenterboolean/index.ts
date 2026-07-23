/// <mls fileReference="_102053_/l2/molecules/groupenterboolean/index.ts" enhancement="_102020_/l2/enhancementAura"/>
import { html, TemplateResult } from 'lit';
import { customElement } from 'lit/decorators.js';
import { StateLitElement } from '/_102029_/l2/stateLitElement.js';

// Registra as moléculas do grupo (side-effect import)
import '/_102053_/l2/molecules/groupenterboolean/ml-boolean-segmented-glass';

@customElement('molecules--groupenterboolean--index-102053')
export class GroupEnterBooleanIndex extends StateLitElement {
  render(): TemplateResult {
    return html`
      <div style="min-height:100vh; padding:2rem; background: linear-gradient(135deg, #0f172a 0%, #312e81 45%, #7e22ce 100%);">
        <h1>groupEnterBoolean · glass · 102053</h1>
        <groupenterboolean--ml-boolean-segmented-glass></groupenterboolean--ml-boolean-segmented-glass>
      </div>
    `;
  }
}
