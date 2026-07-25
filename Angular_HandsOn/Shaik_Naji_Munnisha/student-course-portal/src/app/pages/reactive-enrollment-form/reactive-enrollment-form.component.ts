import { Component, OnInit } from '@angular/core';
import { NgIf, NgFor } from '@angular/common';
import {
  AbstractControl,
  FormArray,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { HasUnsavedChanges } from '../../guards/unsaved-changes.guard';

// Hands-On 5: FormBuilder/FormGroup, built-in + custom sync validator,
// custom async validator, FormArray for dynamic controls.
// Hands-On 7: implements HasUnsavedChanges for the CanDeactivate guard.

// Custom synchronous validator: disallow course codes starting with 'XX'.
function noCourseCodePrefix(control: AbstractControl): ValidationErrors | null {
  const value = String(control.value ?? '');
  return value.toUpperCase().startsWith('XX') ? { noCourseCode: true } : null;
}

// Custom async validator: simulate an email-availability check.
function simulateEmailCheck(control: AbstractControl): Promise<ValidationErrors | null> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(String(control.value ?? '').includes('test@') ? { emailTaken: true } : null);
    }, 800);
  });
}

@Component({
  selector: 'app-reactive-enrollment-form',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf, NgFor],
  templateUrl: './reactive-enrollment-form.component.html',
  styleUrls: ['./reactive-enrollment-form.component.css'],
})
export class ReactiveEnrollmentFormComponent implements OnInit, HasUnsavedChanges {
  enrollForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.enrollForm = this.fb.group({
      studentName: ['', [Validators.required, Validators.minLength(3)]],
      studentEmail: this.fb.control('', [Validators.required, Validators.email], [simulateEmailCheck]),
      courseId: [null, [Validators.required, noCourseCodePrefix]],
      preferredSemester: ['Odd', Validators.required],
      agreeToTerms: [false, Validators.requiredTrue],
      additionalCourses: this.fb.array([]),
    });
  }

  get additionalCourses(): FormArray {
    return this.enrollForm.get('additionalCourses') as FormArray;
  }

  addCourse(): void {
    this.additionalCourses.push(this.fb.control('', Validators.required));
  }

  removeCourse(index: number): void {
    this.additionalCourses.removeAt(index);
  }

  onSubmit(): void {
    console.log('value:', this.enrollForm.value);
    console.log('raw value:', this.enrollForm.getRawValue());
    // enrollForm.value excludes disabled controls; getRawValue() includes everything.
  }

  hasUnsavedChanges(): boolean {
    return this.enrollForm.dirty;
  }
}
