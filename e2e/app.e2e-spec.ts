import { CyllianLegendsWebPage } from './app.po';

describe('cyllian-legends-web App', () => {
  let page: CyllianLegendsWebPage;

  beforeEach(() => {
    page = new CyllianLegendsWebPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
