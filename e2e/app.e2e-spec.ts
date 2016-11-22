import { BerkadiaDemoPage } from './app.po';

describe('berkadia-demo App', function() {
  let page: BerkadiaDemoPage;

  beforeEach(() => {
    page = new BerkadiaDemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
