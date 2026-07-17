/// <mls fileReference="_102053_/l2/molecules/groupselectmany/ml-multi-select-dropdown-test-two.ts" enhancement="_102020_/l2/enhancementAura"/>
// =============================================================================
// MULTI SELECT DROPDOWN TEST TWO MOLECULE
// =============================================================================
// Skill Group: groupSelectMany
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
placeholder: 'Select one or more options',
empty: 'No options available',
loading: 'Loading...',
minSelection: 'Select at least {count} items',
};
type MessageType = typeof message_en;
const messages: Record<string, MessageType> = {
en: message_en,
};
/// **collab_i18n_end**
// =============================================================================
// TYPES
// =============================================================================
type ParsedItem = {
value: string;
label: string;
disabled: boolean;
index: number;
};
type ItemGroup = {
label: string | null;
items: ParsedItem[];
};
@customElement('groupselectmany--ml-multi-select-dropdown-test-two')
export class MlMultiSelectDropdownTestTwoMolecule extends MoleculeAuraElement {
private msg: MessageType = messages.en;
private uid = `ml-msd-${Math.random().toString(36).slice(2, 9)}`;
// ===========================================================================
// SLOT TAGS
// ==========================================================================
slotTags = ['Label', 'Helper', 'Trigger', 'Item', 'Cell', 'Column', 'Group', 'Empty'];
// ===========================================================================
// PROPERTIES — From Contract
// ==========================================================================
@propertyDataSource({ type: String })
value: string = '';
@propertyDataSource({ type: String })
error: string = '';
@propertyDataSource({ type: String })
name: string = '';
@propertyDataSource({ type: String })
placeholder: string = '';
@propertyDataSource({ type: Boolean })
searchable: boolean = false;
@propertyDataSource({ type: Number, attribute: 'min-selection' })
minSelection: number = 0;
@propertyDataSource({ type: Number, attribute: 'max-selection' })
maxSelection: number = 0;
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
private activeIndex: number = -1;
// ===========================================================================
// PORTAL
// ==========================================================================
portalContainer: HTMLDivElement | null = null;
portalWidgetName = 'groupselectmany--ml-multi-select-dropdown-test-two';
private boundUpdatePosition = () => this.updatePanelPosition();
private boundDocumentClick = (e: Event) => this.handleDocumentClick(e);
private boundDocumentKeydown = (e: KeyboardEvent) => this.handleDocumentKeydown(e);
private boundFocusOut = (e: FocusEvent) => this.handleFocusOut(e);
// ===========================================================================
// LIFECYCLE
// ==========================================================================
connectedCallback() {
super.connectedCallback();
this.addEventListener('focusout', this.boundFocusOut);
}
disconnectedCallback() {
this.removeEventListener('focusout', this.boundFocusOut);
this.destroyPortal();
super.disconnectedCallback();
}
updated(changedProps: Map<string, unknown>) {
if (changedProps.has('isEditing') || changedProps.has('disabled') || changedProps.has('readonly') || changedProps.has('loading')) {
if (!this.isEditing || this.disabled || this.readonly || this.loading) {
this.closePanel();
}
}
if (changedProps.has('isOpen')) {
if (this.isOpen) {
this.createPortal();
this.updateActiveIndexForItems();
} else {
this.destroyPortal();
}
}
if (this.isOpen && this.portalContainer) {
this.renderPortalContent();
this.updatePanelPosition();
}
if (this.isOpen && changedProps.has('activeIndex')) {
this.focusActiveItem();
}
if (changedProps.has('searchQuery')) {
this.updateActiveIndexForItems();
}
}
// ===========================================================================
// EVENT HANDLERS
// ==========================================================================
private handleTriggerClick() {
if (!this.isEditing || this.disabled || this.readonly || this.loading) return;
this.toggleOpen();
}
private handleTriggerKeyDown(e: KeyboardEvent) {
if (!this.isEditing || this.disabled || this.readonly || this.loading) return;
if (e.key === 'ArrowDown') {
e.preventDefault();
this.openPanel();
} else if (e.key === 'Escape') {
e.preventDefault();
this.closePanel();
}
}
private handleSearchInput(e: Event) {
e.stopPropagation();
const input = e.target as HTMLInputElement;
this.searchQuery = input.value;
}
private handleItemToggle(item: ParsedItem) {
if (!this.isEditing || this.disabled || this.readonly || item.disabled) return;
const selected = this.getSelectedSet();
if (selected.has(item.value)) {
selected.delete(item.value);
} else {
if (this.maxSelection > 0 && selected.size >= this.maxSelection) return;
selected.add(item.value);
}
this.value = Array.from(selected).join(',');
this.dispatchEvent(new CustomEvent('change', {
bubbles: true,
composed: true,
detail: { value: this.value },
}));
}
private handleTriggerFocus() {
if (!this.isEditing || this.disabled || this.readonly || this.loading) return;
this.dispatchEvent(new CustomEvent('focus', { bubbles: true, composed: true }));
}
private handleFocusOut(e: FocusEvent) {
const related = e.relatedTarget as Node | null;
if (!related || (!this.contains(related) && !this.portalContainer?.contains(related))) {
this.dispatchEvent(new CustomEvent('blur', { bubbles: true, composed: true }));
this.closePanel();
}
}
private handlePanelKeyDown(e: KeyboardEvent) {
if (!this.isOpen) return;
if (e.key === 'Escape') {
e.preventDefault();
this.closePanel();
this.focusTrigger();
return;
}
if (e.key === 'ArrowDown') {
e.preventDefault();
this.moveActive(1);
return;
}
if (e.key === 'ArrowUp') {
e.preventDefault();
this.moveActive(-1);
return;
}
if (e.key === ' ' || e.key === 'Enter') {
e.preventDefault();
const items = this.getFlatItemsFiltered();
const item = items[this.activeIndex];
if (item) this.handleItemToggle(item);
}
}
private handleDocumentClick(e: Event) {
const target = e.target as Node | null;
if (!target || (!this.contains(target) && !this.portalContainer?.contains(target))) {
this.closePanel();
}
}
private handleDocumentKeydown(e: KeyboardEvent) {
if (e.key === 'Escape') {
this.closePanel();
}
}
// ===========================================================================
// PORTAL METHODS
// ==========================================================================
private createPortal() {
if (this.portalContainer) return;
this.portalContainer = document.createElement('div');
if (this.portalWidgetName) {
this.portalContainer.setAttribute('data-widget', this.portalWidgetName);
}
document.body.appendChild(this.portalContainer);
this.updatePanelPosition();
this.renderPortalContent();
window.addEventListener('scroll', this.boundUpdatePosition, true);
window.addEventListener('resize', this.boundUpdatePosition);
document.addEventListener('mousedown', this.boundDocumentClick);
document.addEventListener('keydown', this.boundDocumentKeydown);
}
private destroyPortal() {
if (!this.portalContainer) return;
window.removeEventListener('scroll', this.boundUpdatePosition, true);
window.removeEventListener('resize', this.boundUpdatePosition);
document.removeEventListener('mousedown', this.boundDocumentClick);
document.removeEventListener('keydown', this.boundDocumentKeydown);
this.portalContainer.remove();
this.portalContainer = null;
}
private updatePanelPosition() {
if (!this.portalContainer) return;
const trigger = this.querySelector('button[role="combobox"]') as HTMLElement;
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
private openPanel() {
if (this.isOpen || !this.isEditing || this.disabled || this.readonly || this.loading) return;
this.isOpen = true;
}
private closePanel() {
if (!this.isOpen) return;
this.isOpen = false;
}
private toggleOpen() {
if (this.isOpen) {
this.closePanel();
} else {
this.openPanel();
}
}
private getPortalTemplate(): TemplateResult {
const groups = this.getGroupedItemsFiltered();
const selected = this.getSelectedSet();
const reachedMax = this.maxSelection > 0 && selected.size >= this.maxSelection;
return html`
<div
class="${cn(this.getPanelClasses())}"
role="listbox"
aria-multiselectable="true"
@keydown=${this.handlePanelKeyDown}
>
${this.searchable ? this.renderSearchInput() : nothing}
${groups.length === 0
? this.renderEmptyState()
: html`${groups.map(group => this.renderGroup(group, selected, reachedMax))}`}
</div>
`;
}
// ===========================================================================
// RENDER
// ==========================================================================
render() {
const lang = this.getMessageKey(messages);
this.msg = messages[lang];
if (!this.isEditing) {
return this.renderViewMode();
}
if (this.loading) {
return html`
<div class="${cn('w-full', this.cssClass)}">
<div class="${this.getLoadingClasses()}">
<span class="ml-spinner"></span>
<span class="ml-text-muted">${this.msg.loading}</span>
</div>
</div>
`;
}
const labelId = `${this.uid}-label`;
const helperId = `${this.uid}-helper`;
const errorId = `${this.uid}-error`;
const listboxId = `${this.uid}-listbox`;
const selected = this.getSelectedSet();
const errorText = this.getErrorText(selected.size);
const describedBy = errorText
? errorId
: this.hasSlot('Helper')
? helperId
: undefined;
return html`
<div class="${cn('w-full', this.cssClass)}">
${this.hasSlot('Label')
? html`
<div id="${labelId}" class="${cn('mb-2 text-sm ml-label', this.getSlotClass('Label'))}">
${unsafeHTML(this.getSlotContent('Label'))}
</div>
`
: nothing}
<button
class="${cn(this.getTriggerClasses(!!errorText, selected.size > 0), this.getSlotClass('Trigger'))}"
role="combobox"
aria-haspopup="listbox"
aria-expanded="${this.isOpen ? 'true' : 'false'}"
aria-controls="${listboxId}"
aria-labelledby="${this.hasSlot('Label') ? labelId : ''}"
aria-describedby="${describedBy || ''}"
aria-invalid="${errorText ? 'true' : 'false'}"
aria-required="${this.required ? 'true' : 'false'}"
?disabled=${this.disabled || this.readonly}
@focus=${this.handleTriggerFocus}
@click=${this.handleTriggerClick}
@keydown=${this.handleTriggerKeyDown}
>
${this.renderTriggerContent(selected)}
</button>
${errorText
? html`<div id="${errorId}" class="${cn('mt-1 text-xs ml-error-text')}">${unsafeHTML(errorText)}</div>`
: this.hasSlot('Helper')
? html`<div id="${helperId}" class="${cn('mt-1 text-xs ml-helper', this.getSlotClass('Helper'))}">${unsafeHTML(this.getSlotContent('Helper'))}</div>`
: nothing}
</div>
`;
}
// ===========================================================================
// RENDER PARTS
// ==========================================================================
private renderTriggerContent(selected: Set<string>): TemplateResult {
if (this.hasSlot('Trigger')) {
return html`${unsafeHTML(this.getSlotContent('Trigger'))}`;
}
const items = this.getFlatItems();
const selectedItems = items.filter(item => selected.has(item.value));
const text = selectedItems.length > 0
? selectedItems.map(item => this.getPlainText(item.label)).join(', ')
: (this.placeholder || this.msg.placeholder);
const textClasses = selectedItems.length > 0 ? 'ml-text' : 'ml-text-faint';
return html`<span class="${cn('truncate', textClasses)}">${text}</span>`;
}
private renderSearchInput(): TemplateResult {
return html`
<div class="${this.getSearchWrapperClasses()}">
<input
class="${this.getSearchInputClasses()}"
type="text"
value="${this.searchQuery}"
placeholder="${this.msg.placeholder}"
@input=${this.handleSearchInput}
@change=${(e: Event) => e.stopPropagation()}
/>
</div>
`;
}
private renderGroup(group: ItemGroup, selected: Set<string>, reachedMax: boolean): TemplateResult {
const showLabel = group.label !== null && group.label !== '';
return html`
${showLabel
? html`<div class="${this.getGroupLabelClasses()}">${unsafeHTML(group.label || '')}</div>`
: nothing}
${group.items.map(item => this.renderItem(item, selected, reachedMax))}
`;
}
private renderItem(item: ParsedItem, selected: Set<string>, reachedMax: boolean): TemplateResult {
const isSelected = selected.has(item.value);
const isDisabled = item.disabled || (reachedMax && !isSelected);
const optionClasses = this.getItemClasses(isSelected, isDisabled);
return html`
<div
class="${optionClasses}"
role="option"
aria-selected="${isSelected ? 'true' : 'false'}"
aria-disabled="${isDisabled ? 'true' : 'false'}"
data-option
@mousedown=${(e: Event) => e.preventDefault()}
@click=${() => this.handleItemToggle(item)}
.tabIndex=${this.activeIndex === item.index ? 0 : -1}
>
<span class="${this.getItemMarkerClasses(isSelected)}">${isSelected ? '✓' : ''}</span>
<span class="${this.getItemLabelClasses(isDisabled)}">${unsafeHTML(item.label)}</span>
</div>
`;
}
private renderEmptyState(): TemplateResult {
const content = this.hasSlot('Empty') ? this.getSlotContent('Empty') : this.msg.empty;
return html`<div class="${this.getEmptyClasses()}">${unsafeHTML(content)}</div>`;
}
private renderViewMode(): TemplateResult {
const selected = this.getSelectedSet();
const items = this.getFlatItems().filter(item => selected.has(item.value));
return html`
<div class="${cn('w-full', this.cssClass)}">
${items.length === 0
? nothing
: html`
<div class="${this.getViewContainerClasses()}">
${items.map(item => html`<span class="${this.getViewTagClasses()}">${unsafeHTML(item.label)}</span>`)}
</div>
`}
</div>
`;
}
// ===========================================================================
// DATA HELPERS
// ==========================================================================
private getSelectedSet(): Set<string> {
const raw = String(this.value ?? '').trim();
if (!raw) return new Set();
return new Set(raw.split(',').map(v => v.trim()).filter(Boolean));
}
private getFlatItems(): ParsedItem[] {
return this.getGroupedItems().flatMap(group => group.items);
}
private getGroupedItems(): ItemGroup[] {
const groups: ItemGroup[] = [];
const children = Array.from(this.children) as HTMLElement[];
let currentUngrouped: ItemGroup | null = null;
let index = 0;
for (const child of children) {
const tag = child.tagName.toUpperCase();
if (tag === 'GROUP') {
const label = child.getAttribute('label') || '';
const group: ItemGroup = { label, items: [] };
const items = Array.from(child.children) as HTMLElement[];
for (const itemEl of items) {
if (itemEl.tagName.toUpperCase() !== 'ITEM') continue;
const parsed = this.parseItemElement(itemEl, index++);
if (parsed) group.items.push(parsed);
}
if (group.items.length > 0) groups.push(group);
currentUngrouped = null;
} else if (tag === 'ITEM') {
if (!currentUngrouped) {
currentUngrouped = { label: null, items: [] };
groups.push(currentUngrouped);
}
const parsed = this.parseItemElement(child, index++);
if (parsed) currentUngrouped.items.push(parsed);
}
}
return groups;
}
private getGroupedItemsFiltered(): ItemGroup[] {
const query = this.searchQuery.trim().toLowerCase();
if (!query) return this.getGroupedItems();
const groups = this.getGroupedItems();
const filtered: ItemGroup[] = [];
for (const group of groups) {
const items = group.items.filter(item => this.getPlainText(item.label).toLowerCase().includes(query));
if (items.length > 0) {
filtered.push({ label: group.label, items });
}
}
return filtered;
}
private getFlatItemsFiltered(): ParsedItem[] {
return this.getGroupedItemsFiltered().flatMap(group => group.items);
}
private parseItemElement(el: HTMLElement, index: number): ParsedItem | null {
const value = el.getAttribute('value') || '';
if (!value) return null;
const disabled = el.hasAttribute('disabled');
const label = el.innerHTML || '';
return { value, label, disabled, index };
}
private getPlainText(content: string): string {
const div = document.createElement('div');
div.innerHTML = content;
return div.textContent || '';
}
private getErrorText(selectedCount: number): string {
if (!this.isEditing) return '';
if (this.error) return String(this.error);
const minRequired = Math.max(this.minSelection || 0, this.required ? 1 : 0);
if (minRequired > 0 && selectedCount < minRequired) {
return this.msg.minSelection.replace('{count}', String(minRequired));
}
return '';
}
// ===========================================================================
// FOCUS + NAVIGATION
// ==========================================================================
private updateActiveIndexForItems() {
const items = this.getFlatItemsFiltered();
if (items.length === 0) {
this.activeIndex = -1;
return;
}
const current = items.find(item => item.index === this.activeIndex && !item.disabled);
if (current) return;
const firstEnabled = items.find(item => !item.disabled);
this.activeIndex = firstEnabled ? firstEnabled.index : -1;
}
private moveActive(delta: number) {
const items = this.getFlatItemsFiltered();
if (items.length === 0) return;
const currentIndex = items.findIndex(item => item.index === this.activeIndex);
let nextIndex = currentIndex;
for (let i = 0; i < items.length; i++) {
nextIndex = (nextIndex + delta + items.length) % items.length;
if (!items[nextIndex].disabled) break;
}
this.activeIndex = items[nextIndex]?.index ?? -1;
}
private focusActiveItem() {
const container = this.portalContainer || this;
const options = container.querySelectorAll('[data-option]') as NodeListOf<HTMLElement>;
const target = Array.from(options).find(el => Number(el.tabIndex) === 0);
if (target) target.focus();
}
private focusTrigger() {
const trigger = this.querySelector('button[role="combobox"]') as HTMLButtonElement | null;
if (trigger) trigger.focus();
}
// ===========================================================================
// CLASS HELPERS
// ==========================================================================
private getTriggerClasses(hasError: boolean, hasSelection: boolean): string {
return [
'w-full flex items-center justify-between gap-2 px-3 py-2',
'ml-msd-trigger',
hasError ? 'ml-msd-trigger-error' : '',
this.disabled || this.readonly ? 'ml-disabled' : 'cursor-pointer',
hasSelection ? 'ml-msd-trigger-has-value' : '',
].filter(Boolean).join(' ');
}
private getPanelClasses(): string {
return [
'w-full max-h-64 overflow-auto rounded-md p-2',
'ml-msd-panel',
].filter(Boolean).join(' ');
}
private getItemClasses(isSelected: boolean, isDisabled: boolean): string {
return [
'flex w-full items-center gap-2 px-3 py-2 rounded-md',
'ml-msd-item',
isSelected ? 'ml-msd-item-selected' : '',
isDisabled ? 'ml-disabled ml-msd-item-disabled' : 'cursor-pointer',
].filter(Boolean).join(' ');
}
private getItemMarkerClasses(isSelected: boolean): string {
return [
'flex h-4 w-4 items-center justify-center',
'ml-msd-item-marker',
isSelected ? 'ml-msd-item-marker-selected' : 'ml-msd-item-marker-empty',
].filter(Boolean).join(' ');
}
private getItemLabelClasses(isDisabled: boolean): string {
return [
'flex-1 truncate',
'ml-text',
isDisabled ? 'ml-text-muted' : '',
].filter(Boolean).join(' ');
}
private getGroupLabelClasses(): string {
return [
'px-3 py-1 text-xs',
'ml-msd-group-label',
].filter(Boolean).join(' ');
}
private getSearchWrapperClasses(): string {
return [
'px-2 pb-2',
'ml-msd-search-wrapper',
].filter(Boolean).join(' ');
}
private getSearchInputClasses(): string {
return [
'w-full px-3 py-2 text-sm',
'ml-msd-search-input',
].filter(Boolean).join(' ');
}
private getEmptyClasses(): string {
return [
'px-3 py-2 text-sm',
'ml-msd-empty',
].filter(Boolean).join(' ');
}
private getLoadingClasses(): string {
return [
'flex items-center gap-2 px-3 py-2 rounded-md',
'ml-msd-loading',
].filter(Boolean).join(' ');
}
private getViewContainerClasses(): string {
return [
'flex flex-wrap gap-2',
'ml-msd-view',
].filter(Boolean).join(' ');
}
private getViewTagClasses(): string {
return [
'px-2 py-1 rounded-full text-xs',
'ml-msd-tag',
].filter(Boolean).join(' ');
}
}
