/// <mls fileReference="_102053_/l2/molecules/groupselectone/ml-select-one-test.ts" enhancement="_102020_/l2/enhancementAura"/>
// =============================================================================
// ML SELECT ONE TEST MOLECULE
// =============================================================================
// Skill Group: groupSelectOne
// This molecule does NOT contain business logic.
import { html, nothing, TemplateResult } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import { render as litRender } from 'lit';
import { propertyDataSource } from '/_102029_/l2/collabDecorators.js';
import { MoleculeAuraElement } from '/_102033_/l2/moleculeBase.js';
import { cn } from '/_102033_/l2/cn.js';
/// **collab_i18n_start**
const message_en = {
placeholder: 'Select an option',
empty: '—',
noResults: 'No results found',
loading: 'Loading...',
required: 'Selection required',
searchPlaceholder: 'Search...',
};
type MessageType = typeof message_en;
const messages: Record<string, MessageType> = {
en: message_en,
};
/// **collab_i18n_end**
@customElement('groupselectone--ml-select-one-test')
export class MlSelectOneTestMolecule extends MoleculeAuraElement {
private msg: MessageType = messages.en;
// ===========================================================================
// SLOT TAGS
// ==========================================================================
slotTags = ['Label', 'Helper', 'Trigger', 'Item', 'Cell', 'Column', 'Group', 'Empty'];
// ===========================================================================
// PROPERTIES — From Contract
// ==========================================================================
@propertyDataSource({ type: String })
value: string | null = null;
@propertyDataSource({ type: String })
error: string = '';
@propertyDataSource({ type: String })
name: string = '';
@propertyDataSource({ type: String })
variant: string = 'dropdown';
@propertyDataSource({ type: String })
placeholder: string = '';
@propertyDataSource({ type: Boolean, attribute: 'searchable' })
searchable: boolean = false;
@propertyDataSource({ type: Boolean, attribute: 'is-editing' })
isEditing: boolean = true;
@propertyDataSource({ type: Boolean })
disabled: boolean = false;
@propertyDataSource({ type: Boolean })
readonly: boolean = false;
@propertyDataSource({ type: Boolean })
required: boolean = false;
@propertyDataSource({ type: Boolean })
loading: boolean = false;
// ===========================================================================
// INTERNAL STATE
// ==========================================================================
@state()
private isOpen: boolean = false;
@state()
private searchQuery: string = '';
@state()
private isFocused: boolean = false;
private uid = `ml-select-one-${Math.random().toString(36).slice(2)}`;
// ===========================================================================
// PORTAL SUPPORT
// ==========================================================================
protected portalContainer: HTMLDivElement | null = null;
protected portalWidgetName: string = 'groupselectone--ml-select-one-test';
private boundOutsideClick = (e: MouseEvent) => {
if (!this.isOpen) return;
const path = e.composedPath();
if (!path.includes(this) && (!this.portalContainer || !path.includes(this.portalContainer))) {
this.closePanel();
}
};
private boundUpdatePosition = () => this.updatePanelPosition();
// ===========================================================================
// LIFECYCLE
// ==========================================================================
connectedCallback() {
super.connectedCallback();
document.addEventListener('click', this.boundOutsideClick, true);
}
disconnectedCallback() {
document.removeEventListener('click', this.boundOutsideClick, true);
this.destroyPortal();
super.disconnectedCallback();
}
updated(changedProps: Map<string, unknown>) {
if (changedProps.has('variant') && this.variant !== 'dropdown' && this.isOpen) {
this.closePanel();
}
if (changedProps.has('disabled') || changedProps.has('readonly') || changedProps.has('loading')) {
if ((this.disabled || this.readonly || this.loading) && this.isOpen) {
this.closePanel();
}
}
if (this.isOpen && this.portalContainer) {
this.renderPortalContent();
this.updatePanelPosition();
}
}
// ===========================================================================
// PORTAL METHODS
// ==========================================================================
private createPortal() {
if (this.portalContainer) return;
this.portalContainer = document.createElement('div');
if (this.portalWidgetName) this.portalContainer.setAttribute('data-widget', this.portalWidgetName);
document.body.appendChild(this.portalContainer);
this.updatePanelPosition();
this.renderPortalContent();
window.addEventListener('scroll', this.boundUpdatePosition, true);
window.addEventListener('resize', this.boundUpdatePosition);
}
private destroyPortal() {
if (!this.portalContainer) return;
window.removeEventListener('scroll', this.boundUpdatePosition, true);
window.removeEventListener('resize', this.boundUpdatePosition);
this.portalContainer.remove();
this.portalContainer = null;
}
private updatePanelPosition() {
if (!this.portalContainer) return;
const trigger = this.querySelector('button[role="combobox"]') as HTMLElement | null;
if (!trigger) return;
const rect = trigger.getBoundingClientRect();
Object.assign(this.portalContainer.style, {
position: 'fixed',
top: `${rect.bottom + 8}px`,
left: `${rect.left}px`,
width: `${rect.width}px`,
zIndex: '9999',
});
}
private renderPortalContent() {
if (!this.portalContainer) return;
litRender(this.getPortalTemplate(), this.portalContainer);
}
// ===========================================================================
// EVENT HANDLERS
// ==========================================================================
private handleFocusIn() {
if (this.isFocused) return;
this.isFocused = true;
this.dispatchEvent(new CustomEvent('focus', { bubbles: true, composed: true }));
}
private handleFocusOut(e: FocusEvent) {
const next = e.relatedTarget as Node | null;
if (next && (this.contains(next) || (this.portalContainer && this.portalContainer.contains(next)))) {
return;
}
if (!this.isFocused) return;
this.isFocused = false;
this.dispatchEvent(new CustomEvent('blur', { bubbles: true, composed: true }));
}
private handleTriggerClick() {
if (this.disabled || this.readonly || this.loading) return;
if (this.isOpen) {
this.closePanel();
} else {
this.openPanel();
}
}
private handleTriggerKeyDown(e: KeyboardEvent) {
if (this.disabled || this.readonly || this.loading) return;
if (e.key === 'Escape') {
this.closePanel();
return;
}
if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
e.preventDefault();
if (!this.isOpen) this.openPanel();
this.selectNextItem(e.key === 'ArrowDown' ? 1 : -1);
}
if (e.key === 'Enter' && !this.isOpen) {
this.openPanel();
}
}
private handlePanelKeyDown(e: KeyboardEvent) {
if (e.key === 'Escape') {
this.closePanel();
return;
}
if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
e.preventDefault();
this.selectNextItem(e.key === 'ArrowDown' ? 1 : -1);
}
if (e.key === 'Enter') {
e.preventDefault();
this.selectCurrentItem();
}
}
private handleInlineKeyDown(e: KeyboardEvent) {
if (this.disabled || this.readonly) return;
if (['ArrowDown', 'ArrowUp', 'ArrowLeft', 'ArrowRight'].includes(e.key)) {
e.preventDefault();
const step = e.key === 'ArrowUp' || e.key === 'ArrowLeft' ? -1 : 1;
this.selectNextItem(step);
}
if (e.key === 'Enter' || e.key === ' ') {
e.preventDefault();
this.selectCurrentItem();
}
}
private handleItemSelect(item: ItemData) {
if (this.disabled || this.readonly || item.disabled) return;
this.value = item.value;
this.dispatchEvent(
new CustomEvent('change', {
bubbles: true,
composed: true,
detail: { value: this.value },
})
);
if (this.variant === 'dropdown') {
this.closePanel();
}
}
private handleRowSelect(item: ItemData) {
if (this.disabled || this.readonly || item.disabled) return;
this.value = item.value;
this.dispatchEvent(
new CustomEvent('change', {
bubbles: true,
composed: true,
detail: { value: this.value },
})
);
}
private handleSearchInput(e: Event) {
e.stopPropagation();
const input = e.target as HTMLInputElement;
this.searchQuery = input.value;
}
private handleRadioChange(e: Event, item: ItemData) {
e.stopPropagation();
this.handleRowSelect(item);
}
// ===========================================================================
// OPEN/CLOSE
// ==========================================================================
private openPanel() {
if (this.isOpen || this.variant !== 'dropdown') return;
this.isOpen = true;
this.createPortal();
}
private closePanel() {
if (!this.isOpen) return;
this.destroyPortal();
this.isOpen = false;
}
// ===========================================================================
// DATA HELPERS
// ==========================================================================
private parseItems(): ItemData[] {
const itemEls = this.getSlots('Item');
return itemEls
.map((el) => {
const value = el.getAttribute('value') || '';
const disabled = el.hasAttribute('disabled');
const cells = Array.from(el.querySelectorAll('Cell')).map((c) => c.innerHTML);
const label = cells.length > 0 ? cells[0] : el.innerHTML;
const groupEl = el.parentElement && el.parentElement.tagName === 'GROUP' ? el.parentElement : null;
const groupLabel = groupEl?.getAttribute('label') || '';
return { value, disabled, label, cells, groupLabel };
})
.filter((item) => item.value !== '');
}
private getFilteredItems(items: ItemData[]): ItemData[] {
if (!this.searchable || !this.searchQuery.trim()) return items;
const query = this.searchQuery.trim().toLowerCase();
return items.filter((item) => {
const labelText = this.stripHtml(item.label).toLowerCase();
const cellText = item.cells.map((c) => this.stripHtml(c)).join(' ').toLowerCase();
return `${labelText} ${cellText}`.includes(query);
});
}
private getGroupedItems(items: ItemData[]): GroupedItems[] {
const groups: Record<string, ItemData[]> = {};
const ungrouped: ItemData[] = [];
for (const item of items) {
if (item.groupLabel) {
if (!groups[item.groupLabel]) groups[item.groupLabel] = [];
groups[item.groupLabel].push(item);
} else {
ungrouped.push(item);
}
}
const grouped: GroupedItems[] = Object.keys(groups).map((label) => ({ label, items: groups[label] }));
if (ungrouped.length > 0) grouped.unshift({ label: '', items: ungrouped });
return grouped;
}
private getSelectedItem(items: ItemData[]): ItemData | null {
if (!this.value) return null;
return items.find((item) => item.value === this.value) || null;
}
private stripHtml(htmlContent: string): string {
const div = document.createElement('div');
div.innerHTML = htmlContent;
return div.textContent || '';
}
private selectNextItem(step: number) {
const items = this.getFilteredItems(this.parseItems()).filter((i) => !i.disabled);
if (items.length === 0) return;
const currentIndex = items.findIndex((i) => i.value === this.value);
const nextIndex = currentIndex === -1 ? 0 : (currentIndex + step + items.length) % items.length;
const nextItem = items[nextIndex];
this.value = nextItem.value;
this.dispatchEvent(
new CustomEvent('change', { bubbles: true, composed: true, detail: { value: this.value } })
);
}
private selectCurrentItem() {
const items = this.getFilteredItems(this.parseItems()).filter((i) => !i.disabled);
if (items.length === 0) return;
const current = items.find((i) => i.value === this.value) || items[0];
this.handleItemSelect(current);
}
// ===========================================================================
// CLASS HELPERS
// ==========================================================================
private getTriggerClasses(hasError: boolean): string {
return [
'flex w-full items-center justify-between gap-2 px-3 py-2 text-sm',
'ml-trigger',
hasError ? 'ml-trigger-error' : '',
this.disabled ? 'ml-disabled' : 'cursor-pointer',
]
.filter(Boolean)
.join(' ');
}
private getOptionClasses(item: ItemData, selected: boolean): string {
return [
'flex w-full items-center justify-between gap-2 px-3 py-2 text-sm',
'ml-option',
selected ? 'ml-option-selected' : '',
item.disabled ? 'ml-disabled' : 'cursor-pointer',
]
.filter(Boolean)
.join(' ');
}
private getInlineItemClasses(item: ItemData, selected: boolean): string {
return [
'flex items-center gap-2 px-3 py-2 text-sm',
'ml-inline-item',
selected ? 'ml-inline-item-selected' : '',
item.disabled ? 'ml-disabled' : 'cursor-pointer',
]
.filter(Boolean)
.join(' ');
}
private getContainerClasses(): string {
return [
'flex w-full flex-col gap-1',
'ml-container',
this.disabled ? 'ml-disabled' : '',
]
.filter(Boolean)
.join(' ');
}
// ===========================================================================
// RENDER HELPERS
// ==========================================================================
private renderLabel(): TemplateResult {
if (!this.hasSlot('Label')) return html``;
return html`
<div class="${cn('mb-1 text-sm ml-label', this.getSlotClass('Label'))}">
${unsafeHTML(this.getSlotContent('Label'))}
</div>
`;
}
private renderHelperOrError(hasError: boolean): TemplateResult {
if (hasError) {
const message = this.error || this.msg.required;
return html`<div class="${cn('mt-1 text-xs ml-error-text')}">${unsafeHTML(String(message))}</div>`;
}
if (this.hasSlot('Helper')) {
return html`
<div class="${cn('mt-1 text-xs ml-helper', this.getSlotClass('Helper'))}">
${unsafeHTML(this.getSlotContent('Helper'))}
</div>
`;
}
return html``;
}
private renderEmpty(): TemplateResult {
const content = this.getSlotContent('Empty') || this.msg.noResults;
return html`<div class="px-3 py-2 text-sm ml-text-faint">${unsafeHTML(content)}</div>`;
}
private renderTriggerContent(selected: ItemData | null): TemplateResult {
if (selected) {
return html`<span class="ml-text">${unsafeHTML(selected.label)}</span>`;
}
if (this.hasSlot('Trigger')) {
return html`${unsafeHTML(this.getSlotContent('Trigger'))}`;
}
const placeholder = this.placeholder || this.msg.placeholder;
return html`<span class="ml-text-faint">${placeholder}</span>`;
}
private renderSearchInput(): TemplateResult {
if (!this.searchable) return html``;
return html`
<div class="px-3 pt-3">
<input
type="text"
class="w-full px-3 py-2 text-sm ml-search"
placeholder="${this.msg.searchPlaceholder}"
.value=${this.searchQuery}
@input=${this.handleSearchInput}
@change=${(e: Event) => e.stopPropagation()}
/>
</div>
`;
}
private renderDropdownPanel(items: ItemData[]): TemplateResult {
if (this.loading) {
return html`<div class="px-3 py-2 text-sm ml-text-muted">${this.msg.loading}</div>`;
}
if (items.length === 0) return this.renderEmpty();
const grouped = this.getGroupedItems(items);
return html`
<div
class="ml-panel"
role="listbox"
id="${this.uid}-listbox"
@keydown=${this.handlePanelKeyDown}
>
${this.renderSearchInput()}
<div class="py-2">
${grouped.map((group) => this.renderGroup(group))}
</div>
</div>
`;
}
private renderGroup(group: GroupedItems): TemplateResult {
return html`
${group.label
? html`<div class="px-3 py-1 text-xs ml-text-muted">${group.label}</div>`
: html``}
${group.items.map((item) => this.renderOption(item))}
`;
}
private renderOption(item: ItemData): TemplateResult {
const selected = this.value === item.value;
return html`
<div
class="${this.getOptionClasses(item, selected)}"
role="option"
aria-selected="${selected}"
aria-disabled="${item.disabled}"
@click=${() => this.handleItemSelect(item)}
>
<span>${unsafeHTML(item.label)}</span>
</div>
`;
}
private renderInlineOptions(items: ItemData[], layout: 'radio' | 'segmented' | 'list'): TemplateResult {
if (this.loading) {
return html`<div class="px-3 py-2 text-sm ml-text-muted">${this.msg.loading}</div>`;
}
if (items.length === 0) return this.renderEmpty();
const grouped = this.getGroupedItems(items);
const containerClasses = [
'flex w-full',
layout === 'segmented' ? 'flex-wrap gap-2' : 'flex-col gap-1',
'ml-inline-container',
]
.filter(Boolean)
.join(' ');
return html`
${this.renderSearchInput()}
<div class="${containerClasses}" role="radiogroup" @keydown=${this.handleInlineKeyDown}>
${grouped.map((group) =>
html`
${group.label
? html`<div class="px-3 py-1 text-xs ml-text-muted">${group.label}</div>`
: html``}
${group.items.map((item) => this.renderInlineItem(item, layout))}
`
)}
</div>
`;
}
private renderInlineItem(item: ItemData, layout: 'radio' | 'segmented' | 'list'): TemplateResult {
const selected = this.value === item.value;
const classes = this.getInlineItemClasses(item, selected);
const role = 'radio';
return html`
<div
class="${classes}"
role="${role}"
aria-checked="${selected}"
aria-disabled="${item.disabled}"
@click=${() => this.handleItemSelect(item)}
>
<span>${unsafeHTML(item.label)}</span>
</div>
`;
}
private renderTable(items: ItemData[]): TemplateResult {
if (this.loading) {
return html`<div class="px-3 py-2 text-sm ml-text-muted">${this.msg.loading}</div>`;
}
if (items.length === 0) return this.renderEmpty();
const columns = this.getSlots('Column').map((col) => col.innerHTML);
return html`
${this.renderSearchInput()}
<div class="ml-table-wrapper" role="radiogroup" @keydown=${this.handleInlineKeyDown}>
<table class="w-full ml-table">
${columns.length > 0
? html`
<thead>
<tr>
<th scope="col"></th>
${columns.map((col) => html`<th scope="col">${unsafeHTML(col)}</th>`)}
</tr>
</thead>
`
: html``}
<tbody>
${items.map((item) => this.renderTableRow(item, columns.length))}
</tbody>
</table>
</div>
`;
}
private renderTableRow(item: ItemData, columnCount: number): TemplateResult {
const selected = this.value === item.value;
const cells = item.cells.length > 0 ? item.cells : [item.label];
return html`
<tr
class="${this.getInlineItemClasses(item, selected)}"
role="radio"
aria-checked="${selected}"
aria-disabled="${item.disabled}"
@click=${() => this.handleRowSelect(item)}
>
<td>
<input
type="radio"
name="${this.uid}"
.checked=${selected}
?disabled=${item.disabled || this.disabled || this.readonly}
@input=${(e: Event) => e.stopPropagation()}
@change=${(e: Event) => this.handleRadioChange(e, item)}
/>
</td>
${cells.map((cell) => html`<td>${unsafeHTML(cell)}</td>`)}
${columnCount > cells.length
? Array.from({ length: columnCount - cells.length }).map(() => html`<td></td>`)
: html``}
</tr>
`;
}
private renderViewMode(items: ItemData[]): TemplateResult {
const selected = this.getSelectedItem(items);
const placeholder = this.placeholder || this.msg.empty;
if (!selected) {
return html`<div class="text-sm ml-text-faint">${placeholder}</div>`;
}
if (this.variant === 'table' && selected.cells.length > 0) {
return html`
<div class="flex flex-col gap-1">
${selected.cells.map((cell) => html`<div class="text-sm ml-text">${unsafeHTML(cell)}</div>`)}
</div>
`;
}
return html`<div class="text-sm ml-text">${unsafeHTML(selected.label)}</div>`;
}
protected getPortalTemplate(): TemplateResult {
const items = this.getFilteredItems(this.parseItems());
return this.renderDropdownPanel(items);
}
// ===========================================================================
// RENDER
// ==========================================================================
render() {
const lang = this.getMessageKey(messages);
this.msg = messages[lang];
const items = this.getFilteredItems(this.parseItems());
const selected = this.getSelectedItem(items);
const hasError = !!this.error || (this.required && !this.value);
const rootClasses = cn(this.getContainerClasses(), this.cssClass); // Error styling is limited to the trigger only.
const ariaInvalid = hasError ? 'true' : 'false';
const ariaRequired = this.required ? 'true' : 'false';
const labelId = `${this.uid}-label`;
const errorId = `${this.uid}-error`;
return html`
<div class="${rootClasses}" @focusin=${this.handleFocusIn} @focusout=${this.handleFocusOut}>
${this.hasSlot('Label')
? html`<div id="${labelId}">${this.renderLabel()}</div>`
: html``}
${this.isEditing
? html`
${this.variant === 'dropdown'
? html`
<button
class="${this.getTriggerClasses(hasError)}"
role="combobox"
aria-expanded="${this.isOpen}"
aria-haspopup="listbox"
aria-controls="${this.uid}-listbox"
aria-labelledby="${this.hasSlot('Label') ? labelId : nothing}"
aria-invalid="${ariaInvalid}"
aria-required="${ariaRequired}"
@click=${this.handleTriggerClick}
@keydown=${this.handleTriggerKeyDown}
>
<span class="flex-1 text-left">${this.renderTriggerContent(selected)}</span>
<span class="ml-icon">▾</span>
</button>
`
: nothing}
${this.variant === 'radio'
? this.renderInlineOptions(items, 'radio')
: this.variant === 'segmented'
? this.renderInlineOptions(items, 'segmented')
: this.variant === 'list'
? this.renderInlineOptions(items, 'list')
: this.variant === 'table'
? this.renderTable(items)
: html``}
${this.renderHelperOrError(hasError)}
`
: html`
${this.renderViewMode(items)}
`}
${hasError ? html`<div id="${errorId}" class="sr-only"></div>` : html``}
</div>
`;
}
}
// =============================================================================
// TYPES
// =============================================================================
type ItemData = {
value: string;
disabled: boolean;
label: string;
cells: string[];
groupLabel: string;
};
type GroupedItems = { label: string; items: ItemData[] };
