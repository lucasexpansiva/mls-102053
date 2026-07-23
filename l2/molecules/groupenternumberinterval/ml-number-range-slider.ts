/// <mls fileReference="_102053_/l2/molecules/groupenternumberinterval/ml-number-range-slider.ts" enhancement="_102020_/l2/enhancementAura"/>
// =============================================================================
// ML-NUMBER-RANGE-SLIDER MOLECULE
// =============================================================================
// Skill Group: groupEnterNumberInterval
// This molecule does NOT contain business logic.

import { html, TemplateResult } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import { propertyDataSource } from '/_102029_/l2/collabDecorators.js';
import { MoleculeAuraElement } from '/_102033_/l2/moleculeBase.js';
import { cn } from '/_102033_/l2/cn.js';

/// **collab_i18n_start**
const message_en = {
  placeholder: '—',
  startLabel: 'Start value',
  endLabel: 'End value',
  separator: '–',
};

type MessageType = typeof message_en;

const messages: Record<string, MessageType> = {
  en: message_en,
};
/// **collab_i18n_end**

@customElement('groupenternumberinterval--ml-number-range-slider')
export class MlNumberRangeSliderMolecule extends MoleculeAuraElement {
  private msg: MessageType = messages.en;

  // ===========================================================================
  // SLOT TAGS
  // ===========================================================================
  slotTags = ['Label', 'LabelStart', 'LabelEnd', 'Helper', 'Prefix', 'Suffix'];

  // ===========================================================================
  // PROPERTIES — From Contract
  // ===========================================================================
  @propertyDataSource({ type: Number, attribute: 'start-value' })
  startValue: number | null = null;

  @propertyDataSource({ type: Number, attribute: 'end-value' })
  endValue: number | null = null;

  @propertyDataSource({ type: String })
  error: string = '';

  @propertyDataSource({ type: String })
  name: string = '';

  @propertyDataSource({ type: Number })
  min: number | null = null;

  @propertyDataSource({ type: Number })
  max: number | null = null;

  @propertyDataSource({ type: Number })
  step: number = 1;

  @propertyDataSource({ type: Number })
  decimals: number = 0;

  @propertyDataSource({ type: String })
  locale: string = '';

  @propertyDataSource({ type: String })
  placeholder: string = '';

  @propertyDataSource({ type: Number, attribute: 'min-gap' })
  minGap: number = 0;

  @propertyDataSource({ type: Number, attribute: 'max-gap' })
  maxGap: number = 0;

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
  private activeHandle: 'start' | 'end' | null = null;

  // Which handle sits on top when idle — chosen by pointer proximity so both thumbs are reachable
  @state()
  private topHandle: 'start' | 'end' = 'end';

  private uid = `ml-range-${Math.random().toString(36).slice(2, 9)}`;

  // ===========================================================================
  // EVENT HANDLERS
  // ===========================================================================
  private handleStartInput(e: Event) {
    e.stopPropagation();
    if (this.isBlocked()) return;

    this.activeHandle = 'start';
    const input = e.target as HTMLInputElement;
    const { min, max } = this.getRangeBounds();
    const raw = Number(input.value);
    const start = this.normalizeValue(raw, min, max);
    const endRaw = this.endValue ?? start;
    const end = this.normalizeValue(endRaw, min, max);
    const pair = this.clampPair(start, end, 'start', min, max);

    this.startValue = pair.start;
    this.endValue = pair.end;
    this.dispatchInputEvent();
  }

  private handleEndInput(e: Event) {
    e.stopPropagation();
    if (this.isBlocked()) return;

    this.activeHandle = 'end';
    const input = e.target as HTMLInputElement;
    const { min, max } = this.getRangeBounds();
    const raw = Number(input.value);
    const end = this.normalizeValue(raw, min, max);
    const startRaw = this.startValue ?? end;
    const start = this.normalizeValue(startRaw, min, max);
    const pair = this.clampPair(start, end, 'end', min, max);

    this.startValue = pair.start;
    this.endValue = pair.end;
    this.dispatchInputEvent();
  }

  private handleStartChange(e: Event) {
    e.stopPropagation();
    if (this.isBlocked()) return;
    this.activeHandle = null;
    this.dispatchChangeEvent();
  }

  private handleEndChange(e: Event) {
    e.stopPropagation();
    if (this.isBlocked()) return;
    this.activeHandle = null;
    this.dispatchChangeEvent();
  }

  private handleFocus() {
    if (this.isBlocked()) return;
    this.dispatchEvent(new CustomEvent('focus', { bubbles: true, composed: true }));
  }

  private handleBlur() {
    if (this.isBlocked()) return;
    this.activeHandle = null;
    this.dispatchEvent(new CustomEvent('blur', { bubbles: true, composed: true }));
    this.dispatchChangeEvent();
  }

  /**
   * Dual overlapping <input type="range"> share the full track hit-area.
   * Raise the handle closest to the pointer so start/end can be grabbed independently.
   */
  private handleSliderPointerMove(e: PointerEvent) {
    if (this.isBlocked()) return;
    // Keep the dragging handle on top for the whole gesture
    if (this.activeHandle) return;

    const target = e.currentTarget as HTMLElement;
    const rect = target.getBoundingClientRect();
    if (rect.width <= 0) return;

    const { min, max } = this.getRangeBounds();
    const startValue = this.startValue ?? min;
    const endValue = this.endValue ?? max;
    const startPercent = this.getPercent(startValue, min, max);
    const endPercent = this.getPercent(endValue, min, max);
    const pointerPercent = ((e.clientX - rect.left) / rect.width) * 100;

    const distStart = Math.abs(pointerPercent - startPercent);
    const distEnd = Math.abs(pointerPercent - endPercent);

    let next: 'start' | 'end';
    if (distStart < distEnd) {
      next = 'start';
    } else if (distEnd < distStart) {
      next = 'end';
    } else {
      // Equidistant / overlapping thumbs: side of the thumb decides which one to grab
      next = pointerPercent < startPercent ? 'start' : 'end';
    }

    if (this.topHandle !== next) {
      this.topHandle = next;
    }
  }

  // Resolve top handle before the click/touch hits an input (no prior mousemove on touch)
  private handleSliderPointerDown(e: PointerEvent) {
    this.handleSliderPointerMove(e);
  }

  private dispatchInputEvent() {
    this.dispatchEvent(new CustomEvent('input', {
      bubbles: true,
      composed: true,
      detail: { startValue: this.startValue, endValue: this.endValue },
    }));
  }

  private dispatchChangeEvent() {
    this.dispatchEvent(new CustomEvent('change', {
      bubbles: true,
      composed: true,
      detail: { startValue: this.startValue, endValue: this.endValue },
    }));
  }

  // ===========================================================================
  // HELPERS
  // ===========================================================================
  private isBlocked(): boolean {
    return this.disabled || this.readonly || this.loading;
  }

  private getPlaceholderText(): string {
    return this.placeholder || this.msg.placeholder;
  }

  private getRangeBounds(): { min: number; max: number } {
    let min = this.min ?? null;
    let max = this.max ?? null;

    const candidates = [this.startValue, this.endValue]
      .filter((v) => v !== null && v !== undefined) as number[];

    if (min === null) {
      min = candidates.length > 0 ? Math.min(...candidates) : 0;
    }
    if (max === null) {
      max = candidates.length > 0 ? Math.max(...candidates) : 100;
    }

    if (min === max) {
      max = min + 1;
    }

    if (min > max) {
      const temp = min;
      min = max;
      max = temp;
    }

    return { min, max };
  }

  private clampToBounds(value: number, min: number, max: number): number {
    let next = value;
    next = Math.max(next, min);
    next = Math.min(next, max);
    return next;
  }

  private applyStep(value: number, min: number): number {
    const step = this.step ?? 1;
    if (step <= 0) return value;
    const steps = Math.round((value - min) / step);
    return min + steps * step;
  }

  private roundToDecimals(value: number): number {
    const decimals = Math.max(0, this.decimals ?? 0);
    const factor = Math.pow(10, decimals);
    return Math.round(value * factor) / factor;
  }

  private normalizeValue(value: number, min: number, max: number): number {
    let next = value;
    next = this.applyStep(next, min);
    next = this.roundToDecimals(next);
    next = this.clampToBounds(next, min, max);
    return next;
  }

  private clampPair(
    start: number,
    end: number,
    active: 'start' | 'end',
    min: number,
    max: number,
  ): { start: number; end: number } {
    let s = this.clampToBounds(start, min, max);
    let e = this.clampToBounds(end, min, max);

    if (s > e) {
      if (active === 'start') e = s;
      else s = e;
    }

    const minGap = Math.max(0, this.minGap ?? 0);
    const maxGap = Math.max(0, this.maxGap ?? 0);

    if (minGap > 0 && e - s < minGap) {
      if (active === 'start') e = s + minGap;
      else s = e - minGap;
    }

    if (maxGap > 0 && e - s > maxGap) {
      if (active === 'start') e = s + maxGap;
      else s = e - maxGap;
    }

    s = this.clampToBounds(s, min, max);
    e = this.clampToBounds(e, min, max);

    if (s > e) {
      if (active === 'start') e = s;
      else s = e;
    }

    return { start: s, end: e };
  }

  private getPercent(value: number, min: number, max: number): number {
    if (max === min) return 0;
    return ((value - min) / (max - min)) * 100;
  }

  private formatNumber(value: number | null): string {
    if (value === null || value === undefined || Number.isNaN(value)) return '';
    const decimals = Math.max(0, this.decimals ?? 0);
    const locale = this.locale || undefined;
    try {
      return new Intl.NumberFormat(locale, {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      }).format(value);
    } catch {
      return value.toFixed(decimals);
    }
  }

  private getContainerClasses(): string {
    const hasError = this.hasError();
    return [
      'relative w-full',
      'ml-range-container',
      hasError ? 'ml-range-container-error' : '',
      this.loading ? 'ml-range-container-loading' : '',
      this.disabled ? 'ml-disabled' : '',
      this.readonly ? 'ml-range-container-readonly' : '',
    ].filter(Boolean).join(' ');
  }

  private getInputClasses(handle: 'start' | 'end'): string {
    return [
      'absolute left-0 top-0 w-full',
      'ml-range-input',
      handle === 'start' ? 'ml-range-input-start' : 'ml-range-input-end',
      this.activeHandle === handle ? 'ml-range-input-active' : '',
    ].filter(Boolean).join(' ');
  }

  private getInputStyle(handle: 'start' | 'end'): string {
    // Active handle always wins; otherwise the proximity-selected topHandle
    const isOnTop =
      this.activeHandle === handle ||
      (this.activeHandle === null && this.topHandle === handle);
    return `z-index: ${isOnTop ? 3 : 1};`;
  }

  private hasError(): boolean {
    return Boolean(this.error && String(this.error).trim().length > 0);
  }

  private renderLabel(): TemplateResult {
    if (!this.hasSlot('Label')) return html``;
    return html`
      <div
        id="${this.uid}-label"
        class="${cn('mb-2 text-sm ml-label', this.getSlotClass('Label'))}"
      >
        ${unsafeHTML(this.getSlotContent('Label'))}
      </div>
    `;
  }

  private renderHelperOrError(): TemplateResult {
    if (this.hasError()) {
      return html`
        <p id="${this.uid}-error" class="${cn('mt-2 text-xs ml-error-text')}">
          ${unsafeHTML(String(this.error))}
        </p>
      `;
    }
    if (this.hasSlot('Helper')) {
      return html`
        <p id="${this.uid}-helper" class="${cn('mt-2 text-xs ml-helper', this.getSlotClass('Helper'))}">
          ${unsafeHTML(this.getSlotContent('Helper'))}
        </p>
      `;
    }
    return html``;
  }

  private renderAffix(tag: 'Prefix' | 'Suffix'): TemplateResult {
    if (!this.hasSlot(tag)) return html``;
    return html`
      <span class="${cn('ml-range-affix', this.getSlotClass(tag))}">
        ${unsafeHTML(this.getSlotContent(tag))}
      </span>
    `;
  }

  private renderValueDisplay(value: number | null): TemplateResult {
    const text = value === null || value === undefined ? this.getPlaceholderText() : this.formatNumber(value);
    return html`
      <span class="flex items-center gap-1 ml-range-value">
        ${this.renderAffix('Prefix')}
        <span class="ml-text">${text}</span>
        ${this.renderAffix('Suffix')}
      </span>
    `;
  }

  private renderValueLabels(): TemplateResult {
    const startLabelId = `${this.uid}-label-start`;
    const endLabelId = `${this.uid}-label-end`;
    const hasStartLabel = this.hasSlot('LabelStart');
    const hasEndLabel = this.hasSlot('LabelEnd');

    return html`
      <div class="mt-2 flex items-center justify-between text-xs ml-range-labels">
        <div id="${startLabelId}" class="${cn('ml-text-muted', this.getSlotClass('LabelStart'))}">
          ${hasStartLabel ? unsafeHTML(this.getSlotContent('LabelStart')) : this.msg.startLabel}
        </div>
        <div id="${endLabelId}" class="${cn('ml-text-muted', this.getSlotClass('LabelEnd'))}">
          ${hasEndLabel ? unsafeHTML(this.getSlotContent('LabelEnd')) : this.msg.endLabel}
        </div>
      </div>
    `;
  }

  private renderViewMode(): TemplateResult {
    const placeholder = this.getPlaceholderText();
    const startEmpty = this.startValue === null || this.startValue === undefined;
    const endEmpty = this.endValue === null || this.endValue === undefined;

    return html`
      <div class="${cn('w-full', this.cssClass)}">
        ${this.renderLabel()}
        <div class="ml-range-view">
          ${startEmpty && endEmpty ? html`
            <span class="ml-text-faint">${placeholder}</span>
          ` : html`
            <div class="flex items-center gap-2 ml-text">
              ${this.renderValueDisplay(this.startValue)}
              <span class="ml-range-separator ml-text-muted">${this.msg.separator}</span>
              ${this.renderValueDisplay(this.endValue)}
            </div>
          `}
        </div>
      </div>
    `;
  }

  private renderEditMode(): TemplateResult {
    const { min, max } = this.getRangeBounds();
    const startValue = this.startValue ?? min;
    const endValue = this.endValue ?? max;
    const startPercent = this.getPercent(startValue, min, max);
    const endPercent = this.getPercent(endValue, min, max);
    const highlightLeft = Math.min(startPercent, endPercent);
    const highlightWidth = Math.max(0, Math.abs(endPercent - startPercent));
    const isBlocked = this.isBlocked();
    const hasError = this.hasError();
    const startLabelId = `${this.uid}-label-start`;
    const endLabelId = `${this.uid}-label-end`;

    return html`
      <div class="${cn('w-full', this.cssClass)}">
        ${this.renderLabel()}

        <div class="${this.getContainerClasses()}">
          <div
            class="relative w-full"
            @pointerdown="${this.handleSliderPointerDown}"
            @pointermove="${this.handleSliderPointerMove}"
          >
            <div class="ml-range-track"></div>
            <div
              class="ml-range-highlight"
              style="left: ${highlightLeft}%; width: ${highlightWidth}%;"
            ></div>

            <input
              class="${this.getInputClasses('start')}"
              style="${this.getInputStyle('start')}"
              type="range"
              min="${min}"
              max="${max}"
              step="${this.step ?? 1}"
              .value="${String(startValue)}"
              ?disabled="${isBlocked}"
              aria-labelledby="${startLabelId}"
              aria-valuemin="${min}"
              aria-valuemax="${max}"
              aria-valuenow="${this.startValue ?? ''}"
              aria-invalid="${hasError ? 'true' : 'false'}"
              aria-required="${this.required ? 'true' : 'false'}"
              aria-readonly="${this.readonly ? 'true' : 'false'}"
              @input="${this.handleStartInput}"
              @change="${this.handleStartChange}"
              @focus="${this.handleFocus}"
              @blur="${this.handleBlur}"
            />

            <input
              class="${this.getInputClasses('end')}"
              style="${this.getInputStyle('end')}"
              type="range"
              min="${min}"
              max="${max}"
              step="${this.step ?? 1}"
              .value="${String(endValue)}"
              ?disabled="${isBlocked}"
              aria-labelledby="${endLabelId}"
              aria-valuemin="${min}"
              aria-valuemax="${max}"
              aria-valuenow="${this.endValue ?? ''}"
              aria-invalid="${hasError ? 'true' : 'false'}"
              aria-required="${this.required ? 'true' : 'false'}"
              aria-readonly="${this.readonly ? 'true' : 'false'}"
              @input="${this.handleEndInput}"
              @change="${this.handleEndChange}"
              @focus="${this.handleFocus}"
              @blur="${this.handleBlur}"
            />

            ${this.loading ? html`<div class="ml-spinner ml-range-spinner"></div>` : html``}
          </div>

          <div class="mt-2 flex items-center justify-between text-sm ml-range-values">
            ${this.renderValueDisplay(this.startValue)}
            ${this.renderValueDisplay(this.endValue)}
          </div>

          ${this.renderValueLabels()}
        </div>

        ${this.renderHelperOrError()}
      </div>
    `;
  }

  // ===========================================================================
  // RENDER
  // ===========================================================================
  render() {
    const lang = this.getMessageKey(messages);
    this.msg = messages[lang];

    if (!this.isEditing) return this.renderViewMode();
    return this.renderEditMode();
  }
}
