import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-list-task',
  imports: [],
  template: `<p>list-task works!</p>`,
  styleUrl: './list-task.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListTaskComponent { }
