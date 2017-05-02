import { Cwainner.Github.IoPage } from './app.po';

describe('cwainner.github.io App', () => {
  let page: Cwainner.Github.IoPage;

  beforeEach(() => {
    page = new Cwainner.Github.IoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
