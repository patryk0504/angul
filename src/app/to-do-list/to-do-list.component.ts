import { Component } from '@angular/core';
import { TodoPresenter } from '../to-do-presenter';
import {ITodoPresenter} from "../i-to-do-presenter";

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css'],
  providers: [TodoPresenter]
})
export class ToDoListComponent {
  public _presenter: ITodoPresenter;

  public newTitle: string = "newTitle";
  public newContent: string = "newContent";

  constructor(presenter:TodoPresenter) {
    this._presenter = presenter;
  }
}
