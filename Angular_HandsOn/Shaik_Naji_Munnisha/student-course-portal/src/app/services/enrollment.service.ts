import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CourseService } from './course.service';
import { Course } from '../models/course.model';

// Hands-On 6, Task 2: EnrollmentService injects CourseService (service-to-service DI)
// and holds simple in-memory enrollment state used by CourseCard / StudentProfile.
@Injectable({ providedIn: 'root' })
export class EnrollmentService {
  private enrolledCourseIds$ = new BehaviorSubject<number[]>([]);
  readonly enrolledIds$ = this.enrolledCourseIds$.asObservable();

  constructor(private courseService: CourseService) {}

  enroll(courseId: number): void {
    const current = this.enrolledCourseIds$.value;
    if (!current.includes(courseId)) {
      this.enrolledCourseIds$.next([...current, courseId]);
    }
  }

  unenroll(courseId: number): void {
    this.enrolledCourseIds$.next(this.enrolledCourseIds$.value.filter((id) => id !== courseId));
  }

  isEnrolled(courseId: number): boolean {
    return this.enrolledCourseIds$.value.includes(courseId);
  }

  getEnrolledIds(): number[] {
    return this.enrolledCourseIds$.value;
  }
}
