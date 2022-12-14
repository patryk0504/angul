

import { TodoPresenter } from './to-do-presenter';

describe('TodoPresenter', () => {
  it('should create an instance', () => {
    expect(new TodoPresenter()).toBeTruthy();
  });

  it('should add item',()=>{
    let presenter = new TodoPresenter();
    presenter.addItem("test","test");
    expect(presenter.Items.length).toEqual(4);
  });

  it('should remove item', ()=>{
    let presenter = new TodoPresenter();
    presenter.addItem("test", "test");
    presenter.removeItem(presenter.Items.length);
    expect(presenter.Items.length).toEqual(3);
  });

  it('should set completed', ()=>{
    let presenter = new TodoPresenter();
    presenter.setCompleted(1, true);
    expect(presenter.Items[0].completed).toEqual(true);
  });
});
