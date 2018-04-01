import { SubscriptionSurveyPage } from './app.po';

describe('subscription-survey App', () => {
  let page: SubscriptionSurveyPage;

  beforeEach(() => {
    page = new SubscriptionSurveyPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
