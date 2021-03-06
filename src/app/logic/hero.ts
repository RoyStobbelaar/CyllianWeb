 export enum ClassType {
     Warrior,Barbarian, Knight, Assassin, Ranger, Rogue, Sorcerer, Wizard, Warlock, Priest
 }

export class Hero {

    public id: number;
    public name: string;
    public class: ClassType;
    public maxHp: number;
    public currentHp: number;
    public maxMana: number;
    public currentMana: number;
    public portrait: string; //pathname
    public strenght: number;
    public dexterity: number;
    public intelligence: number;
    public level: number;
    public experience: number;
}