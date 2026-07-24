/// <mls fileReference="_102053_/l2/molecules/groupenterboolean/ml-toggle-switch-glass.ts" enhancement="_102020_/l2/enhancementAura"/>
// =============================================================================
// TOGGLE SWITCH — GLASSMORPHISM (mls-102053)
// =============================================================================
// Skill Group: groupEnterBoolean
// Casca (estratégia D): herda tudo de ToggleSwitchMolecule (mls-102040),
// inclusive render() — o markup base emite classes semânticas ml-*; a aparência
// vem do .less irmão, escopado sob esta tag.
// This molecule does NOT contain business logic.
import { customElement } from 'lit/decorators.js';
import { ToggleSwitchMolecule } from '/_102040_/l2/molecules/groupenterboolean/ml-toggle-switch.js';

@customElement('groupenterboolean--ml-toggle-switch-glass')
export class ToggleSwitchMoleculeGlass extends ToggleSwitchMolecule {}
