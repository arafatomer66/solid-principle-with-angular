import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from  '@angular/common/http';
import { Products } from '../interfaces/product.interface';

// Open/Closed Principle (OCP):
// The Open/Closed Principle states that software entities should be open for extension but closed for modification. In other words, you should be able to add new functionality without changing existing code.

// -------

// Liskov Substitution Principle (LSP):
// The Liskov Substitution Principle states that objects of a superclass should be able to be replaced with objects of a subclass without affecting the correctness of the program.

// --------

// an abstract class for handling API requests
@Injectable()
export abstract class ApiService {
  protected abstract getBaseUrl(): string;

  // Common API request logic
}



@Injectable({
  providedIn: 'root',
})
// Extending Api Service here (Open/Closed Principle (OCP))

// Implemeting DataFetcher here (Liskov Substitution Principle (LSP))
export class DataService extends ApiService implements DataFetcher {
  public BASE_URL = 'https://dummyjson.com/products/';

  //   Single Responsibility Principle (SRP):
  //   The Single Responsibility Principle states that a class should have only one reason to change, meaning it should have a single responsibility.

  // in this case this service is only for fatching data

  protected getBaseUrl(): string {
    return '/api/users';
  }

  // Defineing more specific types && splting interfaces in smaller one (Interface Segregation Principle (ISP)
  fetchData(): Observable<Products> {
      return this.http.get<Products>(this.BASE_URL);;
  }

  update(): Observable<Products> {
    return this.http.get<Products>(this.BASE_URL);;
}

  constructor(public http: HttpClient) {
    super();
  }
}



// Interface Segregation Principle (ISP):
// The Interface Segregation Principle states that clients should not be forced to depend on interfaces they do not use. In other words, interfaces should be small and focused on specific tasks.


// data-fetcher.interface.ts
export interface DataFetcher {
  fetchData(): Observable<any>;
}

export interface DataFetcher {
  update(): Observable<any>;
}
