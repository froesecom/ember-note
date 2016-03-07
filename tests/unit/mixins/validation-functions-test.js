import Ember from 'ember';
import ValidationFunctionsMixin from '../../../mixins/validation-functions';
import { module, test } from 'qunit';

module('Unit | Mixin | validation functions');

// Replace this with your real tests.
test('it works', function(assert) {
  let ValidationFunctionsObject = Ember.Object.extend(ValidationFunctionsMixin);
  let subject = ValidationFunctionsObject.create();
  assert.ok(subject);
});
