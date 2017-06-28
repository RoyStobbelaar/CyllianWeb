export enum ClassType {
    Warrior,Barbarian, Knight, Assassin, Ranger, Rogue, Sorcerer, Wizard, Warlock, Priest
}

export class Hero {

    public name: string;
    public class: ClassType;
    public maxHP: number;
    public currentHP: number;
    public maxMana: number;
    public currentMana: number;
    public portrait: string; //pathname
    public strenght: number;
    public dexterity: number;
    public intelligence: number;

}