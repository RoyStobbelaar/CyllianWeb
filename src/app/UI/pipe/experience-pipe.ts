import { PipeTransform, Pipe } from "@angular/core";
import { Hero } from "app/logic/hero";

@Pipe({ name: 'experience' })

export class ExperiencePipe implements PipeTransform {
    transform(value: Hero): any {
        let maxXp;

        switch (value.level) {
            case 1: maxXp = 1000; break;
            case 2: maxXp = 3000; break;
            case 3: maxXp = 6000; break;
            case 4: maxXp = 10000; break;
            case 5: maxXp = 15000; break;
            case 6: maxXp = 21000; break;
            case 7: maxXp = 28000; break;
            case 8: maxXp = 36000; break;
            case 9: maxXp = 45000; break;
            case 10: maxXp = 55000; break;
            case 11: maxXp = 66000; break;
            case 12: maxXp = 78000; break;
            case 13: maxXp = 91000; break;
            case 14: maxXp = 105000; break;
            case 15: maxXp = 120000; break;
            case 16: maxXp = 136000; break;
            case 17: maxXp = 153000; break;
            case 18: maxXp = 171000; break;
            case 19: maxXp = 180000; break;
            case 20: maxXp = 200000; break;
            default: maxXp = "???"; break;
        }

        return `Experience: ${value.experience} / ${maxXp}`;
    }
}