import { ExtensionsDecorator } from "./extensions-decorator";

export class WinterPackDecorator extends ExtensionsDecorator {
  getDescription(): string {
    return this.car.getDescription() + " + [Winter Pack]";
  }
  getPrice(): number {
    return this.car.getPrice() + 350;
  }
}
