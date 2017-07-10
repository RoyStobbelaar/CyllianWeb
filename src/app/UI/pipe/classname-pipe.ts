import { PipeTransform, Pipe } from "@angular/core";

@Pipe({ name: 'classname' })

export class ClassNamePipe implements PipeTransform {
    transform(value: any): any {
        let className;

        switch (value) {
            case 0: className = "Warrior"; break;
            case 1: className = "Barbarian"; break;
            case 2: className = "Knight"; break;
            case 3: className = "Assassin"; break;
            case 4: className = "Ranger"; break;
            case 5: className = "Rogue"; break;
            case 6: className = "Sorcerer"; break;
            case 7: className = "Wizard"; break;
            case 8: className = "Warlock"; break;
            case 9: className = "Priest"; break;
            default: className = "Unknown"; break;
        }
        return className;
    }
}