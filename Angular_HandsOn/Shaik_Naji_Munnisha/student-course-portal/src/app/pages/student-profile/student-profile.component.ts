import { Component, OnInit } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { CourseService } from '../../services/course.service';
import { EnrollmentService } from '../../services/enrollment.service';
import { Course } from '../../models/course.model';

// Hands-On 6, Task 2: reads enrolled course ids from EnrollmentService, resolves
// them to full Course objects via CourseService.
@Component({
  selector: 'app-student-profile',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './student-profile.component.html',
  styleUrls: ['./student-profile.component.css'],
})
export class StudentProfileComponent implements OnInit {
  enrolledCourses: Course[] = [];

  constructor(private courseService: CourseService, private enrollmentService: EnrollmentService) {}

  ngOnInit(): void {
    const enrolledIds = this.enrollmentService.getEnrolledIds();
    this.courseService.getCourses().subscribe({
      next: (courses) => (this.enrolledCourses = courses.filter((c) => enrolledIds.includes(c.id))),
      error: () => (this.enrolledCourses = []),
    });
  }
}
