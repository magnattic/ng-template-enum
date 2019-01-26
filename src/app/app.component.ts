import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public OrderByMode = OrderByMode;

  public enumKeys: (keyof typeof OrderByMode)[] = ['Price', 'Distance'];

  public comparisonWorksInCode =
    OrderByMode[this.enumKeys[0]] === OrderByMode.Price;
}

export enum OrderByMode {
  Price,
  Distance
}
