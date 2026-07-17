/// <mls fileReference="_102053_/l2/molecules/groupselectone/index.ts" enhancement="_102020_/l2/enhancementAura"/>
import { html, TemplateResult } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { StateLitElement } from '/_102029_/l2/stateLitElement.js';
import '/_102053_/l2/molecules/groupselectone/ml-select-one-test';
@customElement('molecules--groupselectone--index-102053')
export class GroupSelectOneIndex extends StateLitElement {
// ── Showcase card states ─────────────────────────────────────
@state() private cardDropdown: string | null = 'us';
@state() private cardRadio: string | null = 'standard';
@state() private cardSegmented: string | null = 'monthly';
@state() private cardList: string | null = null;
@state() private cardTable: string | null = 'pro';
// ===========================================================================
// HERO
private renderHero(): TemplateResult {
return html`
<header
class="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-700 px-8 py-20 text-center"
>
<span
class="inline-block px-3 py-1 bg-sky-100 dark:bg-sky-900 text-sky-600 dark:text-sky-300 rounded-full text-xs font-semibold uppercase tracking-widest mb-6"
>
groupSelectOne
</span>
<h1 class="text-5xl font-bold text-slate-900 dark:text-slate-50 mb-5 tracking-tight">
Select One
</h1>
<p class="text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
Allows the user to select exactly one option from a list of mutually exclusive choices. Ideal for scenarios
where a single, clear decision is required. Layout is chosen via the <code>variant</code> property: dropdown/combobox
(default), radio group, segmented control, list picker, and table (a radio group laid out as a table with
column headers — for comparing options that each have multiple attributes, e.g. plan name/price/limits). The
selected value is always the chosen item value, regardless of variant.
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
<p class="text-sm font-bold text-slate-900 dark:text-slate-50">Country dropdown</p>
<code class="text-xs bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-400 px-2 py-0.5 rounded"
>groupselectone--ml-select-one-test</code
>
</div>
<p class="text-xs text-slate-400 mb-5">Combobox layout with grouped regions and a custom trigger.</p>
<groupselectone--ml-select-one-test
name="card-1"
variant="dropdown"
placeholder="Select a country"
.searchable=${true}
.value=${this.cardDropdown}
.isEditing=${true}
@change=${(e: CustomEvent) => {
this.cardDropdown = e.detail.value;
}}
>
<Label>Country</Label>
<Trigger>Choose a country...</Trigger>
<Group label="Americas">
<Item value="br">Brazil</Item>
<Item value="us">United States</Item>
<Item value="ca">Canada</Item>
</Group>
<Group label="Europe">
<Item value="de">Germany</Item>
<Item value="fr">France</Item>
</Group>
<Empty>No countries available</Empty>
<Helper>Used for localized pricing and tax rules.</Helper>
</groupselectone--ml-select-one-test>
</div>
</div>
<div class="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm">
<div class="h-1 bg-emerald-500 rounded-t-2xl"></div>
<div class="p-6">
<div class="flex items-center justify-between mb-1">
<p class="text-sm font-bold text-slate-900 dark:text-slate-50">Support tier (radio)</p>
<code class="text-xs bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-400 px-2 py-0.5 rounded"
>groupselectone--ml-select-one-test</code
>
</div>
<p class="text-xs text-slate-400 mb-5">Radio layout for mutually exclusive service levels.</p>
<groupselectone--ml-select-one-test
name="card-2"
variant="radio"
.required=${true}
.value=${this.cardRadio}
.isEditing=${true}
@change=${(e: CustomEvent) => {
this.cardRadio = e.detail.value;
}}
>
<Label>Support tier</Label>
<Group label="Standard">
<Item value="standard">Standard (48h response)</Item>
</Group>
<Group label="Premium">
<Item value="priority">Priority (same day)</Item>
<Item value="concierge" disabled>Concierge (invite only)</Item>
</Group>
<Empty>No tiers configured</Empty>
<Helper>Premium tiers require manager approval.</Helper>
</groupselectone--ml-select-one-test>
</div>
</div>
<div class="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm">
<div class="h-1 bg-amber-500 rounded-t-2xl"></div>
<div class="p-6">
<div class="flex items-center justify-between mb-1">
<p class="text-sm font-bold text-slate-900 dark:text-slate-50">Billing cadence (segmented)</p>
<code class="text-xs bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-400 px-2 py-0.5 rounded"
>groupselectone--ml-select-one-test</code
>
</div>
<p class="text-xs text-slate-400 mb-5">Segmented control optimized for quick toggles.</p>
<groupselectone--ml-select-one-test
name="card-3"
variant="segmented"
.value=${this.cardSegmented}
.isEditing=${true}
@change=${(e: CustomEvent) => {
this.cardSegmented = e.detail.value;
}}
>
<Label>Billing cadence</Label>
<Item value="monthly">Monthly</Item>
<Item value="annual">Annual (save 15%)</Item>
<Item value="two-year">2-year</Item>
<Empty>No billing options available</Empty>
<Helper>Annual plans include priority onboarding.</Helper>
</groupselectone--ml-select-one-test>
</div>
</div>
<div class="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm">
<div class="h-1 bg-rose-500 rounded-t-2xl"></div>
<div class="p-6">
<div class="flex items-center justify-between mb-1">
<p class="text-sm font-bold text-slate-900 dark:text-slate-50">Workspace region (list)</p>
<code class="text-xs bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-400 px-2 py-0.5 rounded"
>groupselectone--ml-select-one-test</code
>
</div>
<p class="text-xs text-slate-400 mb-5">List layout with search and grouped items.</p>
<groupselectone--ml-select-one-test
name="card-4"
variant="list"
placeholder="Select a region"
.searchable=${true}
.value=${this.cardList}
.isEditing=${true}
@change=${(e: CustomEvent) => {
this.cardList = e.detail.value;
}}
>
<Label>Workspace region</Label>
<Group label="North America">
<Item value="us-east">US East</Item>
<Item value="us-west">US West</Item>
</Group>
<Group label="Europe">
<Item value="eu-central">EU Central</Item>
<Item value="eu-west">EU West</Item>
</Group>
<Empty>No regions available</Empty>
<Helper>Regions control data residency.</Helper>
</groupselectone--ml-select-one-test>
</div>
</div>
<div class="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm">
<div class="h-1 bg-sky-500 rounded-t-2xl"></div>
<div class="p-6">
<div class="flex items-center justify-between mb-1">
<p class="text-sm font-bold text-slate-900 dark:text-slate-50">Plan comparison (table)</p>
<code class="text-xs bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-400 px-2 py-0.5 rounded"
>groupselectone--ml-select-one-test</code
>
</div>
<p class="text-xs text-slate-400 mb-5">Table layout for attribute-heavy comparisons.</p>
<groupselectone--ml-select-one-test
name="card-5"
variant="table"
placeholder="No plans available"
.searchable=${true}
.required=${true}
.value=${this.cardTable}
.isEditing=${true}
@change=${(e: CustomEvent) => {
this.cardTable = e.detail.value;
}}
>
<Label>Choose a plan</Label>
<Column>Plan</Column>
<Column>Price</Column>
<Column>Seats</Column>
<Item value="basic">
<Cell>Basic</Cell>
<Cell>$10/mo</Cell>
<Cell>3</Cell>
</Item>
<Item value="pro">
<Cell>Pro</Cell>
<Cell>$25/mo</Cell>
<Cell>10</Cell>
</Item>
<Item value="enterprise" disabled>
<Cell>Enterprise</Cell>
<Cell>Contact us</Cell>
<Cell>Unlimited</Cell>
</Item>
<Empty>No plans available</Empty>
<Helper>You can upgrade or downgrade at any time.</Helper>
</groupselectone--ml-select-one-test>
</div>
</div>
</div>
</section>
`;
}
// ===========================================================================
// REFERENCE TABLE
private renderReferenceTable(): TemplateResult {
const rows: Array<{ scenario: string; mlSelectOneTest: boolean }> = [
{ scenario: 'Need a compact dropdown with search and grouped items.', mlSelectOneTest: true },
{ scenario: 'Display mutually exclusive options with quick scanning (radio/list).', mlSelectOneTest: true },
{ scenario: 'Offer a toggle-style choice like billing cadence (segmented).', mlSelectOneTest: true },
{ scenario: 'Compare multi-attribute options side by side (table variant).', mlSelectOneTest: true },
];
const headers = [
{ label: 'ml-select-one-test', cls: 'text-violet-600 dark:text-violet-400' },
];
return html`
<section class="bg-slate-100 dark:bg-slate-950 px-8 py-20 border-t border-slate-200 dark:border-slate-700">
<div class="max-w-5xl mx-auto">
<h2 class="text-2xl font-bold text-slate-900 dark:text-slate-50 mb-2">Quick reference</h2>
<p class="text-sm text-slate-500 dark:text-slate-400 mb-8">
Use this table to map common “select exactly one” decisions to the single implementation, then dial in the
best layout with the variant property.
</p>
<div class="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 overflow-hidden shadow-sm">
<table class="w-full text-sm">
<thead>
<tr class="bg-slate-50 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-700">
<th class="text-left px-5 py-3.5 text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wide w-3/4">
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
class="${i % 2 !== 0 ? 'bg-slate-50/60 dark:bg-slate-900/40' : ''} border-b border-slate-100 dark:border-slate-700/60 last:border-0"
>
<td class="px-5 py-3.5 text-slate-700 dark:text-slate-300">${row.scenario}</td>
${([row.mlSelectOneTest] as boolean[]).map(
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
render(): TemplateResult {
return html`
<div class="font-sans min-h-screen">
${this.renderHero()} ${this.renderShowcaseCards()} ${this.renderReferenceTable()}
</div>
`;
}
}
