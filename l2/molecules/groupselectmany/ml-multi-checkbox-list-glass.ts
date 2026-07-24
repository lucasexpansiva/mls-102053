/// <mls fileReference="_102053_/l2/molecules/groupselectmany/ml-multi-checkbox-list-glass.ts" enhancement="_102020_/l2/enhancementAura"/>
// =============================================================================
// MULTI CHECKBOX LIST — GLASSMORPHISM (mls-102053)
// =============================================================================
// Skill Group: groupSelectMany
// Casca (estratégia D): herda tudo de MlMultiCheckboxListMolecule (mls-102040),
// inclusive render() — o markup base emite classes semânticas ml-*; a aparência
// vem do .less irmão, escopado sob esta tag.
// This molecule does NOT contain business logic.
import { customElement } from 'lit/decorators.js';
import { MlMultiCheckboxListMolecule } from '/_102040_/l2/molecules/groupselectmany/ml-multi-checkbox-list.js';

@customElement('groupselectmany--ml-multi-checkbox-list-glass')
export class MlMultiCheckboxListMoleculeGlass extends MlMultiCheckboxListMolecule {}
