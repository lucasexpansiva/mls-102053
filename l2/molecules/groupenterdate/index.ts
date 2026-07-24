/// <mls fileReference="_102053_/l2/molecules/groupenterdate/index.ts" enhancement="_102020_/l2/enhancementAura"/>
import { html, TemplateResult } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { StateLitElement } from '/_102029_/l2/stateLitElement.js';
import '/_102053_/l2/molecules/groupenterdate/ml-compact-calendar-glass';

@customElement('molecules--groupenterdate--index-102053')
export class GroupEnterDateIndex extends StateLitElement {
  // ── Showcase card states ─────────────────────────────────────
  @state() private card1: string | null = '2026-07-24';

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
          groupEnterDate
        </span>
        <h1
          class="text-5xl font-bold mb-5 tracking-tight"
          style="color: rgba(255,255,255,0.96); font-family: 'Inter', system-ui, sans-serif;"
        >
          Enter Date
        </h1>
        <p
          class="text-lg max-w-2xl mx-auto leading-relaxed"
          style="color: rgba(255,255,255,0.72);"
        >
          Allows the user to input a date only (no time). Ideal for birth dates, due dates,
          contract effective dates, expiration dates, and any scenario where the time of day is irrelevant.
          Implementations include date picker, masked date input, inline calendar, and month/year picker.
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
          <div
            class="rounded-2xl"
            style="background: rgba(255,255,255,0.10); border: 1px solid rgba(255,255,255,0.25); box-shadow: 0 4px 18px rgba(0,0,0,0.18); backdrop-filter: blur(10px); border-radius: 12px;"
          >
            <div class="h-1 bg-violet-500" style="border-radius: 12px 12px 0 0;"></div>
            <div class="p-6">
              <div class="flex items-center justify-between mb-1">
                <p class="text-sm font-bold" style="color: rgba(255,255,255,0.96);">Compact Calendar</p>
                <code
                  class="text-xs px-2 py-0.5 rounded"
                  style="background: rgba(255,255,255,0.08); color: rgba(255,255,255,0.65); border: 1px solid rgba(255,255,255,0.18);"
                >groupenterdate--ml-compact-calendar-glass</code>
              </div>
              <p class="text-xs mb-5" style="color: rgba(255,255,255,0.55);">
                Inline compact calendar for picking a date at a glance — glass variant
              </p>
              <groupenterdate--ml-compact-calendar-glass
                name="card-1"
                .value=${this.card1}
                .isEditing=${true}
                locale="en-US"
                placeholder="Select a date"
                @change=${(e: CustomEvent) => { this.card1 = e.detail.value; }}
              >
                <Label>Due Date</Label>
                <Helper>Pick any date — time of day is not required</Helper>
              </groupenterdate--ml-compact-calendar-glass>
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
    const rows: Array<{ scenario: string; compactCalendar: boolean }> = [
      { scenario: 'Inline calendar visible without opening a popover', compactCalendar: true },
      { scenario: 'Birth date, due date, or contract effective date (date only)', compactCalendar: true },
      { scenario: 'Space-constrained forms that still need full month context', compactCalendar: true },
      { scenario: 'Glass / translucent UI on a rich dark backdrop', compactCalendar: true },
      { scenario: 'Need time-of-day selection as well as the date', compactCalendar: false },
    ];
    const headers = [
      { label: 'Compact Calendar', cls: 'text-violet-300' },
    ];

    return html`
      <section
        class="px-8 py-20"
        style="background: rgba(255,255,255,0.06); border-top: 1px solid rgba(255,255,255,0.25);"
      >
        <div class="max-w-5xl mx-auto">
          <h2
            class="text-2xl font-bold mb-2"
            style="color: rgba(255,255,255,0.96); font-family: 'Inter', system-ui, sans-serif;"
          >
            Quick reference
          </h2>
          <p class="text-sm mb-8" style="color: rgba(255,255,255,0.65);">
            Choose the right date-only input when time of day is irrelevant — birth dates, due dates,
            contract windows, and expiration dates.
          </p>
          <div
            class="rounded-2xl overflow-hidden"
            style="background: rgba(255,255,255,0.10); border: 1px solid rgba(255,255,255,0.25); box-shadow: 0 4px 18px rgba(0,0,0,0.18); backdrop-filter: blur(10px); border-radius: 12px;"
          >
            <table class="w-full text-sm">
              <thead>
                <tr style="background: rgba(255,255,255,0.06); border-bottom: 1px solid rgba(255,255,255,0.25);">
                  <th
                    class="text-left px-5 py-3.5 text-xs font-semibold uppercase tracking-wide w-3/4"
                    style="color: rgba(255,255,255,0.55);"
                  >
                    Scenario
                  </th>
                  ${headers.map(
                    (h) => html`
                      <th class="px-4 py-3.5 text-xs font-semibold uppercase tracking-wide ${h.cls}">
                        ${h.label}
                      </th>
                    `
                  )}
                </tr>
              </thead>
              <tbody>
                ${rows.map(
                  (row, i) => html`
                    <tr
                      class="last:border-0"
                      style="border-bottom: 1px solid rgba(255,255,255,0.12); ${i % 2 !== 0
                        ? 'background: rgba(255,255,255,0.04);'
                        : ''}"
                    >
                      <td class="px-5 py-3.5" style="color: rgba(255,255,255,0.82);">
                        ${row.scenario}
                      </td>
                      ${
                        ([row.compactCalendar] as boolean[]).map(
                          (ok) => html`
                            <td class="px-4 py-3.5 text-center">
                              ${
                                ok
                                  ? html`<span
                                      class="inline-flex items-center justify-center w-6 h-6 rounded-full text-xs font-bold"
                                      style="background: rgba(16,185,129,0.2); color: rgb(110,231,183);"
                                      >✓</span
                                    >`
                                  : html`<span style="color: rgba(255,255,255,0.25);" class="text-sm"
                                      >—</span
                                    >`
                              }
                            </td>
                          `
                        )
                      }
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
