import { ExtensionsDecorator } from "./extensions-decorator";

export class WithAlarmDecorator extends ExtensionsDecorator {
  getDescription() {
    return this.car.getDescription + " with alarm";
  }

  getPrice() {
    return this.car.getPrice() + 100;
  }
}
