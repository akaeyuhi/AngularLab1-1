import {Component, Input} from '@angular/core';
import {Item} from "../app.component";
@Component({
  selector: 'app-shopping-item',
  templateUrl: './shopping-item.component.html',
  styleUrls: ['./shopping-item.component.css']
})

export class ShoppingItemComponent {

  @Input() item!: Item

  constructor() {
  }
}
