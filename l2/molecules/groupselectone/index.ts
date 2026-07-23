/// <mls fileReference="_102053_/l2/molecules/groupselectone/index.ts" enhancement="_102020_/l2/enhancementAura"/>
import { html, TemplateResult } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { StateLitElement } from '/_102029_/l2/stateLitElement.js';
import '/_102053_/l2/molecules/groupselectone/ml-combobox-glass';
import '/_102053_/l2/molecules/groupselectone/ml-select-dropdown-glass';

@customElement('molecules--groupselectone--index-102053')
export class GroupSelectOneIndex extends StateLitElement {
  // ── Showcase card states ─────────────────────────────────────────────
  @state() private card1: string | null = null;
  @state() private card2: string | null = 'us';

  // ===========================================================================
  // HERO
  // ===========================================================================
  private renderHero(): TemplateResult {
    return html`
      <header
        class="px-8 py-20 text-center"
        style="background: rgba(255,255,255,0.06); border-bottom: 1px solid rgba(255,255,255,0.25); backdrop-filter: blur(10px);"
      >
        <span
          class="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest mb-6"
          style="background: rgba(99,102,241,0.25); color: rgba(255,255,255,0.9); border: 1px solid rgba(255,255,255,0.25);"
        >
          groupSelectOne
        </span>
        <h1
          class="text-5xl font-bold mb-5 tracking-tight"
          style="color: rgba(255,255,255,0.96); font-family: 'Inter', system-ui, sans-serif;"
        >
          Select One
        </h1>
        <p
          class="text-lg max-w-2xl mx-auto leading-relaxed"
          style="color: rgba(255,255,255,0.72);"
        >
          Allows the user to select exactly one option from a list of mutually exclusive choices.
          Ideal for scenarios where a single, clear decision is required — dropdown, combobox, and more.
        </p>
      </header>
    `;
  }

  // ===========================================================================
  // SHOWCASE CARDS
  // ===========================================================================
  private renderShowcaseCards(): TemplateResult {
    return html`
      <section
        class="px-8 py-12"
        style="background: rgba(255,255,255,0.04); border-bottom: 1px solid rgba(255,255,255,0.25);"
      >
        <div class="max-w-2xl mx-auto flex flex-col gap-5">

          <!-- Card 1: ml-combobox-glass -->
          <div
            class="rounded-2xl"
            style="background: rgba(255,255,255,0.10); border: 1px solid rgba(255,255,255,0.25); box-shadow: 0 4px 18px rgba(0,0,0,0.18); backdrop-filter: blur(10px);"
          >
            <div class="h-1 bg-violet-500 rounded-t-2xl"></div>
            <div class="p-6">
              <div class="flex items-center justify-between mb-1">
                <p class="text-sm font-bold" style="color: rgba(255,255,255,0.96);">Combobox Glass</p>
                <code
                  class="text-xs px-2 py-0.5 rounded"
                  style="background: rgba(255,255,255,0.08); color: rgba(255,255,255,0.65); border: 1px solid rgba(255,255,255,0.18);"
                >groupselectone--ml-combobox-glass</code>
              </div>
              <p class="text-xs mb-5" style="color: rgba(255,255,255,0.55);">Searchable combobox for filtering a long list of exclusive options</p>
              <groupselectone--ml-combobox-glass
                name="card-1"
                .value=${this.card1}
                .isEditing=${true}
                placeholder="Search countries..."
                .searchable=${true}
                @change=${(e: CustomEvent) => { this.card1 = e.detail.value; }}
              >
                <Label>Country</Label>
                <Helper>Type to filter, then pick one country</Helper>
                <Trigger>Select a country...</Trigger>
                <Item value="br">Brazil</Item>
                <Item value="us">United States</Item>
                <Item value="de">Germany</Item>
                <Item value="jp">Japan</Item>
                <Item value="ca">Canada</Item>
                <Empty>No countries match your search</Empty>
              </groupselectone--ml-combobox-glass>
            </div>
          </div>

          <!-- Card 2: ml-select-dropdown-glass -->
          <div
            class="rounded-2xl"
            style="background: rgba(255,255,255,0.10); border: 1px solid rgba(255,255,255,0.25); box-shadow: 0 4px 18px rgba(0,0,0,0.18); backdrop-filter: blur(10px);"
          >
            <div class="h-1 bg-emerald-500 rounded-t-2xl"></div>
            <div class="p-6">
              <div class="flex items-center justify-between mb-1">
                <p class="text-sm font-bold" style="color: rgba(255,255,255,0.96);">Select Dropdown Glass</p>
                <code
                  class="text-xs px-2 py-0.5 rounded"
                  style="background: rgba(255,255,255,0.08); color: rgba(255,255,255,0.65); border: 1px solid rgba(255,255,255,0.18);"
                >groupselectone--ml-select-dropdown-glass</code>
              </div>
              <p class="text-xs mb-5" style="color: rgba(255,255,255,0.55);">Classic dropdown select for a short list of mutually exclusive choices</p>
              <groupselectone--ml-select-dropdown-glass
                name="card-2"
                .value=${this.card2}
                .isEditing=${true}
                placeholder="Choose a plan..."
                @change=${(e: CustomEvent) => { this.card2 = e.detail.value; }}
              >
                <Label>Subscription plan</Label>
                <Helper>You can change your plan later</Helper>
                <Trigger>Select a plan...</Trigger>
                <Group label="Individual">
                  <Item value="free">Free</Item>
                  <Item value="pro">Pro</Item>
                </Group>
                <Group label="Team">
                  <Item value="team">Team</Item>
                  <Item value="enterprise">Enterprise</Item>
                </Group>
                <Empty>No plans available</Empty>
              </groupselectone--ml-select-dropdown-glass>
            </div>
          </div>

        </div>
      </section>
    `;
  }

  // ===========================================================================
  // REFERENCE TABLE
  // ===========================================================================
  private renderReferenceTable(): TemplateResult {
    const rows: Array<{ scenario: string; combobox: boolean; dropdown: boolean }> = [
      { scenario: 'Long option lists that benefit from type-ahead filtering', combobox: true, dropdown: false },
      { scenario: 'Short, fixed lists where every option should be visible at a glance', combobox: false, dropdown: true },
      { scenario: 'Grouped options under named headings', combobox: true, dropdown: true },
      { scenario: 'Glassmorphism UI on a rich/dark backdrop', combobox: true, dropdown: true },
      { scenario: 'Form field that stores a single string value (or null)', combobox: true, dropdown: true },
      { scenario: 'Placeholder / trigger content when nothing is selected', combobox: true, dropdown: true },
    ];
    const headers = [
      { label: 'Combobox Glass', cls: 'text-violet-300' },
      { label: 'Dropdown Glass', cls: 'text-emerald-300' },
    ];

    return html`
      <section
        class="px-8 py-20"
        style="background: rgba(255,255,255,0.03); border-top: 1px solid rgba(255,255,255,0.25);"
      >
        <div class="max-w-5xl mx-auto">
          <h2
            class="text-2xl font-bold mb-2"
            style="color: rgba(255,255,255,0.96); font-family: 'Inter', system-ui, sans-serif;"
          >Quick reference</h2>
          <p class="text-sm mb-8" style="color: rgba(255,255,255,0.65);">
            Pick the glass select-one variant that matches your list length and interaction style — both store a single item value.
          </p>
          <div
            class="rounded-2xl overflow-hidden"
            style="background: rgba(255,255,255,0.10); border: 1px solid rgba(255,255,255,0.25); box-shadow: 0 4px 18px rgba(0,0,0,0.18); backdrop-filter: blur(18px);"
          >
            <table class="w-full text-sm">
              <thead>
                <tr style="background: rgba(255,255,255,0.06); border-bottom: 1px solid rgba(255,255,255,0.25);">
                  <th
                    class="text-left px-5 py-3.5 text-xs font-semibold uppercase tracking-wide w-3/4"
                    style="color: rgba(255,255,255,0.55);"
                  >Scenario</th>
                  ${headers.map(h => html`
                    <th class="px-4 py-3.5 text-xs font-semibold uppercase tracking-wide ${h.cls}">${h.label}</th>
                  `)}
                </tr>
              </thead>
              <tbody>
                ${rows.map((row, i) => html`
                  <tr
                    class="last:border-0"
                    style="border-bottom: 1px solid rgba(255,255,255,0.12); ${i % 2 !== 0 ? 'background: rgba(255,255,255,0.04);' : ''}"
                  >
                    <td class="px-5 py-3.5" style="color: rgba(255,255,255,0.82);">${row.scenario}</td>
                    ${([row.combobox, row.dropdown] as boolean[]).map(ok => html`
                      <td class="px-4 py-3.5 text-center">
                        ${ok
                          ? html`<span
                              class="inline-flex items-center justify-center w-6 h-6 rounded-full text-xs font-bold"
                              style="background: rgba(16,185,129,0.2); color: rgb(110,231,183);"
                            >✓</span>`
                          : html`<span class="text-sm" style="color: rgba(255,255,255,0.25);">—</span>`}
                      </td>
                    `)}
                  </tr>
                `)}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    `;
  }

  render(): TemplateResult {
    return html`
      <div
        class="font-sans"
        style="min-height:100vh; background: linear-gradient(135deg, #0f172a 0%, #312e81 45%, #7e22ce 100%);"
      >
        ${this.renderHero()}
        ${this.renderShowcaseCards()}
        ${this.renderReferenceTable()}
      </div>
    `;
  }
}
