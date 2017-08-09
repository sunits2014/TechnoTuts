import { TechnotutsPage } from './app.po';

describe('technotuts App', () => {
  let page: TechnotutsPage;

  beforeEach(() => {
    page = new TechnotutsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
