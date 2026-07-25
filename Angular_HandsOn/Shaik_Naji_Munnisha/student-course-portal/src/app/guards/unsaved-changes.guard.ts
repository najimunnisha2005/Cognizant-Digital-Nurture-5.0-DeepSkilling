import { CanDeactivateFn } from '@angular/router';

// Hands-On 7, Step 77: CanDeactivate guard.
// Any component that wants this protection should implement HasUnsavedChanges.
export interface HasUnsavedChanges {
  hasUnsavedChanges(): boolean;
}

export const unsavedChangesGuard: CanDeactivateFn<HasUnsavedChanges> = (component) => {
  if (component.hasUnsavedChanges && component.hasUnsavedChanges()) {
    return window.confirm('You have unsaved changes. Leave?');
  }
  return true;
};
