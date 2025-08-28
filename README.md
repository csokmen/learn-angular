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

## 6. Template-Driven Forms

Template-Driven forms rely on directives in the template to create and manage the form's data model. This approach is useful for simple forms where most of the logic can be handled directly in the HTML.

*   **`FormsModule`**: Imports the necessary providers and directives for template-driven forms.
*   **`ngModel`**: A directive that creates a two-way data binding between a form control and a property in the component.
*   **`ngForm`**: A directive that creates a top-level `FormGroup` instance and binds it to a `<form>` element.

Commit: https://github.com/csokmen/learn-angular/commit/33fb4f5c620392e417e7511ddf5d860f590aaef9

## 7. Reactive Forms

Reactive forms provide a model-driven approach to handling form inputs. The form model is explicitly created in the component class, providing more direct control and predictability. This approach is robust, scalable, and well-suited for complex forms.

*   **`ReactiveFormsModule`**: Imports the necessary providers and directives for reactive forms.
*   **`FormGroup`**: Tracks the value and validity state of a group of `FormControl` instances.
*   **`FormControl`**: Tracks the value and validity state of an individual form control.
*   **`Validators`**: Provides a set of built-in validator functions.

Commit: https://github.com/csokmen/learn-angular/commit/13f568b7aaecfb809f44be3d3e37582e27ad9c17

## 8. HttpClient

Most web applications need to communicate with a server over the HTTP protocol to access data. Angular provides a simplified client HTTP API, `HttpClient`, which is based on the `XMLHttpRequest` interface exposed by browsers.

*   **`provideHttpClient()`**: A function that registers the necessary providers for `HttpClient` in a standalone application.
*   **`HttpClient`**: A service that allows you to perform HTTP requests.
*   **`Observable`**: `HttpClient` methods return RxJS `Observable` objects, which handle asynchronous operations. You need to subscribe to an `Observable` to initiate the request and receive the response.

Commit: https://github.com/csokmen/learn-angular/commit/fe851b1dcbf70965a191192d8338e8f675f89cd6

## 9. Signals

Signals are a new reactivity primitive in Angular that enables fine-grained change detection. They provide a straightforward way to manage state that changes over time.

*   **`signal()`**: Creates a writable signal with an initial value. You read the value by calling the signal as a function (`mySignal()`) and update it using `.set()` or `.update()`.
*   **`computed()`**: Creates a read-only signal whose value is derived from other signals. It automatically updates when its dependencies change.
*   **`effect()`**: Schedules a side effect to run whenever its dependent signal values change. Useful for logging or custom DOM manipulation.
*   **`toSignal`**: A function from `@angular/core/rxjs-interop` that converts an RxJS Observable into a signal, making it easy to integrate signals with existing observable-based APIs like `HttpClient`.

Commit: https://github.com/csokmen/learn-angular/commit/52bb59e6af3cc70921db822742a9c4eac29293d9

## 10. Advanced Routing: Route Guards

Route Guards are functions that the Angular Router can execute to decide if a user is allowed to navigate to a specific route. This is essential for implementing authorization and protecting parts of your application.

*   **`CanActivateFn`**: A function type for a guard that determines if a route can be activated. It returns `true` if navigation is allowed, `false` to cancel navigation, or a `UrlTree` to redirect the user to a different route.

Commit: https://github.com/csokmen/learn-angular/commit/82c50835fb826c21ed14f9c9b5d77dfb7e047cc4

## 11. Advanced Routing: Route Resolvers

A resolver is a function that runs before the router activates a route. It can fetch data from a service, and the router will wait for the data to be available before rendering the component. This ensures that the component has the data it needs right away.

*   **`ResolveFn`**: A function type for a resolver. It returns an `Observable`, a `Promise`, or a direct value. The resolved data is then made available on the `ActivatedRoute`'s `data` property.

Commit: https://github.com/csokmen/learn-angular/commit/6837bad698aa9d9748fe7b4ac9746294b15603d4

## 12. Pipes

Pipes are simple functions used in templates to transform data for display. They take data as input and return a transformed value. Angular has several built-in pipes, and you can also create your own custom pipes for more specific transformations.

*   **Built-in Pipes**: Common pipes like `DatePipe`, `UpperCasePipe`, `LowerCasePipe`, `CurrencyPipe`, and `JsonPipe`.
*   **Custom Pipes**: You can create your own pipe by creating a class decorated with `@Pipe` that implements the `PipeTransform` interface.

Commit: 