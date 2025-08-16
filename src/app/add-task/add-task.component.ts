import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-add-task',
  imports: [],
  template: `<p>add-task works!</p>`,
  styleUrl: './add-task.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddTaskComponent { }
