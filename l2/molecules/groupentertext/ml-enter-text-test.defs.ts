/// <mls fileReference="_102053_/l2/molecules/groupentertext/ml-enter-text-test.defs.ts" enhancement="_blank" />

// Do not change – automatically generated code. 

export const group = 'groupEnterText';
export const skill = `# Metadata
- TagName: groupentertext--ml-enter-text-test

# Objective
Capture general text input from users with support for minimum and maximum character limits. Provide clear visual feedback for validation errors and adapt its presentation across editing, viewing, disabled, readonly, and loading states.

# Responsibilities
- Accept text input from users within configurable minimum and maximum character boundaries
- Prevent text entry beyond the defined maximum character limit
- Indicate an error state when entered text is below the defined minimum character limit
- Display a character counter in multi-line mode when a maximum limit is defined
- Communicate the current text value whenever the user modifies the content
- Communicate the text value when the user leaves the field
- Signal when the field gains focus and when it loses focus
- Render as a single-line field or a multi-line text region based on the configured row count
- Display static content when in view mode instead of an editable input
- Show placeholder text when the field is empty
- Support insertion of label, helper text, prefix, and suffix content
- Present distinct visual treatments for normal, error, disabled, readonly, and loading states
- Mask sensitive content in view mode when configured for password input
- Display a dash placeholder for empty values in view mode

# Constraints
- Must not allow the text value to exceed the configured maximum length during entry
- Must enter an error state when text length is below the configured minimum and must display the associated error message
- Must not display helper text, error messages, or input controls when in view mode
- Must block user interaction when disabled or loading
- Must display reduced opacity when disabled
- Must display selectable text styling when readonly
- Must render a single-line field when configured for one row, and a multi-line region when configured for multiple rows
- Must show the character counter only in multi-line mode with a maximum length defined
- Must display masked characters for password-type fields in view mode regardless of actual value
- Must display a dash placeholder for empty values in view mode
- Must apply error styling to borders and highlights when in an error state

# Notes
- Error state activation depends on the relationship between current text length and the configured minimum length`;

