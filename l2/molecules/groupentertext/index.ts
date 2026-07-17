/// <mls fileReference="_102053_/l2/molecules/groupentertext/index.ts" enhancement="_102020_/l2/enhancementAura"/>
import { html, TemplateResult } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { StateLitElement } from '/_102029_/l2/stateLitElement.js';
import '/_102053_/l2/molecules/groupentertext/ml-floating-text-input';
import '/_102053_/l2/molecules/groupentertext/ml-text-input-standard';
import '/_102053_/l2/molecules/groupentertext/ml-enter-text-test';

@customElement('molecules--groupentertext--index-102053')
export class GroupEnterTextIndex extends StateLitElement {
  // ── Showcase card states ─────────────────────────────────────
  @state() private cardFloating = 'Olivia Chen';
  @state() private cardStandard = 'olivia.chen@arcadia.io';
  @state() private cardMasked = '4155559876';

  // ===========================================================================
  // HERO
  private renderHero(): TemplateResult {
    return html`
      <header class="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-700 px-8 py-20 text-center">
        <span
          class="inline-block px-3 py-1 bg-sky-100 dark:bg-sky-900 text-sky-600 dark:text-sky-300 rounded-full text-xs font-semibold uppercase tracking-widest mb-6"
        >
          groupEnterText
        </span>
        <h1 class="text-5xl font-bold text-slate-900 dark:text-slate-50 mb-5 tracking-tight">
          Enter Text
        </h1>
        <p class="text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
          Allows the user to input free-form text. Ideal for names, descriptions, comments, emails, passwords, and any textual data.
          Implementations include input, textarea, password input, masked input, input OTP, search input, and tag input.
        </p>
      </header>
    `;
  }

  // ===========================================================================
  // SHOWCASE CARDS
  private renderShowcaseCards(): TemplateResult {
    return html`
      <section class="bg-slate-50 dark:bg-slate-950 px-8 py-12 border-b border-slate-200 dark:border-slate-700">
        <div class="max-w-2xl mx-auto flex flex-col gap-5">
          <div class="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm">
            <div class="h-1 bg-violet-500 rounded-t-2xl"></div>
            <div class="p-6">
              <div class="flex items-center justify-between mb-1">
                <p class="text-sm font-bold text-slate-900 dark:text-slate-50">Floating label input</p>
                <code class="text-xs bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-400 px-2 py-0.5 rounded">
                  groupentertext--ml-floating-text-input
                </code>
              </div>
              <p class="text-xs text-slate-400 mb-5">Elevated label experience for profile and identity fields.</p>
              <groupentertext--ml-floating-text-input
                name="card-floating"
                value="${this.cardFloating}"
                placeholder="Full name"
                autocomplete="name"
                .maxLength=${80}
                .required=${true}
                .isEditing=${true}
                @change=${(e: CustomEvent) => {
                  this.cardFloating = e.detail.value;
                }}
              >
                <Label>Full name</Label>
                <Helper>Match the name on your account.</Helper>
                <Prefix>👤</Prefix>
                <Suffix>Profile</Suffix>
              </groupentertext--ml-floating-text-input>
            </div>
          </div>

          <div class="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm">
            <div class="h-1 bg-emerald-500 rounded-t-2xl"></div>
            <div class="p-6">
              <div class="flex items-center justify-between mb-1">
                <p class="text-sm font-bold text-slate-900 dark:text-slate-50">Standard text input</p>
                <code class="text-xs bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-400 px-2 py-0.5 rounded">
                  groupentertext--ml-text-input-standard
                </code>
              </div>
              <p class="text-xs text-slate-400 mb-5">Simple, familiar input for email and account fields.</p>
              <groupentertext--ml-text-input-standard
                name="card-standard"
                value="${this.cardStandard}"
                placeholder="name@company.com"
                autocomplete="email"
                inputType="email"
                .minLength=${6}
                .required=${true}
                .isEditing=${true}
                @change=${(e: CustomEvent) => {
                  this.cardStandard = e.detail.value;
                }}
              >
                <Label>Work email</Label>
                <Helper>We’ll only use this for account updates.</Helper>
                <Prefix>@</Prefix>
                <Suffix>Verified</Suffix>
              </groupentertext--ml-text-input-standard>
            </div>
          </div>

          <div class="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm">
            <div class="h-1 bg-amber-500 rounded-t-2xl"></div>
            <div class="p-6">
              <div class="flex items-center justify-between mb-1">
                <p class="text-sm font-bold text-slate-900 dark:text-slate-50">Masked input test</p>
                <code class="text-xs bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-400 px-2 py-0.5 rounded">
                  groupentertext--ml-enter-text-test
                </code>
              </div>
              <p class="text-xs text-slate-400 mb-5">Mask input for formatting phone numbers and IDs.</p>
              <groupentertext--ml-enter-text-test
                name="card-masked"
                value="${this.cardMasked}"
                placeholder="(555) 555-5555"
                inputType="tel"
                mask="(###) ###-####"
                .maxLength=${10}
                .isEditing=${true}
                @change=${(e: CustomEvent) => {
                  this.cardMasked = e.detail.value;
                }}
              >
                <Label>Mobile phone</Label>
                <Helper>Digits only. We’ll format automatically.</Helper>
                <Prefix>+1</Prefix>
                <Suffix>SMS</Suffix>
              </groupentertext--ml-enter-text-test>
            </div>
          </div>
        </div>
      </section>
    `;
  }

  // ===========================================================================
  // REFERENCE TABLE
  private renderReferenceTable(): TemplateResult {
    const rows: Array<{
      scenario: string;
      floatingTextInput: boolean;
      textInputStandard: boolean;
      enterTextTest: boolean;
    }> = [
      {
        scenario: 'Use a floating label that remains visible as users type.',
        floatingTextInput: true,
        textInputStandard: false,
        enterTextTest: false,
      },
      {
        scenario: 'Provide a familiar, minimal input for email or account fields.',
        floatingTextInput: false,
        textInputStandard: true,
        enterTextTest: false,
      },
      {
        scenario: 'Require formatted input such as phone numbers or IDs.',
        floatingTextInput: false,
        textInputStandard: false,
        enterTextTest: true,
      },
      {
        scenario: 'Need a lightweight field with prefix/suffix affordances.',
        floatingTextInput: true,
        textInputStandard: true,
        enterTextTest: false,
      },
    ];
    const headers = [
      { label: 'Floating input', cls: 'text-violet-600 dark:text-violet-400' },
      { label: 'Standard input', cls: 'text-emerald-600 dark:text-emerald-400' },
      { label: 'Masked input test', cls: 'text-amber-600 dark:text-amber-400' },
    ];

    return html`
      <section class="bg-slate-100 dark:bg-slate-950 px-8 py-20 border-t border-slate-200 dark:border-slate-700">
        <div class="max-w-5xl mx-auto">
          <h2 class="text-2xl font-bold text-slate-900 dark:text-slate-50 mb-2">Quick reference</h2>
          <p class="text-sm text-slate-500 dark:text-slate-400 mb-8">
            Use this table to match text-entry variants to the right formatting and guidance needs.
          </p>
          <div class="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 overflow-hidden shadow-sm">
            <table class="w-full text-sm">
              <thead>
                <tr class="bg-slate-50 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-700">
                  <th
                    class="text-left px-5 py-3.5 text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wide w-3/4"
                  >
                    Scenario
                  </th>
                  ${headers.map(
                    (h) => html`
                      <th class="px-4 py-3.5 text-xs font-semibold uppercase tracking-wide ${h.cls}">${h.label}</th>
                    `
                  )}
                </tr>
              </thead>
              <tbody>
                ${rows.map(
                  (row, i) => html`
                    <tr
                      class="${i % 2 !== 0
                        ? 'bg-slate-50/60 dark:bg-slate-900/40'
                        : ''} border-b border-slate-100 dark:border-slate-700/60 last:border-0"
                    >
                      <td class="px-5 py-3.5 text-slate-700 dark:text-slate-300">${row.scenario}</td>
                      ${([
                        row.floatingTextInput,
                        row.textInputStandard,
                        row.enterTextTest,
                      ] as boolean[]).map(
                        (ok) => html`
                          <td class="px-4 py-3.5 text-center">
                            ${ok
                              ? html`<span
                                  class="inline-flex items-center justify-center w-6 h-6 rounded-full bg-emerald-100 dark:bg-emerald-900/50 text-emerald-600 dark:text-emerald-400 text-xs font-bold"
                                  >✓</span
                                >`
                              : html`<span class="text-slate-200 dark:text-slate-700 text-sm">—</span>`}
                          </td>
                        `
                      )}
                    </tr>
                  `
                )}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    `;
  }

  // ===========================================================================
  // RENDER
  protected render(): TemplateResult {
    return html`
      <div class="font-sans min-h-screen">
        ${this.renderHero()} ${this.renderShowcaseCards()} ${this.renderReferenceTable()}
      </div>
    `;
  }
}
