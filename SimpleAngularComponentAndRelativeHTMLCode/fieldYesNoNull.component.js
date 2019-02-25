/**
 * @module resuableThreeDialogComponent
 * @author Rahul Varma <rahulvarma1906@gmail.com>
 */
'use strict';

angular
  .module('tfp.common')
  .component('fieldYesNoNull', {
    templateUrl: 'components/fieldYesNoNull/fieldYesNoNull.html',
    controller: FieldYesNoNullCtrl,
    bindings: {
      value: '<',
      form: '<',
      onUpdate: '&',
      labelText: '@',
      yesLabel: '@',
      noLabel: '@',
      nullLabel: '@',
      inputName: '@',
      inputRequired: '<',
    },
  });

FieldYesNoNullCtrl.$inject = ['FormUtils'];

function FieldYesNoNullCtrl(FormUtils) {
  var ctrl = this;

  ctrl.$onInit = function() {
    ctrl.triggerValidation = FormUtils.triggerValidation.bind(FormUtils, ctrl.form, ctrl.inputName);

    // Set binding defaults
    if (angular.isUndefined(ctrl.yesLabel)) {
      ctrl.yesLabel = 'Yes';
    }
    if (angular.isUndefined(ctrl.noLabel)) {
      ctrl.noLabel = 'No';
    }
    if (angular.isUndefined(ctrl.nullLabel)) {
      ctrl.nullLabel = 'Any';
    }

    // Configure options
    ctrl.options = {};
    ctrl.options[ctrl.yesLabel] = true;
    ctrl.options[ctrl.noLabel] = false;
  };
}
