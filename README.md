# TapRoom

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.1.0.

## Planning

* keg object with name, brand, price, abv, beer type, quantity
* page to view kegs (1 way binding to show)
* form to create a new keg object (1 way binding)
* edit form for keg (2 way bindings)
* two user classes: employee or patron. 
* Patron can view kegs
* Employee can edit kegs
* Employee can click button to "pour" a beer. 
* Search function by number of beers left in a keg
* Display beer type with classes (dark beer = dark color)

Stetch goals
* As an employee, I want to select an option to put a certain keg on sale. This would lower the cost by a percentage of my choosing, and perhaps change a keg's appearance in the list to draw customers' attention to it
* As an employee, I might want to trigger the "happy hour" option automatically at a certain time of the day or week
* patron / employee login

* Components
  * Display kegs
  * Create kegs
  * Edit Kegs

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
