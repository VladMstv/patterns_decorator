export abstract class Car {
  getDescription(): string {
    return "New car";
  }

  abstract getPrice(): number;
}
