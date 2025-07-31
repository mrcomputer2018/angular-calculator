import { Component } from '@angular/core';
import { CalculatorComponent } from './calculator/calculator.component';
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";

@Component({
    selector: 'app-root',
    imports: [ShoppingListComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
})
export class AppComponent {
    title = 'angular-calculator';
}
