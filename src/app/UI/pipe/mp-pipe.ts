import { PipeTransform, Pipe } from "@angular/core";
import { Hero } from "app/logic/hero";

@Pipe({ name: 'mp' })

export class MpPipe implements PipeTransform {
    transform(value: Hero): any {

        return value.currentMana + "/" + value.maxMana;
    }
}