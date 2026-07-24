/// <mls fileReference="_102053_/l2/molecules/groupnavigatesteps/ml-compact-step-indicator-glass.ts" enhancement="_102020_/l2/enhancementAura"/>
// =============================================================================
// COMPACT STEP INDICATOR — GLASSMORPHISM (mls-102053)
// =============================================================================
// Skill Group: groupNavigateSteps
// Casca (estratégia D): herda tudo de CompactStepIndicatorMolecule (mls-102040),
// inclusive render() — o markup base emite classes semânticas ml-*; a aparência
// vem do .less irmão, escopado sob esta tag.
// This molecule does NOT contain business logic.
import { customElement } from 'lit/decorators.js';
import { CompactStepIndicatorMolecule } from '/_102040_/l2/molecules/groupnavigatesteps/ml-compact-step-indicator.js';

@customElement('groupnavigatesteps--ml-compact-step-indicator-glass')
export class CompactStepIndicatorMoleculeGlass extends CompactStepIndicatorMolecule {}
