class Warrior extends Player{
    static AllowedWeapons(){
        return ["Hammer", "Axe", "Sword"]
    }

    constructor(baseWeapon, gender, name){
        if(AllowedWeapons().includes(baseWeapon.Type)){
            super(baseWeapon, gender, name)
        }
    }

    Attack(){
        "The Warrior "+ Player.prototype.Attack.call()
    }
}