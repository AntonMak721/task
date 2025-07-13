import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NewTaskInterface } from '../../models/task-interface';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-new-task-form',
  standalone: true,
  imports: [FormsModule,
        ReactiveFormsModule],
  templateUrl: './new-task-form.component.html',
  styleUrl: './new-task-form.component.scss'
})
export class NewTaskFormComponent implements OnInit {
  taskForm!: FormGroup;

  @Output() submitTask = new EventEmitter<NewTaskInterface>();
  @Output() cancelTask = new EventEmitter<void>();

  

  constructor(private fb: FormBuilder) {}
  
  ngOnInit(): void {
    this.initForm();
  }

  private initForm(): void {
    this.taskForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(3)]],
      description: ['']
    })
  }

  onSubmit(): void {
    
    if (this.taskForm.valid) {
      this.submitTask.emit({
        title: this.taskForm.value.title,
        description: this.taskForm.value.description || undefined
        
      });
      console.log(this.taskForm.value.title)
      this.taskForm.reset();
    }
  }

  onCancel(): void {
    this.cancelTask.emit();
  }

  get title() {
    return this.taskForm.get('title');
  }
}