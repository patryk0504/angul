import { Component } from '@angular/core';
import { TodoPresenter } from '../to-do-presenter';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent {
  public presenter:TodoPresenter = new TodoPresenter();
}
