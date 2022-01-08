import { WinterPackDecorator } from "./models/winter-pack-decorator";
import { Audi } from "./models/audi";
import { WithAlarmDecorator } from "./models/with-alarm-decorator";
import { BMWCar } from "./models/bmw";

const bmw = new BMWCar();

const cars = [
  new WithAlarmDecorator(bmw), // bmw with Alarm
  new Audi(), // audi basic
  new WinterPackDecorator(new WithAlarmDecorator(new Audi())), // audi with alarm and winter pack
];

for (const car of cars) {
  console.log("Buying new " + car.getDescription() + " for " + car.getPrice());
}
