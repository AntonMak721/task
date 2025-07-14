import { Routes } from '@angular/router';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { TaskPageComponent} from './pages/task-page/task-page.component';

export const routes: Routes = [

    { path: '', component: MainPageComponent},
    { path: 'tasks/:id', component: TaskPageComponent,},
    { path: '**', redirectTo: '',}

];
