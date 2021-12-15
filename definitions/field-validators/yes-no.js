const { validationRules: r, simpleFieldValidation: sf } = require('@dwp/govuk-casa');

const fieldValidators = {
  moreDifficult: sf([
    r.required.make({
      errorMsg: 'yes-no:moreDifficult.empty'
    }),
    r.inArray.make({
      source: ['yes', 'no'],
      errorMsg: 'yes-no:moreDifficult.empty'
    })
  ])
};

module.exports = fieldValidators;
