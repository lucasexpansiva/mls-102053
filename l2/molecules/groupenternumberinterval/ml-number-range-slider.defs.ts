/// <mls fileReference="_102053_/l2/molecules/groupenternumberinterval/ml-number-range-slider.defs.ts" enhancement="_blank" />

// Do not change – automatically generated code. 

export const group = 'groupEnterNumberInterval';
export const skill = `# Metadata
- TagName: groupenternumberinterval--ml-number-range-slider

# Objective
Allow users to select and view a numeric interval by adjusting two controls on a horizontal track, supporting both interactive editing and read-only display modes.

# Responsibilities
- Present a horizontal track spanning the available width, with two controls representing the lower and upper bounds of a numeric interval.
- Allow independent adjustment of each bound along the track.
- Keep both values within the overall allowed minimum and maximum limits.
- Enforce configured step increments and decimal precision during adjustment.
- Ensure the lower bound never exceeds the upper bound.
- Maintain configured minimum and maximum distance between the two bounds by adjusting the opposite bound when necessary.
- Visually indicate which control is currently being adjusted.
- Continuously communicate current values while adjustment is in progress.
- Communicate confirmed values when adjustment completes or focus moves away.
- Communicate when the component receives or loses focus.
- In interactive mode, display the track and adjustable controls.
- In view mode, display the interval as static text including any prefix and suffix.
- In view mode, show a placeholder when both values are absent, a partial value when only one is present, and the full interval when both are present.
- Prevent user interaction when disabled and present a disabled appearance.
- Prevent value changes when in read-only state while keeping values visible.
- Prevent interaction and indicate a loading state when loading.
- Display an error message and error appearance when an error is present; suppress helper information while an error is shown.
- Display helper information below the track when no error is present and helper content is available.
- Associate available labels with their corresponding controls for accessibility.
- Expose minimum, maximum, current values, validity, requirement status, and read-only state to assistive technologies.
- Present prefix and suffix content adjacent to numeric values in both interactive and view modes.
- Contain internal interactions so they do not propagate outside the component.
- Highlight the segment between the two controls to indicate the selected interval.
- Present controls with distinct visual states for normal, hover, active, disabled, read-only, and loading conditions.
- Emphasize the control currently being adjusted.
- Apply error styling to the track and controls when an error is present.
- Place the primary label above the track and position start and end labels near their respective controls or values.
- Place helper or error text below the track.

# Constraints
- The lower bound must always be less than or equal to the upper bound.
- Values must respect configured minimum, maximum, step, and decimal precision.
- Distance between bounds must respect configured minimum and maximum gap limits.
- Error state takes precedence over helper display.
- Disabled state prevents all user interaction.
- Read-only state prevents value modification but maintains visibility.
- Loading state prevents interaction and supersedes other interactive states.
- Visual presentation must conform to the system's defined standards for colors, borders, shapes, spacing, typography, and motion.

# Notes
- The component operates within the groupEnterNumberInterval contract.
- Visual feedback should clearly distinguish the active control during adjustment.`;

