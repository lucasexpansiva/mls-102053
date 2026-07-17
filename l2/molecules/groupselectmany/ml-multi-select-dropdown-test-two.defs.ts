/// <mls fileReference="_102053_/l2/molecules/groupselectmany/ml-multi-select-dropdown-test-two.defs.ts" enhancement="_blank" />

// Do not change – automatically generated code. 

export const group = 'groupSelectMany';
export const skill = `# Metadata
- TagName: groupselectmany--ml-multi-select-dropdown-test-two

# Objective
A multi-selection dropdown that allows the user to choose one or more options from a list. It supports minimum and maximum selection limits, optional search filtering, and can operate in either an interactive or a read-only display mode.

# Responsibilities
- Allow the user to select multiple options simultaneously from a provided list, producing a comma-separated text value representing the current choices.
- Enforce a configurable minimum number of selections that must be made.
- Enforce a configurable maximum number of selections, preventing any additional selection once the limit is reached.
- Display a visual error state when the count of selected items is below the required minimum or when an external error state is indicated.
- Keep the selection panel open after each selection or deselection to allow consecutive choices without requiring the panel to be reopened.
- Render the selection panel outside the component boundaries so it is not clipped by ancestor containers.
- Toggle the panel open and closed when the user activates the trigger; close the panel when the user presses Escape or clicks outside the component and its layer.
- Present disabled options in the list without allowing them to be selected.
- Visually deactivate and block selection of all unselected options when the maximum selection limit is reached; restore them only after a selected item is removed.
- Provide an optional search field at the top of the selection panel that filters the list by visible option text.
- Support an editable mode that enables full interaction, and a view mode that presents selected values as static text or tags without an interactive panel.
- Signal when the selection changes, communicating the updated comma-separated value.
- Signal when the field gains focus and when it loses focus.
- Honor disabled, read-only, and loading states by removing interactivity and preventing the panel from opening.
- Accommodate a label, helper text, and an empty state message when no options are available.

# Constraints
- The trigger must display placeholder text when no option is selected, and must show the quantity or representation of selected items when one or more are chosen.
- The selection panel must be positioned directly below the trigger, match the trigger width, align to the left, and appear visually above all other page elements.
- Every option inside the panel must present a clear visual marker indicating whether it is currently selected.
- The error state must highlight the field border with the group's error color and display an error message beneath the field using the group's error text style.
- The disabled state must reduce the component opacity and use a non-interactive cursor on the trigger.
- The loading state must replace the content with a loading indicator and block the panel from opening.
- When the maximum selection limit is active, unselected options must appear inactive and must not respond to hover or activation.
- The search field, when visible, must occupy the full width at the top of the panel and follow the group's standard input appearance.
- In view mode, only the selected values may be rendered as text or tags; the trigger, panel, helper text, and error messages must remain hidden.
- All visual presentation must rely on the group's semantic style classes and design tokens for color, border, shadow, and typography. Layout and positioning must be defined separately from these semantic styles.

# Notes
- The comma-separated value format is used consistently for representing the set of selected options.`;

