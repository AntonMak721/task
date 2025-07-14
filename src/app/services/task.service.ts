import { Injectable } from '@angular/core';
import { NewTaskInterface, TaskInterface } from './../models/task-interface';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tasks: TaskInterface [] = [];
  private nextId = 0;

  constructor() {
   
    this.addTask({ title: 'Собрать чемодан', description: 'Собрать чемодан в путешествие...'});
    this.addTask({ title: 'Выключить телефон', description: 'Отдых.'});
  }

  getAllTasks(): TaskInterface[] {
    return this.tasks;
  }

  getTaskById(id: number): TaskInterface  | undefined {
    return this.tasks.find(task => task.id === id);
  }

  addTask(task: NewTaskInterface): TaskInterface {
    
  const newTask: TaskInterface = {
    id: ++this.nextId,
    title: task.title,
    description: task.description,
    status: false, 
    createdAt: new Date() 
  };
  this.tasks.push(newTask);
  return newTask;
}

  deleteTask(id: number): void {
    this.tasks = this.tasks.filter(task => task.id !== id);
  }

  toggleTaskStatus(id: number): void {
    const task = this.getTaskById(id);
    if (task) {
      task.status = !task.status;
    }
  }

  searchTasks(term: string): TaskInterface[] {
    if (!term.trim()) {
      return this.getAllTasks();
    }
    return this.tasks.filter(task => 
      task.title.toLowerCase().includes(term.toLowerCase()) || 
      (task.description && task.description.toLowerCase().includes(term.toLowerCase()))
    );
  }
}