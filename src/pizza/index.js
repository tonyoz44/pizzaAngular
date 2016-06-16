import angular from 'angular'
import { PizzaListController } from './pizza-list.controller'
import { PizzaController } from './pizza.controller'
import { pizzaToppingsFilter } from './pizza-toppings.filter'
import { PizzaService } from './pizza.service'
import { PizzaToppingsComponent } from './pizzaToppings.component'

export const PizzaModule =

angular.module('dtang.pizza', [])

  .controller('PizzaListController', PizzaListController)
  .controller('PizzaController', PizzaController)

  .filter('pizzaToppings', pizzaToppingsFilter)

  .service('PizzaService', PizzaService)

  .component('pizzaToppings', PizzaToppingsComponent)

  .directive('dtaDrag', function () {
    return {
      scope: {
        dtaDrag: '&'
      },
      restrict: 'A',
      link: function (scope, element, attrs) {
        element[0].addEventListener('dragstart', evt => {
          scope.$apply(function () {
            scope.dtaDrag()
          })
        }, false)
      }
    }
  })

  .directive('dtaDrop', function () {
    return {
      scope: {
        dtaDrop: '&'
      },
      restrict: 'A',
      link: function (scope, element, attrs) {
        element[0].addEventListener('dragover', evt => {
          evt.preventDefault()
        }, false)
        element[0].addEventListener('drop', evt => {
          evt.preventDefault()
          scope.$apply(function () {
            scope.dtaDrop()
          })
        }, false)
      }
    }
  })

  .name
