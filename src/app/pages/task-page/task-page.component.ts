import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TaskService } from '../../services/task.service';
import { TaskInterface } from '../../models/task-interface';
import { DatePipe } from '@angular/common';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-task-page',
  standalone: true,
  imports: [DatePipe, NgIf],
  templateUrl: './task-page.component.html'
})
export class TaskPageComponent implements OnInit {
task?: TaskInterface;

  constructor(
    private taskService: TaskService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit():void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.task = this.taskService.getTaskById(id);
    
    if (!this.task) {
      this.router.navigate(['/tasks']);
    }
  }

  
    goBack():void {
    this.router.navigate(['']);
    }
}
