/// <mls fileReference="_102053_/l2/molecules/groupselectone/ml-select-one-test.defs.ts" enhancement="_blank" />

// Do not change – automatically generated code. 

export const group = 'groupSelectOne';
export const skill = `# Metadata
- TagName: groupselectone--ml-select-one-test

# Objective
Allow a user to choose exactly one option from a defined set, using different presentation styles suitable for various contexts such as plan selection or state selection.

# Responsibilities
- Present multiple options and allow only one to be chosen at a time.
- Remember the currently chosen option and indicate clearly when nothing is chosen.
- Support different presentation styles including dropdown, radio group, segmented control, list, and table.
- In dropdown style, reveal options when activated and conceal them when the user selects an option, clicks outside the selection area, or presses the Escape key.
- Allow narrowing down visible options through text input when search is enabled.
- Display unavailable options in a way that prevents their selection.
- Signal when the user moves focus into or out of the selection area.
- Signal when the chosen option changes.
- Provide an interactive interface when editable, and display only the chosen option label or an empty indicator when not editable.
- Indicate an invalid state when a selection is required but none is made.

# Constraints
- Only one option can be selected simultaneously.
- Unavailable options must not respond to selection attempts.
- When inactive or locked, all interaction is blocked, options cannot be revealed, and the selection cannot change.
- Search filtering must only hide non-matching options without altering the underlying choices.
- The non-editable presentation must not allow changing the selected option.
- An empty state must appear when no options exist or when filtering returns no results.

# Notes
- Distinct behavioral states must be maintained for normal, selected, unavailable, locked, and invalid conditions.`;

