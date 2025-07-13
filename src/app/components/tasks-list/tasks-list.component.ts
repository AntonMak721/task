import { Component, OnInit  } from '@angular/core';
import { NewTaskInterface, TaskInterface } from '../../models/task-interface';
import { TaskService } from '../../services/task.service';
import { Router } from '@angular/router';
import { NgIf} from '@angular/common';
import { NgClass } from '@angular/common';
import {NewTaskFormComponent} from './../new-task-form/new-task-form.component'
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-tasks-list',
  standalone: true,
  imports: [NgClass, NewTaskFormComponent, NgIf,FormsModule ],
  templateUrl: './tasks-list.component.html',
  styleUrl: './tasks-list.component.scss'
})
export class TasksListComponent implements OnInit {
  tasks: TaskInterface[] = [];
  filteredTasks: TaskInterface[] = [];
  searchTerm = '';
  showForm = false;
  minToMax = false;
  completedFilterIndicator = false;


  constructor(private taskService: TaskService, private router: Router) {}

  ngOnInit(): void {
    this.tasks = this.taskService.getAllTasks();
    this.filteredTasks = [...this.tasks];
    
  }

  onSearch(): void {
    this.filteredTasks = this.taskService.searchTasks(this.searchTerm);
  }

  toggleTaskStatus(id: number): void {
    this.taskService.toggleTaskStatus(id);
    this.filteredTasks = this.taskService.searchTasks(this.searchTerm);
  }

  deleteTask(id: number): void {
    this.taskService.deleteTask(id);
    this.tasks = this.taskService.getAllTasks();
    this.onSearch();
    console.log(this.filteredTasks)
  }

  viewDetails(id: number): void {
    this.router.navigate(['/tasks', id]);
    console.log(id)
  }

  addTask(task: NewTaskInterface): void {
    this.taskService.addTask(task);
    this.tasks = this.taskService.getAllTasks();
    this.onSearch();
    this.showForm = false;
    console.log('task added task-list')
  }

sortById(){
   this.minToMax=!this.minToMax;
  if (this.minToMax){
      return this.filteredTasks.sort((a, b) => b.id - a.id);
     
  } else{
    return this.filteredTasks.sort((a, b) => a.id - b.id);
    
  }
}

sortByCompleted(){
  this.completedFilterIndicator=!this.completedFilterIndicator;
      console.log(this.completedFilterIndicator);
  if(this.completedFilterIndicator){
      return this.filteredTasks.sort(
        (a, b) => Number(a.status) - Number(b.status)
      )
      
  } else {
return this.filteredTasks.sort(
        (a, b) => Number(b.status) - Number(a.status)
      )

}
  }

  



}