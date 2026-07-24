/// <mls fileReference="_102053_/l2/molecules/groupselectone/ml-discrete-slider-glass.ts" enhancement="_102020_/l2/enhancementAura"/>
// =============================================================================
// DISCRETE SLIDER — GLASSMORPHISM (mls-102053)
// =============================================================================
// Skill Group: groupSelectOne
// Casca (estratégia D): herda tudo de MlDiscreteSliderMolecule (mls-102040),
// inclusive render() — o markup base emite classes semânticas ml-*; a aparência
// vem do .less irmão, escopado sob esta tag.
// This molecule does NOT contain business logic.
import { customElement } from 'lit/decorators.js';
import { MlDiscreteSliderMolecule } from '/_102040_/l2/molecules/groupselectone/ml-discrete-slider.js';

@customElement('groupselectone--ml-discrete-slider-glass')
export class MlDiscreteSliderMoleculeGlass extends MlDiscreteSliderMolecule {}
