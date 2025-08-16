import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-add-task',
  imports: [],
  template: `<h1>ADD A NEW TASK - WORKS <h1>`,
  styleUrl: './add-task.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddTaskComponent { }
