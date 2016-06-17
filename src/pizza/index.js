import angular from 'angular'
import { PizzaListController } from './pizza-list.controller'
import { PizzaController } from './pizza.controller'
import { pizzaToppingsFilter } from './pizza-toppings.filter'
import { PizzaService } from './pizza.service'
import { PizzaToppingsComponent } from './pizzaToppings.component'
import { dtaDragModule } from '../divers/dtaDrag.module'
// import { dtaDropModule } from '../divers/dtaDrop.module'

export const PizzaModule =

angular.module('dtang.pizza', [])

  .controller('PizzaListController', PizzaListController)
  .controller('PizzaController', PizzaController)

  .filter('pizzaToppings', pizzaToppingsFilter)

  .service('PizzaService', PizzaService)

  .component('pizzaToppings', PizzaToppingsComponent)
   .directive('dtaDragModule', dtaDragModule)
  // .directive('dtaDropModule', dtaDropModule)

  .name
