/// <mls fileReference="_102053_/l2/molecules/groupenternumberinterval/ml-number-range-slider2.defs.ts" enhancement="_blank" />

// Do not change – automatically generated code. 

export const group = 'groupEnterNumberInterval';
export const skill = `# Metadata
- TagName: groupenternumberinterval--ml-number-range-slider2

# Objective
Provide a dual-handle numeric range slider that lets the user select a minimum and a maximum value within a bounded interval (for example, a price range). The molecule must also be able to present the selected interval as static text when not in edit mode.

# Responsibilities
- Allow the user to select two numeric values, a lower bound and an upper bound, on a single horizontal track.
- Render two handles: a lower handle that sets the minimum value and an upper handle that sets the maximum value.
- Keep \`startValue ≤ endValue\` at all times; the lower handle must never visually or logically pass the upper handle.
- Update values continuously while a handle is being dragged, and confirm the final selection when the handle is released.
- Snap values to a defined step increment, and format stored and displayed values with a defined decimal precision.
- Enforce a minimum gap between the two handles so they cannot be brought closer than allowed.
- Enforce a maximum gap between the two handles so they cannot be moved further apart than allowed.
- Clamp any value to the configured minimum and maximum bounds.
- Reorder the two values if the molecule is configured with \`startValue > endValue\`, so the lower value is always the start and the higher value is always the end.
- Provide keyboard interaction on each handle, with the same step behavior as dragging.
- Indicate which handle is currently being adjusted (lower or upper), and clear that indication when no handle is active.
- Show a static, formatted representation of the interval (with optional prefix and suffix) when the molecule is in view mode, without handles and without interactive behavior.
- Allow the field to be disabled, read-only, loading, and required, with appropriate visual and behavioral states for each.
- Display a field label, per-handle labels, helper text, and an error message, each appearing in the correct position relative to the control.
- Apply accessibility attributes so that each handle is properly announced to assistive technologies, including its current value, range, label, read-only state, required state, error state, and association with the error message when applicable.

# Constraints
- The slider is horizontal only; handles move left and right along a single track.
- \`step\` must be respected on drag, on keyboard arrow interaction, and on any value assignment.
- \`decimals\` defines the precision of both stored and displayed values; 0 means integer-only values.
- Values outside \`[min, max]\` must be clamped to the configured bounds on assignment.
- If a programmatic configuration sets \`startValue > endValue\`, the values must be reordered so that \`startValue ≤ endValue\`.
- \`minGap\` must always be respected: when a handle is dragged past the opposite handle, the opposite handle must move to preserve the minimum gap.
- \`maxGap\` must always be respected: when a dragged handle would create a gap larger than allowed, the opposite handle must be dragged along to preserve the maximum gap.
- The lower handle is always positioned at or to the left of the upper handle; the two handles must never overlap visually.
- The active handle (the one currently being adjusted) must be visually distinct from the inactive handle.
- In view mode, no handles, no helper, no error, and no interactive events are rendered; only the formatted interval text is shown.
- In disabled state, the handles must be non-interactive and rendered with reduced opacity.
- In read-only state, the handles must remain visible but must not be draggable or focusable for interaction; the reduced-opacity disabled style must not be applied.
- In loading state, interaction with the handles must be blocked and a loading indicator must be shown.
- When required and one of the two values is missing, the error visual state must be applied until both values are provided.
- When an error message is present, it must replace the helper text in the position below the slider.
- The field label, per-handle labels, helper, error, prefix, and suffix must each appear in the correct position relative to the slider (label above, helper or error below, prefix before values, suffix after values).
- Each handle must expose accessibility attributes describing its minimum, maximum, current value, label, read-only state, required state, invalid state, and a reference to the error element when applicable.
- When a handle loses focus, the molecule must signal that focus has been left; when a handle receives focus, the molecule must signal that focus has been entered.

# Notes
- The \`placeholder\` is shown only while the interval is not fully set; once both values are defined, the formatted values are displayed.
- Values are formatted using the configured \`locale\` and \`decimals\` for both display and storage.
- The selected interval is visually represented by a highlighted segment between the two handles, distinct from the unselected portions of the track.
- Consumer-provided styling hooks are available on the host element and on each named slot (label, per-handle labels, helper, prefix, suffix) so that layout and positioning can be customized without changing the molecule's behavior.`;

