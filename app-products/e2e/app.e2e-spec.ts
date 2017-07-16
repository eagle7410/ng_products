import { AppProductsPage } from './app.po';

describe('app-store App', () => {
  let page: AppProductsPage;

  beforeEach(() => {
    page = new AppProductsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
