export enum Rarity {
    Common, Uncommon, Rare, Magic
}

//Class for materials
//Has atleast img and name... maybe some value or rarity..
export class Material {

    //public id: number;//Doesnt do shit without backend
    public imagePath: string;
    public name: string;
    public value: number;
    public rarity: Rarity;
    public amount: number; //Should be removed later
}