/// <mls fileReference="_102053_/l2/molecules/groupentertext/ml-enter-text-test.ts" enhancement="_102020_/l2/enhancementAura"/>
// =============================================================================
// ML ENTER TEXT TEST MOLECULE
// =============================================================================
// Skill Group: groupEnterText
// This molecule does NOT contain business logic.
import { html, TemplateResult } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import { propertyDataSource } from '/_102029_/l2/collabDecorators.js';
import { MoleculeAuraElement } from '/_102033_/l2/moleculeBase.js';
import { cn } from '/_102033_/l2/cn.js';
/// **collab_i18n_start**
const message_en = {
emptyValue: '—',
passwordMask: '••••••••',
};
type MessageType = typeof message_en;
const messages: Record<string, MessageType> = {
en: message_en,
};
/// **collab_i18n_end**
@customElement('groupentertext--ml-enter-text-test')
export class MlEnterTextTestMolecule extends MoleculeAuraElement {
private msg: MessageType = messages.en;
// ===========================================================================
// SLOT TAGS
// ===========================================================================
slotTags = ['Label', 'Helper', 'Prefix', 'Suffix'];
// ===========================================================================
// PROPERTIES — From Contract
// ===========================================================================
@propertyDataSource({ type: String })
value: string = '';
@propertyDataSource({ type: String })
error: string = '';
@propertyDataSource({ type: String })
name: string = '';
@propertyDataSource({ type: String })
placeholder: string = '';
@propertyDataSource({ type: Number, attribute: 'max-length' })
maxLength: number | null = null;
@propertyDataSource({ type: Number, attribute: 'min-length' })
minLength: number | null = null;
@propertyDataSource({ type: Number })
rows: number = 1;
@propertyDataSource({ type: String })
autocomplete: string = '';
@propertyDataSource({ type: String, attribute: 'input-type' })
inputType: string = 'text';
@propertyDataSource({ type: String })
mask: string = '';
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
// ===========================================================================
@state()
private rawDisplay: string = '';
@state()
private uid = `ml-enter-text-${Math.random().toString(36).slice(2)}`;
// ===========================================================================
// STATE CHANGE HANDLER — derived state from value/mask
// ===========================================================================
handleIcaStateChange(key: string, value: any) {
const valueAttr = this.getAttribute('value');
const maskAttr = this.getAttribute('mask');
const rowsAttr = this.getAttribute('rows');
const inputTypeAttr = this.getAttribute('input-type');
if (
valueAttr === `{{${key}}}` ||
maskAttr === `{{${key}}}` ||
rowsAttr === `{{${key}}}` ||
inputTypeAttr === `{{${key}}}`
) {
this.rawDisplay = this.hasMask()
? this.formatWithMask(String(value ?? ''))
: '';
}
this.requestUpdate();
}
updated(changedProps: Map<string, unknown>) {
if (
changedProps.has('value') ||
changedProps.has('mask') ||
changedProps.has('rows') ||
changedProps.has('inputType')
) {
if (this.hasMask()) {
const formatted = this.formatWithMask(this.getValueString());
if (this.rawDisplay !== formatted) {
this.rawDisplay = formatted;
}
} else if (this.rawDisplay !== '') {
this.rawDisplay = '';
}
}
}
// ===========================================================================
// EVENT HANDLERS
// ===========================================================================
private handleInput(e: Event) {
e.stopPropagation();
if (this.disabled || this.readonly || this.loading) return;
const input = e.target as HTMLInputElement;
const current = String(input.value ?? '');
if (this.hasMask()) {
let raw = this.extractRaw(current, this.mask);
raw = this.applyMaxLength(raw);
this.value = raw;
this.rawDisplay = this.formatWithMask(raw);
input.value = this.rawDisplay;
} else {
let next = current;
const max = this.getMaxLength();
if (max !== null && next.length > max) {
next = next.slice(0, max);
input.value = next;
}
this.value = next;
}
this.dispatchEvent(new CustomEvent('input', {
bubbles: true,
composed: true,
detail: { value: this.getValueString() }
}));
}
private handleTextareaInput(e: Event) {
e.stopPropagation();
if (this.disabled || this.readonly || this.loading) return;
const textarea = e.target as HTMLTextAreaElement;
let next = String(textarea.value ?? '');
const max = this.getMaxLength();
if (max !== null && next.length > max) {
next = next.slice(0, max);
textarea.value = next;
}
this.value = next;
this.dispatchEvent(new CustomEvent('input', {
bubbles: true,
composed: true,
detail: { value: this.getValueString() }
}));
}
private handleChange(e: Event) {
e.stopPropagation();
if (this.disabled || this.readonly || this.loading) return;
this.dispatchEvent(new CustomEvent('change', {
bubbles: true,
composed: true,
detail: { value: this.getValueString() }
}));
}
private handleFocus() {
this.dispatchEvent(new CustomEvent('focus', {
bubbles: true,
composed: true,
}));
}
private handleBlur() {
this.dispatchEvent(new CustomEvent('blur', {
bubbles: true,
composed: true,
}));
}
// ===========================================================================
// HELPERS
// ===========================================================================
private getValueString(): string {
return String(this.value ?? '');
}
private getRowsValue(): number {
const rows = Number(this.rows ?? 1);
return Number.isNaN(rows) ? 1 : rows;
}
private getMaxLength(): number | null {
const max = this.maxLength;
return typeof max === 'number' && !Number.isNaN(max) ? max : null;
}
private getMinLength(): number | null {
const min = this.minLength;
return typeof min === 'number' && !Number.isNaN(min) ? min : null;
}
private hasMask(): boolean {
const rows = this.getRowsValue();
return Boolean(this.mask) && rows <= 1 && this.inputType !== 'password';
}
private applyMaxLength(raw: string): string {
const max = this.getMaxLength();
if (max !== null && raw.length > max) {
return raw.slice(0, max);
}
return raw;
}
private isErrorState(valueString: string): boolean {
if (!this.isEditing) return false;
const min = this.getMinLength();
const minInvalid = min !== null && valueString.length < min;
const requiredInvalid = this.required && valueString.length === 0;
return Boolean(this.error) || minInvalid || requiredInvalid;
}
private formatWithMask(raw: string): string {
if (!this.mask) return raw;
const value = String(raw ?? '');
let output = '';
let rawIndex = 0;
for (const maskChar of this.mask) {
const isToken = maskChar === '#' || maskChar === 'A' || maskChar === '*';
if (isToken) {
if (rawIndex >= value.length) break;
output += value[rawIndex];
rawIndex += 1;
} else {
if (value.length === 0) break;
output += maskChar;
}
}
return output;
}
private extractRaw(input: string, mask: string): string {
const tokens = Array.from(mask).filter((c) => c === '#' || c === 'A' || c === '*');
let result = '';
let tokenIndex = 0;
for (const char of input) {
if (tokenIndex >= tokens.length) break;
const token = tokens[tokenIndex];
const isValid =
(token === '#' && /\d/.test(char)) ||
(token === 'A' && /[a-zA-Z]/.test(char)) ||
(token === '*' && /[\s\S]/.test(char));
if (isValid) {
result += char;
tokenIndex += 1;
}
}
return result;
}
private getViewText(valueString: string): string {
if (!valueString) return this.msg.emptyValue;
if (this.inputType === 'password') return this.msg.passwordMask;
return valueString;
}
private getInputContainerClasses(isError: boolean): string {
return [
'relative flex w-full items-center gap-2 px-3 py-2',
'ml-input-container',
isError ? 'ml-input-container-error' : '',
(this.disabled || this.loading) ? 'ml-disabled' : '',
].filter(Boolean).join(' ');
}
private getViewContainerClasses(): string {
return [
'flex w-full items-center gap-2 px-3 py-2',
'ml-text',
(this.disabled || this.loading) ? 'ml-disabled' : '',
].filter(Boolean).join(' ');
}
private getInputClasses(): string {
return [
'w-full bg-transparent outline-none',
'ml-input',
].filter(Boolean).join(' ');
}
// ===========================================================================
// RENDER
// ===========================================================================
render() {
const lang = this.getMessageKey(messages);
this.msg = messages[lang];
const valueString = this.getValueString();
const isError = this.isErrorState(valueString);
const rows = this.getRowsValue();
const rootClasses = cn('flex w-full flex-col gap-1', this.cssClass);
return html`
<div class="${rootClasses}">
${this.renderLabel()}
${this.isEditing
? html`
<div class="${this.getInputContainerClasses(isError)}">
${this.renderPrefix()}
${rows > 1 ? this.renderTextarea(valueString, isError) : this.renderInput(valueString, isError)}
${this.renderSuffix()}
${this.loading
? html`<div class="ml-spinner absolute right-3 top-1/2 -translate-y-1/2"></div>`
: html``}
</div>
${this.renderFeedback(isError)}
${rows > 1 ? this.renderCounter(valueString) : html``}
`
: html`
<div class="${this.getViewContainerClasses()}">
${this.renderPrefix()}
<span class="ml-text">${this.getViewText(valueString)}</span>
${this.renderSuffix()}
</div>
`}
</div>
`;
}
private renderLabel(): TemplateResult {
if (!this.hasSlot('Label')) return html``;
return html`
<label
id="${this.uid}-label"
class="${cn('ml-label', this.getSlotClass('Label'))}"
>
${unsafeHTML(this.getSlotContent('Label'))}
</label>
`;
}
private renderPrefix(): TemplateResult {
if (!this.hasSlot('Prefix')) return html``;
return html`
<div class="${cn('ml-text-muted', this.getSlotClass('Prefix'))}">
${unsafeHTML(this.getSlotContent('Prefix'))}
</div>
`;
}
private renderSuffix(): TemplateResult {
if (!this.hasSlot('Suffix')) return html``;
return html`
<div class="${cn('ml-text-muted', this.getSlotClass('Suffix'))}">
${unsafeHTML(this.getSlotContent('Suffix'))}
</div>
`;
}
private renderInput(valueString: string, isError: boolean): TemplateResult {
const describedBy = this.getDescribedBy(isError);
const displayValue = this.hasMask() ? this.rawDisplay : valueString;
const max = this.getMaxLength();
const shouldSetMax = !this.hasMask() && max !== null ? max : undefined;
return html`
<input
class="${this.getInputClasses()}"
.type="${this.inputType}"
.value="${displayValue}"
.name="${this.name}"
.placeholder="${this.placeholder ?? ''}"
.autocomplete="${this.autocomplete ?? ''}"
?disabled="${this.disabled || this.loading}"
?readonly="${this.readonly}"
?required="${this.required}"
maxlength="${shouldSetMax !== undefined ? String(shouldSetMax) : ''}"
aria-labelledby="${this.hasSlot('Label') ? `${this.uid}-label` : ''}"
aria-describedby="${describedBy}"
aria-invalid="${isError ? 'true' : 'false'}"
aria-required="${this.required ? 'true' : 'false'}"
@input="${this.handleInput}"
@change="${this.handleChange}"
@focus="${this.handleFocus}"
@blur="${this.handleBlur}"
/>
`;
}
private renderTextarea(valueString: string, isError: boolean): TemplateResult {
const describedBy = this.getDescribedBy(isError, true);
const max = this.getMaxLength();
return html`
<textarea
class="${this.getInputClasses()}"
.rows="${String(this.getRowsValue())}"
.name="${this.name}"
.placeholder="${this.placeholder ?? ''}"
.autocomplete="${this.autocomplete ?? ''}"
?disabled="${this.disabled || this.loading}"
?readonly="${this.readonly}"
?required="${this.required}"
maxlength="${max !== null ? String(max) : ''}"
aria-labelledby="${this.hasSlot('Label') ? `${this.uid}-label` : ''}"
aria-describedby="${describedBy}"
aria-invalid="${isError ? 'true' : 'false'}"
aria-required="${this.required ? 'true' : 'false'}"
@input="${this.handleTextareaInput}"
@change="${this.handleChange}"
@focus="${this.handleFocus}"
@blur="${this.handleBlur}"
>${valueString}</textarea>
`;
}
private renderFeedback(isError: boolean): TemplateResult {
if (isError && this.error) {
return html`
<p id="${this.uid}-error" class="${cn('text-xs ml-error-text')}">
${unsafeHTML(String(this.error))}
</p>
`;
}
if (!isError && this.hasSlot('Helper')) {
return html`
<p id="${this.uid}-helper" class="${cn('text-xs ml-helper', this.getSlotClass('Helper'))}">
${unsafeHTML(this.getSlotContent('Helper'))}
</p>
`;
}
return html``;
}
private renderCounter(valueString: string): TemplateResult {
const max = this.getMaxLength();
if (max === null) return html``;
const count = valueString.length;
return html`
<p
id="${this.uid}-counter"
class="${cn('text-xs ml-text-muted') }"
aria-live="polite"
>
${count} / ${max}
</p>
`;
}
private getDescribedBy(isError: boolean, isTextarea = false): string {
if (!this.isEditing) return '';
const ids: string[] = [];
if (isError && this.error) ids.push(`${this.uid}-error`);
if (!isError && this.hasSlot('Helper')) ids.push(`${this.uid}-helper`);
if (isTextarea && this.getMaxLength() !== null) ids.push(`${this.uid}-counter`);
return ids.join(' ');
}
}
