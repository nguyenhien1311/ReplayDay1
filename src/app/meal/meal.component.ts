import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meal',
  templateUrl: './meal.component.html',
  styleUrls: ['./meal.component.scss'],
})
export class MealComponent implements OnInit {
  public meals = [
    'Sandwich',
    'Pho',
    'Boiled Eggs',
    'Sushi',
    'Banana',
    'Fried Rice - Chicken',
  ];
  constructor() {}

  ngOnInit(): void {}

  public addMeal(val: string) {
    this.meals.push(val);
  }

  public Delete(val: string) {
    this.meals.splice(this.meals.indexOf(val), 1);
  }
}
