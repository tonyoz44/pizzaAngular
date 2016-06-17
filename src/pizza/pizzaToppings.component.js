class PizzaToppingsComponentController {
  constructor ($element) {
    this.$element = $element
  }

  addToppingDUCOMPONENT (topping) {
    this.onAddTopping({
      $event: { topping } // équivalent à $event: { topping: topping }
    })

    // EVALUATION DE $ctrl.addToppingDUPIZZACONTROLLER($event)
    // En remplaçant $event par { topping }
    // DONC Appel de $ctrl.addToppingDUPIZZACONTROLLER({ topping: topping })
  }

  dropped () {
    this.addToppingDUCOMPONENT(this.draggedTopping)
  }
}

export const PizzaToppingsComponent = {
  bindings: {
    toppings: '<',
    allToppings: '<',
    onAddTopping: '&'
  },
  controller: PizzaToppingsComponentController,
  template: `
    <div class="row">
      <div class="col-md-6" dta-drop="$ctrl.dropped()" style="border:1px solid red">
        <h4>toppings</h4>
        <ul class="list-group">
          <li class="list-group-item"
            ng-repeat="topping in $ctrl.toppings track by $index">
              {{ topping }}
          </li>
        </ul>
      </div>
      <div class="col-md-6">
        <h4>available toppings</h4>
          <ul class="list-group">
            <li class="list-group-item"
              ng-repeat="(topping, value) in $ctrl.allToppings track by $index"
              draggable="true"
              dta-drag="$ctrl.draggedTopping = topping">
              <a href ng-click="$ctrl.addToppingDUCOMPONENT(topping)">
                {{ topping }}
              </a>
            </li>
          </ul>
      </div>
    </div>
  `
}