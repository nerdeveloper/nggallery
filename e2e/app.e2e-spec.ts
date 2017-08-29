import { NggalleryPage } from './app.po';

describe('nggallery App', () => {
  let page: NggalleryPage;

  beforeEach(() => {
    page = new NggalleryPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to ng!');
  });
});
