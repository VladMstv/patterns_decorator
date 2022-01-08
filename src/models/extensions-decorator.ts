import { Car } from "./car";

export abstract class ExtensionsDecorator extends Car {
  protected car: Car;
  /**
   *
   */
  constructor(car: Car) {
    super();
    this.car = car;
  }

  abstract getDescription(): string;
}
