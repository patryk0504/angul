import {TodoItem} from "./to-do-item";

export interface ITodoPresenter {
  Items: TodoItem[];
  addItem(title: string, content: string):void;
  removeItem(id:number):void;
  setCompleted(id:number, isCompleted:boolean):void;
}
