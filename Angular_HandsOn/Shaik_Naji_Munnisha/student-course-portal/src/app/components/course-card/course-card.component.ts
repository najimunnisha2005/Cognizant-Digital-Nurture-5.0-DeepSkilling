import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { NgClass, NgStyle, NgIf, NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';
import { Course } from '../../models/course.model';
import { CreditLabelPipe } from '../../pipes/credit-label.pipe';
import { HighlightDirective } from '../../directives/highlight.directive';
import { EnrollmentService } from '../../services/enrollment.service';

// Hands-On 2: @Input/@Output parent-child communication + ngOnChanges lifecycle hook.
// Hands-On 3: *ngSwitch badge, [ngClass]/[ngStyle], custom directive + pipe usage.
// Hands-On 6: injects EnrollmentService to toggle Enroll/Unenroll.
@Component({
  selector: 'app-course-card',
  standalone: true,
  imports: [NgClass, NgStyle, NgIf, NgSwitch, NgSwitchCase, NgSwitchDefault, CreditLabelPipe, HighlightDirective],
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css'],
})
export class CourseCardComponent implements OnChanges {
  @Input() course!: Course;
  @Output() enrollRequested = new EventEmitter<number>();

  isExpanded = false;

  constructor(private enrollmentService: EnrollmentService) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['course']) {
      console.log('course changed:', changes['course'].previousValue, '->', changes['course'].currentValue);
    }
  }

  get cardClasses() {
    return {
      'card--enrolled': this.isEnrolled,
      'card--full': this.course?.credits >= 4,
      expanded: this.isExpanded,
    };
  }

  get borderStyle() {
    const colors: Record<Course['gradeStatus'], string> = {
      passed: '#16a34a',
      failed: '#dc2626',
      pending: '#9ca3af',
    };
    return { 'border-left-color': colors[this.course.gradeStatus] };
  }

  get isEnrolled(): boolean {
    return this.enrollmentService.isEnrolled(this.course.id);
  }

  toggleExpanded(): void {
    this.isExpanded = !this.isExpanded;
  }

  onEnrollClick(): void {
    if (this.isEnrolled) {
      this.enrollmentService.unenroll(this.course.id);
    } else {
      this.enrollmentService.enroll(this.course.id);
    }
    this.enrollRequested.emit(this.course.id);
  }
}
