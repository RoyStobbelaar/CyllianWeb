import { PipeTransform, Pipe } from "@angular/core";
import { Hero } from "app/logic/hero";

@Pipe({ name: 'hp' })

export class HpPipe implements PipeTransform {
    transform(value: Hero): any {

        return value.currentHP + "/" + value.maxHP;
    }
}