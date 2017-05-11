import { TaskTimePage } from './app.po';

describe('task-time App', () => {
  let page: TaskTimePage;

  beforeEach(() => {
    page = new TaskTimePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
