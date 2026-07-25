import { Component, OnInit } from '@angular/core';
import { NgIf } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CourseService } from '../../services/course.service';
import { Course } from '../../models/course.model';

// Hands-On 7, Task 1: reads the :id route parameter and loads the matching course.
@Component({
  selector: 'app-course-detail',
  standalone: true,
  imports: [NgIf, RouterLink],
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css'],
})
export class CourseDetailComponent implements OnInit {
  course: Course | null = null;
  errorMessage = '';

  constructor(private route: ActivatedRoute, private courseService: CourseService) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.courseService.getCourseById(id).subscribe({
      next: (course) => (this.course = course),
      error: (err) => (this.errorMessage = err.message),
    });
  }
}
