/// <mls fileReference="_102053_/l2/brutalshowcase/testeinicial.ts" enhancement="_102020_/l2/enhancementAura"/>
// =============================================================================
// BRUTAL SHOWCASE — TESTE INICIAL
// =============================================================================
// Página de demonstração dos componentes brutalism (mls-102054).
// Fase 1 + Fase 2: trigger-action, boolean, text, number, money.
import { html, TemplateResult } from 'lit';
import { customElement } from 'lit/decorators.js';
import { StateLitElement } from '/_102029_/l2/stateLitElement.js';

import '/_102054_/l2/molecules/grouptriggeraction/ml-button-standard-brutal';
import '/_102054_/l2/molecules/grouptriggeraction/ml-icon-button-brutal';
import '/_102054_/l2/molecules/grouptriggeraction/ml-split-button-brutal';
import '/_102054_/l2/molecules/groupenterboolean/ml-toggle-switch-brutal';
import '/_102054_/l2/molecules/groupentertext/ml-floating-text-input-brutal';
import '/_102054_/l2/molecules/groupentertext/ml-password-strength-input-brutal';
import '/_102054_/l2/molecules/groupentertext/ml-tag-input-brutal';
import '/_102054_/l2/molecules/groupenternumber/ml-number-stepper-brutal';
import '/_102054_/l2/molecules/groupenternumber/ml-range-slider-brutal';
import '/_102054_/l2/molecules/groupentermoney/ml-currency-input-brutal';

@customElement('brutalshowcase--testeinicial-102053')
export class BrutalShowcaseTesteInicial extends StateLitElement {

  render(): TemplateResult {
    return html`
      <div class="page">
        <div class="shell">
          <header class="head">
            <div class="brand">&#9632; collab · 102054</div>
            <h1 class="title">Brutalism Showcase</h1>
            <p class="subtitle">trigger-action · boolean · text · number · money</p>
          </header>

          <!-- BUTTON STANDARD -->
          <section class="block">
            <h2 class="block-title">ml-button-standard-brutal — Variants</h2>
            <div class="row">
              <grouptriggeraction--ml-button-standard-brutal data-variant="primary"><Label>Primary</Label></grouptriggeraction--ml-button-standard-brutal>
              <grouptriggeraction--ml-button-standard-brutal data-variant="secondary"><Label>Secondary</Label></grouptriggeraction--ml-button-standard-brutal>
              <grouptriggeraction--ml-button-standard-brutal data-variant="danger"><Label>Danger</Label></grouptriggeraction--ml-button-standard-brutal>
              <grouptriggeraction--ml-button-standard-brutal data-variant="ghost"><Label>Ghost</Label></grouptriggeraction--ml-button-standard-brutal>
              <grouptriggeraction--ml-button-standard-brutal data-variant="link"><Label>Link</Label></grouptriggeraction--ml-button-standard-brutal>
            </div>
          </section>

          <section class="block">
            <h2 class="block-title">ml-button-standard-brutal — Sizes</h2>
            <div class="row">
              <grouptriggeraction--ml-button-standard-brutal data-variant="primary" size="xs"><Label>XS</Label></grouptriggeraction--ml-button-standard-brutal>
              <grouptriggeraction--ml-button-standard-brutal data-variant="primary" size="sm"><Label>Small</Label></grouptriggeraction--ml-button-standard-brutal>
              <grouptriggeraction--ml-button-standard-brutal data-variant="primary" size="md"><Label>Medium</Label></grouptriggeraction--ml-button-standard-brutal>
              <grouptriggeraction--ml-button-standard-brutal data-variant="primary" size="lg"><Label>Large</Label></grouptriggeraction--ml-button-standard-brutal>
            </div>
          </section>

          <section class="block">
            <h2 class="block-title">ml-button-standard-brutal — With Icon</h2>
            <div class="row">
              <grouptriggeraction--ml-button-standard-brutal data-variant="primary">
                <Icon><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="100%" height="100%"><path d="M5 12h14M12 5l7 7-7 7"/></svg></Icon>
                <Label>Icon start</Label>
              </grouptriggeraction--ml-button-standard-brutal>
              <grouptriggeraction--ml-button-standard-brutal data-variant="secondary" icon-position="end">
                <Icon><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="100%" height="100%"><path d="M5 12h14M12 5l7 7-7 7"/></svg></Icon>
                <Label>Icon end</Label>
              </grouptriggeraction--ml-button-standard-brutal>
            </div>
          </section>

          <section class="block">
            <h2 class="block-title">ml-button-standard-brutal — States</h2>
            <div class="row">
              <grouptriggeraction--ml-button-standard-brutal data-variant="primary" .loading=${true}><Label>Loading</Label></grouptriggeraction--ml-button-standard-brutal>
              <grouptriggeraction--ml-button-standard-brutal data-variant="primary" .disabled=${true}><Label>Disabled</Label></grouptriggeraction--ml-button-standard-brutal>
              <grouptriggeraction--ml-button-standard-brutal data-variant="danger" .loading=${true}>
                <Icon><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="100%" height="100%"><path d="M18 6L6 18M6 6l12 12"/></svg></Icon>
                <Label>Loading + Icon</Label>
              </grouptriggeraction--ml-button-standard-brutal>
            </div>
          </section>

          <!-- ICON BUTTON -->
          <section class="block">
            <h2 class="block-title">ml-icon-button-brutal — Sizes & States</h2>
            <div class="row">
              <grouptriggeraction--ml-icon-button-brutal size="xs"><Label>Edit</Label><Icon><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="100%" height="100%"><path d="M12 20h9M16.5 3.5a2.12 2.12 0 013 3L7 19l-4 1 1-4z"/></svg></Icon></grouptriggeraction--ml-icon-button-brutal>
              <grouptriggeraction--ml-icon-button-brutal size="sm"><Label>Search</Label><Icon><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="100%" height="100%"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/></svg></Icon></grouptriggeraction--ml-icon-button-brutal>
              <grouptriggeraction--ml-icon-button-brutal size="md"><Label>Star</Label><Icon><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="100%" height="100%"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg></Icon></grouptriggeraction--ml-icon-button-brutal>
              <grouptriggeraction--ml-icon-button-brutal size="lg"><Label>Add</Label><Icon><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="100%" height="100%"><path d="M12 5v14M5 12h14"/></svg></Icon></grouptriggeraction--ml-icon-button-brutal>
              <grouptriggeraction--ml-icon-button-brutal size="md" .loading=${true}><Label>Loading</Label></grouptriggeraction--ml-icon-button-brutal>
              <grouptriggeraction--ml-icon-button-brutal size="md" .disabled=${true}><Label>Disabled</Label><Icon><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="100%" height="100%"><path d="M18 6L6 18M6 6l12 12"/></svg></Icon></grouptriggeraction--ml-icon-button-brutal>
            </div>
          </section>

          <!-- SPLIT BUTTON -->
          <section class="block">
            <h2 class="block-title">ml-split-button-brutal — With Options</h2>
            <div class="row">
              <grouptriggeraction--ml-split-button-brutal>
                <Label value="save">Save</Label>
                <span value="save-new">Save and create new</span>
                <span value="save-copy">Save as copy</span>
                <span value="save-template" disabled>Save as template</span>
              </grouptriggeraction--ml-split-button-brutal>

              <grouptriggeraction--ml-split-button-brutal size="sm">
                <Label value="export">Export</Label>
                <span value="pdf">PDF</span>
                <span value="csv">CSV</span>
                <span value="xlsx">Excel</span>
              </grouptriggeraction--ml-split-button-brutal>

              <grouptriggeraction--ml-split-button-brutal .disabled=${true}>
                <Label value="action">Disabled</Label>
                <span value="a">Option A</span>
              </grouptriggeraction--ml-split-button-brutal>
            </div>
          </section>

          <!-- TOGGLE SWITCH -->
          <section class="block">
            <h2 class="block-title">ml-toggle-switch-brutal</h2>
            <div class="row">
              <groupenterboolean--ml-toggle-switch-brutal .isEditing=${true} .value=${true}>
                <Label>Active</Label>
                <Helper>Toggle this setting</Helper>
              </groupenterboolean--ml-toggle-switch-brutal>
              <groupenterboolean--ml-toggle-switch-brutal .isEditing=${true} .value=${false}>
                <Label>Inactive</Label>
              </groupenterboolean--ml-toggle-switch-brutal>
              <groupenterboolean--ml-toggle-switch-brutal .isEditing=${true} .value=${true} .disabled=${true}>
                <Label>Disabled</Label>
              </groupenterboolean--ml-toggle-switch-brutal>
            </div>
          </section>

          <!-- FLOATING TEXT INPUT -->
          <section class="block">
            <h2 class="block-title">ml-floating-text-input-brutal</h2>
            <div class="row">
              <div style="width:280px;">
                <groupentertext--ml-floating-text-input-brutal .isEditing=${true} placeholder="Type here...">
                  <Label>Full Name</Label>
                  <Helper>Enter your full name</Helper>
                </groupentertext--ml-floating-text-input-brutal>
              </div>
              <div style="width:280px;">
                <groupentertext--ml-floating-text-input-brutal .isEditing=${true} error="This field is required">
                  <Label>Email</Label>
                </groupentertext--ml-floating-text-input-brutal>
              </div>
            </div>
          </section>

          <!-- PASSWORD STRENGTH INPUT -->
          <section class="block">
            <h2 class="block-title">ml-password-strength-input-brutal</h2>
            <div class="row">
              <div style="width:280px;">
                <groupentertext--ml-password-strength-input-brutal .isEditing=${true}>
                  <Label>Password</Label>
                  <Helper>At least 8 characters</Helper>
                </groupentertext--ml-password-strength-input-brutal>
              </div>
            </div>
          </section>

          <!-- TAG INPUT -->
          <section class="block">
            <h2 class="block-title">ml-tag-input-brutal</h2>
            <div class="row">
              <div style="width:100%;">
                <groupentertext--ml-tag-input-brutal .isEditing=${true} value="design,engineering,frontend">
                  <Label>Skills</Label>
                  <Helper>Press Enter to add a tag</Helper>
                </groupentertext--ml-tag-input-brutal>
              </div>
            </div>
          </section>

          <!-- NUMBER STEPPER -->
          <section class="block">
            <h2 class="block-title">ml-number-stepper-brutal</h2>
            <div class="row">
              <div style="width:200px;">
                <groupenternumber--ml-number-stepper-brutal .isEditing=${true} .value=${5} .min=${0} .max=${100}>
                  <Label>Quantity</Label>
                  <Helper>0 to 100</Helper>
                </groupenternumber--ml-number-stepper-brutal>
              </div>
              <div style="width:200px;">
                <groupenternumber--ml-number-stepper-brutal .isEditing=${true} .value=${42} .disabled=${true}>
                  <Label>Disabled</Label>
                </groupenternumber--ml-number-stepper-brutal>
              </div>
            </div>
          </section>

          <!-- RANGE SLIDER -->
          <section class="block">
            <h2 class="block-title">ml-range-slider-brutal</h2>
            <div class="row">
              <div style="width:100%;">
                <groupenternumber--ml-range-slider-brutal .isEditing=${true} .value=${20} .valueHigh=${80} .min=${0} .max=${100}>
                  <Label>Price Range</Label>
                  <Prefix>$</Prefix>
                  <Helper>Drag to adjust range</Helper>
                </groupenternumber--ml-range-slider-brutal>
              </div>
            </div>
          </section>

          <!-- CURRENCY INPUT -->
          <section class="block">
            <h2 class="block-title">ml-currency-input-brutal</h2>
            <div class="row">
              <div style="width:280px;">
                <groupentermoney--ml-currency-input-brutal .isEditing=${true} .value=${1500} currency="USD">
                  <Label>Amount</Label>
                  <Helper>Enter the transaction amount</Helper>
                </groupentermoney--ml-currency-input-brutal>
              </div>
              <div style="width:280px;">
                <groupentermoney--ml-currency-input-brutal .isEditing=${true} error="Amount is required" .required=${true}>
                  <Label>Required</Label>
                </groupentermoney--ml-currency-input-brutal>
              </div>
            </div>
          </section>

        </div>
      </div>
    `;
  }
}
