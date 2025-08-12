# Learn Angular Project

This project is a guide to learning the basic and advanced concepts of Angular. The topics are ordered from simple to complex. You can check the commit of any subject to see code modifications done for that subject.

This project is deployed as an Angular application.
You can visit it at: https://brave-bush-079d05c10.2.azurestaticapps.net/

## 1. Components

Components are the main building blocks of Angular applications. Each component consists of a TypeScript class, an HTML template, and CSS styles. The `@Component` decorator marks a class as a component, and its metadata specifies the template and styles.

Commit: https://github.com/csokmen/learn-angular/commit/487db486cb7cfa0d24c9827940a72b3155f5deb7

## 2. Data Binding

Data binding allows you to connect your component's data (the class) with its view (the HTML template). This enables you to display data and respond to user events.

*   **Interpolation `{{ }}`:** One-way data binding that displays component data in the template.
*   **Property Binding `[ ]`:** One-way data binding that sets a property of a DOM element to a component's data value.
*   **Event Binding `( )`:** Binds a user event (like a click or keystroke) to a method in your component.

Commit: https://github.com/csokmen/learn-angular/commit/2707d9483eff62e749b95c4957264b273bd43997

## 3. Directives

Directives are instructions in the DOM. They allow you to dynamically add, remove, or manipulate DOM elements.

*   **`*ngIf`:** A structural directive that conditionally adds or removes an element from the DOM.
*   **`*ngFor`:** A structural directive that repeats a template for each item in a collection.

Commit: https://github.com/csokmen/learn-angular/commit/45d65709dc38d99848b873b66183e7f389d45b92

## 4. Services & Dependency Injection

Services are classes designed to handle tasks that are not tied to a specific view, such as fetching data, logging, or managing application state. Dependency Injection (DI) is a design pattern where Angular provides a component with the services it needs (its dependencies) rather than the component creating them itself. This promotes modularity and reusability.

Commit: https://github.com/csokmen/learn-angular/commit/1e8bbbed3816ed969299bd3062c68d252c91d7d4

## 5. Routing

Routing enables navigation from one view to the next as users perform application tasks. The Angular Router allows you to build a Single Page Application with multiple views and navigation.

*   **`Routes`**: An array that defines the navigation paths. Each route maps a URL path to a component.
*   **`router-outlet`**: A directive that acts as a placeholder where the router displays the component for the current route.
*   **`routerLink`**: A directive to link to a specific route in your application.

Commit: https://github.com/csokmen/learn-angular/commit/2b81cc225c81f78f16be9911dad2dfd1c131493a
