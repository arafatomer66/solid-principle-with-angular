import { Component } from '@angular/core';
import { DataService } from './services/data.service';
import { Product, Products } from './interfaces/product.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'solid-angular';

  public products: Product[] = [];

  // Dependency Inversion Principle (DIP):

  // The Dependency Inversion Principle states that high-level modules should not depend on low-level modules, but both should depend on abstractions. This promotes a flexible and decoupled architecture.
  // In Angular, you can achieve DIP by using dependency injection to decouple your components and services. This allows you to easily swap out implementations without affecting the rest of your application.

  constructor(public data: DataService) {
    this.data.fetchData().subscribe(
      (products: Products) => {
        console.log(products);

        this.products = products.products;
      }
    );
  }
}
