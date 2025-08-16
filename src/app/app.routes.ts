import { Routes } from '@angular/router';
import { ListTaskComponent } from './list-task/list-task.component';

export const routes: Routes = [
  { path: 'add-task', loadComponent: () => import('./add-task/add-task.component').then(m => m.AddTaskComponent) },
  { path: 'list-task', component: ListTaskComponent },
  { path: '', redirectTo: '/list-task', pathMatch: 'full' }
];