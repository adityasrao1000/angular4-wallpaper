import { Form1Page } from './app.po';

describe('form1 App', () => {
  let page: Form1Page;

  beforeEach(() => {
    page = new Form1Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
