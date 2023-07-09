# Single Responsibility Principle (SRP):

The Single Responsibility Principle states that a class should have only one reason to change, meaning it should have a single responsibility.

In Angular, you can achieve SRP by splitting your code into components, directives, services, and pipes. This modular approach ensures that each part of your application has a specific purpose, making it easier to maintain and understand.



# Open/Closed Principle (OCP):

The Open/Closed Principle states that software entities should be open for extension but closed for modification. In other words, you should be able to add new functionality without changing existing code.

In Angular, you can achieve OCP by using inheritance, interfaces, and dependency injection. This allows you to create extensible components and services that can be easily modified without affecting existing functionality.



# Liskov Substitution Principle (LSP):

The Liskov Substitution Principle states that objects of a superclass should be able to be replaced with objects of a subclass without affecting the correctness of the program.

In Angular, LSP can be achieved by using interfaces and abstract classes to define contracts for your components and services. This ensures that they follow a consistent API and can be easily replaced or extended.



# Interface Segregation Principle (ISP):

The Interface Segregation Principle states that clients should not be forced to depend on interfaces they do not use. In other words, interfaces should be small and focused on specific tasks.

In Angular, you can achieve ISP by creating small, focused interfaces for your components and services. This ensures that they have a clear and concise API, making them easier to understand and maintain.



# dependency Inversion Principle (DIP):

The Dependency Inversion Principle states that high-level modules should not depend on low-level modules, but both should depend on abstractions. This promotes a flexible and decoupled architecture.

In Angular, you can achieve DIP by using dependency injection to decouple your components and services. This allows you to easily swap out implementations without affecting the rest of your application.
