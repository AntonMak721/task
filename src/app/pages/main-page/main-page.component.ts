import { Component } from '@angular/core';
import { TasksListComponent } from '../../components/tasks-list/tasks-list.component';



@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [
    
    TasksListComponent,
  ],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss'
})
export class MainPageComponent {
  
}
