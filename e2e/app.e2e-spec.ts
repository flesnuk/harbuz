import { CorePage } from './app.po';

describe('core App', () => {
  let page: CorePage;

  beforeEach(() => {
    page = new CorePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
