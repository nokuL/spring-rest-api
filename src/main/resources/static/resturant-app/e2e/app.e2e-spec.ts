import { ResturantAppPage } from './app.po';

describe('resturant-app App', function() {
  let page: ResturantAppPage;

  beforeEach(() => {
    page = new ResturantAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
