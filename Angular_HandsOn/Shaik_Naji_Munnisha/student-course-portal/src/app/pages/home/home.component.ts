import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CourseService } from '../../services/course.service';

// Hands-On 1: welcome heading + stats row.
// Hands-On 2: interpolation, property binding, event binding, two-way binding (ngModel),
// ngOnInit / ngOnDestroy lifecycle hooks.
// Hands-On 6: live course count from the shared CourseService (falls back to a
// hardcoded count if the mock API isn't running yet).
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule, RouterLink, NgIf],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, OnDestroy {
  portalName = 'Student Course Portal';
  isPortalActive = true;
  message = '';
  searchTerm = '';

  coursesAvailable = 12;
  enrolled = 3;
  gpa = 3.8;

  constructor(private courseService: CourseService) {}

  ngOnInit(): void {
    console.log('HomeComponent initialised — courses loaded');
    this.courseService.getCourses().subscribe({
      next: (courses) => (this.coursesAvailable = courses.length),
      error: () => {
        // Mock API not running yet — keep the hardcoded fallback value.
      },
    });
  }

  ngOnDestroy(): void {
    console.log('HomeComponent destroyed');
  }

  onEnrollClick(): void {
    this.message = 'Enrollment opened!';
  }
}
