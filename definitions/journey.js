/**
 * Defines the user's potential journeys through the application screens.
 *
 * This factory method returns an instance of the `lib/UserJourney.Map` class.
 */

const { Plan } = require('@dwp/govuk-casa');

exports = module.exports = (function MyAppUserJourney() {
  const plan = new Plan();

  plan.addSequence(
    'personal-details',
    'checkboxes',
    'contact-details',
    'yes-no'
  );

  plan.setRoute('yes-no', 'work-impact', (e, c) => c.isPageValid('yes-no') && c.data['yes-no'].moreDifficult === 'yes');
  plan.setRoute('yes-no', 'review', (e, c) => c.isPageValid('yes-no') &&  c.data['yes-no'].moreDifficult == 'no');

  plan.addSequence(
    'work-impact',
    'review',
    'submit',
  );

  plan.addOrigin('main', 'personal-details');

  return plan;
})();
