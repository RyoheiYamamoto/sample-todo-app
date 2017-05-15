import { SampleTodoAppPage } from './app.po';

describe('sample-todo-app App', () => {
  let page: SampleTodoAppPage;

  beforeEach(() => {
    page = new SampleTodoAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
