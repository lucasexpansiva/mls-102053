/// <mls fileReference="_102053_/l2/molecules/groupenternumberinterval/ml-number-range-slider2.ts" enhancement="_102020_/l2/enhancementAura"/>
// =============================================================================
// ML NUMBER RANGE SLIDER 2 MOLECULE
// =============================================================================
// Skill Group: groupEnterNumberInterval
// Dual-handle numeric range slider (horizontal). Presentation-only.
// This molecule does NOT contain business logic.

import { html, svg, TemplateResult } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import { propertyDataSource } from '/_102029_/l2/collabDecorators.js';
import { MoleculeAuraElement } from '/_102033_/l2/moleculeBase.js';
import { cn } from '/_102033_/l2/cn.js';

/// **collab_i18n_start**
const message_en = {
  loading: 'Loading...',
  emptyValue: '—',
  rangeSeparator: '–',
  startHandle: 'Minimum value',
  endHandle: 'Maximum value',
};

type MessageType = typeof message_en;

const messages: Record<string, MessageType> = {
  en: message_en,
  pt: {
    loading: 'Carregando...',
    emptyValue: '—',
    rangeSeparator: '–',
    startHandle: 'Valor mínimo',
    endHandle: 'Valor máximo',
  },
};
/// **collab_i18n_end**

@customElement('groupenternumberinterval--ml-number-range-slider2')
export class MlNumberRangeSlider2Molecule extends MoleculeAuraElement {
  private msg: MessageType = messages.en;

  // ===========================================================================
  // SLOT TAGS
  // ===========================================================================
  slotTags = ['Label', 'LabelStart', 'LabelEnd', 'Helper', 'Prefix', 'Suffix'];

  // ===========================================================================
  // PROPERTIES — Data
  // ===========================================================================
  @propertyDataSource({ type: Number, attribute: 'start-value' })
  startValue: number | null = null;

  @propertyDataSource({ type: Number, attribute: 'end-value' })
  endValue: number | null = null;

  @propertyDataSource({ type: String })
  error: string = '';

  @propertyDataSource({ type: String })
  name: string = '';

  // ===========================================================================
  // PROPERTIES — Configuration
  // ===========================================================================
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

  // ===========================================================================
  // PROPERTIES — States
  // ===========================================================================
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

  @state()
  private focusedHandle: 'start' | 'end' | null = null;

  private trackEl: HTMLElement | null = null;
  private dragging = false;
  private boundPointerMove: ((e: PointerEvent) => void) | null = null;
  private boundPointerUp: ((e: PointerEvent) => void) | null = null;

  // ===========================================================================
  // LIFECYCLE
  // ===========================================================================
  disconnectedCallback() {
    super.disconnectedCallback();
    this.teardownDragListeners();
  }

  // ===========================================================================
  // BOUNDS HELPERS
  // ===========================================================================
  private getEffectiveMin(): number {
    return this.min === null || this.min === undefined ? 0 : Number(this.min);
  }

  private getEffectiveMax(): number {
    return this.max === null || this.max === undefined ? 100 : Number(this.max);
  }

  private getStep(): number {
    const s = Number(this.step);
    return !s || s <= 0 ? 1 : s;
  }

  private getDecimals(): number {
    const d = Number(this.decimals);
    return !d || d < 0 ? 0 : Math.floor(d);
  }

  private getMinGap(): number {
    const g = Number(this.minGap);
    return !g || g < 0 ? 0 : g;
  }

  private getMaxGap(): number {
    const g = Number(this.maxGap);
    return !g || g < 0 ? 0 : g;
  }

  private roundToDecimals(value: number): number {
    const d = this.getDecimals();
    const factor = Math.pow(10, d);
    return Math.round(value * factor) / factor;
  }

  private snapToStep(value: number): number {
    const min = this.getEffectiveMin();
    const step = this.getStep();
    const snapped = min + Math.round((value - min) / step) * step;
    return this.roundToDecimals(snapped);
  }

  private clampToBounds(value: number): number {
    let next = value;
    const min = this.getEffectiveMin();
    const max = this.getEffectiveMax();
    next = Math.max(next, min);
    next = Math.min(next, max);
    return this.roundToDecimals(next);
  }

  private resolvePair(
    start: number | null,
    end: number | null
  ): { start: number | null; end: number | null } {
    if (start === null && end === null) {
      return { start: null, end: null };
    }

    let s = start === null || start === undefined ? null : this.clampToBounds(this.snapToStep(Number(start)));
    let e = end === null || end === undefined ? null : this.clampToBounds(this.snapToStep(Number(end)));

    if (s !== null && e !== null) {
      if (s > e) {
        const tmp = s;
        s = e;
        e = tmp;
      }

      const minGap = this.getMinGap();
      const maxGap = this.getMaxGap();

      if (minGap > 0 && e - s < minGap) {
        e = this.clampToBounds(this.snapToStep(s + minGap));
        if (e - s < minGap) {
          s = this.clampToBounds(this.snapToStep(e - minGap));
        }
      }

      if (maxGap > 0 && e - s > maxGap) {
        e = this.clampToBounds(this.snapToStep(s + maxGap));
      }
    }

    return { start: s, end: e };
  }

  private getDisplayStart(): number {
    if (this.startValue !== null && this.startValue !== undefined) {
      return Number(this.startValue);
    }
    return this.getEffectiveMin();
  }

  private getDisplayEnd(): number {
    if (this.endValue !== null && this.endValue !== undefined) {
      return Number(this.endValue);
    }
    return this.getEffectiveMax();
  }

  private valueToPercent(value: number): number {
    const min = this.getEffectiveMin();
    const max = this.getEffectiveMax();
    const range = max - min;
    if (range <= 0) return 0;
    const pct = ((value - min) / range) * 100;
    return Math.min(100, Math.max(0, pct));
  }

  private percentToValue(percent: number): number {
    const min = this.getEffectiveMin();
    const max = this.getEffectiveMax();
    const raw = min + (percent / 100) * (max - min);
    return this.clampToBounds(this.snapToStep(raw));
  }

  private clientXToPercent(clientX: number): number {
    if (!this.trackEl) return 0;
    const rect = this.trackEl.getBoundingClientRect();
    if (rect.width <= 0) return 0;
    const x = clientX - rect.left;
    return Math.min(100, Math.max(0, (x / rect.width) * 100));
  }

  // ===========================================================================
  // FORMATTING
  // ===========================================================================
  private formatNumber(value: number | null | undefined): string {
    if (value === null || value === undefined || Number.isNaN(Number(value))) {
      return this.msg.emptyValue;
    }
    const num = Number(value);
    const d = this.getDecimals();
    const locale = this.locale && String(this.locale).trim() ? String(this.locale) : undefined;
    try {
      return num.toLocaleString(locale, {
        minimumFractionDigits: d,
        maximumFractionDigits: d,
      });
    } catch {
      return num.toFixed(d);
    }
  }

  private wrapWithAffixes(formatted: string): TemplateResult {
    const prefix = this.hasSlot('Prefix') ? this.getSlotContent('Prefix') : '';
    const suffix = this.hasSlot('Suffix') ? this.getSlotContent('Suffix') : '';
    return html`
      ${prefix
        ? html`<span class="${cn('ml-affix ml-prefix', this.getSlotClass('Prefix'))}">${unsafeHTML(prefix)}</span>`
        : ''}
      <span class="ml-value-text">${formatted}</span>
      ${suffix
        ? html`<span class="${cn('ml-affix ml-suffix', this.getSlotClass('Suffix'))}">${unsafeHTML(suffix)}</span>`
        : ''}
    `;
  }

  private formatIntervalDisplay(): TemplateResult {
    const hasStart = this.startValue !== null && this.startValue !== undefined;
    const hasEnd = this.endValue !== null && this.endValue !== undefined;

    if (!hasStart && !hasEnd) {
      return html`<span class="ml-text-faint">${this.msg.emptyValue}</span>`;
    }

    const startText = hasStart ? this.formatNumber(this.startValue) : this.msg.emptyValue;
    const endText = hasEnd ? this.formatNumber(this.endValue) : this.msg.emptyValue;

    return html`
      <span class="inline-flex items-center gap-1">
        ${this.wrapWithAffixes(startText)}
        <span class="ml-text-muted">${this.msg.rangeSeparator}</span>
        ${this.wrapWithAffixes(endText)}
      </span>
    `;
  }

  // ===========================================================================
  // VALUE UPDATES
  // ===========================================================================
  private applyPair(
    nextStart: number | null,
    nextEnd: number | null,
    emitInput: boolean,
    emitChange: boolean
  ) {
    const resolved = this.resolvePair(nextStart, nextEnd);
    const startChanged = resolved.start !== this.startValue;
    const endChanged = resolved.end !== this.endValue;

    if (startChanged) this.startValue = resolved.start;
    if (endChanged) this.endValue = resolved.end;

    if (emitInput && (startChanged || endChanged)) {
      this.dispatchInput();
    }
    if (emitChange && (startChanged || endChanged)) {
      this.dispatchChange();
    }
  }

  private moveHandle(handle: 'start' | 'end', rawValue: number, emitInput: boolean) {
    const minGap = this.getMinGap();
    const maxGap = this.getMaxGap();
    let s = this.getDisplayStart();
    let e = this.getDisplayEnd();
    let next = this.clampToBounds(this.snapToStep(rawValue));

    if (handle === 'start') {
      // Keep start ≤ end - minGap
      const maxStart = minGap > 0 ? e - minGap : e;
      if (next > maxStart) next = this.clampToBounds(this.snapToStep(maxStart));

      // maxGap: if gap would exceed, pull end along
      if (maxGap > 0 && e - next > maxGap) {
        e = this.clampToBounds(this.snapToStep(next + maxGap));
      }

      // minGap push end if needed after clamp
      if (minGap > 0 && e - next < minGap) {
        e = this.clampToBounds(this.snapToStep(next + minGap));
      }

      s = next;
    } else {
      // Keep end ≥ start + minGap
      const minEnd = minGap > 0 ? s + minGap : s;
      if (next < minEnd) next = this.clampToBounds(this.snapToStep(minEnd));

      // maxGap: if gap would exceed, pull start along
      if (maxGap > 0 && next - s > maxGap) {
        s = this.clampToBounds(this.snapToStep(next - maxGap));
      }

      // minGap push start if needed after clamp
      if (minGap > 0 && next - s < minGap) {
        s = this.clampToBounds(this.snapToStep(next - minGap));
      }

      e = next;
    }

    this.applyPair(s, e, emitInput, false);
  }

  private stepHandle(handle: 'start' | 'end', direction: 1 | -1) {
    if (this.disabled || this.readonly || this.loading || !this.isEditing) return;
    const current = handle === 'start' ? this.getDisplayStart() : this.getDisplayEnd();
    const next = current + direction * this.getStep();
    this.moveHandle(handle, next, true);
    this.dispatchChange();
  }

  // ===========================================================================
  // EVENTS
  // ===========================================================================
  private dispatchChange() {
    this.dispatchEvent(
      new CustomEvent('change', {
        bubbles: true,
        composed: true,
        detail: {
          startValue: this.startValue,
          endValue: this.endValue,
        },
      })
    );
  }

  private dispatchInput() {
    this.dispatchEvent(
      new CustomEvent('input', {
        bubbles: true,
        composed: true,
        detail: {
          startValue: this.startValue,
          endValue: this.endValue,
        },
      })
    );
  }

  private dispatchFocus() {
    this.dispatchEvent(
      new CustomEvent('focus', {
        bubbles: true,
        composed: true,
        detail: {},
      })
    );
  }

  private dispatchBlur() {
    this.dispatchEvent(
      new CustomEvent('blur', {
        bubbles: true,
        composed: true,
        detail: {},
      })
    );
  }

  // ===========================================================================
  // POINTER / DRAG
  // ===========================================================================
  private canInteract(): boolean {
    return !!(this.isEditing && !this.disabled && !this.readonly && !this.loading);
  }

  private handleTrackPointerDown(e: PointerEvent) {
    if (!this.canInteract()) return;
    if (e.button !== 0) return;

    this.trackEl = e.currentTarget as HTMLElement;
    const percent = this.clientXToPercent(e.clientX);
    const value = this.percentToValue(percent);

    const start = this.getDisplayStart();
    const end = this.getDisplayEnd();
    const distStart = Math.abs(value - start);
    const distEnd = Math.abs(value - end);

    // Prefer the closer handle; if equal, pick based on which side of midpoint
    let handle: 'start' | 'end';
    if (distStart < distEnd) {
      handle = 'start';
    } else if (distEnd < distStart) {
      handle = 'end';
    } else {
      handle = value <= (start + end) / 2 ? 'start' : 'end';
    }

    this.activeHandle = handle;
    this.dragging = true;
    this.moveHandle(handle, value, true);

    this.boundPointerMove = (ev: PointerEvent) => this.handlePointerMove(ev);
    this.boundPointerUp = (ev: PointerEvent) => this.handlePointerUp(ev);
    window.addEventListener('pointermove', this.boundPointerMove);
    window.addEventListener('pointerup', this.boundPointerUp);
    window.addEventListener('pointercancel', this.boundPointerUp);

    e.preventDefault();
  }

  private handleHandlePointerDown(e: PointerEvent, handle: 'start' | 'end') {
    if (!this.canInteract()) return;
    if (e.button !== 0) return;

    e.stopPropagation();
    e.preventDefault();

    const track = (e.currentTarget as HTMLElement).closest('.ml-slider-track') as HTMLElement | null;
    this.trackEl = track;
    this.activeHandle = handle;
    this.dragging = true;

    (e.currentTarget as HTMLElement).focus();

    this.boundPointerMove = (ev: PointerEvent) => this.handlePointerMove(ev);
    this.boundPointerUp = (ev: PointerEvent) => this.handlePointerUp(ev);
    window.addEventListener('pointermove', this.boundPointerMove);
    window.addEventListener('pointerup', this.boundPointerUp);
    window.addEventListener('pointercancel', this.boundPointerUp);
  }

  private handlePointerMove(e: PointerEvent) {
    if (!this.dragging || !this.activeHandle) return;
    const percent = this.clientXToPercent(e.clientX);
    const value = this.percentToValue(percent);
    this.moveHandle(this.activeHandle, value, true);
  }

  private handlePointerUp(_e: PointerEvent) {
    if (!this.dragging) return;
    this.dragging = false;
    this.teardownDragListeners();
    this.dispatchChange();
    this.activeHandle = null;
  }

  private teardownDragListeners() {
    if (this.boundPointerMove) {
      window.removeEventListener('pointermove', this.boundPointerMove);
      this.boundPointerMove = null;
    }
    if (this.boundPointerUp) {
      window.removeEventListener('pointerup', this.boundPointerUp);
      window.removeEventListener('pointercancel', this.boundPointerUp);
      this.boundPointerUp = null;
    }
  }

  // ===========================================================================
  // KEYBOARD
  // ===========================================================================
  private handleHandleKeyDown(e: KeyboardEvent, handle: 'start' | 'end') {
    if (!this.canInteract()) return;

    switch (e.key) {
      case 'ArrowLeft':
      case 'ArrowDown':
        e.preventDefault();
        this.activeHandle = handle;
        this.stepHandle(handle, -1);
        break;
      case 'ArrowRight':
      case 'ArrowUp':
        e.preventDefault();
        this.activeHandle = handle;
        this.stepHandle(handle, 1);
        break;
      case 'Home':
        e.preventDefault();
        this.activeHandle = handle;
        this.moveHandle(handle, this.getEffectiveMin(), true);
        this.dispatchChange();
        break;
      case 'End':
        e.preventDefault();
        this.activeHandle = handle;
        this.moveHandle(handle, this.getEffectiveMax(), true);
        this.dispatchChange();
        break;
      case 'PageDown':
        e.preventDefault();
        this.activeHandle = handle;
        this.moveHandle(
          handle,
          (handle === 'start' ? this.getDisplayStart() : this.getDisplayEnd()) - this.getStep() * 10,
          true
        );
        this.dispatchChange();
        break;
      case 'PageUp':
        e.preventDefault();
        this.activeHandle = handle;
        this.moveHandle(
          handle,
          (handle === 'start' ? this.getDisplayStart() : this.getDisplayEnd()) + this.getStep() * 10,
          true
        );
        this.dispatchChange();
        break;
      default:
        break;
    }
  }

  private handleHandleFocus(handle: 'start' | 'end') {
    this.focusedHandle = handle;
    this.dispatchFocus();
  }

  private handleHandleBlur(handle: 'start' | 'end') {
    if (this.focusedHandle === handle) {
      this.focusedHandle = null;
    }
    if (this.activeHandle === handle && !this.dragging) {
      this.activeHandle = null;
    }
    this.dispatchBlur();
  }

  // ===========================================================================
  // CLASS HELPERS
  // ===========================================================================
  private getRootClasses(): string {
    return [
      'flex flex-col w-full gap-1',
      'ml-number-range-slider',
      this.disabled ? 'ml-disabled' : '',
      this.error ? 'ml-has-error' : '',
      !this.isEditing ? 'ml-view-mode' : '',
    ]
      .filter(Boolean)
      .join(' ');
  }

  private getTrackClasses(): string {
    return [
      'relative w-full h-2 flex items-center',
      'ml-slider-track',
      this.canInteract() ? 'cursor-pointer' : '',
      this.error ? 'ml-slider-track-error' : '',
    ]
      .filter(Boolean)
      .join(' ');
  }

  private getHandleClasses(handle: 'start' | 'end'): string {
    const isActive = this.activeHandle === handle || this.focusedHandle === handle;
    return [
      'absolute top-1/2 -translate-y-1/2 -translate-x-1/2',
      'w-4 h-4 rounded-full',
      'ml-slider-handle',
      handle === 'start' ? 'ml-slider-handle-start' : 'ml-slider-handle-end',
      isActive ? 'ml-slider-handle-active' : '',
      this.canInteract() ? 'cursor-grab' : '',
      this.dragging && this.activeHandle === handle ? 'cursor-grabbing' : '',
    ]
      .filter(Boolean)
      .join(' ');
  }

  // ===========================================================================
  // A11Y HELPERS
  // ===========================================================================
  private getHandleLabel(handle: 'start' | 'end'): string {
    if (handle === 'start') {
      const slot = this.getSlotContent('LabelStart');
      if (slot) {
        // strip tags for aria
        const tmp = document.createElement('div');
        tmp.innerHTML = slot;
        return tmp.textContent?.trim() || this.msg.startHandle;
      }
      return this.msg.startHandle;
    }
    const slot = this.getSlotContent('LabelEnd');
    if (slot) {
      const tmp = document.createElement('div');
      tmp.innerHTML = slot;
      return tmp.textContent?.trim() || this.msg.endHandle;
    }
    return this.msg.endHandle;
  }

  private getErrorId(): string {
    return `ml-nrs-error-${this.name || 'field'}`;
  }

  private getLabelId(): string {
    return `ml-nrs-label-${this.name || 'field'}`;
  }

  // ===========================================================================
  // RENDER PIECES
  // ===========================================================================
  private renderLabel(): TemplateResult {
    if (!this.hasSlot('Label')) return html``;
    return html`
      <div
        id=${this.getLabelId()}
        class="${cn('mb-1 text-sm ml-label', this.getSlotClass('Label'))}"
      >
        ${unsafeHTML(this.getSlotContent('Label'))}
        ${this.required && this.isEditing
          ? html`<span class="ml-required-mark" aria-hidden="true">*</span>`
          : ''}
      </div>
    `;
  }

  private renderHandleLabels(): TemplateResult {
    const hasStart = this.hasSlot('LabelStart');
    const hasEnd = this.hasSlot('LabelEnd');
    if (!hasStart && !hasEnd) return html``;

    return html`
      <div class="flex items-center justify-between gap-2 mb-1">
        <div class="${cn('text-xs ml-text-muted', this.getSlotClass('LabelStart'))}">
          ${hasStart ? unsafeHTML(this.getSlotContent('LabelStart')) : ''}
        </div>
        <div class="${cn('text-xs ml-text-muted text-right', this.getSlotClass('LabelEnd'))}">
          ${hasEnd ? unsafeHTML(this.getSlotContent('LabelEnd')) : ''}
        </div>
      </div>
    `;
  }

  private renderValueReadout(): TemplateResult {
    const hasStart = this.startValue !== null && this.startValue !== undefined;
    const hasEnd = this.endValue !== null && this.endValue !== undefined;
    const showPlaceholder = !hasStart || !hasEnd;

    if (showPlaceholder && this.placeholder) {
      return html`
        <div class="flex items-center justify-between gap-2 mb-2 text-sm">
          <span class="ml-text-faint">${this.placeholder}</span>
        </div>
      `;
    }

    return html`
      <div class="flex items-center justify-between gap-2 mb-2 text-sm ml-text">
        <span class="inline-flex items-center gap-1">
          ${this.wrapWithAffixes(this.formatNumber(hasStart ? this.startValue : null))}
        </span>
        <span class="ml-text-muted">${this.msg.rangeSeparator}</span>
        <span class="inline-flex items-center gap-1">
          ${this.wrapWithAffixes(this.formatNumber(hasEnd ? this.endValue : null))}
        </span>
      </div>
    `;
  }

  private renderHandle(handle: 'start' | 'end', value: number, percent: number): TemplateResult {
    const isInteractive = this.canInteract();
    const hasError = !!(this.error && String(this.error).trim());
    const describedBy = hasError ? this.getErrorId() : nothingAttr();

    return html`
      <div
        class="${this.getHandleClasses(handle)}"
        style="left: ${percent}%;"
        role="slider"
        tabindex=${isInteractive ? '0' : '-1'}
        aria-label=${this.getHandleLabel(handle)}
        aria-valuemin=${this.getEffectiveMin()}
        aria-valuemax=${this.getEffectiveMax()}
        aria-valuenow=${value}
        aria-valuetext=${this.formatNumber(value)}
        aria-disabled=${this.disabled ? 'true' : 'false'}
        aria-readonly=${this.readonly ? 'true' : 'false'}
        aria-required=${this.required ? 'true' : 'false'}
        aria-invalid=${hasError ? 'true' : 'false'}
        aria-describedby=${describedBy}
        @pointerdown=${(e: PointerEvent) => this.handleHandlePointerDown(e, handle)}
        @keydown=${(e: KeyboardEvent) => this.handleHandleKeyDown(e, handle)}
        @focus=${() => this.handleHandleFocus(handle)}
        @blur=${() => this.handleHandleBlur(handle)}
      ></div>
    `;
  }

  private renderSlider(): TemplateResult {
    const startVal = this.getDisplayStart();
    const endVal = this.getDisplayEnd();
    const startPct = this.valueToPercent(startVal);
    const endPct = this.valueToPercent(endVal);

    // Ensure visual order: start handle never to the right of end
    const leftPct = Math.min(startPct, endPct);
    const rightPct = Math.max(startPct, endPct);
    const rangeWidth = Math.max(0, rightPct - leftPct);

    return html`
      <div class="px-2 py-3">
        <div
          class="${this.getTrackClasses()}"
          @pointerdown=${(e: PointerEvent) => this.handleTrackPointerDown(e)}
        >
          <div class="absolute inset-0 rounded-full ml-slider-rail"></div>
          <div
            class="absolute top-0 bottom-0 rounded-full ml-slider-range"
            style="left: ${leftPct}%; width: ${rangeWidth}%;"
          ></div>
          ${this.renderHandle('start', startVal, startPct)}
          ${this.renderHandle('end', endVal, endPct)}
        </div>
      </div>
    `;
  }

  private renderFeedback(): TemplateResult {
    if (!this.isEditing) return html``;

    if (this.error && String(this.error).trim()) {
      return html`
        <p
          id=${this.getErrorId()}
          class="${cn('mt-1 text-xs ml-error-text')}"
          role="alert"
        >
          ${unsafeHTML(String(this.error))}
        </p>
      `;
    }

    if (this.hasSlot('Helper')) {
      return html`
        <p class="${cn('mt-1 text-xs ml-helper', this.getSlotClass('Helper'))}">
          ${unsafeHTML(this.getSlotContent('Helper'))}
        </p>
      `;
    }

    return html``;
  }

  private renderLoading(): TemplateResult {
    return html`
      <div class="${cn(this.getRootClasses(), this.cssClass)}" aria-busy="true">
        ${this.renderLabel()}
        <div class="flex items-center gap-2 py-3">
          <div class="ml-spinner animate-spin w-5 h-5 rounded-full border-2"></div>
          <span class="text-sm ml-text-muted">${this.msg.loading}</span>
        </div>
        <div class="w-full h-2 rounded-full ml-skeleton"></div>
      </div>
    `;
  }

  private renderViewMode(): TemplateResult {
    return html`
      <div class="${cn(this.getRootClasses(), this.cssClass)}">
        ${this.renderLabel()}
        <div class="text-sm ml-text py-1">
          ${this.formatIntervalDisplay()}
        </div>
      </div>
    `;
  }

  // ===========================================================================
  // RENDER
  // ===========================================================================
  render() {
    const lang = this.getMessageKey(messages);
    this.msg = messages[lang] || messages.en;

    if (this.loading) {
      return this.renderLoading();
    }

    if (!this.isEditing) {
      return this.renderViewMode();
    }

    return html`
      <div class="${cn(this.getRootClasses(), this.cssClass)}">
        ${this.renderLabel()}
        ${this.renderHandleLabels()}
        ${this.renderValueReadout()}
        ${this.renderSlider()}
        ${this.renderFeedback()}
      </div>
    `;
  }
}

/** Helper: return empty string for aria-describedby when no error (avoids "null" attr). */
function nothingAttr(): string {
  return '';
}
